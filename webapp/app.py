import os, html, json

import pandas as pdl
import numpy as np
from yelp import * 
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

#app.config["SQLALCHEMY_DATABASE_URI"] =  os.environ.get('DATABASE_URL', '') or "sqlite:///db/.sqlite"
#app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/bellybutton.sqlite"
app.config["SQLALCHEMY_DATABASE_URI"] = 'postgres://hcucqwytwtvufq:6e74110742ff64ca13828408d31efcfa8a8b1d6bdc5896187c01063ecabe0d75@ec2-54-235-90-0.compute-1.amazonaws.com:5432/d3uusp98ipnjka'
db = SQLAlchemy(app)
# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)
# Save references to each table
Business = Base.classes.Business
Categories = Base.classes.Categories

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/<page_name>")
def static_page(page_name):
    print(page_name)
    if page_name is not None:
        print(page_name)
        return render_template(page_name)
    return render_template("index.html")
    

@app.route("/UpdateCategories")
def UpdateCategories():

    db.session.query(Categories).delete()
    db.session.commit()

    categories_data = db.session.query(Business).distinct(Business.YelpCategories).all()
    categories = []
    for record in categories_data:
        #print(record.YelpCategories)
        if record.YelpCategories is None or len(record.YelpCategories) == 0 :
            continue
        split_record = record.YelpCategories.split(",")
        for cat in split_record:
            if cat not in categories:
                categories.append(cat)
    
    for index, category in enumerate(categories):
        cat = Categories()
        cat.Id = index + 1
        cat.Name = category 
        db.session.add(cat)
        db.session.commit()
    
    return "Categories updated"

@app.route("/Categories")
def GetCategories():
    categories_data = db.session.query(Categories).all()
    categories = []
    for category in categories_data:
        categories.append( { "Id" : category.Id, "Name" : category.Name } )
    return jsonify(categories)

@app.route("/testYelp")
def testYelp():
    """Return the homepage."""
    r = getBusiness('Riverside Golf Course', '1020 grove blvd', 'Austin', 'TX', 'US')
    return jsonify(r)

@app.route("/BusinessFromYelp")
def BusinessFromYelp():
    business = db.session.query(Business).filter(Business.YelpID.is_(None))
    print(business.count())
    print(type(business))
    r = []
    for row in business:
        #print(row)
        name = html.escape(row.Name, quote=True).replace('#', '%23')
        print(name)
        yelp_data   = getBusiness(name, row.Street, row.City, row.State, 'US')
        if len(yelp_data['businesses']) == 0:
            yelpId = "Not Found"
            row.YelpID = yelpId
            db.session.commit()
            print(yelpId)
            continue
        yelpId = yelp_data['businesses'][0]['id']
        
        yelp_data2  = getBusinessDetail(yelpId)
        
        categories = []
        [categories.append(cat_data['title'])  for cat_data in yelp_data2['categories']]

        row.YelpID          = yelpId
        row.YelpCategories  = ','.join(categories)
        row.YelpPhone       = yelp_data2['phone']
        row.YelpURL         = yelp_data2['url']
        row.YelpImageUrl    = yelp_data2['image_url']
        row.YelpRaiting     = yelp_data2['rating']
        row.YelpReviewCount = yelp_data2['review_count']
        db.session.commit()
        r.append(row.FacilityID)
    return jsonify(r)


@app.route("/BusinessDetailUpdateYelpId/<yelpId>")
def BusinessDetailUpdateYelpId(yelpId):
    business = db.session.query(Business).filter(Business.YelpID == yelpId).first()
    print(type(business))
    yelp_data2  = getBusinessDetail(yelpId)
    
    categories = []
    [categories.append(cat_data['title'])  for cat_data in yelp_data2['categories']]

    business.YelpCategories  = ','.join(categories)
    business.YelpPhone       = yelp_data2['phone']
    business.YelpURL         = yelp_data2['url']
    business.YelpImageUrl    = yelp_data2['image_url']
    business.YelpRaiting     = yelp_data2['rating']
    business.YelpReviewCount = yelp_data2['review_count']
    db.session.commit()

    return jsonify("Record Updated!!!")

@app.route("/BusinessDetailUpdateFacilityId/<facilityId>")
def BusinessDetailUpdateFacilityId(facilityId):
    business = db.session.query(Business).filter(Business.FacilityID == facilityId).first()
    print(type(business))
    yelp_data2  = getBusinessDetail(business.YelpID)

    categories = []
    [categories.append(cat_data['title'])  for cat_data in yelp_data2['categories']]

    business.YelpCategories  = ','.join(categories)
    business.YelpPhone       = yelp_data2['phone']
    business.YelpURL         = yelp_data2['url']
    business.YelpImageUrl    = yelp_data2['image_url']
    business.YelpRaiting     = yelp_data2['rating']
    business.YelpReviewCount = yelp_data2['review_count']
    db.session.commit()

    return jsonify("Record Updated!!!")

@app.route("/BusinessUpdateByFacilityId/<facilityId>")
def BusinessUpdateByFacilityId(facilityId):
    business = db.session.query(Business).filter(Business.FacilityID == facilityId).first()

    name = html.escape(business.Name, quote=True).replace('#', '%23')
    print(name)
    yelp_data   = getBusiness(name, business.Street, business.City, business.State, 'US')
    if len(yelp_data['businesses']) == 0:
        return jsonify("Business doesn't exists in YELP!!!")
    
    yelpId = yelp_data['businesses'][0]['id']

    yelp_data2  = getBusinessDetail(yelpId)

    categories = []
    [categories.append(cat_data['title'])  for cat_data in yelp_data2['categories']]

    business.YelpID         = yelpId
    business.YelpCategories = ','.join(categories)
    business.YelpPhone      = yelp_data2['phone']
    business.YelpURL        = yelp_data2['url']
    business.YelpImageUrl   = yelp_data2['image_url']
    business.YelpRaiting    = yelp_data2['rating']
    business.YelpReviewCount = yelp_data2['review_count']
    db.session.commit()

    return jsonify("Record Updated!!!")

@app.route("/BusinessByZipCode/<zipcode>/")
def BusinessByZipCode(zipcode):
    #business = db.session.query(Business).filter(Business.ZipCode == zipcode).filter(Business.YelpID.isnot(None)).all()
    business = db.session.query(Business).filter(Business.ZipCode == zipcode).filter(Business.YelpID != "Not Found").all()
    #print(business.count())
    records = []
    for record in business:
        output = record.__dict__
        print(output)
        output.pop('_sa_instance_state', None)
        records.append(output)
        
    return jsonify(records)
    
if __name__ == "__main__":
    app.run()
