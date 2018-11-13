import requests

headers = {'Authorization': 'Bearer Z2Req78WUrVMlvbzMRTXTawJhOfrhmXAnj8YvydOGYTKBLI1tCDRenM3iUZUb0OzSaAl2923eiATHP2NKwXYIMyiWhZGNGWR6OT-cHLGU4AjNHi9ANJZY0w9R5XjW3Yx'}

def getBusiness(name, address1, city, state, country):
    url = "https://api.yelp.com/v3/businesses/matches?name={}&address1={}&city={}&state={}&country={}".format(name, address1, city, state, country)
    print(url)
    r = requests.get(url, headers=headers)
    if r.status_code == 200:
        return r.json()
    
def getBusinessDetail(businesses_id):
    url = "https://api.yelp.com/v3/businesses/{}".format(businesses_id)
    print(url)
    r = requests.get(url, headers=headers)
    if r.status_code == 200:
        return r.json()

def getBusinessReviews(businesses_id):
    url = "https://api.yelp.com/v3/businesses/{}/reviews".format(businesses_id)
    print(url)
    r = requests.get(url, headers=headers)
    if r.status_code == 200:
        return r.json()