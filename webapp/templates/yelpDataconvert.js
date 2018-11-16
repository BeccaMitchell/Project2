var data = [
    {
      Name: 'Upper Crust Bakery',
      Street: '4508 BURNET RD',
      YelpCategories: 'Bakeries,Desserts',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 491
    },
    {
      Name: 'Short Stop',
      Street: '3811 N IH',
      YelpCategories: 'Burgers',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 1
    },
    {
      Name: 'Hula Hut',
      Street: '3825 LAKE AUSTIN BLVD',
      YelpCategories: 'Tex-Mex,Mexican',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 1354
    },
    {
      Name: 'Tarry House Restaurant',
      Street: '3006 BOWMAN AVE',
      YelpCategories: 'Tennis',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'Sarku Japan',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Japanese',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 43
    },
    {
      Name: 'Arbor Cinema @ Great Hills',
      Street: '9828 GREAT HILLS TRL',
      YelpCategories: 'Cinema',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 166
    },
    {
      Name: 'Bat Bar',
      Street: '218 E 6TH ST',
      YelpCategories: 'Bars,Dance Clubs',
      Score: 79,
      YelpRaiting: 3,
      YelpReviewCount: 87
    },
    {
      Name: 'WL - McDonald\'s',
      Street: '3300 BEE CAVES RD',
      YelpCategories: 'Burgers,Fast Food,Coffee & Tea',
      Score: 89,
      YelpRaiting: 2,
      YelpReviewCount: 34
    },
    {
      Name: 'La Quinta Inn #0522',
      Street: '1603 E OLTORF ST',
      YelpCategories: 'Hotels',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 63
    },
    {
      Name: 'Taiwan Restaurant',
      Street: '500 W WILLIAM CANNON DR',
      YelpCategories: 'Chinese',
      Score: 72,
      YelpRaiting: 3,
      YelpReviewCount: 58
    },
    {
      Name: 'Yager Food Store',
      Street: '1006 E YAGER LN',
      YelpCategories: 'Grocery,Pizza',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 5
    },
    {
      Name: 'David\'s Food Store',
      Street: '912 W MARY ST',
      YelpCategories: 'Grocery',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 7
    },
    {
      Name: 'American Legion Post #83',
      Street: '4401 E ST ELMO RD',
      YelpCategories: 'Social Clubs,Community Service/Non-Profit',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Baby Acapulco #2',
      Street: '1628 BARTON SPRINGS RD',
      YelpCategories: 'Mexican',
      Score: 80,
      YelpRaiting: 3,
      YelpReviewCount: 328
    },
    {
      Name: 'Metro Mart',
      Street: '2113 W WELLS BRANCH PKWY',
      YelpCategories: 'Convenience Stores',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Whataburger #132',
      Street: '9516 N LAMAR BLVD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 15
    },
    {
      Name: 'Yellow Rose',
      Street: '6528 N LAMAR BLVD',
      YelpCategories: 'Adult Entertainment',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 81
    },
    {
      Name: 'Chez Zee',
      Street: '5406 BALCONES DR',
      YelpCategories: 'Desserts,American (New),Breakfast & Brunch',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 837
    },
    {
      Name: 'Thundercloud Subs #17',
      Street: '5401 BURNET RD',
      YelpCategories: 'Sandwiches,Salad,Juice Bars & Smoothies',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 45
    },
    {
      Name: 'Julio\'s Restaurant, Inc.',
      Street: '4230 DUVAL ST',
      YelpCategories: 'Mexican',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 347
    },
    {
      Name: 'Parmer Lane Tavern',
      Street: '2121 W PARMER LN',
      YelpCategories: 'Sports Bars',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 37
    },
    {
      Name: 'Expose\'',
      Street: '3615 S CONGRESS AVE',
      YelpCategories: 'Adult Entertainment',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 65
    },
    {
      Name: 'Rosie\'s Day Care',
      Street: '7512 CAMERON RD',
      YelpCategories: 'Child Care & Day Care',
      Score: 98,
      YelpRaiting: 2,
      YelpReviewCount: 1
    },
    {
      Name: 'Subway',
      Street: '1900 E OLTORF ST',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 13
    },
    {
      Name: 'Asti Trattoria',
      Street: '408 E 43RD ST',
      YelpCategories: 'Italian,Pizza',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 389
    },
    {
      Name: 'Salvation Army',
      Street: '501 E 8TH ST',
      YelpCategories: 'Community Service/Non-Profit',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Taco Shack',
      Street: '4002 N LAMAR BLVD',
      YelpCategories: 'Tex-Mex',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 120
    },
    {
      Name: 'Brick Oven Restaurant',
      Street: '10710 RESEARCH BLVD',
      YelpCategories: 'Italian,Pizza,Wine Bars',
      Score: 75,
      YelpRaiting: 4,
      YelpReviewCount: 162
    },
    {
      Name: 'Hyde Park Bar and Grill',
      Street: '4206 DUVAL ST',
      YelpCategories: 'American (Traditional),Bars',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 589
    },
    {
      Name: 'Luby\'s',
      Street: '8176 N MOPAC EXPY',
      YelpCategories: 'American (Traditional),Buffets',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 68
    },
    {
      Name: 'Whataburger #84 D-3800',
      Street: '6106 CAMERON RD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 42
    },
    {
      Name: 'County Line on the Lake',
      Street: '5204 FM 2222 RD',
      YelpCategories: 'Barbeque',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 687
    },
    {
      Name: 'HEB Food Store #161',
      Street: '7112 ED BLUESTEIN BLVD',
      YelpCategories: 'Grocery',
      Score: 99,
      YelpRaiting: 2,
      YelpReviewCount: 26
    },
    {
      Name: 'Manuel\'s',
      Street: '310 CONGRESS AVE',
      YelpCategories: 'Mexican',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 490
    },
    {
      Name: 'Willie\'s Bar-B-Q',
      Street: '4505 E MARTIN LUTHER KING JR BLVD',
      YelpCategories: 'Barbeque',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 33
    },
    {
      Name: 'Lee Elementary School',
      Street: '3308 HAMPTON RD',
      YelpCategories: 'Elementary Schools',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'Chicas Bonitas',
      Street: '3701 N IH',
      YelpCategories: 'Adult Entertainment,Bars',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'Dan\'s Hamburgers #2',
      Street: '4308 MANCHACA RD',
      YelpCategories: 'Burgers,Sandwiches,Breakfast & Brunch',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 338
    },
    {
      Name: 'Alpha Chi Omega',
      Street: '2420 NUECES ST',
      YelpCategories: 'Community Service/Non-Profit,Social Clubs',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Austin Country Club',
      Street: '4408 LONG CHAMP DR',
      YelpCategories: 'Country Clubs',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 16
    },
    {
      Name: 'Cloak Room, The',
      Street: '1300 COLORADO ST',
      YelpCategories: 'Dive Bars',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 76
    },
    {
      Name: 'Conans Pizza North',
      Street: '2438 W ANDERSON LN',
      YelpCategories: 'Pizza,Buffets',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 280
    },
    {
      Name: 'Kiker Elementary',
      Street: '5913 LA CROSSE AVE',
      YelpCategories: 'Elementary Schools',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Donn\'s Depot',
      Street: '1600 W 5TH ST',
      YelpCategories: 'Dive Bars,Dance Clubs',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 128
    },
    {
      Name: 'Delaware Subs Shop',
      Street: '8105 MESA DR',
      YelpCategories: 'Sandwiches',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 102
    },
    {
      Name: 'Common Interest',
      Street: '8440 BURNET RD',
      YelpCategories: 'Karaoke,Sports Bars,American (Traditional)',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 142
    },
    {
      Name: 'Thundercloud Subs',
      Street: '2521 RUTLAND DR',
      YelpCategories: 'Sandwiches',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 42
    },
    {
      Name: 'Dan\'s Hamburgers',
      Street: '5602 N LAMAR BLVD',
      YelpCategories: 'Burgers,Sandwiches',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 293
    },
    {
      Name: 'McCallum High School',
      Street: '5600 SUNSHINE DR',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 86,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'St. Louis School',
      Street: '2114 ST JOSEPH BLVD',
      YelpCategories: 'Religious Schools',
      Score: 84,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Delta Gamma',
      Street: '2419 RIO GRANDE ST',
      YelpCategories: 'Social Clubs',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Chez-Nous',
      Street: '510 NECHES ST',
      YelpCategories: 'French',
      Score: 85,
      YelpRaiting: 5,
      YelpReviewCount: 458
    },
    {
      Name: 'Mariscos Tampico',
      Street: '10601 N LAMAR BLVD',
      YelpCategories: 'Mexican,Seafood',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 29
    },
    {
      Name: 'Sam\'s Bar-B-Q',
      Street: '2000 E 12TH ST',
      YelpCategories: 'Barbeque',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 188
    },
    {
      Name: 'Broken Spoke',
      Street: '3201 S LAMAR BLVD',
      YelpCategories: 'Music Venues,Dance Clubs,Venues & Event Spaces',
      Score: 75,
      YelpRaiting: 3,
      YelpReviewCount: 345
    },
    {
      Name: 'Posse East',
      Street: '2900 DUVAL ST',
      YelpCategories: 'Bars,Burgers,American (Traditional)',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 103
    },
    {
      Name: 'O\' Henry Jr High',
      Street: '2610 W 10TH ST',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Austinuts',
      Street: '2900 W ANDERSON LN',
      YelpCategories: 'Specialty Food,Gift Shops',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 30
    },
    {
      Name: 'Juan in a Million',
      Street: '2300 E CESAR CHAVEZ ST',
      YelpCategories: 'Mexican,Breakfast & Brunch,Tex-Mex',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 1611
    },
    {
      Name: 'Kerbey Lane Restaurant',
      Street: '3704 KERBEY LN',
      YelpCategories: 'Tex-Mex,Breakfast & Brunch,Cafes',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 1144
    },
    {
      Name: 'Thundercloud Subs',
      Street: '2308 LAKE AUSTIN BLVD',
      YelpCategories: 'Sandwiches,Salad',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 35
    },
    {
      Name: 'Zilker Elementary',
      Street: '1900 BLUEBONNET LN',
      YelpCategories: 'Elementary Schools',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Seton Northwest Hospital',
      Street: '11113 RESEARCH BLVD',
      YelpCategories: 'Hospitals,Emergency Rooms',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 99
    },
    {
      Name: 'Sonic Drive In',
      Street: '1815 AIRPORT BLVD',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 84,
      YelpRaiting: 2,
      YelpReviewCount: 37
    },
    {
      Name: 'Great Hills Golf Club',
      Street: '5914 LOST HORIZON DR',
      YelpCategories: 'Country Clubs',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Pappadeaux Seafood Kitchen #3',
      Street: '6319 N IH',
      YelpCategories: 'Seafood,Cajun/Creole',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 632
    },
    {
      Name: 'Westview Middle School',
      Street: '1805 SCOFIELD LN',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 92,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Whataburger #346',
      Street: '601 BARTON SPRINGS RD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 133
    },
    {
      Name: 'Metz Recreation Center',
      Street: '2407 CANTERBURY ST',
      YelpCategories: 'Recreation Centers',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'El Patio Restaurant',
      Street: '2938 GUADALUPE ST',
      YelpCategories: 'Tex-Mex',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 193
    },
    {
      Name: 'Dirty Martin\'s Place',
      Street: '2808 GUADALUPE ST',
      YelpCategories: 'Burgers,American (Traditional)',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 268
    },
    {
      Name: 'Pappasito\'s Restaurant',
      Street: '6513 N IH',
      YelpCategories: 'Tex-Mex,Seafood',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 464
    },
    {
      Name: 'Dan\'s Hamburgers',
      Street: '844 AIRPORT BLVD',
      YelpCategories: 'Burgers,Breakfast & Brunch',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 101
    },
    {
      Name: 'Alonzo\'s Tacos',
      Street: '907 MONTOPOLIS DR',
      YelpCategories: 'Mexican',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 21
    },
    {
      Name: 'Joslin Elementary',
      Street: '4500 MANCHACA RD',
      YelpCategories: 'Elementary Schools',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Luby\'s Cafeteria',
      Street: '1410 E ANDERSON LN',
      YelpCategories: 'American (Traditional),Buffets',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 49
    },
    {
      Name: 'Nau\'s Enfield Drug',
      Street: '1115 WEST LYNN ST',
      YelpCategories: 'Pharmacy',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Austin Woman\'s Club',
      Street: '708 SAN ANTONIO ST',
      YelpCategories: 'Social Clubs',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Maudie\'s Cafe',
      Street: '2608 W 7TH ST',
      YelpCategories: 'Caterers,Cafes',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 253
    },
    {
      Name: 'Headliners',
      Street: '221 W 6TH ST',
      YelpCategories: 'Venues & Event Spaces,Social Clubs',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 13
    },
    {
      Name: 'House Park Bar-B-Que',
      Street: '900 W 12TH ST',
      YelpCategories: 'Barbeque',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 84
    },
    {
      Name: 'Pearl Street Co-Op',
      Street: '2000 PEARL ST',
      YelpCategories: 'Apartments,Housing Cooperatives,University Housing',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Chinatown Restaurant',
      Street: '3407 GREYSTONE DR',
      YelpCategories: 'Chinese',
      Score: 73,
      YelpRaiting: 4,
      YelpReviewCount: 353
    },
    {
      Name: 'Trudy\'s North Star',
      Street: '8820 BURNET RD',
      YelpCategories: 'Tex-Mex,Bars',
      Score: 77,
      YelpRaiting: 4,
      YelpReviewCount: 868
    },
    {
      Name: 'Mi Madres',
      Street: '2201 MANOR RD',
      YelpCategories: 'Tex-Mex,Breakfast & Brunch,Cocktail Bars',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 592
    },
    {
      Name: 'Jim\'s Coffee Shop',
      Street: '9091 RESEARCH BLVD',
      YelpCategories: 'Diners,American (Traditional),Breakfast & Brunch',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 130
    },
    {
      Name: 'Fulmore Jr. High',
      Street: '201 E MARY ST',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Sonic Drive In',
      Street: '4929 BURNET RD',
      YelpCategories: 'Burgers,Fast Food,Ice Cream & Frozen Yogurt',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 50
    },
    {
      Name: 'Hut\'s Drive-In',
      Street: '807 W 6TH ST',
      YelpCategories: 'Burgers',
      Score: 77,
      YelpRaiting: 4,
      YelpReviewCount: 661
    },
    {
      Name: 'Amy\'s Ice Cream',
      Street: '10000 RESEARCH BLVD',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 232
    },
    {
      Name: 'Becker Elementary',
      Street: '906 W MILTON ST',
      YelpCategories: 'Elementary Schools',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'Ego\'s',
      Street: '510 S CONGRESS AVE',
      YelpCategories: 'Dive Bars,Karaoke',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 220
    },
    {
      Name: 'Murchison Middle School',
      Street: '3700 NORTH HILLS DR',
      YelpCategories: 'Swimming Pools',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'Lamar Middle School',
      Street: '6201 WYNONA AVE',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Southwood Nursing Home',
      Street: '3759 VALLEY VIEW RD',
      YelpCategories: 'Skilled Nursing,Assisted Living Facilities',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Thundercloud Subs',
      Street: '2021 E RIVERSIDE DR',
      YelpCategories: 'Sandwiches',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 55
    },
    {
      Name: 'El Mercado North',
      Street: '7414 BURNET RD',
      YelpCategories: 'Tex-Mex',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 183
    },
    {
      Name: 'Mr. Natural',
      Street: '1901 E CESAR CHAVEZ ST',
      YelpCategories: 'Vegetarian,Gluten-Free',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 320
    },
    {
      Name: 'Highland Lanes Tavern',
      Street: '8909 BURNET RD',
      YelpCategories: 'Bowling',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 122
    },
    {
      Name: 'Sonic',
      Street: '12453 LAMPLIGHT VILLAGE AVE',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 84,
      YelpRaiting: 2,
      YelpReviewCount: 33
    },
    {
      Name: 'Thundercloud Subs',
      Street: '903 W 12TH ST',
      YelpCategories: 'Sandwiches',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 22
    },
    {
      Name: 'My Friends House Child Care',
      Street: '7050 VILLAGE CENTER DR',
      YelpCategories: 'Preschools,Child Care & Day Care,Churches',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'Gethsemane Lutheran Child Care',
      Street: '200 W ANDERSON LN',
      YelpCategories: 'Churches',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Bert\'s BBQ',
      Street: '3563 FAR WEST BLVD',
      YelpCategories: 'Barbeque',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 56
    },
    {
      Name: 'Stepping Stone Child Care',
      Street: '1710 RICHCREEK RD',
      YelpCategories: 'Child Care & Day Care,Preschools,Summer Camps',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 6
    },
    {
      Name: 'Taqueria Arandas #3',
      Street: '6534 BURNET RD',
      YelpCategories: 'Mexican',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 246
    },
    {
      Name: 'La Mexicana Bakery',
      Street: '1924 S 1ST ST',
      YelpCategories: 'Bakeries,Mexican,Desserts',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 295
    },
    {
      Name: 'Flea Market #A',
      Street: '9500 E US 290 HWY',
      YelpCategories: 'Flea Markets',
      Score: 99,
      YelpRaiting: 2,
      YelpReviewCount: 53
    },
    {
      Name: 'Flea Market #B',
      Street: '9500 E US 290 HWY',
      YelpCategories: 'Flea Markets',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 53
    },
    {
      Name: 'Flea Market #I',
      Street: '9500 E US 290 HWY',
      YelpCategories: 'Flea Markets',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 53
    },
    {
      Name: 'La Petite Academy',
      Street: '9315 CHISHOLM LN',
      YelpCategories: 'Preschools,Child Care & Day Care',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Pok-E-Jo\'s BBQ',
      Street: '9828 GREAT HILLS TRL',
      YelpCategories: 'Barbeque,Smokehouse',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 107
    },
    {
      Name: 'Joe\'s Bakery',
      Street: '2305 E 7TH ST',
      YelpCategories: 'Mexican,Bakeries,Breakfast & Brunch',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 300
    },
    {
      Name: 'Rita\'s Mexican Restaurant',
      Street: '1934 RUTLAND DR',
      YelpCategories: 'Mexican',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 30
    },
    {
      Name: 'Dobie Mall--Niki\'s Pizza',
      Street: '2021 GUADALUPE ST',
      YelpCategories: 'Shopping Centers',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 12
    },
    {
      Name: 'Flea Market #H',
      Street: '9500 E US 290 HWY',
      YelpCategories: 'Flea Markets',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 53
    },
    {
      Name: 'Stepping Stone School II',
      Street: '8419 BOWLING GREEN DR',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 16
    },
    {
      Name: 'Bamboo Garden',
      Street: '625 W BEN WHITE BLVD',
      YelpCategories: 'Chinese',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 107
    },
    {
      Name: 'Mozart\'s Coffee Roasters',
      Street: '3825 LAKE AUSTIN BLVD',
      YelpCategories: 'Coffee & Tea',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 1156
    },
    {
      Name: 'Continental Club',
      Street: '1315 S CONGRESS AVE',
      YelpCategories: 'Dive Bars,Music Venues',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 312
    },
    {
      Name: 'La Perla',
      Street: '1512 E 6TH ST',
      YelpCategories: 'Dive Bars',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 28
    },
    {
      Name: 'Peoples Pharmacy',
      Street: '4018 N LAMAR BLVD',
      YelpCategories: 'Delis,Drugstores,Health Markets',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 96
    },
    {
      Name: 'Las Palomas',
      Street: '3201 BEE CAVES RD',
      YelpCategories: 'Mexican,Bars',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 149
    },
    {
      Name: 'Sonic Drive In',
      Street: '1745 E OLTORF ST',
      YelpCategories: 'Burgers,Fast Food,Ice Cream & Frozen Yogurt',
      Score: 86,
      YelpRaiting: 2,
      YelpReviewCount: 53
    },
    {
      Name: 'Thundercloud Subs',
      Street: '7930 BURNET RD',
      YelpCategories: 'Sandwiches',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 99
    },
    {
      Name: 'Thundercloud Subs',
      Street: '3204 GUADALUPE ST',
      YelpCategories: 'Sandwiches',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 97
    },
    {
      Name: 'Mother\'s Cafe',
      Street: '4215 DUVAL ST',
      YelpCategories: 'Vegetarian,Vegan,Breakfast & Brunch',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 872
    },
    {
      Name: 'Sonic Drive In',
      Street: '7112 ED BLUESTEIN BLVD',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 84,
      YelpRaiting: 2,
      YelpReviewCount: 23
    },
    {
      Name: 'Whataburger #182',
      Street: '2305 BURLESON RD',
      YelpCategories: 'Burgers,Fast Food',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 61
    },
    {
      Name: 'Flamingo Cantina',
      Street: '515 E 6TH ST',
      YelpCategories: 'Bars,Music Venues',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 50
    },
    {
      Name: 'Clifton Center',
      Street: '1519 CORONADO HILLS DR',
      YelpCategories: 'Specialty Schools',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Chili\'s #18',
      Street: '9070 RESEARCH BLVD',
      YelpCategories: 'Tex-Mex,American (Traditional),Bars',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 51
    },
    {
      Name: 'Trudy\'s Texas Star Cafe',
      Street: '409 W 30TH ST',
      YelpCategories: 'Tex-Mex,Bars,American (New)',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 879
    },
    {
      Name: 'Austin Club',
      Street: '110 E 9TH ST',
      YelpCategories: 'American (Traditional),Venues & Event Spaces,Social Clubs',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 21
    },
    {
      Name: 'The Shady Grove',
      Street: '1624 BARTON SPRINGS RD',
      YelpCategories: 'American (Traditional),Tex-Mex,Bars',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 854
    },
    {
      Name: 'Target Store #96',
      Street: '2300 W BEN WHITE BLVD',
      YelpCategories: 'Department Stores',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 75
    },
    {
      Name: 'Pho Nom',
      Street: '1700 W PARMER LN',
      YelpCategories: 'Vietnamese',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 19
    },
    {
      Name: 'Redeemer Lutheran Church',
      Street: '1500 W ANDERSON LN',
      YelpCategories: 'Churches',
      Score: 83,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Maggie Mae\'s',
      Street: '323 E 6TH ST',
      YelpCategories: 'Music Venues,Pubs,Sports Bars',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 245
    },
    {
      Name: 'Texican Cafe',
      Street: '11940 MANCHACA RD',
      YelpCategories: 'Mexican,Tex-Mex,Salad',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 220
    },
    {
      Name: 'Oasis Cantina',
      Street: '6550 COMANCHE TRL',
      YelpCategories: 'Shopping Centers',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 211
    },
    {
      Name: 'Dessau Elementary',
      Street: '1501 DESSAU RIDGE LN',
      YelpCategories: 'General Dentistry',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'St. Stephens School',
      Street: '6500 ST STEPHENS DR',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'The Barr Mansion',
      Street: '10463 SPRINKLE RD',
      YelpCategories: 'Venues & Event Spaces',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 72
    },
    {
      Name: 'Marbridge Foundation-Villa',
      Street: '2504 BLISS SPILLAR RD',
      YelpCategories: 'Community Service/Non-Profit,Assisted Living Facilities',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Sandy\'s',
      Street: '603 BARTON SPRINGS RD',
      YelpCategories: 'Burgers',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 331
    },
    {
      Name: 'Marbridge Foundation-Winters',
      Street: '2310 BLISS SPILLAR RD',
      YelpCategories: 'Skilled Nursing,Rehabilitation Center',
      Score: 91,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Springhill Restaurant',
      Street: '2505 W PECAN ST',
      YelpCategories: 'Seafood,Buffets',
      Score: 78,
      YelpRaiting: 3,
      YelpReviewCount: 126
    },
    {
      Name: 'Lost Creek Country Club',
      Street: '2612 LOST CREEK BLVD',
      YelpCategories: 'Country Clubs,Venues & Event Spaces',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 9
    },
    {
      Name: 'Salvation Army Adult Rehab',
      Street: '4216 S CONGRESS AVE',
      YelpCategories: 'Thrift Stores,Donation Center',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 38
    },
    {
      Name: 'North Austin Medical Ctr.',
      Street: '12221 N MOPAC EXPY',
      YelpCategories: 'Medical Centers',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 158
    },
    {
      Name: 'Thundercloud Subs',
      Street: '1807 W SLAUGHTER LN',
      YelpCategories: 'Sandwiches',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 36
    },
    {
      Name: 'Donn\'s Bar-B-Q',
      Street: '7001 OAK MEADOW DR',
      YelpCategories: 'Barbeque,Breakfast & Brunch',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 124
    },
    {
      Name: 'Shogun',
      Street: '1807 W SLAUGHTER LN',
      YelpCategories: 'Sushi Bars,Japanese',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 183
    },
    {
      Name: 'LW - Thundercloud Subs',
      Street: '2300 LOHMANS SPUR RD',
      YelpCategories: 'Sandwiches,Juice Bars & Smoothies',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 14
    },
    {
      Name: 'Courtyard Marriott',
      Street: '9409 STONELAKE BLVD',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 44
    },
    {
      Name: 'Curras Grill',
      Street: '614 E OLTORF ST',
      YelpCategories: 'Mexican',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 1084
    },
    {
      Name: 'Shoal Creek Saloon',
      Street: '909 N LAMAR BLVD',
      YelpCategories: 'Southern,Cajun/Creole',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 307
    },
    {
      Name: 'Sonic Drive In',
      Street: '6208 CAMERON RD',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 91,
      YelpRaiting: 2,
      YelpReviewCount: 61
    },
    {
      Name: 'Cheers Shot Bar',
      Street: '416 E 6TH ST',
      YelpCategories: 'Bars',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 114
    },
    {
      Name: 'Roppolo\'s Pizzeria II',
      Street: '316 E 6TH ST',
      YelpCategories: 'Pizza,Italian',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 361
    },
    {
      Name: 'Best Western Plus Austin City Hotel',
      Street: '2200 S IH',
      YelpCategories: 'Hotels',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 96
    },
    {
      Name: 'Wok\'N Express',
      Street: '4413 GUADALUPE ST',
      YelpCategories: 'Chinese,Seafood,Soup',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 126
    },
    {
      Name: 'Country Home Learning Center #8',
      Street: '13120 N US 183 HWY',
      YelpCategories: 'Child Care & Day Care,Preschools,Summer Camps',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 18
    },
    {
      Name: 'Starbuck\'s Coffee#6203',
      Street: '9722 GREAT HILLS TRL',
      YelpCategories: 'Accessories,Women\'s Clothing',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 5
    },
    {
      Name: 'Great American Cookie Company',
      Street: '11200 LAKELINE MALL DR',
      YelpCategories: 'Bakeries,Desserts',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 11
    },
    {
      Name: 'Palazio',
      Street: '501 E BEN WHITE BLVD',
      YelpCategories: 'Adult Entertainment',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 79
    },
    {
      Name: 'Taqueria Arandas #5',
      Street: '2448 S 1ST ST',
      YelpCategories: 'Mexican,Tex-Mex',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 110
    },
    {
      Name: 'Spider House',
      Street: '2908 FRUTH ST',
      YelpCategories: 'Cafes,Cocktail Bars',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 690
    },
    {
      Name: 'Thundercloud Subs',
      Street: '2801 S LAMAR BLVD',
      YelpCategories: 'Sandwiches',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 86
    },
    {
      Name: 'Children\'s Courtyard, The',
      Street: '11012 HARRIS BRANCH PKWY',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Dairy Queen',
      Street: '5900 MANOR RD',
      YelpCategories: 'Fast Food,Ice Cream & Frozen Yogurt,Burgers',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 15
    },
    {
      Name: 'Culver\'s',
      Street: '3424 W WILLIAM CANNON DR',
      YelpCategories: 'Burgers,Fast Food,Ice Cream & Frozen Yogurt',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 111
    },
    {
      Name: 'Cafe Java',
      Street: '11900 METRIC BLVD',
      YelpCategories: 'Coffee & Tea,Breakfast & Brunch,Diners',
      Score: 77,
      YelpRaiting: 5,
      YelpReviewCount: 937
    },
    {
      Name: 'Luca Villa Pizza',
      Street: '11200 LAKELINE MALL DR',
      YelpCategories: 'Pizza,Italian',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 7
    },
    {
      Name: 'Stubb\'s',
      Street: '801 RED RIVER ST',
      YelpCategories: 'Barbeque',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 1150
    },
    {
      Name: 'Papa John\'s Pizza #935',
      Street: '411 W MARTIN LUTHER KING JR BLVD',
      YelpCategories: 'Pizza',
      Score: 91,
      YelpRaiting: 2,
      YelpReviewCount: 33
    },
    {
      Name: 'Slick Willie\'s Family Pool Hall',
      Street: '8440 BURNET RD',
      YelpCategories: 'Pool Halls',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 33
    },
    {
      Name: 'St. John\'s Lutheran Child Care',
      Street: '409 W BEN WHITE BLVD',
      YelpCategories: 'Churches',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Martin House',
      Street: '500 OAKLAND AVE',
      YelpCategories: 'Child Care & Day Care',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'China Kitchen',
      Street: '7112 ED BLUESTEIN BLVD',
      YelpCategories: 'Chinese',
      Score: 78,
      YelpRaiting: 2,
      YelpReviewCount: 65
    },
    {
      Name: 'Randall\'s #2482-Deli',
      Street: '8040 MESA DR',
      YelpCategories: 'Drugstores,Grocery',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 51
    },
    {
      Name: 'Randall\'s #2481 (Perishable)',
      Street: '1500 W 35TH ST',
      YelpCategories: 'Drugstores,Grocery',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 46
    },
    {
      Name: 'Dagar\'s Of Austin Caterers',
      Street: '834 KRAMER LN',
      YelpCategories: 'Caterers',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 47
    },
    {
      Name: 'South Austin Senior',
      Street: '3911 MANCHACA RD',
      YelpCategories: 'Senior Centers',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Sam\'s Club #6453 Cafe',
      Street: '9700 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Department Stores,Wholesale Stores,Grocery',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 63
    },
    {
      Name: 'Star of India Rest.&Bar',
      Street: '2900 W ANDERSON LN',
      YelpCategories: 'Indian',
      Score: 73,
      YelpRaiting: 4,
      YelpReviewCount: 273
    },
    {
      Name: 'Chicken Bowl, The',
      Street: '1610 LAVACA ST',
      YelpCategories: 'Tex-Mex,Fast Food',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 34
    },
    {
      Name: 'Tucci\'s Southside Subs',
      Street: '801 E WILLIAM CANNON DR',
      YelpCategories: 'American (Traditional),Delis,Italian',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 234
    },
    {
      Name: 'Barnes & Noble Book & Cafe',
      Street: '10000 RESEARCH BLVD',
      YelpCategories: 'Bookstores',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 70
    },
    {
      Name: 'Thundercloud Subs',
      Street: '6920 N FM 620 RD',
      YelpCategories: 'Sandwiches',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 64
    },
    {
      Name: 'Jim-Jim\'s Water Ice',
      Street: '615 E 6TH ST',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Shaved Ice,Pretzels',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 151
    },
    {
      Name: 'Randalls #2483-Food',
      Street: '715 EXPOSITION BLVD',
      YelpCategories: 'Grocery,Drugstores',
      Score: 81,
      YelpRaiting: 3,
      YelpReviewCount: 35
    },
    {
      Name: 'Whole Foods Market/Deli',
      Street: '9607 RESEARCH BLVD',
      YelpCategories: 'Grocery,Health Markets,Coffee & Tea',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 223
    },
    {
      Name: 'Taqueria Chapala Jalisco',
      Street: '2101 E CESAR CHAVEZ ST',
      YelpCategories: 'Mexican,Spanish',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 136
    },
    {
      Name: 'Continental, The',
      Street: '4604 S LAMAR BLVD',
      YelpCategories: 'Retirement Homes',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 7
    },
    {
      Name: 'P F Chang\'s China Bistro',
      Street: '10114 JOLLYVILLE RD',
      YelpCategories: 'Chinese,Asian Fusion,Gluten-Free',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 321
    },
    {
      Name: 'Metropolitan Stadium 14',
      Street: '901 LITTLE TEXAS LN',
      YelpCategories: 'Cinema',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 64
    },
    {
      Name: 'Mrs. Johnson\'s Bakery',
      Street: '4909 AIRPORT BLVD',
      YelpCategories: 'Donuts,Bakeries',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 386
    },
    {
      Name: 'Guero\'s Taco Bar',
      Street: '1412 S CONGRESS AVE',
      YelpCategories: 'Mexican',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 1504
    },
    {
      Name: 'Branch Bar-B-Que',
      Street: '1779 W WELLS BRANCH PKWY',
      YelpCategories: 'Barbeque',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 74
    },
    {
      Name: 'First English Lutheran Child',
      Street: '3001 WHITIS AVE',
      YelpCategories: 'Preschools,Child Care & Day Care',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 13
    },
    {
      Name: 'Sonic',
      Street: '155 W SLAUGHTER LN',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Nosh & Bevvy English Kitchen & Bar',
      Street: '8440 BURNET RD',
      YelpCategories: 'Gastropubs,Pubs,British',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 74
    },
    {
      Name: 'Millennium',
      Street: '1156 HARGRAVE ST',
      YelpCategories: 'Arcades,Skating Rinks,Venues & Event Spaces',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 27
    },
    {
      Name: 'Vic\'s Bar-B-Que',
      Street: '3502 BURLESON RD',
      YelpCategories: 'Barbeque',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 160
    },
    {
      Name: 'Courtyard Tennis Club, The',
      Street: '5608 COURTYARD DR',
      YelpCategories: 'Tennis,Swimming Pools',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Polvo\'s Restaurant & Bar',
      Street: '2004 S 1ST ST',
      YelpCategories: 'Mexican,Breakfast & Brunch',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 1287
    },
    {
      Name: 'Rudy\'s Country Store and BBQ',
      Street: '2451 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Barbeque,Gas Stations,Fast Food',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 971
    },
    {
      Name: 'Monte Siesta Nursing& Rehab',
      Street: '4501 DUDMAR DR',
      YelpCategories: 'Health & Medical',
      Score: 94,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'SV - Barnes & Noble Booksellers',
      Street: '5601 BRODIE LN',
      YelpCategories: 'Bookstores',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 46
    },
    {
      Name: 'Dart Bowl Steak House',
      Street: '5700 GROVER AVE',
      YelpCategories: 'Bowling',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 258
    },
    {
      Name: 'Children\'s Center of Austin',
      Street: '6507 JESTER BLVD',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 12
    },
    {
      Name: 'North by Northwest',
      Street: '10010 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'American (Traditional),Brewpubs,Pizza',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 828
    },
    {
      Name: 'Taco More',
      Street: '1325 RUTLAND DR',
      YelpCategories: 'Mexican',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'IBM - Kitchen-Bldg 908',
      Street: '11501 BURNET RD',
      YelpCategories: 'Cafeteria,Tacos,Breakfast & Brunch',
      Score: 98,
      YelpRaiting: 2,
      YelpReviewCount: 1
    },
    {
      Name: 'Taco Shack',
      Street: '3901 SPICEWOOD SPRINGS RD',
      YelpCategories: 'Mexican',
      Score: 81,
      YelpRaiting: 3,
      YelpReviewCount: 102
    },
    {
      Name: 'Simon Lee Bakery',
      Street: '2700 W PECAN ST',
      YelpCategories: 'Bakeries,Custom Cakes,Patisserie/Cake Shop',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 54
    },
    {
      Name: 'Starbucks Coffee #6227',
      Street: '2727 EXPOSITION BLVD',
      YelpCategories: 'Coffee & Tea',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 21
    },
    {
      Name: 'Changos',
      Street: '3023 GUADALUPE ST',
      YelpCategories: 'Mexican',
      Score: 76,
      YelpRaiting: 4,
      YelpReviewCount: 165
    },
    {
      Name: 'St Austin\'s Church',
      Street: '2026 GUADALUPE ST',
      YelpCategories: 'Churches',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 12
    },
    {
      Name: 'Stardust Club',
      Street: '11940 MANCHACA RD',
      YelpCategories: 'Pool Halls,Bars,Karaoke',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 32
    },
    {
      Name: 'Holiday Inn Express',
      Street: '8500 N IH',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 81,
      YelpRaiting: 3,
      YelpReviewCount: 21
    },
    {
      Name: 'Maudie\'sToo',
      Street: '1212 S LAMAR BLVD',
      YelpCategories: 'Tex-Mex',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 289
    },
    {
      Name: 'Courtyard by Marriott',
      Street: '4533 S IH',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 27
    },
    {
      Name: 'Cornerstone Hospital of Austin, LLC',
      Street: '4207 BURNET RD',
      YelpCategories: 'Hospitals',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 6
    },
    {
      Name: 'Regal Gateway 16 Cinema #638',
      Street: '9700 STONELAKE BLVD',
      YelpCategories: 'Cinema',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 209
    },
    {
      Name: 'Casa Maria',
      Street: '4327 S 1ST ST',
      YelpCategories: 'Mexican',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 263
    },
    {
      Name: 'St David\'s Medical Center Cafe',
      Street: '919 E 32ND ST',
      YelpCategories: 'Medical Centers',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 109
    },
    {
      Name: 'Perfect 10 Men\'s Club',
      Street: '16511 BRATTON LN',
      YelpCategories: 'Adult Entertainment',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 45
    },
    {
      Name: 'Subway',
      Street: '8023 MESA DR',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 81,
      YelpRaiting: 2,
      YelpReviewCount: 16
    },
    {
      Name: 'Sonic',
      Street: '1805 E WILLIAM CANNON DR',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 89,
      YelpRaiting: 2,
      YelpReviewCount: 12
    },
    {
      Name: 'Einstein Bros Bagels',
      Street: '4607 W BRAKER LN',
      YelpCategories: 'Bagels',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 120
    },
    {
      Name: 'Papa John\'s Pizza #941',
      Street: '5114 BALCONES WOODS DR',
      YelpCategories: 'Pizza',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 18
    },
    {
      Name: 'Zachary Scott Theatre',
      Street: '1510 TOOMEY RD',
      YelpCategories: 'Cinema',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 49
    },
    {
      Name: 'Sonic',
      Street: '1901 MONTOPOLIS DR',
      YelpCategories: 'Burgers,Fast Food,Ice Cream & Frozen Yogurt',
      Score: 82,
      YelpRaiting: 2,
      YelpReviewCount: 18
    },
    {
      Name: 'Sonic Drive In',
      Street: '6816 MC NEIL DR',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 84,
      YelpRaiting: 2,
      YelpReviewCount: 42
    },
    {
      Name: 'Dennis Cowan Elementary',
      Street: '2817 KENTISH DR',
      YelpCategories: 'Elementary Schools',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'LW - Pao\'s Mandarin House',
      Street: '2300 LOHMANS SPUR RD',
      YelpCategories: 'Chinese',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 189
    },
    {
      Name: 'Sonic',
      Street: '7714 W SH',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 84,
      YelpRaiting: 2,
      YelpReviewCount: 28
    },
    {
      Name: 'Taco Cabana',
      Street: '15002 FM 1825 RD',
      YelpCategories: 'Mexican',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 87
    },
    {
      Name: 'Cedar St. Courtyard',
      Street: '208 W 4TH ST',
      YelpCategories: 'Bars,Music Venues',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 156
    },
    {
      Name: 'Habanero Mexican Cafe',
      Street: '501 W OLTORF ST',
      YelpCategories: 'Mexican,Tex-Mex',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 595
    },
    {
      Name: 'Saltgrass Steak House',
      Street: '10614 RESEARCH BLVD',
      YelpCategories: 'Steakhouses,Gluten-Free',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 259
    },
    {
      Name: 'Heritage of Gaines Ranch- Assist Living',
      Street: '4409 GAINES RANCH LOOP',
      YelpCategories: 'Retirement Homes',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Metro Mart #4',
      Street: '1600 OHLEN RD',
      YelpCategories: 'Convenience Stores',
      Score: 90,
      YelpRaiting: 2,
      YelpReviewCount: 1
    },
    {
      Name: 'Kerbey Lane',
      Street: '2606 GUADALUPE ST',
      YelpCategories: 'Tex-Mex,Breakfast & Brunch,American (Traditional)',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 760
    },
    {
      Name: 'Kirby Hall School',
      Street: '306 W 29TH ST',
      YelpCategories: 'Elementary Schools,Preschools,Middle Schools & High Schools',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 7
    },
    {
      Name: 'Mecca Gym & Spa',
      Street: '524 N LAMAR BLVD',
      YelpCategories: 'Day Spas,Gyms',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 65
    },
    {
      Name: 'MN - Sonic',
      Street: '11215 E US 290 HWY',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 29
    },
    {
      Name: 'Thundercloud Subs',
      Street: '13776 N US 183 HWY',
      YelpCategories: 'Sandwiches',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 57
    },
    {
      Name: 'LW - Live Oak Country Club',
      Street: '510 LAKEWAY DR',
      YelpCategories: 'Country Clubs,Venues & Event Spaces,Swimming Pools',
      Score: 83,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Mesa Rosa',
      Street: '10700 ANDERSON MILL RD',
      YelpCategories: 'Mexican',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 82
    },
    {
      Name: 'La Hacienda Taqueria',
      Street: '2410 E RIVERSIDE DR',
      YelpCategories: 'Meat Shops',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 7
    },
    {
      Name: 'Westgate II',
      Street: '4477 S LAMAR BLVD',
      YelpCategories: 'Paint-Your-Own Pottery',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 33
    },
    {
      Name: 'Galloway\'s Sandwich Shop',
      Street: '1914 E 12TH ST',
      YelpCategories: 'Soul Food,Southern',
      Score: 84,
      YelpRaiting: 5,
      YelpReviewCount: 14
    },
    {
      Name: 'ABIA Schlotzsky\'s',
      Street: '3600 PRESIDENTIAL BLVD',
      YelpCategories: 'Delis,Sandwiches',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 80
    },
    {
      Name: 'St Andrews Episcopal School',
      Street: '1112 W 31ST ST',
      YelpCategories: 'Education',
      Score: 94,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Starbucks Coffee # 6319',
      Street: '907 W 5TH ST',
      YelpCategories: 'Coffee & Tea',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 38
    },
    {
      Name: 'Whataburger #709',
      Street: '13201 N FM 620 RD',
      YelpCategories: 'Burgers,Fast Food',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 76
    },
    {
      Name: 'Forest North Elementary',
      Street: '13414 BROADMEADE AVE',
      YelpCategories: 'Elementary Schools',
      Score: 100,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'MN - Manor High School Cafeteria',
      Street: '12700 GREGG MANOR RD',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Starbucks Coffee #6284',
      Street: '504 W 24TH ST',
      YelpCategories: 'Coffee & Tea',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 54
    },
    {
      Name: 'Reales Pizza & Cafe',
      Street: '13450 N US 183 HWY',
      YelpCategories: 'Pizza,Italian',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 437
    },
    {
      Name: 'Optimist Club Of North Austin - Concession Stand',
      Street: '1201 MORROW ST',
      YelpCategories: 'Sports Clubs,Parks',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'McDonald\'s #7877',
      Street: '7010 W SH',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 90,
      YelpRaiting: 2,
      YelpReviewCount: 25
    },
    {
      Name: 'Central Market: Deli/Bakery/Produce',
      Street: '4477 S LAMAR BLVD',
      YelpCategories: 'Caterers',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 16
    },
    {
      Name: 'Central Market: Prepared Foods',
      Street: '4477 S LAMAR BLVD',
      YelpCategories: 'Caterers',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 16
    },
    {
      Name: 'Ranch 616',
      Street: '616 NUECES ST',
      YelpCategories: 'American (Traditional),Wine Bars,Cocktail Bars',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 432
    },
    {
      Name: 'Texas Bar & Grill',
      Street: '14611 BURNET RD',
      YelpCategories: 'American (Traditional),Burgers,Dive Bars',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 33
    },
    {
      Name: 'SV - Fire Bowl',
      Street: '5601 BRODIE LN',
      YelpCategories: 'Asian Fusion,Chinese,Soup',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 193
    },
    {
      Name: 'Sonic',
      Street: '11881 JOLLYVILLE RD',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 84,
      YelpRaiting: 2,
      YelpReviewCount: 54
    },
    {
      Name: 'Chick-Fil-A',
      Street: '10901 RESEARCH BLVD',
      YelpCategories: 'Fast Food',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 133
    },
    {
      Name: 'Orangewood Inn & Suites',
      Street: '9121 N IH',
      YelpCategories: 'Hotels',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 35
    },
    {
      Name: 'Joy of Learning Center',
      Street: '12300 AMHERST DR',
      YelpCategories: 'Child Care & Day Care',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'China Palace',
      Street: '6605 AIRPORT BLVD',
      YelpCategories: 'Chinese',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 183
    },
    {
      Name: 'Taj Video Corporation Inc.',
      Street: '9515 N LAMAR BLVD',
      YelpCategories: 'Grocery',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 18
    },
    {
      Name: 'Rack Daddy',
      Street: '1779 W WELLS BRANCH PKWY',
      YelpCategories: 'Pool Halls,Sports Bars',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 16
    },
    {
      Name: 'SpringHill Suites',
      Street: '4501 S IH',
      YelpCategories: 'Hotels',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 63
    },
    {
      Name: 'General Store',
      Street: '11003 HARRIS BRANCH PKWY',
      YelpCategories: 'Grocery',
      Score: 89,
      YelpRaiting: 1,
      YelpReviewCount: 2
    },
    {
      Name: 'McDonald\'s #14607',
      Street: '1030 NORWOOD PARK BLVD',
      YelpCategories: 'Fast Food,Coffee & Tea,Burgers',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Starbucks Coffee #6386',
      Street: '6816 WEST GATE BLVD',
      YelpCategories: 'Coffee & Tea',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 59
    },
    {
      Name: 'Landing Strip, The',
      Street: '745 BASTROP HWY',
      YelpCategories: 'Beer, Wine & Spirits,Strip Clubs',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 24
    },
    {
      Name: 'Mr. Gatti\'s Delivery #162',
      Street: '12110 MANCHACA RD',
      YelpCategories: 'Pizza',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 15
    },
    {
      Name: 'Siena Restaurant at Bull Creek',
      Street: '6203 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Tuscan',
      Score: 74,
      YelpRaiting: 4,
      YelpReviewCount: 290
    },
    {
      Name: 'Whataburger #736',
      Street: '14310 N IH',
      YelpCategories: 'Fast Food,Burgers',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 70
    },
    {
      Name: 'Crave Catering',
      Street: '14611 BURNET RD',
      YelpCategories: 'Caterers',
      Score: 87,
      YelpRaiting: 5,
      YelpReviewCount: 23
    },
    {
      Name: 'McDonald\'s #14128',
      Street: '1024 E ANDERSON LN',
      YelpCategories: 'Burgers,Fast Food,Coffee & Tea',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 13
    },
    {
      Name: 'Dine by Design',
      Street: '7113 BURNET RD',
      YelpCategories: 'Caterers',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'South Congress Cafe',
      Street: '1600 S CONGRESS AVE',
      YelpCategories: 'Breakfast & Brunch,American (New)',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 2190
    },
    {
      Name: 'Short Stop',
      Street: '6920 MANCHACA RD',
      YelpCategories: 'Fast Food',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 41
    },
    {
      Name: 'Meals On Wheels and More',
      Street: '3227 E 5TH ST',
      YelpCategories: 'Community Service/Non-Profit',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 7
    },
    {
      Name: 'Springhill Suites',
      Street: '10936 STONELAKE BLVD',
      YelpCategories: 'Hotels',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 23
    },
    {
      Name: 'Children\'s Courtyard',
      Street: '4213 SPICEWOOD SPRINGS RD',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 18
    },
    {
      Name: 'Subway',
      Street: '12129 N FM 620 RD',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 7
    },
    {
      Name: 'Maudie\'s North Lamar',
      Street: '10205 N LAMAR BLVD',
      YelpCategories: 'Tex-Mex,Diners,Tacos',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 279
    },
    {
      Name: 'Comfort Suites',
      Street: '13681 N US 183 HWY',
      YelpCategories: 'Hotels',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 20
    },
    {
      Name: 'Jamba Juice',
      Street: '10710 RESEARCH BLVD',
      YelpCategories: 'Juice Bars & Smoothies',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 66
    },
    {
      Name: 'Krispy Kreme',
      Street: '12586 RESEARCH BLVD',
      YelpCategories: 'Donuts,Coffee & Tea',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 111
    },
    {
      Name: 'McDonald\'s',
      Street: '3909 S CONGRESS AVE',
      YelpCategories: 'Burgers,Fast Food,Coffee & Tea',
      Score: 93,
      YelpRaiting: 2,
      YelpReviewCount: 28
    },
    {
      Name: 'La Michoacana',
      Street: '6908 CAMERON RD',
      YelpCategories: 'Restaurants,Meat Shops',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 13
    },
    {
      Name: 'Java Noodles',
      Street: '2400 E OLTORF ST',
      YelpCategories: 'Noodles',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 285
    },
    {
      Name: 'Umi Sushi Bar & Grill',
      Street: '5510 S IH',
      YelpCategories: 'Japanese,Sushi Bars,Bars',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 437
    },
    {
      Name: 'Burger Tex',
      Street: '5420 AIRPORT BLVD',
      YelpCategories: 'Burgers,American (Traditional)',
      Score: 75,
      YelpRaiting: 3,
      YelpReviewCount: 191
    },
    {
      Name: 'Buca di Beppo',
      Street: '3600 TUDOR BLVD',
      YelpCategories: 'Italian',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 330
    },
    {
      Name: 'La Michoacana',
      Street: '512 W STASSNEY LN',
      YelpCategories: 'Meat Shops',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 7
    },
    {
      Name: 'Children\'s Courtyard, The',
      Street: '12336 N MOPAC EXPY',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 17
    },
    {
      Name: 'Del Valle High Cafeteria',
      Street: '5201 ROSS RD',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Starbucks # 6380',
      Street: '6600 S MOPAC EXPY',
      YelpCategories: 'Coffee & Tea',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 45
    },
    {
      Name: 'Flightpath Coffeehouse',
      Street: '5011 DUVAL ST',
      YelpCategories: 'Coffee & Tea',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 380
    },
    {
      Name: 'Plush',
      Street: '617 RED RIVER ST',
      YelpCategories: 'Dance Clubs',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 69
    },
    {
      Name: 'McDonald\'s  #11983',
      Street: '6503 S IH',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 36
    },
    {
      Name: 'Children\'s Courtyard, The',
      Street: '5914 W WILLIAM CANNON DR',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'McDonalds',
      Street: '5516 N LAMAR BLVD',
      YelpCategories: 'Burgers,Fast Food,Coffee & Tea',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 51
    },
    {
      Name: 'Kurant Events',
      Street: '6519 BURNET LN',
      YelpCategories: 'Caterers',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 6
    },
    {
      Name: 'Pasta & Co',
      Street: '3502 KERBEY LN',
      YelpCategories: 'Pasta Shops',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 44
    },
    {
      Name: 'P F Chang\'s China Bistro',
      Street: '201 SAN JACINTO BLVD',
      YelpCategories: 'Chinese,Asian Fusion,Gluten-Free',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 238
    },
    {
      Name: 'McDonald\'s   #14774',
      Street: '5017 W US 290 HWY',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 98,
      YelpRaiting: 2,
      YelpReviewCount: 7
    },
    {
      Name: 'McDonald\'s',
      Street: '4501 E BEN WHITE BLVD',
      YelpCategories: 'Burgers,Fast Food,Coffee & Tea',
      Score: 87,
      YelpRaiting: 2,
      YelpReviewCount: 42
    },
    {
      Name: 'B.D. Riley\'s Pub',
      Street: '204 E 6TH ST',
      YelpCategories: 'Irish,Sports Bars,Irish Pub',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 387
    },
    {
      Name: 'ABIA Auntie Anne\'s',
      Street: '3600 PRESIDENTIAL BLVD',
      YelpCategories: 'Pretzels',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 15
    },
    {
      Name: 'Auntie Anne\'s',
      Street: '11200 LAKELINE MALL DR',
      YelpCategories: 'Pretzels',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 7
    },
    {
      Name: 'Lee\'s Meat Market',
      Street: '1601 W 38TH ST',
      YelpCategories: 'Meat Shops,Salad',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 59
    },
    {
      Name: 'Costco #681 Food Court & Deli',
      Street: '10401 RESEARCH BLVD',
      YelpCategories: 'Wholesale Stores',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 256
    },
    {
      Name: 'Foodheads',
      Street: '616 W 34TH ST',
      YelpCategories: 'Sandwiches,Cafes,Tacos',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 503
    },
    {
      Name: 'Starbucks Coffee #6368',
      Street: '501 W 15TH ST',
      YelpCategories: 'Coffee & Tea',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 61
    },
    {
      Name: 'Seoul Restaurant',
      Street: '6400 S 1ST ST',
      YelpCategories: 'Sushi Bars,Karaoke,Japanese',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 234
    },
    {
      Name: 'Lavaca Street Bar',
      Street: '405 LAVACA ST',
      YelpCategories: 'Sports Bars',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 178
    },
    {
      Name: 'Rockin Tomato Pizza Co.',
      Street: '3003 S LAMAR BLVD',
      YelpCategories: 'Pizza,Bars,Gluten-Free',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 246
    },
    {
      Name: 'MN - Ramos Mexican Restaurant',
      Street: '116 E PARSONS ST',
      YelpCategories: 'Mexican',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 72
    },
    {
      Name: 'Mugshots',
      Street: '407 E 7TH ST',
      YelpCategories: 'Dive Bars',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 174
    },
    {
      Name: 'Speakeasy',
      Street: '412 CONGRESS AVE',
      YelpCategories: 'Speakeasies',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 191
    },
    {
      Name: 'Arby\'s Roast Beef  #07400',
      Street: '13609 N IH',
      YelpCategories: 'Fast Food,Sandwiches',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 25
    },
    {
      Name: 'K C Donuts',
      Street: '8106 BRODIE LN',
      YelpCategories: 'Donuts',
      Score: 76,
      YelpRaiting: 5,
      YelpReviewCount: 209
    },
    {
      Name: 'St. Louis Catholic Church',
      Street: '7601 BURNET RD',
      YelpCategories: 'Churches',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 6
    },
    {
      Name: 'Austin\'s Park n Pizza',
      Street: '16231 N IH',
      YelpCategories: 'Venues & Event Spaces,Sports Bars,Bowling',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 306
    },
    {
      Name: 'Darwin\'s Pub',
      Street: '223 E 6TH ST',
      YelpCategories: 'Pubs',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 91
    },
    {
      Name: 'Wingstop Restaurant',
      Street: '500 W WILLIAM CANNON DR',
      YelpCategories: 'Chicken Wings',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 86
    },
    {
      Name: 'Jefes Mexican Restaurant',
      Street: '720 LAMAR PL',
      YelpCategories: 'Mexican',
      Score: 77,
      YelpRaiting: 4,
      YelpReviewCount: 36
    },
    {
      Name: 'Taqueria Arandas #2',
      Street: '2038 W STASSNEY LN',
      YelpCategories: 'Mexican',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 107
    },
    {
      Name: 'MN - Park Place Foods',
      Street: '11209 E US 290 HWY',
      YelpCategories: 'Convenience Stores',
      Score: 91,
      YelpRaiting: 2,
      YelpReviewCount: 2
    },
    {
      Name: 'Panda Express # 707',
      Street: '500 CANYON RIDGE DR',
      YelpCategories: 'Chinese,Fast Food',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 18
    },
    {
      Name: 'Hilton Austin -Banquet & Cafeteria',
      Street: '500 E 4TH ST',
      YelpCategories: 'Hotels',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 425
    },
    {
      Name: 'Mr. Gatti\'s #102',
      Street: '2410 E RIVERSIDE DR',
      YelpCategories: 'Pizza',
      Score: 87,
      YelpRaiting: 2,
      YelpReviewCount: 39
    },
    {
      Name: 'Jamba Juice',
      Street: '2300 GUADALUPE ST',
      YelpCategories: 'Juice Bars & Smoothies',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 43
    },
    {
      Name: 'Lakehills Grocery',
      Street: '1500 N CUERNAVACA DR',
      YelpCategories: 'Convenience Stores',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Sao Paulo\'s Restaurate',
      Street: '2809 SAN JACINTO BLVD',
      YelpCategories: 'Brazilian,Tex-Mex',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 353
    },
    {
      Name: 'Taqueria Arandinas',
      Street: '1011 REINLI ST',
      YelpCategories: 'Mexican,Seafood,Breakfast & Brunch',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 42
    },
    {
      Name: 'Milano Pizza',
      Street: '1025 W STASSNEY LN',
      YelpCategories: 'Pizza,Sandwiches,Salad',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 151
    },
    {
      Name: 'Roaring Fork Restaurant',
      Street: '701 CONGRESS AVE',
      YelpCategories: 'American (Traditional)',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 948
    },
    {
      Name: 'Elysium',
      Street: '705 RED RIVER ST',
      YelpCategories: 'Dance Clubs,Karaoke',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 106
    },
    {
      Name: 'Mr. Gatti\'s #112',
      Street: '801 E WILLIAM CANNON DR',
      YelpCategories: 'Pizza',
      Score: 98,
      YelpRaiting: 2,
      YelpReviewCount: 35
    },
    {
      Name: 'Midori',
      Street: '13435 N US 183 HWY',
      YelpCategories: 'Japanese,Sushi Bars,Asian Fusion',
      Score: 87,
      YelpRaiting: 5,
      YelpReviewCount: 797
    },
    {
      Name: 'El Meson',
      Street: '5808 BURLESON RD',
      YelpCategories: 'Mexican',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 100
    },
    {
      Name: 'Sunrise Mini Mart',
      Street: '915 W OLTORF ST',
      YelpCategories: 'Convenience Stores',
      Score: 89,
      YelpRaiting: 2,
      YelpReviewCount: 5
    },
    {
      Name: 'Rain on 4th',
      Street: '217 W 4TH ST',
      YelpCategories: 'Gay Bars,Dance Clubs',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 139
    },
    {
      Name: 'Subway #26354',
      Street: '12518 RESEARCH BLVD',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 16
    },
    {
      Name: 'Tic Tac Toe',
      Street: '2003 W ANDERSON LN',
      YelpCategories: 'Child Care & Day Care',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 8
    },
    {
      Name: 'Whataburger #809',
      Street: '3400 W SLAUGHTER LN',
      YelpCategories: 'Burgers,Fast Food',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 46
    },
    {
      Name: 'McDonald\'s',
      Street: '13749 N US 183 HWY',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 85,
      YelpRaiting: 2,
      YelpReviewCount: 28
    },
    {
      Name: 'SV - Holiday Inn Express',
      Street: '4892 W US 290 HWY',
      YelpCategories: 'Hotels',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 25
    },
    {
      Name: 'Kneaded Pleasures',
      Street: '3573 FAR WEST BLVD',
      YelpCategories: 'Sandwiches,Salad,Pizza',
      Score: 75,
      YelpRaiting: 3,
      YelpReviewCount: 152
    },
    {
      Name: 'ABIA - Annie\'s Cafe & Bar',
      Street: '3600 PRESIDENTIAL BLVD',
      YelpCategories: 'Parking',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 22
    },
    {
      Name: '2 Dine 4 Fine Catering',
      Street: '3008 GONZALES ST',
      YelpCategories: 'Caterers,Wedding Planning',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 20
    },
    {
      Name: 'Westwood\'s Lakeview Cafe',
      Street: '3808 W 35TH ST',
      YelpCategories: 'Venues & Event Spaces,Tennis',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Cedar Door',
      Street: '201 BRAZOS ST',
      YelpCategories: 'American (Traditional),Burgers,Sandwiches',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 449
    },
    {
      Name: 'Kemuri',
      Street: '2713 E 2ND ST',
      YelpCategories: 'Izakaya,Smokehouse',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 428
    },
    {
      Name: 'Waterloo Ice House',
      Street: '6203 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'American (Traditional),Bars,Breakfast & Brunch',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 169
    },
    {
      Name: 'Sonic Drive In',
      Street: '11506 N FM 620 RD',
      YelpCategories: 'Burgers,Fast Food,Ice Cream & Frozen Yogurt',
      Score: 90,
      YelpRaiting: 2,
      YelpReviewCount: 56
    },
    {
      Name: 'Kids R Kids Day Care',
      Street: '15111 AVERY RANCH BLVD',
      YelpCategories: 'Preschools,Child Care & Day Care',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 7
    },
    {
      Name: 'Coyote Ugly Saloon',
      Street: '501 E 6TH ST',
      YelpCategories: 'Bars',
      Score: 86,
      YelpRaiting: 2,
      YelpReviewCount: 123
    },
    {
      Name: 'Rudy\'s Country Store and BBQ',
      Street: '7709 N FM 620 RD',
      YelpCategories: 'Barbeque,Convenience Stores',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 192
    },
    {
      Name: 'Riata Bar and Grill',
      Street: '12221 RIATA TRACE PKWY',
      YelpCategories: 'Burgers,Bars',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 129
    },
    {
      Name: 'Side Bar, The',
      Street: '602 E 7TH ST',
      YelpCategories: 'Bars',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 134
    },
    {
      Name: 'Ka Prow Restaurant',
      Street: '1200 W HOWARD LN',
      YelpCategories: 'Asian Fusion,Sushi Bars,Thai',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 355
    },
    {
      Name: 'Maudies Hacienda',
      Street: '9911 BRODIE LN',
      YelpCategories: 'Tex-Mex',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 317
    },
    {
      Name: 'Jersey Mikes Subs',
      Street: '10001 RESEARCH BLVD',
      YelpCategories: 'Sandwiches,Fast Food,Delis',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 97
    },
    {
      Name: 'St Francis School',
      Street: '300 E HUNTLAND DR',
      YelpCategories: 'Elementary Schools,Middle Schools & High Schools',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'El Chile Cafe',
      Street: '1809 MANOR RD',
      YelpCategories: 'Mexican',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 396
    },
    {
      Name: 'MiniMax Food Mart',
      Street: '10412 FM 969 RD',
      YelpCategories: 'Grocery',
      Score: 79,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Angel\'s Ice House',
      Street: '21815 W SH',
      YelpCategories: 'American (Traditional),Burgers',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 169
    },
    {
      Name: 'Twin Creeks CC Temp Snack Bar',
      Street: '3201 TWIN CREEKS CLUB DR',
      YelpCategories: 'Country Clubs',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 12
    },
    {
      Name: 'Craigo\'s Pizza and Pastaria',
      Street: '4970 W US 290 HWY',
      YelpCategories: 'Pizza,Italian',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 180
    },
    {
      Name: 'Sun Ray Waters',
      Street: '7801 N LAMAR BLVD',
      YelpCategories: 'Water Delivery',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 7
    },
    {
      Name: 'McDonald\'s',
      Street: '2608 W BRAKER LN',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 33
    },
    {
      Name: 'Stepping Stone School',
      Street: '9405 BRODIE LN',
      YelpCategories: 'Preschools,Child Care & Day Care,Summer Camps',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 34
    },
    {
      Name: 'McDonald\'s',
      Street: '7409 N FM 620 RD',
      YelpCategories: 'Burgers,Fast Food,Coffee & Tea',
      Score: 85,
      YelpRaiting: 2,
      YelpReviewCount: 31
    },
    {
      Name: 'McDonald\'s',
      Street: '13813 BURNET RD',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 21
    },
    {
      Name: 'Tiffany\'s Treats',
      Street: '1806 NUECES ST',
      YelpCategories: 'Bakeries',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 254
    },
    {
      Name: 'Hilton Austin -Starbucks',
      Street: '500 E 4TH ST',
      YelpCategories: 'Hotels',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 425
    },
    {
      Name: 'Hilton Austin-Austin Taco Project',
      Street: '500 E 4TH ST',
      YelpCategories: 'Tapas/Small Plates,Bars,Tacos',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 320
    },
    {
      Name: 'Fujiyama',
      Street: '4815 W BRAKER LN',
      YelpCategories: 'Japanese,Sushi Bars,Steakhouses',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 206
    },
    {
      Name: 'Great American Cookies - B2',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Bakeries,Desserts',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'McDonald\'s #1116',
      Street: '7950 BURNET RD',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 19
    },
    {
      Name: 'McDonald\'s',
      Street: '12801 N FM 620 RD',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 82,
      YelpRaiting: 2,
      YelpReviewCount: 27
    },
    {
      Name: 'Lammes Candies',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Candy Stores',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 8
    },
    {
      Name: 'Chief\'s BBQ & Grill',
      Street: '7811 S 1ST ST',
      YelpCategories: 'Barbeque,American (Traditional)',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 118
    },
    {
      Name: 'The Cake Plate',
      Street: '1104 N CUERNAVACA DR',
      YelpCategories: 'Bakeries',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 11
    },
    {
      Name: 'Club Casino',
      Street: '5500 S CONGRESS AVE',
      YelpCategories: 'Casinos',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Best Stop Food Market',
      Street: '1130 AIRPORT BLVD',
      YelpCategories: 'Convenience Stores',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'Starbucks Coffee #8632',
      Street: '2300 S IH',
      YelpCategories: 'Coffee & Tea',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 75
    },
    {
      Name: 'HEB #024',
      Street: '11521 N FM 620 RD',
      YelpCategories: 'Drugstores',
      Score: 99,
      YelpRaiting: 2,
      YelpReviewCount: 10
    },
    {
      Name: 'Whataburger',
      Street: '9300 S IH',
      YelpCategories: 'Fast Food,Burgers',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 40
    },
    {
      Name: 'Whataburger',
      Street: '6611 S MOPAC EXPY',
      YelpCategories: 'Burgers,Fast Food',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 51
    },
    {
      Name: 'Pizza Hut',
      Street: '8500 N LAMAR BLVD',
      YelpCategories: 'Pizza,Italian,Chicken Wings',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 23
    },
    {
      Name: 'Hilton Austin',
      Street: '9515 HOTEL DR',
      YelpCategories: 'Hotels',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 124
    },
    {
      Name: 'La Michoacana',
      Street: '9308 N LAMAR BLVD',
      YelpCategories: 'Meat Shops,Grocery',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 9
    },
    {
      Name: 'Lakecliff Raquet Club',
      Street: '25609 KAHALA SUNSET CT',
      YelpCategories: 'Tennis',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'La Traviata',
      Street: '314 CONGRESS AVE',
      YelpCategories: 'Italian',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 461
    },
    {
      Name: 'Pei Wei Asian Diner',
      Street: '4200 S LAMAR BLVD',
      YelpCategories: 'Asian Fusion',
      Score: 77,
      YelpRaiting: 2,
      YelpReviewCount: 12
    },
    {
      Name: 'Baby Acapulco #5',
      Street: '9505 STONELAKE BLVD',
      YelpCategories: 'Mexican,Chicken Wings',
      Score: 70,
      YelpRaiting: 3,
      YelpReviewCount: 296
    },
    {
      Name: 'Bill Miller\'s Bar-B-Q',
      Street: '136 W SLAUGHTER LN',
      YelpCategories: 'Barbeque',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 74
    },
    {
      Name: 'Pizza Hut',
      Street: '1811 GUADALUPE ST',
      YelpCategories: 'Pizza,Italian,Chicken Wings',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 47
    },
    {
      Name: 'CVS/Pharmacy  #7719',
      Street: '2900 W ANDERSON LN',
      YelpCategories: 'Drugstores',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 27
    },
    {
      Name: 'Quality Seafood',
      Street: '5621 AIRPORT BLVD',
      YelpCategories: 'Seafood,Seafood Markets,Salad',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 747
    },
    {
      Name: 'CVS Pharmacy # 59',
      Street: '4001 W WILLIAM CANNON DR',
      YelpCategories: 'Pharmacy',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 28
    },
    {
      Name: 'Target #1953 (Grocery)',
      Street: '11220 FM 2222 RD',
      YelpCategories: 'Department Stores',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 35
    },
    {
      Name: 'RW - Mr. Gatti\'s',
      Street: '2802 BEE CAVES RD',
      YelpCategories: 'Pizza',
      Score: 91,
      YelpRaiting: 2,
      YelpReviewCount: 13
    },
    {
      Name: 'Galaxy Highland 10',
      Street: '6700 MIDDLE FISKVILLE RD',
      YelpCategories: 'Cinema',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 177
    },
    {
      Name: 'La Michoacana Meat Market-Taqueria/bakery',
      Street: '5706 MANOR RD',
      YelpCategories: 'Meat Shops,Fruits & Veggies',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Wyndham Garden Hotel Lounge/Cafe',
      Street: '3401 S IH',
      YelpCategories: 'Hotels',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 145
    },
    {
      Name: 'Vortex, The',
      Street: '2307 MANOR RD',
      YelpCategories: 'Performing Arts,Venues & Event Spaces,Music Venues',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 31
    },
    {
      Name: 'Target T-1953 (Starbucks)',
      Street: '11220 FM 2222 RD',
      YelpCategories: 'Department Stores',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 35
    },
    {
      Name: 'Capital City Kids Daycare',
      Street: '13107 DESSAU RD',
      YelpCategories: 'Child Care & Day Care',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Texas Hillel Foundation',
      Street: '2105 SAN ANTONIO ST',
      YelpCategories: 'Synagogues',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Dong-Nai',
      Street: '4211 S LAMAR BLVD',
      YelpCategories: 'Vietnamese,Chinese',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 268
    },
    {
      Name: 'Costco - Meat Dept.',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Department Stores',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 195
    },
    {
      Name: 'Pizza Hut',
      Street: '10601 FM 2222 RD',
      YelpCategories: 'Pizza,Italian',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 39
    },
    {
      Name: 'Paleteria Y Neveria Las Delisias',
      Street: '8120 RESEARCH BLVD',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Starbucks Coffee #9617',
      Street: '9600 ESCARPMENT BLVD',
      YelpCategories: 'Coffee & Tea',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 81
    },
    {
      Name: 'Serrano\'s Cafe Lakeline',
      Street: '11100 PECAN PARK BLVD',
      YelpCategories: 'Tex-Mex,Mexican',
      Score: 74,
      YelpRaiting: 4,
      YelpReviewCount: 250
    },
    {
      Name: 'Pizza Hut',
      Street: '6330 W US 290 HWY',
      YelpCategories: 'Italian,Pizza,Chicken Wings',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 13
    },
    {
      Name: 'Pizza Hut',
      Street: '2021 E RIVERSIDE DR',
      YelpCategories: 'Pizza,Italian,Chicken Wings',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 59
    },
    {
      Name: 'Los Pinos',
      Street: '4919 HUDSON BEND RD',
      YelpCategories: 'Mexican',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 146
    },
    {
      Name: 'Pizza Hut',
      Street: '1901 W WILLIAM CANNON DR',
      YelpCategories: 'Pizza,Italian,Chicken Wings',
      Score: 99,
      YelpRaiting: 2,
      YelpReviewCount: 20
    },
    {
      Name: 'Cherrywood',
      Street: '1400 E 38TH HALF ST',
      YelpCategories: 'Coffee & Tea,Breakfast & Brunch,Beer Bar',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 677
    },
    {
      Name: 'Mc Donalds',
      Street: '303 E OLTORF ST',
      YelpCategories: 'Burgers,Fast Food,Coffee & Tea',
      Score: 87,
      YelpRaiting: 2,
      YelpReviewCount: 30
    },
    {
      Name: 'Yaghi\'s New York Pizzaria',
      Street: '4220 W WILLIAM CANNON DR',
      YelpCategories: 'Pizza',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 205
    },
    {
      Name: 'Whole Foods - Prepared Foods # 1',
      Street: '525 N LAMAR BLVD',
      YelpCategories: 'Wine Bars',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'Home Slice Pizza',
      Street: '1415 S CONGRESS AVE',
      YelpCategories: 'Pizza,Sandwiches',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 3252
    },
    {
      Name: 'Sunrise Mini Mart',
      Street: '1809 W ANDERSON LN',
      YelpCategories: 'Convenience Stores,Beer, Wine & Spirits,Gas Stations',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 155
    },
    {
      Name: 'Farm To Market Grocery',
      Street: '1718 S CONGRESS AVE',
      YelpCategories: 'Health Markets,Fruits & Veggies',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 56
    },
    {
      Name: 'IHOP',
      Street: '13201 N FM 620 RD',
      YelpCategories: 'Breakfast & Brunch,American (Traditional),Burgers',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 104
    },
    {
      Name: 'Tomodachi',
      Street: '4101 W PARMER LN',
      YelpCategories: 'Sushi Bars,Japanese',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 683
    },
    {
      Name: 'Pho Thai Son',
      Street: '3601 W WILLIAM CANNON DR',
      YelpCategories: 'Vietnamese,Bubble Tea,Sushi Bars',
      Score: 71,
      YelpRaiting: 3,
      YelpReviewCount: 234
    },
    {
      Name: 'Jimmy Johns',
      Street: '601 W MARTIN LUTHER KING JR BLVD',
      YelpCategories: 'Sandwiches,Delis,Fast Food',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 119
    },
    {
      Name: 'Mr. Gatti\'s',
      Street: '1615 GRAND AVENUE PKWY',
      YelpCategories: 'Pizza',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 14
    },
    {
      Name: 'Texadelphia',
      Street: '14010 N US 183 HWY',
      YelpCategories: 'Sandwiches,Cheesesteaks',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 67
    },
    {
      Name: 'Stone House Vineyard & Winery',
      Street: '24350 HAYNIE FLAT RD',
      YelpCategories: 'Wineries',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 50
    },
    {
      Name: 'Shenanigans Nightclub',
      Street: '13233 POND SPRINGS RD',
      YelpCategories: 'Dive Bars,Karaoke,Pool Halls',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 50
    },
    {
      Name: 'Eastside Pies',
      Street: '1401 ROSEWOOD AVE',
      YelpCategories: 'Pizza',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 613
    },
    {
      Name: 'Austin\'s Pizza',
      Street: '7301 N FM 620 RD',
      YelpCategories: 'Pizza',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 70
    },
    {
      Name: 'Chick-Fil-A',
      Street: '161 W SLAUGHTER LN',
      YelpCategories: 'Fast Food',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 68
    },
    {
      Name: 'Which Wich',
      Street: '2348 GUADALUPE ST',
      YelpCategories: 'Sandwiches',
      Score: 83,
      YelpRaiting: 3,
      YelpReviewCount: 68
    },
    {
      Name: 'Epoch Coffee',
      Street: '221 W NORTH LOOP BLVD',
      YelpCategories: 'Coffee & Tea,Cafes',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 756
    },
    {
      Name: 'Taqueria Chapala #3',
      Street: '6116 W US 290 HWY',
      YelpCategories: 'Tacos',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 94
    },
    {
      Name: 'Whataburger',
      Street: '6301 W PARMER LN',
      YelpCategories: 'Burgers,Fast Food',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 62
    },
    {
      Name: 'Whole Foods - Prepared Foods #2',
      Street: '525 N LAMAR BLVD',
      YelpCategories: 'Wine Bars',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'Whole Foods - Meat Market',
      Street: '525 N LAMAR BLVD',
      YelpCategories: 'Grocery,Health Markets,Coffee & Tea',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 1159
    },
    {
      Name: 'Sap\'s Fine Thai Cuisine',
      Street: '4514 WEST GATE BLVD',
      YelpCategories: 'Thai',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 647
    },
    {
      Name: 'Cocina de Consuelo',
      Street: '4516 BURNET RD',
      YelpCategories: 'Mexican,Breakfast & Brunch',
      Score: 73,
      YelpRaiting: 4,
      YelpReviewCount: 344
    },
    {
      Name: 'Intercontinental Stephen F. Austin',
      Street: '701 CONGRESS AVE',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 76,
      YelpRaiting: 4,
      YelpReviewCount: 183
    },
    {
      Name: 'Austin Scoops, LLC',
      Street: '9500 1 2 ESCARPMENT BLVD',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 71
    },
    {
      Name: 'Los Jalisciences',
      Street: '6903 AIRPORT BLVD',
      YelpCategories: 'Mexican',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 120
    },
    {
      Name: 'Cru Wine Bar',
      Street: '238 W 2ND ST',
      YelpCategories: 'Wine Bars,American (New)',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 250
    },
    {
      Name: 'Whole Foods - Seafood',
      Street: '525 N LAMAR BLVD',
      YelpCategories: 'Wine Bars',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'Titaya\'s Thai Cuisine',
      Street: '5501 N LAMAR BLVD',
      YelpCategories: 'Thai',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 1436
    },
    {
      Name: 'Tucci\'s Southside Subs',
      Street: '7101 W SH',
      YelpCategories: 'Sandwiches,Italian',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 161
    },
    {
      Name: 'Sway',
      Street: '1417 S 1ST ST',
      YelpCategories: 'Thai,Wine Bars,Cocktail Bars',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 1468
    },
    {
      Name: 'Golden Chick',
      Street: '616 W STASSNEY LN',
      YelpCategories: 'Fast Food',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 41
    },
    {
      Name: 'Lone Star Kolaches',
      Street: '1701 W PARMER LN',
      YelpCategories: 'Bakeries,Desserts',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 64
    },
    {
      Name: 'Costco - Deli',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Department Stores',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 195
    },
    {
      Name: 'La Quinta Inn #177',
      Street: '4424 S MOPAC EXPY',
      YelpCategories: 'Hotels',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 28
    },
    {
      Name: 'Quarries of Hyde Park, The',
      Street: '11400 N MOPAC EXPY',
      YelpCategories: 'Parks',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Edible Arrangements',
      Street: '10225 RESEARCH BLVD',
      YelpCategories: 'Gift Shops,Chocolatiers & Shops',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 17
    },
    {
      Name: 'La Quinta Inn & Suites # 937',
      Street: '11901 N MOPAC EXPY',
      YelpCategories: 'Hotels',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 32
    },
    {
      Name: 'Dolores Catholic Church',
      Street: '1111 MONTOPOLIS DR',
      YelpCategories: 'Churches',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Fiesta Tortillas',
      Street: '3800 PROMONTORY POINT DR',
      YelpCategories: 'Mexican',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Barton Springs Saloon',
      Street: '424 S LAMAR BLVD',
      YelpCategories: 'Bars',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 104
    },
    {
      Name: 'Roppolo\'s Pizzeria II',
      Street: '414 E 6TH ST',
      YelpCategories: 'Pizza',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 14
    },
    {
      Name: 'Costco - Bakery',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Department Stores',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 195
    },
    {
      Name: 'La Quinta Inn #907',
      Street: '300 E 11TH ST',
      YelpCategories: 'Hotels',
      Score: 93,
      YelpRaiting: 2,
      YelpReviewCount: 96
    },
    {
      Name: 'HEB #236',
      Street: '1434 W WELLS BRANCH PKWY',
      YelpCategories: 'Drugstores',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Scenic Brook Food Mart',
      Street: '7216 W SH',
      YelpCategories: 'Convenience Stores',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Bread Basket',
      Street: '2623 JONES RD',
      YelpCategories: 'Convenience Stores',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Wag-A-Bag',
      Street: '6294 MC NEIL DR',
      YelpCategories: 'Grocery',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Randall\'s #2482 (Retail)',
      Street: '8040 MESA DR',
      YelpCategories: 'Drugstores,Grocery',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 51
    },
    {
      Name: 'Randall\'s #2481 (Retail)',
      Street: '1500 W 35TH ST',
      YelpCategories: 'Drugstores,Grocery',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 46
    },
    {
      Name: 'Randall\'s #2471-Prepared Foods',
      Street: '2727 EXPOSITION BLVD',
      YelpCategories: 'Grocery,Drugstores',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 12
    },
    {
      Name: 'Whole Foods Market',
      Street: '9607 RESEARCH BLVD',
      YelpCategories: 'Grocery,Health Markets,Coffee & Tea',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 223
    },
    {
      Name: 'EZ Food Stores',
      Street: '6400 S 1ST ST',
      YelpCategories: 'Convenience Stores,Beer, Wine & Spirits,Gas Stations',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Walgreens #03092',
      Street: '8104 MESA DR',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 21
    },
    {
      Name: 'Beverage Barn',
      Street: '2001 E RIVERSIDE DR',
      YelpCategories: 'Beer, Wine & Spirits,Convenience Stores',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Elaine\'s Pork and Pie @ Eastside Cafe',
      Street: '2113 MANOR RD',
      YelpCategories: 'American (Traditional)',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 110
    },
    {
      Name: 'Friendly Mart',
      Street: '7200 MANCHACA RD',
      YelpCategories: 'Convenience Stores',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 1
    },
    {
      Name: 'Haven Food Mart',
      Street: '614 E ST JOHNS AVE',
      YelpCategories: 'Grocery',
      Score: 91,
      YelpRaiting: 2,
      YelpReviewCount: 1
    },
    {
      Name: 'EZ Corner Store',
      Street: '719 W WILLIAM CANNON DR',
      YelpCategories: 'Convenience Stores,Gas Stations,Beer, Wine & Spirits',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'HEB Food Store #218',
      Street: '12407 N MOPAC EXPY',
      YelpCategories: 'Printing Services,Shipping Centers,Mailbox Centers',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 12
    },
    {
      Name: 'Step In Grocery',
      Street: '7309 CAMERON RD',
      YelpCategories: 'Convenience Stores,Grocery',
      Score: 81,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'HEB #428 - Brodie',
      Street: '6900 BRODIE LN',
      YelpCategories: 'Urgent Care',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 18
    },
    {
      Name: 'Rob Roy Chevron',
      Street: '7110 FM 2244 RD',
      YelpCategories: 'Convenience Stores',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Texan Food Mart',
      Street: '11300 POLLYANNA AVE',
      YelpCategories: 'Convenience Stores',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'Speedy Stop Store #219',
      Street: '1660 E 51ST ST',
      YelpCategories: 'Gas Stations,Convenience Stores,Car Wash',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 16
    },
    {
      Name: 'LW - Walgreens 07023',
      Street: '2401 S FM 620 RD',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 11
    },
    {
      Name: 'Dollar General Store #3913',
      Street: '6800 WEST GATE BLVD',
      YelpCategories: 'Department Stores',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 6
    },
    {
      Name: 'Target (Retail Store) T-1797',
      Street: '10900 LAKELINE MALL DR',
      YelpCategories: 'Department Stores',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 73
    },
    {
      Name: 'EZ Way Food Store',
      Street: '2700 E 7TH ST',
      YelpCategories: 'Convenience Stores,Gas Stations',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'La Hacienda Market II',
      Street: '2410 E RIVERSIDE DR',
      YelpCategories: 'Meat Shops',
      Score: 83,
      YelpRaiting: 3,
      YelpReviewCount: 7
    },
    {
      Name: 'Walgreen\'s  #04134',
      Street: '11724 RESEARCH BLVD',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 53
    },
    {
      Name: 'Walgreens #4761',
      Street: '6200 W WILLIAM CANNON DR',
      YelpCategories: 'Cosmetics & Beauty Supply,Drugstores,Convenience Stores',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 27
    },
    {
      Name: 'Picky\'s Pantry',
      Street: '6806 FM 2244 RD',
      YelpCategories: 'Gas Stations',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Central Market: Grocery/Market/Seafood',
      Street: '4477 S LAMAR BLVD',
      YelpCategories: 'Caterers',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 16
    },
    {
      Name: 'Mets Mart',
      Street: '2800 W WILLIAM CANNON DR',
      YelpCategories: 'Grocery,Convenience Stores',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Express Food Mart #4',
      Street: '5401 MANCHACA RD',
      YelpCategories: 'Convenience Stores',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 1
    },
    {
      Name: 'Caffe Medici',
      Street: '1101 WEST LYNN ST',
      YelpCategories: 'Coffee & Tea',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 328
    },
    {
      Name: 'Good Luck Food Mart',
      Street: '3713 GUADALUPE ST',
      YelpCategories: 'Convenience Stores',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 9
    },
    {
      Name: 'Walgreens #05160',
      Street: '6812 N LAMAR BLVD',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 21
    },
    {
      Name: 'Walgreens #04704',
      Street: '4501 GUADALUPE ST',
      YelpCategories: 'Cosmetics & Beauty Supply,Drugstores,Convenience Stores',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 71
    },
    {
      Name: 'Jet Stop',
      Street: '2723 S IH',
      YelpCategories: 'Convenience Stores',
      Score: 84,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'La Hacienda Market',
      Street: '9717 N LAMAR BLVD',
      YelpCategories: 'Grocery',
      Score: 84,
      YelpRaiting: 5,
      YelpReviewCount: 7
    },
    {
      Name: 'Tomgro Grocery',
      Street: '1313 MONTOPOLIS DR',
      YelpCategories: 'Grocery,Mexican',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'Convenient  Store, The',
      Street: '12518 RESEARCH BLVD',
      YelpCategories: 'Convenience Stores',
      Score: 78,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Costco #681 Retail',
      Street: '10401 RESEARCH BLVD',
      YelpCategories: 'Wholesale Stores',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 256
    },
    {
      Name: 'La Michoacana Meat Market',
      Street: '512 W STASSNEY LN',
      YelpCategories: 'Meat Shops',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 7
    },
    {
      Name: 'Walgreens #4632',
      Street: '1910 W BRAKER LN',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 22
    },
    {
      Name: 'Emerald Point Store',
      Street: '5973 HI LINE RD',
      YelpCategories: 'Convenience Stores',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Walgreens #05159',
      Street: '7410 MC NEIL DR',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 14
    },
    {
      Name: 'Ben White Shell',
      Street: '2125 W BEN WHITE BLVD',
      YelpCategories: 'Convenience Stores',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'EZ Stop',
      Street: '1200 KRAMER LN',
      YelpCategories: 'Grocery',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Speedi-Stop',
      Street: '1621 E CESAR CHAVEZ ST',
      YelpCategories: 'Convenience Stores',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Walgreens #6189',
      Street: '12550 METRIC BLVD',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 12
    },
    {
      Name: 'Speedy Mart',
      Street: '10300 ANDERSON MILL RD',
      YelpCategories: 'Convenience Stores',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Wag A Bag',
      Street: '1701 GRAND AVENUE PKWY',
      YelpCategories: 'Convenience Stores',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Shahi Food Market',
      Street: '12410 N LAMAR BLVD',
      YelpCategories: 'Halal,Indian,Buffets',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 115
    },
    {
      Name: 'Randall\'s (Shady Hollow)',
      Street: '9911 BRODIE LN',
      YelpCategories: 'Hair Salons',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 26
    },
    {
      Name: 'Parkfield One Stop Food Mart',
      Street: '9436 PARKFIELD DR',
      YelpCategories: 'Convenience Stores',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 2
    },
    {
      Name: 'Walgreens #3724',
      Street: '9801 MANCHACA RD',
      YelpCategories: 'Cosmetics & Beauty Supply,Drugstores,Convenience Stores',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 17
    },
    {
      Name: 'Walgreen #4458',
      Street: '3601 W WILLIAM CANNON DR',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 34
    },
    {
      Name: 'Mi Tiendita',
      Street: '1725 OHLEN RD',
      YelpCategories: 'Convenience Stores',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Wal-Mart #1185',
      Street: '1030 NORWOOD PARK BLVD',
      YelpCategories: 'Grocery,Department Stores',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 110
    },
    {
      Name: 'Anderson\'s Coffee Roasters',
      Street: '1601 W 38TH ST',
      YelpCategories: 'Coffee Roasteries',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 127
    },
    {
      Name: 'Wal-Mart Supercenter/Bakery&Deli #1185',
      Street: '1030 NORWOOD PARK BLVD',
      YelpCategories: 'Grocery,Department Stores',
      Score: 99,
      YelpRaiting: 2,
      YelpReviewCount: 110
    },
    {
      Name: 'Wal-Mart Supercenter/Meat&Produce #1185',
      Street: '1030 NORWOOD PARK BLVD',
      YelpCategories: 'Grocery,Department Stores',
      Score: 92,
      YelpRaiting: 2,
      YelpReviewCount: 110
    },
    {
      Name: 'Sam\'s Club #6453/Meat & Deli',
      Street: '9700 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Department Stores,Wholesale Stores,Grocery',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 63
    },
    {
      Name: 'Cafe Nenai',
      Street: '1700 MONTOPOLIS DR',
      YelpCategories: 'Cafes,Bakeries,Sandwiches',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 127
    },
    {
      Name: 'Southwest Parkway Market',
      Street: '4601 SOUTHWEST PKWY',
      YelpCategories: 'Beer, Wine & Spirits,Convenience Stores',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 14
    },
    {
      Name: 'Texas Market',
      Street: '720 LAMAR PL',
      YelpCategories: 'Grocery',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 6
    },
    {
      Name: 'Lake Austin Chevron',
      Street: '2402 LAKE AUSTIN BLVD',
      YelpCategories: 'Convenience Stores',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Dollar General Store #4031',
      Street: '6929 AIRPORT BLVD',
      YelpCategories: 'Discount Store',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Han Yang Market',
      Street: '6808 N LAMAR BLVD',
      YelpCategories: 'Imported Food',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 73
    },
    {
      Name: 'Quick C - Store #2',
      Street: '9618 MANCHACA RD',
      YelpCategories: 'Convenience Stores',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 1
    },
    {
      Name: 'Bread Basket',
      Street: '2150 E 7TH ST',
      YelpCategories: 'Convenience Stores',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 12
    },
    {
      Name: 'Asahi Imports',
      Street: '6105 BURNET RD',
      YelpCategories: 'International Grocery',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 154
    },
    {
      Name: 'CVS Pharmacy #6893',
      Street: '3569 FAR WEST BLVD',
      YelpCategories: 'Drugstores',
      Score: 89,
      YelpRaiting: 2,
      YelpReviewCount: 43
    },
    {
      Name: 'CVS/Pharmacy #8387',
      Street: '3500 W SLAUGHTER LN',
      YelpCategories: 'Drugstores',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 26
    },
    {
      Name: 'Sunrise Mini Mart',
      Street: '102 W POWELL LN',
      YelpCategories: 'Convenience Stores',
      Score: 82,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'La Hacienda Market',
      Street: '1812 PAYTON GIN RD',
      YelpCategories: 'Grocery,Meat Shops,Mexican',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 8
    },
    {
      Name: 'La Michoacana Meat Market',
      Street: '9308 N LAMAR BLVD',
      YelpCategories: 'Meat Shops,Grocery',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 9
    },
    {
      Name: 'Timewise Food Store/Chevron #6401',
      Street: '15900 N IH',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 2
    },
    {
      Name: 'MT Supermarket',
      Street: '10901 N LAMAR BLVD',
      YelpCategories: 'Grocery',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 280
    },
    {
      Name: 'Wal-Mart Supercenter #1253',
      Street: '710 E BEN WHITE BLVD',
      YelpCategories: 'Department Stores,Grocery',
      Score: 98,
      YelpRaiting: 2,
      YelpReviewCount: 113
    },
    {
      Name: 'N Lamar Service Station-JN',
      Street: '11100 N LAMAR BLVD',
      YelpCategories: 'Gas Stations,Tires,Car Inspectors',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 9
    },
    {
      Name: 'Speedy Stop',
      Street: '14735 BRATTON LN',
      YelpCategories: 'Convenience Stores,Gas Stations',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Hang Fung Ginseng',
      Street: '10901 N LAMAR BLVD',
      YelpCategories: 'Herbal Shops',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 7
    },
    {
      Name: 'Dev\'s Shell',
      Street: '4001 MEDICAL PKWY',
      YelpCategories: 'Gas Stations',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Walgreens #6734',
      Street: '3921 W PARMER LN',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 12
    },
    {
      Name: 'Pronto C-Store',
      Street: '8630 RESEARCH BLVD',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 80,
      YelpRaiting: 3,
      YelpReviewCount: 1
    },
    {
      Name: 'Whole Foods Market - Retail Foods',
      Street: '525 N LAMAR BLVD',
      YelpCategories: 'Grocery,Health Markets,Coffee & Tea',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 1162
    },
    {
      Name: 'Mesa Mart',
      Street: '8143 MESA DR',
      YelpCategories: 'Convenience Stores',
      Score: 77,
      YelpRaiting: 2,
      YelpReviewCount: 15
    },
    {
      Name: 'CVS # 6895',
      Street: '1701 BRIARCLIFF BLVD',
      YelpCategories: 'Drugstores',
      Score: 90,
      YelpRaiting: 2,
      YelpReviewCount: 12
    },
    {
      Name: 'Short N Sweet',
      Street: '10901 N LAMAR BLVD',
      YelpCategories: 'Coffee & Tea,Vietnamese',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 215
    },
    {
      Name: 'Dove Springs Recreation Center',
      Street: '5801 AINEZ DR',
      YelpCategories: 'Recreation Centers',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Panda Express #1319',
      Street: '5764 AIRPORT BLVD',
      YelpCategories: 'Chinese,Fast Food',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 62
    },
    {
      Name: 'El Faro Taco and Cafe',
      Street: '1779 W WELLS BRANCH PKWY',
      YelpCategories: 'Mexican,Buffets,Breakfast & Brunch',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 128
    },
    {
      Name: 'Walgreens #01933',
      Street: '2501 S LAMAR BLVD',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 57
    },
    {
      Name: 'Hamilton Market',
      Street: '18901 HAMILTON POOL RD',
      YelpCategories: 'Grocery',
      Score: 93,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Patsy\'s',
      Street: '5001 E BEN WHITE BLVD',
      YelpCategories: 'Music Venues,Southern,American (Traditional)',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 162
    },
    {
      Name: 'Mom\'s Grocery',
      Street: '1425 E RUNDBERG LN',
      YelpCategories: 'Grocery',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'WL - Texas Honey Ham',
      Street: '3736 BEE CAVES RD',
      YelpCategories: 'Sandwiches,Breakfast & Brunch,Mexican',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 223
    },
    {
      Name: 'Galaxy Cafe',
      Street: '1000 WEST LYNN ST',
      YelpCategories: 'American (Traditional),Breakfast & Brunch',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 362
    },
    {
      Name: 'Texaco Braker Mart',
      Street: '2601 W BRAKER LN',
      YelpCategories: 'Gas Stations',
      Score: 91,
      YelpRaiting: 2,
      YelpReviewCount: 2
    },
    {
      Name: 'TC Noodle House',
      Street: '10901 N LAMAR BLVD',
      YelpCategories: 'Noodles',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 195
    },
    {
      Name: 'CVS Pharmacy #526',
      Street: '10550 W PARMER LN',
      YelpCategories: 'Pharmacy',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 21
    },
    {
      Name: 'WL - Eanes Elementary',
      Street: '4101 BEE CAVES RD',
      YelpCategories: 'Education',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Wal-Mart #2133-Milk/ Ice Cream',
      Street: '5017 W US 290 HWY',
      YelpCategories: 'Tires,Oil Change Stations,Auto Parts & Supplies',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 5
    },
    {
      Name: 'Mama Fu\'s Southpark',
      Street: '9600 S IH',
      YelpCategories: 'Asian Fusion,Chinese',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 161
    },
    {
      Name: 'SV - Cost Plus World Market',
      Street: '5601 BRODIE LN',
      YelpCategories: 'Home Decor,Beer, Wine & Spirits,Furniture Stores',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 50
    },
    {
      Name: 'Chuck E. Cheese\'s 586',
      Street: '10515 N MOPAC EXPY',
      YelpCategories: 'Pizza',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 41
    },
    {
      Name: 'Chuy\'s Barton Springs',
      Street: '1728 BARTON SPRINGS RD',
      YelpCategories: 'Tex-Mex,Mexican,Bars',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 889
    },
    {
      Name: 'Juice Land',
      Street: '2307 LAKE AUSTIN BLVD',
      YelpCategories: 'Juice Bars & Smoothies,Vegan,Vegetarian',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 124
    },
    {
      Name: 'Schlotzsky\'s Stores, LLC',
      Street: '13201 N FM 620 RD',
      YelpCategories: 'Sandwiches,Delis',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 41
    },
    {
      Name: 'Schlotzsky\'s Stores, LLC',
      Street: '500 CANYON RIDGE DR',
      YelpCategories: 'Sandwiches,Delis',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 55
    },
    {
      Name: 'Doubletree Club Hotel',
      Street: '1617 N IH',
      YelpCategories: 'Hotels',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 86
    },
    {
      Name: 'Thunderbird Cafe and Tap Room',
      Street: '1401 W KOENIG LN',
      YelpCategories: 'Cafes,Beer Bar',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 414
    },
    {
      Name: 'Family Dollar Store #3834',
      Street: '118 E OLTORF ST',
      YelpCategories: 'Discount Store',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Family Dollar Store #6170',
      Street: '9717 N LAMAR BLVD',
      YelpCategories: 'Department Stores',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Chuy\'s North Lamar',
      Street: '10520 N LAMAR BLVD',
      YelpCategories: 'Tex-Mex,Mexican,Bars',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 359
    },
    {
      Name: 'St. Andrew\'s Episcopal School-Concession',
      Street: '5901 SOUTHWEST PKWY',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Pei Wei Asian Diner',
      Street: '13429 N US 183 HWY',
      YelpCategories: 'Asian Fusion,Chinese,Gluten-Free',
      Score: 77,
      YelpRaiting: 3,
      YelpReviewCount: 144
    },
    {
      Name: 'Fukumoto',
      Street: '514 MEDINA',
      YelpCategories: 'Sushi Bars,Japanese,Bars',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 311
    },
    {
      Name: 'LW - Sakura Sushi & Bar',
      Street: '1945 MEDICAL DR',
      YelpCategories: 'Japanese,Sushi Bars,Bars',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 109
    },
    {
      Name: 'Shipley Do-Nuts',
      Street: '8213 BRODIE LN',
      YelpCategories: 'Donuts,Coffee & Tea',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 89
    },
    {
      Name: 'Counter Cafe, The',
      Street: '626 N LAMAR BLVD',
      YelpCategories: 'Diners,Cafes',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 575
    },
    {
      Name: 'Panda Express #1289',
      Street: '2501 W PARMER LN',
      YelpCategories: 'Chinese,Fast Food',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 45
    },
    {
      Name: 'Wingstop',
      Street: '1701 W PARMER LN',
      YelpCategories: 'Chicken Wings',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 80
    },
    {
      Name: 'Chick-Fil-A',
      Street: '500 E BEN WHITE BLVD',
      YelpCategories: 'Fast Food',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 82
    },
    {
      Name: 'Church\'s Chicken',
      Street: '13729 N US 183 HWY',
      YelpCategories: 'Chicken Wings,Fast Food',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 30
    },
    {
      Name: 'Golden Chick',
      Street: '1144 AIRPORT BLVD',
      YelpCategories: 'Fast Food',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 13
    },
    {
      Name: 'Little Deli',
      Street: '7101 WOODROW AVE',
      YelpCategories: 'Delis,Pizza,Sandwiches',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 1067
    },
    {
      Name: 'Long John Silver\'s',
      Street: '1910 W BEN WHITE BLVD',
      YelpCategories: 'Fast Food,Seafood',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 14
    },
    {
      Name: 'WL - Walgreens #06050',
      Street: '3700 BEE CAVES RD',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 20
    },
    {
      Name: 'Mimi\'s Cafe #126',
      Street: '10515 N MOPAC EXPY',
      YelpCategories: 'Breakfast & Brunch,American (Traditional),French',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 231
    },
    {
      Name: 'Taqueria Los Jaliscienses',
      Street: '1815 W BEN WHITE BLVD',
      YelpCategories: 'Mexican',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 56
    },
    {
      Name: 'New Speedway',
      Street: '3707 SPEEDWAY',
      YelpCategories: 'Grocery',
      Score: 84,
      YelpRaiting: 5,
      YelpReviewCount: 8
    },
    {
      Name: '34th Street Catering',
      Street: '1009 W 34TH ST',
      YelpCategories: 'Caterers',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 7
    },
    {
      Name: 'Long John Silver\'s',
      Street: '5600 CAMERON RD',
      YelpCategories: 'Seafood,Fast Food',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 28
    },
    {
      Name: 'Riverside Grocery',
      Street: '1727 E RIVERSIDE DR',
      YelpCategories: 'Convenience Stores',
      Score: 90,
      YelpRaiting: 2,
      YelpReviewCount: 2
    },
    {
      Name: 'Panda Express #1415',
      Street: '7718 BURNET RD',
      YelpCategories: 'Fast Food,Chinese',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 44
    },
    {
      Name: 'Kona Grill at the Domain',
      Street: '11410 CENTURY OAKS TER',
      YelpCategories: 'Sushi Bars,American (New),Hawaiian',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 646
    },
    {
      Name: 'Kim Phung Vietnamese and Chinese Restaurant',
      Street: '7601 N LAMAR BLVD',
      YelpCategories: 'Vietnamese,Chinese',
      Score: 75,
      YelpRaiting: 4,
      YelpReviewCount: 277
    },
    {
      Name: 'Wild Bubba\'s Wild Game Grill',
      Street: '13912 FM 812 RD',
      YelpCategories: 'Burgers',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 69
    },
    {
      Name: 'Hampton Inn and Suites Austin',
      Street: '10811 PECAN PARK BLVD',
      YelpCategories: 'Hotels',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 34
    },
    {
      Name: 'Cilantro\'s Mexican Restaurant',
      Street: '1025 W STASSNEY LN',
      YelpCategories: 'Mexican',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 35
    },
    {
      Name: 'Pluckers Wing Bar',
      Street: '11066 PECAN PARK BLVD',
      YelpCategories: 'American (Traditional),Chicken Wings,Sports Bars',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 352
    },
    {
      Name: 'El Pollo Rico #4',
      Street: '730 W STASSNEY LN',
      YelpCategories: 'Fast Food,Mexican,Tex-Mex',
      Score: 79,
      YelpRaiting: 5,
      YelpReviewCount: 164
    },
    {
      Name: 'Tiniest Bar in Texas',
      Street: '817 W 5TH ST',
      YelpCategories: 'Bars',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 102
    },
    {
      Name: 'Botticelli\'s South Congress',
      Street: '1321 S CONGRESS AVE',
      YelpCategories: 'Italian',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 499
    },
    {
      Name: 'Sushi Niichi',
      Street: '705 W 24TH ST',
      YelpCategories: 'Sushi Bars',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 341
    },
    {
      Name: 'Jason\'s Deli',
      Street: '9600 S IH',
      YelpCategories: 'Sandwiches,Delis,Salad',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 104
    },
    {
      Name: 'Chili\'s Grill & Bar #1423',
      Street: '9900 S IH',
      YelpCategories: 'American (Traditional),Tex-Mex,Bars',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 51
    },
    {
      Name: 'Baretto',
      Street: '10710 RESEARCH BLVD',
      YelpCategories: 'Cocktail Bars,American (Traditional),Wine Bars',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 85
    },
    {
      Name: 'North',
      Street: '11506 CENTURY OAKS TER',
      YelpCategories: 'Italian,Pizza',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 1103
    },
    {
      Name: 'Red River Market',
      Street: '3213 RED RIVER ST',
      YelpCategories: 'Grocery',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 9
    },
    {
      Name: 'Walnut Market #1',
      Street: '1900 E ANDERSON LN',
      YelpCategories: 'Grocery',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Waterloo Ice House',
      Street: '9600 S IH',
      YelpCategories: 'American (Traditional),Sports Bars',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 214
    },
    {
      Name: 'Potbelly Sandwich Works',
      Street: '10515 N MOPAC EXPY',
      YelpCategories: 'Sandwiches,Fast Food,Salad',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 112
    },
    {
      Name: 'Rosie\'s Day Care #3',
      Street: '5807 WELLINGTON DR',
      YelpCategories: 'Child Care & Day Care',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Pho Dan',
      Street: '11220 N LAMAR BLVD',
      YelpCategories: 'Vietnamese',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 419
    },
    {
      Name: 'Rutland Market',
      Street: '900 RUTLAND DR',
      YelpCategories: 'Convenience Stores',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'CVS/Pharmacy #0213',
      Street: '5526 S CONGRESS AVE',
      YelpCategories: 'Drugstores',
      Score: 99,
      YelpRaiting: 2,
      YelpReviewCount: 24
    },
    {
      Name: 'New Generation Daycare',
      Street: '2606 S 1ST ST',
      YelpCategories: 'Child Care & Day Care',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Thom\'s Market',
      Street: '1418 BARTON SPRINGS RD',
      YelpCategories: 'Convenience Stores,Grocery,Health Markets',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 89
    },
    {
      Name: 'Stepping Stone School XII',
      Street: '7700 W PARMER LN',
      YelpCategories: 'Child Care & Day Care,Preschools,Summer Camps',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 16
    },
    {
      Name: 'Potbelly Sandwich Works',
      Street: '2316 GUADALUPE ST',
      YelpCategories: 'Sandwiches,Fast Food,Salad',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 73
    },
    {
      Name: 'Residence Inn Austin South',
      Street: '4537 S IH',
      YelpCategories: 'Hotels',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 22
    },
    {
      Name: 'Sesame Hill',
      Street: '6156 W US 290 HWY',
      YelpCategories: 'Asian Fusion',
      Score: 80,
      YelpRaiting: 3,
      YelpReviewCount: 86
    },
    {
      Name: 'Marble Slab Creamery #602',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 90,
      YelpRaiting: 2,
      YelpReviewCount: 3
    },
    {
      Name: 'Tinnin Food Mart',
      Street: '1516 TINNIN FORD RD',
      YelpCategories: 'Convenience Stores',
      Score: 83,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Clay Pit Contemporary Indian Restaurant',
      Street: '1601 GUADALUPE ST',
      YelpCategories: 'Indian,Seafood',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 1332
    },
    {
      Name: 'Haiku Japanese Restaurant',
      Street: '9600 S IH',
      YelpCategories: 'Japanese,Sushi Bars',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 302
    },
    {
      Name: 'Family Dollar Store #2739',
      Street: '2765 E 7TH ST',
      YelpCategories: 'Discount Store',
      Score: 98,
      YelpRaiting: 2,
      YelpReviewCount: 2
    },
    {
      Name: 'Subway #16850',
      Street: '500 E BEN WHITE BLVD',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 89,
      YelpRaiting: 2,
      YelpReviewCount: 10
    },
    {
      Name: 'SV - Doc\'s Backyard',
      Street: '5207 BRODIE LN',
      YelpCategories: 'American (Traditional),Beer Bar',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 273
    },
    {
      Name: 'Dominos Pizza',
      Street: '9616 N LAMAR BLVD',
      YelpCategories: 'Pizza,Chicken Wings,Sandwiches',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 23
    },
    {
      Name: 'Dominos Pizza',
      Street: '1900 GUADALUPE ST',
      YelpCategories: 'Pizza,Chicken Wings,Sandwiches',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 71
    },
    {
      Name: 'Angie\'s Mexican Restaurant',
      Street: '1307 E 7TH ST',
      YelpCategories: 'Mexican',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 175
    },
    {
      Name: 'Starbucks Coffee #11556',
      Street: '2505 W PARMER LN',
      YelpCategories: 'Coffee & Tea',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 76
    },
    {
      Name: 'Moloko',
      Street: '1812 E 12TH ST',
      YelpCategories: 'Cocktail Bars',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 8
    },
    {
      Name: 'Courtney\'s Catering',
      Street: '13233 POND SPRINGS RD',
      YelpCategories: 'Caterers',
      Score: 83,
      YelpRaiting: 5,
      YelpReviewCount: 13
    },
    {
      Name: 'Which Wich',
      Street: '1201 BARBARA JORDAN BLVD',
      YelpCategories: 'Sandwiches',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 50
    },
    {
      Name: 'Masala Wok',
      Street: '1100 CENTER RIDGE DR',
      YelpCategories: 'Indian,Asian Fusion,Chinese',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 267
    },
    {
      Name: 'Freebirds',
      Street: '515 S CONGRESS AVE',
      YelpCategories: 'Mexican,Tex-Mex',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 186
    },
    {
      Name: 'Freebirds',
      Street: '1100 CENTER RIDGE DR',
      YelpCategories: 'Mexican,Tex-Mex',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 134
    },
    {
      Name: 'Lakeside Pizza and Grill',
      Street: '2900 N QUINLAN PARK RD',
      YelpCategories: 'Pizza,American (New),Gluten-Free',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 110
    },
    {
      Name: 'The Grove',
      Street: '6317 FM 2244 RD',
      YelpCategories: 'Pizza,Wine Bars,Italian',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 418
    },
    {
      Name: 'Mighty Fine Burgers, Fries and Shakes',
      Street: '10515 N MOPAC EXPY',
      YelpCategories: 'Burgers',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 569
    },
    {
      Name: 'Good Luck Grill',
      Street: '14605 N FM 973 RD',
      YelpCategories: 'American (Traditional),Diners,Burgers',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 136
    },
    {
      Name: 'Starbucks Coffee #13418',
      Street: '1201 BARBARA JORDAN BLVD',
      YelpCategories: 'Coffee & Tea',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 72
    },
    {
      Name: 'Lifetime Fitness Bistro',
      Street: '7101 S MOPAC EXPY',
      YelpCategories: 'Gyms,Sports Clubs,Trainers',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 243
    },
    {
      Name: 'Big Top Candy Shop',
      Street: '1706 S CONGRESS AVE',
      YelpCategories: 'Candy Stores',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 404
    },
    {
      Name: 'Twin Peaks',
      Street: '701 E STASSNEY LN',
      YelpCategories: 'Sports Bars,American (New),American (Traditional)',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 150
    },
    {
      Name: 'East First Grocery',
      Street: '1811 E CESAR CHAVEZ ST',
      YelpCategories: 'Beer, Wine & Spirits',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 29
    },
    {
      Name: 'Fresh Plus',
      Street: '408 E 43RD ST',
      YelpCategories: 'Grocery',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 53
    },
    {
      Name: 'Prohibition Creamery',
      Street: '1407 E 7TH ST',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Cocktail Bars',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 249
    },
    {
      Name: 'Courtyard by Marriott- Champions/Starbucks',
      Street: '300 E 4TH ST',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 113
    },
    {
      Name: 'Chu-Mikals',
      Street: '3223 E 7TH ST',
      YelpCategories: 'Burgers,Cafes,Breakfast & Brunch',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 51
    },
    {
      Name: 'Phara\'s',
      Street: '111 E NORTH LOOP BLVD',
      YelpCategories: 'Mediterranean,Hookah Bars',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 339
    },
    {
      Name: 'Trudy\'s South Star',
      Street: '901 LITTLE TEXAS LN',
      YelpCategories: 'Tex-Mex,Bars,Breakfast & Brunch',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 566
    },
    {
      Name: 'Snack Max',
      Street: '5630 N LAMAR BLVD',
      YelpCategories: 'Gas Stations',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Fresh Plus - Deli',
      Street: '1221 WEST LYNN ST',
      YelpCategories: 'Grocery,Beer, Wine & Spirits,Fruits & Veggies',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 79
    },
    {
      Name: 'Subway #43067',
      Street: '1910 W BRAKER LN',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 88,
      YelpRaiting: 2,
      YelpReviewCount: 22
    },
    {
      Name: 'Powerstop',
      Street: '8600 MANCHACA RD',
      YelpCategories: 'Convenience Stores',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Grand Billiards, The',
      Street: '4631 AIRPORT BLVD',
      YelpCategories: 'Pool Halls',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 70
    },
    {
      Name: 'Hawthorne Montessori School',
      Street: '1414 KRAMER LN',
      YelpCategories: 'Montessori Schools',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 12
    },
    {
      Name: 'Ashford Montessori',
      Street: '5906 WESTCREEK DR',
      YelpCategories: 'Montessori Schools',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Wal-Mart Supercenter #2133',
      Street: '5017 W US 290 HWY',
      YelpCategories: 'Department Stores,Grocery',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 59
    },
    {
      Name: 'Walgreens #11271',
      Street: '2525 W ANDERSON LN',
      YelpCategories: 'Cosmetics & Beauty Supply,Drugstores,Convenience Stores',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 18
    },
    {
      Name: 'Dream Dinners',
      Street: '12129 N FM 620 RD',
      YelpCategories: 'Do-It-Yourself Food,Specialty Food',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'OLA Poke',
      Street: '6808 N LAMAR BLVD',
      YelpCategories: 'Hawaiian,Asian Fusion,Poke',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 317
    },
    {
      Name: 'Tino\'s Greek Cafe',
      Street: '10515 N MOPAC EXPY',
      YelpCategories: 'Greek,Mediterranean',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 147
    },
    {
      Name: 'Walgreens #11513',
      Street: '5011 W SLAUGHTER LN',
      YelpCategories: 'Drugstores',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 24
    },
    {
      Name: 'House Wine',
      Street: '408 JOSEPHINE ST',
      YelpCategories: 'Wine Bars',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 349
    },
    {
      Name: 'Cru Wine Bar @ The Domain',
      Street: '11410 CENTURY OAKS TER',
      YelpCategories: 'Wine Bars,American (New)',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 244
    },
    {
      Name: 'University Baptist Church',
      Street: '2130 GUADALUPE ST',
      YelpCategories: 'Churches',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 5
    },
    {
      Name: 'Serranos Cafe & Cantina',
      Street: '9500 S IH',
      YelpCategories: 'Tex-Mex,Mexican,Breakfast & Brunch',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 210
    },
    {
      Name: 'Arden Courts Of Austin',
      Street: '11630 FOUR IRON DR',
      YelpCategories: 'Memory Care',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Bodega on Rio',
      Street: '2101 RIO GRANDE ST',
      YelpCategories: 'Convenience Stores',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'WL - HEB #29',
      Street: '701 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Drugstores',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 9
    },
    {
      Name: 'Taqueria Montenegro',
      Street: '11300 POLLYANNA AVE',
      YelpCategories: 'Mexican',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 25
    },
    {
      Name: 'Super 8 Motel',
      Street: '5606 E 51ST ST',
      YelpCategories: 'Hotels',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 42
    },
    {
      Name: 'WL - Austin\'s Pizza',
      Street: '3638 BEE CAVES RD',
      YelpCategories: 'Pizza',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 39
    },
    {
      Name: 'Tomunchi Frozen Yogurt',
      Street: '1701 W PARMER LN',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Bubble Tea,Juice Bars & Smoothies',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 171
    },
    {
      Name: 'Hudson Bend Grocery',
      Street: '5001 HUDSON BEND RD',
      YelpCategories: 'Grocery',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 5
    },
    {
      Name: 'Sonic Drive-In',
      Street: '11801 W US 290 HWY',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 31
    },
    {
      Name: 'Comfort Suites Hotel',
      Street: '7501 E BEN WHITE BLVD',
      YelpCategories: 'Hotels',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 26
    },
    {
      Name: 'Jersey Mikes Subs',
      Street: '9500 S IH',
      YelpCategories: 'Fast Food,Delis,Sandwiches',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 44
    },
    {
      Name: 'Perry\'s Steakhouse & Grill',
      Street: '114 W 7TH ST',
      YelpCategories: 'Steakhouses,Seafood,American (Traditional)',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 933
    },
    {
      Name: 'Harmony School of Science-Austin',
      Street: '11800 STONEHOLLOW DR',
      YelpCategories: 'Specialty Schools',
      Score: 99,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Las Lomas Mexican Restaurant',
      Street: '730 W STASSNEY LN',
      YelpCategories: 'Tex-Mex',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 63
    },
    {
      Name: 'Mellow Johnny\'s',
      Street: '400 NUECES ST',
      YelpCategories: 'Bikes',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 175
    },
    {
      Name: 'Dollar General #11209',
      Street: '9616 N LAMAR BLVD',
      YelpCategories: 'Department Stores',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 4
    },
    {
      Name: 'China House Restaurant',
      Street: '9505 BURNET RD',
      YelpCategories: 'Chinese',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 63
    },
    {
      Name: 'Aquarium, The',
      Street: '403 E 6TH ST',
      YelpCategories: 'Bars',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 67
    },
    {
      Name: 'Little Caesars',
      Street: '1030 NORWOOD PARK BLVD',
      YelpCategories: 'Pizza',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 11
    },
    {
      Name: '7-Eleven',
      Street: '8010 BRODIE LN',
      YelpCategories: 'Gas Stations,Convenience Stores,Coffee & Tea',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 9
    },
    {
      Name: 'LW - Lakeway Marina',
      Street: '103 LAKEWAY DR',
      YelpCategories: 'Marinas,Rafting/Kayaking,Jet Skis',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 34
    },
    {
      Name: 'La Familia Mexican Market',
      Street: '8540 RESEARCH BLVD',
      YelpCategories: 'Beer, Wine & Spirits,Meat Shops,Mexican',
      Score: 73,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Torchy\'s Tacos',
      Street: '2801 GUADALUPE ST',
      YelpCategories: 'Breakfast & Brunch,Tacos',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 798
    },
    {
      Name: 'Mama Fu\'s 2nd Street',
      Street: '100 COLORADO ST',
      YelpCategories: 'Asian Fusion,Chinese',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 105
    },
    {
      Name: 'Potbelly Sandwich Works',
      Street: '5300 S MOPAC EXPY',
      YelpCategories: 'Sandwiches,Fast Food,Salad',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 71
    },
    {
      Name: 'Word of Mouth Catering',
      Street: '919 W 12TH ST',
      YelpCategories: 'Caterers',
      Score: 82,
      YelpRaiting: 5,
      YelpReviewCount: 28
    },
    {
      Name: 'Dirty Bill\'s',
      Street: '511 RIO GRANDE ST',
      YelpCategories: 'Dive Bars',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 113
    },
    {
      Name: 'Cheko\'s Mexican Restaurant & Bar',
      Street: '1304 W KOENIG LN',
      YelpCategories: 'Tex-Mex,Mexican',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 232
    },
    {
      Name: 'Freebirds World Burrito',
      Street: '11101 BURNET RD',
      YelpCategories: 'Mexican,Tex-Mex',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 193
    },
    {
      Name: 'Justine\'s',
      Street: '4710 E 5TH ST',
      YelpCategories: 'French,Bars',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 995
    },
    {
      Name: 'Dollar General #10959',
      Street: '6010 E RIVERSIDE DR',
      YelpCategories: 'Department Stores',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 6
    },
    {
      Name: 'Moonlight Bakery',
      Street: '2300 S LAMAR BLVD',
      YelpCategories: 'Bakeries',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 115
    },
    {
      Name: 'Crestview United Methodist Church',
      Street: '1300 MORROW ST',
      YelpCategories: 'Religious Organizations',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Tiff\'s Treats',
      Street: '11011 RESEARCH BLVD',
      YelpCategories: 'Desserts',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 121
    },
    {
      Name: 'Xian Sushi and Noodle #2',
      Street: '13201 N FM 620 RD',
      YelpCategories: 'Sushi Bars,Noodles,Desserts',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 199
    },
    {
      Name: 'Korean Grill',
      Street: '10901 N LAMAR BLVD',
      YelpCategories: 'Korean',
      Score: 79,
      YelpRaiting: 5,
      YelpReviewCount: 408
    },
    {
      Name: 'Kerbey Lane Cafe',
      Street: '13435 N US 183 HWY',
      YelpCategories: 'Mexican,Tex-Mex',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 891
    },
    {
      Name: 'Bread Basket - Chevron',
      Street: '9401 S US 183 HWY',
      YelpCategories: 'Gas Stations',
      Score: 77,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Chipotle Mexican Grill #501',
      Street: '801 CONGRESS AVE',
      YelpCategories: 'Mexican,Fast Food',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 61
    },
    {
      Name: 'Chipotle Mexican Grill #973',
      Street: '1201 BARBARA JORDAN BLVD',
      YelpCategories: 'Mexican,Fast Food',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 55
    },
    {
      Name: 'Little Caesars Pizza',
      Street: '5200 E WILLIAM CANNON DR',
      YelpCategories: 'Pizza,Italian',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 10
    },
    {
      Name: 'Chipotle Mexican Grill #620',
      Street: '610 E STASSNEY LN',
      YelpCategories: 'Mexican,Fast Food',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 49
    },
    {
      Name: 'The 04 Lounge',
      Street: '3808 S CONGRESS AVE',
      YelpCategories: 'Dive Bars,Lounges,Pool Halls',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 63
    },
    {
      Name: 'LW - Mangieri\'s Pizza',
      Street: '2133 LOHMANS CROSSING RD',
      YelpCategories: 'Pizza',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 101
    },
    {
      Name: 'Pizza Hut',
      Street: '5510 S IH',
      YelpCategories: 'Pizza,Italian,Chicken Wings',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 31
    },
    {
      Name: 'Chipotle Mexican Grill #56',
      Street: '4400 N LAMAR BLVD',
      YelpCategories: 'Mexican,Fast Food',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 57
    },
    {
      Name: 'Family Dollar Stores of TX., LLC #1700',
      Street: '1917 E RIVERSIDE DR',
      YelpCategories: 'Discount Store,Toy Stores,Pet Stores',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Chipotle Mexican Grill #874',
      Street: '6301 W PARMER LN',
      YelpCategories: 'Mexican,Fast Food',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 82
    },
    {
      Name: 'Sugar Mama\'s Bakeshop',
      Street: '1905 S 1ST ST',
      YelpCategories: 'Desserts,Bakeries,American (Traditional)',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 906
    },
    {
      Name: 'Target #2409- Groceries (Retail)',
      Street: '10107 RESEARCH BLVD',
      YelpCategories: 'Department Stores',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 84
    },
    {
      Name: 'Hyatt House',
      Street: '10001 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Hotels',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 63
    },
    {
      Name: 'Pink Avocado Catering, LLC',
      Street: '700 E 4TH ST',
      YelpCategories: 'Caterers,Party & Event Planning',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 78
    },
    {
      Name: 'Sodexo- Concordia University',
      Street: '11400 CONCORDIA UNIVERSITY DR',
      YelpCategories: 'Colleges & Universities',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 7
    },
    {
      Name: 'BC - Frost, A Gelato Shoppe',
      Street: '12800 HILL COUNTRY BLVD',
      YelpCategories: 'Desserts,Gelato,Ice Cream & Frozen Yogurt',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 61
    },
    {
      Name: 'Shack Food Corner',
      Street: '1167 WEBBERVILLE RD',
      YelpCategories: 'Convenience Stores',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Courtyard by Marriott Austin Airport',
      Street: '7809 E BEN WHITE BLVD',
      YelpCategories: 'Hotels',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 61
    },
    {
      Name: 'Just Add Chef',
      Street: '3505 N IH',
      YelpCategories: 'Do-It-Yourself Food',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Staybridge Hotel',
      Street: '1611 AIRPORT COMMERCE DR',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 54
    },
    {
      Name: 'Wal-Mart Supercenter #2133 -Deli',
      Street: '5017 W US 290 HWY',
      YelpCategories: 'Department Stores,Grocery',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 58
    },
    {
      Name: 'Yogurt Planet, LLC',
      Street: '4601 N LAMAR BLVD',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 190
    },
    {
      Name: 'Subway #43833',
      Street: '7709 E BEN WHITE BLVD',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 91,
      YelpRaiting: 2,
      YelpReviewCount: 15
    },
    {
      Name: 'El Nuevo Mexico Restaurant',
      Street: '911 W ANDERSON LN',
      YelpCategories: 'Mexican,Tex-Mex,Breakfast & Brunch',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 170
    },
    {
      Name: 'Domino\'s Pizza',
      Street: '13201 POND SPRINGS RD',
      YelpCategories: 'Pizza,Chicken Wings,Sandwiches',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 64
    },
    {
      Name: 'La Fruta Feliz',
      Street: '3124 MANOR RD',
      YelpCategories: 'Mexican',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 123
    },
    {
      Name: 'Wal-Mart Supercenter #2133 -Produce',
      Street: '5017 W US 290 HWY',
      YelpCategories: 'Department Stores,Grocery',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 59
    },
    {
      Name: 'Royal Blue Grocery',
      Street: '360 NUECES ST',
      YelpCategories: 'Grocery,Beer, Wine & Spirits',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 45
    },
    {
      Name: 'Twin Creeks Country Club',
      Street: '3201 TWIN CREEKS CLUB DR',
      YelpCategories: 'Country Clubs',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 12
    },
    {
      Name: 'Tierra Linda Taqueria',
      Street: '8540 RESEARCH BLVD',
      YelpCategories: 'Mexican',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 75
    },
    {
      Name: 'Steiner Ranch Steakhouse',
      Street: '5424 STEINER RANCH BLVD',
      YelpCategories: 'Steakhouses',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 612
    },
    {
      Name: 'Subway',
      Street: '2906 DUVAL ST',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 86,
      YelpRaiting: 2,
      YelpReviewCount: 16
    },
    {
      Name: 'Norris Conference Centers',
      Street: '2525 W ANDERSON LN',
      YelpCategories: 'Venues & Event Spaces',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'Max\'s Wine Dive',
      Street: '207 SAN JACINTO BLVD',
      YelpCategories: 'Wine Bars,American (New),Breakfast & Brunch',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 894
    },
    {
      Name: 'Fleming\'s Prime Steakhouse & Wine Bar',
      Street: '11600 CENTURY OAKS TER',
      YelpCategories: 'Steakhouses,Wine Bars,Seafood',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 399
    },
    {
      Name: 'Donn\'s BBQ',
      Street: '10003 FM 969 RD',
      YelpCategories: 'Barbeque',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 134
    },
    {
      Name: 'Hotel Saint Cecilia',
      Street: '112 ACADEMY DR',
      YelpCategories: 'Hotels',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 61
    },
    {
      Name: 'Escuelita del Alma',
      Street: '3109 N IH',
      YelpCategories: 'Child Care & Day Care',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'The Settlement Home for Children',
      Street: '1600 PAYTON GIN RD',
      YelpCategories: 'Community Service/Non-Profit',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 10
    },
    {
      Name: 'Arpeggio Grill',
      Street: '6619 AIRPORT BLVD',
      YelpCategories: 'Pizza,Greek,Mediterranean',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 677
    },
    {
      Name: 'Los Reyes Mexican Grill & Seafood Restaurant',
      Street: '13776 N US 183 HWY',
      YelpCategories: 'Tex-Mex,Mexican,Breakfast & Brunch',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 112
    },
    {
      Name: 'Starbucks Coffee #14500',
      Street: '7015 W US 290 HWY',
      YelpCategories: 'Coffee & Tea',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 62
    },
    {
      Name: 'Tortilleria Rio Grande',
      Street: '900 E BRAKER LN',
      YelpCategories: 'Mexican',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 112
    },
    {
      Name: 'Premier High School',
      Street: '1701 W BEN WHITE BLVD',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'La Cabana Grill',
      Street: '21103 W SH',
      YelpCategories: 'Mexican',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 69
    },
    {
      Name: 'MLK Food Store',
      Street: '2915 E MARTIN LUTHER KING JR BLVD',
      YelpCategories: 'Grocery,Beer, Wine & Spirits',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 24
    },
    {
      Name: 'Dollar General Store #10948',
      Street: '5002 NUCKOLS CROSSING RD',
      YelpCategories: 'Discount Store',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 5
    },
    {
      Name: 'Shipley Donuts',
      Street: '10019 W PARMER LN',
      YelpCategories: 'Donuts,Coffee & Tea,Breakfast & Brunch',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 116
    },
    {
      Name: 'P. Terry\'s Burger Stand',
      Street: '3303 N LAMAR BLVD',
      YelpCategories: 'Burgers,Fast Food',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 428
    },
    {
      Name: 'Mom\'s Convenience Store, Inc.',
      Street: '10900 W US 290 HWY',
      YelpCategories: 'Grocery',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 3
    },
    {
      Name: 'Once Over Coffee Bar',
      Street: '2009 S 1ST ST',
      YelpCategories: 'Coffee & Tea',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 318
    },
    {
      Name: 'Jimmy John\'s #1254',
      Street: '4001 N LAMAR BLVD',
      YelpCategories: 'Sandwiches,Delis,Fast Food',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 48
    },
    {
      Name: 'Domino\'s Pizza',
      Street: '5811 BERKMAN DR',
      YelpCategories: 'Pizza,Chicken Wings,Sandwiches',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 31
    },
    {
      Name: 'Lebowskis',
      Street: '8909 BURNET RD',
      YelpCategories: 'Burgers,Sandwiches',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 300
    },
    {
      Name: 'RBM Food Mart',
      Street: '2601 MANOR RD',
      YelpCategories: 'Convenience Stores',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 8
    },
    {
      Name: 'Baskin Robbins',
      Street: '9900 W PARMER LN',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 22
    },
    {
      Name: 'Ah Sing Den',
      Street: '1100 E 6TH ST',
      YelpCategories: 'Cocktail Bars,Pan Asian,Chinese',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 112
    },
    {
      Name: 'Balcones Club Restaurant',
      Street: '8600 BALCONES CLUB DR',
      YelpCategories: 'Golf,Country Clubs',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 10
    },
    {
      Name: 'Stepping Stone School',
      Street: '9914 WOODLAND VILLAGE DR',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Jamba Juice',
      Street: '1201 BARBARA JORDAN BLVD',
      YelpCategories: 'Juice Bars & Smoothies',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 36
    },
    {
      Name: 'Pad Thai',
      Street: '1201 BARBARA JORDAN BLVD',
      YelpCategories: 'Thai',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 259
    },
    {
      Name: 'Lone Star Kolaches',
      Street: '6317 FM 2244 RD',
      YelpCategories: 'Breakfast & Brunch,Bakeries',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 38
    },
    {
      Name: 'Natural Grocers',
      Street: '3901 GUADALUPE ST',
      YelpCategories: 'Grocery,Vitamins & Supplements,Organic Stores',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 110
    },
    {
      Name: 'Perla\'s Seafood & Oyster Bar',
      Street: '1400 S CONGRESS AVE',
      YelpCategories: 'Seafood,Bars',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 1369
    },
    {
      Name: 'BC - Bee Cave Elementary',
      Street: '14300 HAMILTON POOL RD',
      YelpCategories: 'Elementary Schools',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'BC - Panera Bread',
      Street: '12901 HILL COUNTRY BLVD',
      YelpCategories: 'Sandwiches,Salad,Soup',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 68
    },
    {
      Name: 'BC - Target #1812',
      Street: '3702 S FM 620 RD',
      YelpCategories: 'Department Stores',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 21
    },
    {
      Name: 'BC - Yogurt Planet, LLC',
      Street: '12801 HILL COUNTRY BLVD',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 29
    },
    {
      Name: 'Archer Hotel - Austin',
      Street: '3121 PALM WAY',
      YelpCategories: 'Hotels',
      Score: 71,
      YelpRaiting: 5,
      YelpReviewCount: 112
    },
    {
      Name: 'Madam Mam\'s',
      Street: '2700 W ANDERSON LN',
      YelpCategories: 'Thai',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 544
    },
    {
      Name: 'The Liberty',
      Street: '1618 1 2 E 6TH ST',
      YelpCategories: 'Bars',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 242
    },
    {
      Name: 'Comfort Suites',
      Street: '15112 FM 1825 RD',
      YelpCategories: 'Hotels',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 13
    },
    {
      Name: 'Quattro Gatti Restaurant',
      Street: '908 CONGRESS AVE',
      YelpCategories: 'Italian,Pizza',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 298
    },
    {
      Name: 'Taqueria Arandinas',
      Street: '700 W WILLIAM CANNON DR',
      YelpCategories: 'Mexican,Breakfast & Brunch,Coffee & Tea',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 104
    },
    {
      Name: 'El Pollo Rico #6',
      Street: '1945 E OLTORF ST',
      YelpCategories: 'Mexican',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 47
    },
    {
      Name: 'Don Dario\'s Mexican Restaurant & Cantina',
      Street: '8801 S IH',
      YelpCategories: 'Mexican',
      Score: 83,
      YelpRaiting: 3,
      YelpReviewCount: 247
    },
    {
      Name: 'Roland Soul Food & Fish Or Us',
      Street: '1311 CHESTNUT AVE',
      YelpCategories: 'Seafood,Fish & Chips,Soul Food',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 56
    },
    {
      Name: 'Satellite Bistro & Bar',
      Street: '5900 W SLAUGHTER LN',
      YelpCategories: 'American (New),Cocktail Bars,Breakfast & Brunch',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 279
    },
    {
      Name: 'Abel\'s on the Lake',
      Street: '3825 LAKE AUSTIN BLVD',
      YelpCategories: 'Breakfast & Brunch,Bars,American (Traditional)',
      Score: 80,
      YelpRaiting: 3,
      YelpReviewCount: 542
    },
    {
      Name: 'Sushi Zushi',
      Street: '1611 W 5TH ST',
      YelpCategories: 'Sushi Bars,Japanese',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 395
    },
    {
      Name: 'Auntie Anne\'s Pretzels',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Pretzels',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 5
    },
    {
      Name: 'Ho Ho Chinese BBQ',
      Street: '13000 N IH',
      YelpCategories: 'Chinese,Barbeque,Seafood',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 639
    },
    {
      Name: 'BC - Pei Wei Asian Diner',
      Street: '12913 GALLERIA CIR',
      YelpCategories: 'Asian Fusion,Chinese,Gluten-Free',
      Score: 75,
      YelpRaiting: 2,
      YelpReviewCount: 150
    },
    {
      Name: 'Bikinis Sports Bar and Grill',
      Street: '214 E 6TH ST',
      YelpCategories: 'Sports Bars,Burgers,Chicken Wings',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 164
    },
    {
      Name: 'Clive Bar',
      Street: '609 DAVIS ST',
      YelpCategories: 'Bars,Music Venues',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 255
    },
    {
      Name: 'Thunderbird Coffee-Manor',
      Street: '2200 MANOR RD',
      YelpCategories: 'Coffee & Tea,Cafes',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 388
    },
    {
      Name: 'Harmony School of Excellence-Austin',
      Street: '2100 E ST ELMO RD',
      YelpCategories: 'Education',
      Score: 93,
      YelpRaiting: 1,
      YelpReviewCount: 2
    },
    {
      Name: 'SV - Tarka Indian Kitchen',
      Street: '5207 BRODIE LN',
      YelpCategories: 'Indian',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 813
    },
    {
      Name: 'Giggles Learning Center, LLC',
      Street: '15904 CENTRAL COMMERCE DR',
      YelpCategories: 'Child Care & Day Care',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Dragon Express',
      Street: '14300 FM 969 RD',
      YelpCategories: 'Chinese,Pizza',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 37
    },
    {
      Name: 'Purple Sage Elementary',
      Street: '11801 TANGLEBRIAR TRL',
      YelpCategories: 'Community Book Box',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 1
    },
    {
      Name: 'El Alma Cafe y Cantina',
      Street: '1025 BARTON SPRINGS RD',
      YelpCategories: 'Mexican',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 714
    },
    {
      Name: 'Del Valle High School, Ninth Grade Academy',
      Street: '5201 ROSS RD',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Gorzycki Middle School',
      Street: '7412 W SLAUGHTER LN',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Red\'s Porch',
      Street: '3508 S LAMAR BLVD',
      YelpCategories: 'Southern,Cajun/Creole,Tex-Mex',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 916
    },
    {
      Name: 'Austin North Assisted Living',
      Street: '11206 POWDER MILL TRL',
      YelpCategories: 'Assisted Living Facilities',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Snappy Snacks Kitchen',
      Street: '15630 VISION DR',
      YelpCategories: 'Caterers',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 8
    },
    {
      Name: 'Happy Faces Bilingual Child Care',
      Street: '7109 BLESSING AVE',
      YelpCategories: 'Child Care & Day Care',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Subway #45205',
      Street: '9900 W PARMER LN',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 24
    },
    {
      Name: 'Las Delicias Meat Market-Bakery',
      Street: '111 W WILLIAM CANNON DR',
      YelpCategories: 'Meat Shops',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Gattis Pizza',
      Street: '10740 RESEARCH BLVD',
      YelpCategories: 'Pizza',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 17
    },
    {
      Name: 'Donut Palace',
      Street: '2113 W WELLS BRANCH PKWY',
      YelpCategories: 'Donuts',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 19
    },
    {
      Name: 'La Sabrocita Restaurant & Tortilleria',
      Street: '850 E RUNDBERG LN',
      YelpCategories: 'Mexican',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 15
    },
    {
      Name: 'Maui Wowi',
      Street: '500 CANYON RIDGE DR',
      YelpCategories: 'Coffee & Tea,Juice Bars & Smoothies',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 27
    },
    {
      Name: 'Hit The Spot Cafe',
      Street: '5121 ALBERT BROWN DR',
      YelpCategories: 'American (Traditional),Breakfast & Brunch,Burgers',
      Score: 70,
      YelpRaiting: 5,
      YelpReviewCount: 195
    },
    {
      Name: 'Gloria\'s Restaurant #11',
      Street: '3309 ESPERANZA XING',
      YelpCategories: 'Latin American,Tex-Mex',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 655
    },
    {
      Name: 'Pedernales Country Store',
      Street: '910 S PACE BEND RD',
      YelpCategories: 'Convenience Stores',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Hat Creek Burger Company',
      Street: '5400 BURNET RD',
      YelpCategories: 'Burgers,Fast Food',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 322
    },
    {
      Name: 'BC - Amy\'s Ice Cream',
      Street: '13420 GALLERIA CIR',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Desserts,Coffee & Tea',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 45
    },
    {
      Name: 'Beijing Wok',
      Street: '8106 BRODIE LN',
      YelpCategories: 'Chinese',
      Score: 85,
      YelpRaiting: 2,
      YelpReviewCount: 79
    },
    {
      Name: 'Swan Dive',
      Street: '615 RED RIVER ST',
      YelpCategories: 'Music Venues,Dive Bars,Cabaret',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 68
    },
    {
      Name: 'Hyde Park Baptist High School',
      Street: '11400 N MOPAC EXPY',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Torchy\'s Tacos',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Breakfast & Brunch,Tacos',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 643
    },
    {
      Name: 'Yogurt Planet',
      Street: '3220 FEATHERGRASS CT',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 61
    },
    {
      Name: 'Manor Food Mart #1',
      Street: '6700 MANOR RD',
      YelpCategories: 'Convenience Stores',
      Score: 88,
      YelpRaiting: 2,
      YelpReviewCount: 1
    },
    {
      Name: 'Gibson Bar',
      Street: '1109 S LAMAR BLVD',
      YelpCategories: 'Bars',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 311
    },
    {
      Name: 'Snap Kitchen',
      Street: '4616 TRIANGLE AVE',
      YelpCategories: 'Gluten-Free,Health Markets',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 136
    },
    {
      Name: 'Pizza Paradise',
      Street: '1921 CEDAR BEND DR',
      YelpCategories: 'Pizza',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 168
    },
    {
      Name: 'Stonebridge SN Health Center',
      Street: '11127 CIRCLE DR',
      YelpCategories: 'Health & Medical',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Park Bend SN Health Center',
      Street: '2122 PARK BEND DR',
      YelpCategories: 'Retirement Homes,Rehabilitation Center',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 6
    },
    {
      Name: 'Uchiko',
      Street: '4200 N LAMAR BLVD',
      YelpCategories: 'Sushi Bars,Gluten-Free,Japanese',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 1555
    },
    {
      Name: 'Subway',
      Street: '900 E BRAKER LN',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 85,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Tigress, The',
      Street: '100 W NORTH LOOP BLVD',
      YelpCategories: 'Pubs,Cocktail Bars',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 192
    },
    {
      Name: 'Denny\'s # 8535',
      Street: '7619 E BEN WHITE BLVD',
      YelpCategories: 'Diners,American (Traditional),Breakfast & Brunch',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 59
    },
    {
      Name: 'Maggiano\'s Little Italy',
      Street: '10910 DOMAIN DR',
      YelpCategories: 'Italian,Bars',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 660
    },
    {
      Name: 'La Hacienda Mkt #6',
      Street: '6425 S IH',
      YelpCategories: 'Mexican,Grocery',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 4
    },
    {
      Name: 'Antonelli\'s Cheese Shop',
      Street: '4220 DUVAL ST',
      YelpCategories: 'Cheese Shops',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 293
    },
    {
      Name: 'Subway',
      Street: '500 CANYON RIDGE DR',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 9
    },
    {
      Name: 'Mohawk, The',
      Street: '912 RED RIVER ST',
      YelpCategories: 'Music Venues,Lounges,Cocktail Bars',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 233
    },
    {
      Name: 'Sam\'s Club #6453 Sample Stations',
      Street: '9700 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Department Stores,Wholesale Stores,Grocery',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 63
    },
    {
      Name: 'Houndstooth Coffee',
      Street: '4200 N LAMAR BLVD',
      YelpCategories: 'Coffee & Tea',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 497
    },
    {
      Name: 'Thundercloud Subs #13',
      Street: '360 NUECES ST',
      YelpCategories: 'Sandwiches',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 30
    },
    {
      Name: 'Thai Fresh',
      Street: '909 W MARY ST',
      YelpCategories: 'Thai,Coffee & Tea,Desserts',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 766
    },
    {
      Name: 'Bombay Grill Indian Restaurant',
      Street: '3201 BEE CAVES RD',
      YelpCategories: 'Indian',
      Score: 75,
      YelpRaiting: 3,
      YelpReviewCount: 156
    },
    {
      Name: 'Ski Shores Cafe',
      Street: '2905 PEARCE RD',
      YelpCategories: 'Boat Charters,Boating',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Andiamo Italiano',
      Street: '2521 RUTLAND DR',
      YelpCategories: 'Italian',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 375
    },
    {
      Name: 'Mandola\'s Italian Market',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Italian,Pizza',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 308
    },
    {
      Name: 'SWOOP Events',
      Street: '3012 GONZALES ST',
      YelpCategories: 'Diners',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 28
    },
    {
      Name: 'Thai Taste',
      Street: '7010 W SH',
      YelpCategories: 'Thai',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 166
    },
    {
      Name: 'Onion, The',
      Street: '408 BRAZOS ST',
      YelpCategories: 'Pizza',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 164
    },
    {
      Name: 'Pho Thaison',
      Street: '2438 W ANDERSON LN',
      YelpCategories: 'Vietnamese,Thai,Vegetarian',
      Score: 73,
      YelpRaiting: 4,
      YelpReviewCount: 577
    },
    {
      Name: 'Moonlight Hookah Cafe',
      Street: '12636 RESEARCH BLVD',
      YelpCategories: 'Hookah Bars',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 37
    },
    {
      Name: 'Shu Shu\'s Asian Cuisine',
      Street: '8303 BURNET RD',
      YelpCategories: 'Asian Fusion',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 386
    },
    {
      Name: 'Yellow Jacket Social Club',
      Street: '1704 E 5TH ST',
      YelpCategories: 'Lounges,American (New)',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 367
    },
    {
      Name: 'Music Lab Inc.',
      Street: '500 E ST ELMO RD',
      YelpCategories: 'Recording & Rehearsal Studios,Musical Instruments & Teachers,Music Production Services',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 16
    },
    {
      Name: 'Whataburger',
      Street: '2800 GUADALUPE ST',
      YelpCategories: 'Fast Food,Burgers',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 84
    },
    {
      Name: 'JD\'s Market',
      Street: '14300 DESSAU RD',
      YelpCategories: 'Grocery,Meat Shops',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 23
    },
    {
      Name: 'The Local Pub & Patio',
      Street: '2610 GUADALUPE ST',
      YelpCategories: 'Pubs',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 73
    },
    {
      Name: 'Dogwood, The',
      Street: '715 W 6TH ST',
      YelpCategories: 'Bars',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 159
    },
    {
      Name: 'Rice Bowl Cafe',
      Street: '11220 N LAMAR BLVD',
      YelpCategories: 'Chinese,Taiwanese,Sushi Bars',
      Score: 72,
      YelpRaiting: 4,
      YelpReviewCount: 592
    },
    {
      Name: 'Kerbey Lane Cafe',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'American (Traditional),Breakfast & Brunch,Tex-Mex',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 539
    },
    {
      Name: 'S-H Donuts',
      Street: '5313 MANOR RD',
      YelpCategories: 'Breakfast & Brunch,Donuts',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 170
    },
    {
      Name: 'Ana\'s Mart',
      Street: '800 BRAZOS ST',
      YelpCategories: 'Convenience Stores',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 13
    },
    {
      Name: 'Snap Kitchen',
      Street: '1014 W 6TH ST',
      YelpCategories: 'Gluten-Free,Health Markets',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 119
    },
    {
      Name: 'Pad Thai Cuisine #3',
      Street: '3208 GUADALUPE ST',
      YelpCategories: 'Thai',
      Score: 73,
      YelpRaiting: 4,
      YelpReviewCount: 138
    },
    {
      Name: 'Bamboo Bistro',
      Street: '11101 BURNET RD',
      YelpCategories: 'Chinese,Thai,Asian Fusion',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 297
    },
    {
      Name: 'Dollar General Store #12219',
      Street: '2101 W BEN WHITE BLVD',
      YelpCategories: 'Discount Store',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Taqueria La Tapatia y Bakery',
      Street: '12601 TECH RIDGE BLVD',
      YelpCategories: 'Mexican',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 82
    },
    {
      Name: 'Egg Roll Express',
      Street: '6301 W PARMER LN',
      YelpCategories: 'Chinese',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 207
    },
    {
      Name: 'Wal-Mart Supercenter #4554',
      Street: '2525 W ANDERSON LN',
      YelpCategories: 'Department Stores,Grocery',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 111
    },
    {
      Name: 'Paco\'s Tacos',
      Street: '1304 E 51ST ST',
      YelpCategories: 'Mexican',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 530
    },
    {
      Name: 'Nicholson Early Childhood Education Center',
      Street: '12233 N FM 620 RD',
      YelpCategories: 'Preschools',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 10
    },
    {
      Name: 'Parmer Children\'s Montessori Academy,LLC',
      Street: '1701 SCOFIELD LN',
      YelpCategories: 'Montessori Schools',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 16
    },
    {
      Name: 'Sarpino\'s Pizzeria',
      Street: '10401 ANDERSON MILL RD',
      YelpCategories: 'Pizza',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 80
    },
    {
      Name: 'Bush\'s Chicken',
      Street: '9815 BRODIE LN',
      YelpCategories: 'Fast Food',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 85
    },
    {
      Name: 'Lee\'s Almost By The Lake',
      Street: '801 S PACE BEND RD',
      YelpCategories: 'American (New),Burgers,Pizza',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 53
    },
    {
      Name: 'Black Star Co-Op Pub and Brewery',
      Street: '7020 EASY WIND DR',
      YelpCategories: 'Breweries,Gastropubs',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 698
    },
    {
      Name: 'BC - Buenos Aires Cafe',
      Street: '13500 GALLERIA CIR',
      YelpCategories: 'Argentine,Wine Bars',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 256
    },
    {
      Name: 'LW - Cafe Lago',
      Street: '1200 LAKEWAY DR',
      YelpCategories: 'Breakfast & Brunch',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 145
    },
    {
      Name: 'Circle Brewing Company LLC',
      Street: '2340 W BRAKER LN',
      YelpCategories: 'Breweries',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 54
    },
    {
      Name: 'Icenhauer\'s',
      Street: '83 RAINEY ST',
      YelpCategories: 'Bars',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 312
    },
    {
      Name: 'Walgreens #13444',
      Street: '120 W SLAUGHTER LN',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'SV - IM Thai Cuisine',
      Street: '5207 BRODIE LN',
      YelpCategories: 'Thai',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 416
    },
    {
      Name: 'Rawshe Hookah Cafe',
      Street: '11331 N LAMAR BLVD',
      YelpCategories: 'Hookah Bars',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 39
    },
    {
      Name: 'Walgreens #11853',
      Street: '13435 N US 183 HWY',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 16
    },
    {
      Name: 'Grackle, The',
      Street: '1700 E 6TH ST',
      YelpCategories: 'Lounges',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 137
    },
    {
      Name: 'Harmony Science Academy-Pflugerville',
      Street: '1421 W WELLS BRANCH PKWY',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'The Eastern',
      Street: '1511 E 6TH ST',
      YelpCategories: 'Bars,Dance Clubs',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 53
    },
    {
      Name: 'Ni-Kome',
      Street: '111 CONGRESS AVE',
      YelpCategories: 'Sushi Bars,Ramen',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 44
    },
    {
      Name: 'Torchy\'s Tacos',
      Street: '5119 BURNET RD',
      YelpCategories: 'Breakfast & Brunch,Tacos',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 467
    },
    {
      Name: 'Primrose School of Southwest Austin',
      Street: '4920 DAVIS LN',
      YelpCategories: 'Preschools,Child Care & Day Care',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'Austin\'s Pizza',
      Street: '9900 S IH',
      YelpCategories: 'General Dentistry,Cosmetic Dentists',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 102
    },
    {
      Name: 'W Austin Main Kitchen Banquet Dining',
      Street: '200 LAVACA ST',
      YelpCategories: 'Hotels',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 310
    },
    {
      Name: 'Dive Bar',
      Street: '1703 GUADALUPE ST',
      YelpCategories: 'Dive Bars,Cocktail Bars',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 139
    },
    {
      Name: 'Thistle Cafe',
      Street: '221 W 6TH ST',
      YelpCategories: 'American (Traditional)',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 66
    },
    {
      Name: 'Wholly Cow Burgers',
      Street: '3010 S LAMAR BLVD',
      YelpCategories: 'Burgers',
      Score: 77,
      YelpRaiting: 4,
      YelpReviewCount: 514
    },
    {
      Name: 'Phil\'s Ice House, Inc',
      Street: '2901 S LAMAR BLVD',
      YelpCategories: 'Burgers',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 220
    },
    {
      Name: 'Don Juan Mexican Restaurant',
      Street: '2506 E BEN WHITE BLVD',
      YelpCategories: 'Mexican',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 26
    },
    {
      Name: 'Twin Liquors #10',
      Street: '7301 N FM 620 RD',
      YelpCategories: 'Beer, Wine & Spirits,Tobacco Shops',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 16
    },
    {
      Name: 'Teapioca Lounge',
      Street: '1700 W PARMER LN',
      YelpCategories: 'Coffee & Tea,Bubble Tea,Juice Bars & Smoothies',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 485
    },
    {
      Name: 'Little Caesars Pizza',
      Street: '13770 N US 183 HWY',
      YelpCategories: 'Pizza',
      Score: 86,
      YelpRaiting: 2,
      YelpReviewCount: 33
    },
    {
      Name: 'Legendary White Swan',
      Street: '1906 E 12TH ST',
      YelpCategories: '',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 24
    },
    {
      Name: 'Mai Thai',
      Street: '207 SAN JACINTO BLVD',
      YelpCategories: 'Thai,Bars',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 516
    },
    {
      Name: 'SV - Mama Fu\'s',
      Street: '5400 BRODIE LN',
      YelpCategories: 'Asian Fusion,Chinese',
      Score: 76,
      YelpRaiting: 3,
      YelpReviewCount: 146
    },
    {
      Name: 'Iron Bear, The',
      Street: '119 W 8TH ST',
      YelpCategories: 'Gay Bars,Dance Clubs,Karaoke',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 77
    },
    {
      Name: 'Monkeynest Coffee',
      Street: '5353 BURNET RD',
      YelpCategories: 'Coffee & Tea,Cafes',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 562
    },
    {
      Name: 'Applied Materials',
      Street: '9700 E US 290 HWY',
      YelpCategories: '',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Barbarella',
      Street: '611 RED RIVER ST',
      YelpCategories: 'Dance Clubs',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 318
    },
    {
      Name: 'TKO Nutrition and Smoothies',
      Street: '9003 WATERFORD CENTRE BLVD',
      YelpCategories: 'Trainers,Nutritionists,Juice Bars & Smoothies',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 12
    },
    {
      Name: 'Bread Basket',
      Street: '11410 MANCHACA RD',
      YelpCategories: 'Beer, Wine & Spirits,Convenience Stores',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 14
    },
    {
      Name: 'Deerpark Middle School',
      Street: '8849 ANDERSON MILL RD',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 1
    },
    {
      Name: 'Shandeez Grill',
      Street: '8863 ANDERSON MILL RD',
      YelpCategories: 'Persian/Iranian,Mediterranean',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 218
    },
    {
      Name: 'RW - The Finishline Carwash',
      Street: '2900 BEE CAVES RD',
      YelpCategories: 'Car Wash,Auto Detailing',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 152
    },
    {
      Name: 'Macho\'s Taco\'s',
      Street: '12110 MANCHACA RD',
      YelpCategories: 'Mexican',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 176
    },
    {
      Name: 'Northland Shell',
      Street: '3310 NORTHLAND DR',
      YelpCategories: 'Gas Stations',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Easy Tiger',
      Street: '707 E 6TH ST',
      YelpCategories: 'German,Bakeries,Beer Gardens',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 1493
    },
    {
      Name: 'JJ Food Mart',
      Street: '1921 CEDAR BEND DR',
      YelpCategories: 'Convenience Stores',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Shop N Carry #1',
      Street: '8422 S CONGRESS AVE',
      YelpCategories: 'Grocery',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Stop n Save #3',
      Street: '1800 BURTON DR',
      YelpCategories: 'Convenience Stores',
      Score: 82,
      YelpRaiting: 2,
      YelpReviewCount: 1
    },
    {
      Name: 'KIPP Austin Public Schools',
      Street: '8509 FM 969 RD',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Contigo Austin',
      Street: '2027 ANCHOR LN',
      YelpCategories: 'Bars,American (Traditional)',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 734
    },
    {
      Name: 'Chago\'s',
      Street: '7301 N LAMAR BLVD',
      YelpCategories: 'Cuban,Puerto Rican',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 663
    },
    {
      Name: 'Violet Crown Cinema',
      Street: '434 W 2ND ST',
      YelpCategories: 'Cinema,Cafes,Bars',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 385
    },
    {
      Name: 'Collinfield House, The',
      Street: '9205 COLLINFIELD DR',
      YelpCategories: 'Assisted Living Facilities',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Wingzup',
      Street: '1000 E 41ST ST',
      YelpCategories: 'Chicken Wings,American (Traditional)',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 331
    },
    {
      Name: 'Park at the Domain, The',
      Street: '11601 DOMAIN DR',
      YelpCategories: 'Sports Bars,American (New),Tacos',
      Score: 70,
      YelpRaiting: 3,
      YelpReviewCount: 568
    },
    {
      Name: 'Dobie Market',
      Street: '2025 GUADALUPE ST',
      YelpCategories: 'Grocery',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 6
    },
    {
      Name: 'P. Terry\'s Burger Stand',
      Street: '204 W BEN WHITE BLVD',
      YelpCategories: 'Burgers,Fast Food',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 176
    },
    {
      Name: 'Zen Food Mart',
      Street: '3010 S LAMAR BLVD',
      YelpCategories: 'Convenience Stores',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'DoubleDave\'s Pizzaworks',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Pizza',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 81
    },
    {
      Name: 'Little Caesar\'s',
      Street: '9411 N LAMAR BLVD',
      YelpCategories: 'Pizza',
      Score: 92,
      YelpRaiting: 2,
      YelpReviewCount: 14
    },
    {
      Name: 'Brookside Farm',
      Street: '2213 E HOWARD LN',
      YelpCategories: 'Counseling & Mental Health',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Alonti Catering',
      Street: '12001 BURNET RD',
      YelpCategories: 'Caterers',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 6
    },
    {
      Name: 'Gracy Food Mart',
      Street: '12001 BURNET RD',
      YelpCategories: 'Burgers,American (Traditional)',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 143
    },
    {
      Name: '7-Eleven #12702',
      Street: '1747 E OLTORF ST',
      YelpCategories: 'Convenience Stores,Coffee & Tea',
      Score: 88,
      YelpRaiting: 2,
      YelpReviewCount: 12
    },
    {
      Name: 'G\'s Dynamite Deli',
      Street: '2312 S 1ST ST',
      YelpCategories: 'Delis,Sandwiches,Salad',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 192
    },
    {
      Name: 'Dimassi\'s Mediterranean Buffet',
      Street: '12636 RESEARCH BLVD',
      YelpCategories: 'Buffets,Mediterranean',
      Score: 77,
      YelpRaiting: 4,
      YelpReviewCount: 404
    },
    {
      Name: 'China Spice',
      Street: '9710 N LAMAR BLVD',
      YelpCategories: 'Dim Sum,Seafood,Cantonese',
      Score: 75,
      YelpRaiting: 3,
      YelpReviewCount: 18
    },
    {
      Name: 'Central Austin Youth League',
      Street: '2215 RIVERVIEW ST',
      YelpCategories: 'Amateur Sports Teams',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Subway Restaurant #34451',
      Street: '3005 S LAMAR BLVD',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 13
    },
    {
      Name: 'Sam\'s Club #8259 (Meat and Produce)',
      Street: '9900 S IH',
      YelpCategories: 'Department Stores,Wholesale Stores,Grocery',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 31
    },
    {
      Name: 'Lexus of Austin',
      Street: '9910 STONELAKE BLVD',
      YelpCategories: 'Car Dealers,Auto Repair',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 221
    },
    {
      Name: 'Spring Food Mart',
      Street: '13125 POND SPRINGS RD',
      YelpCategories: 'Convenience Stores',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 13
    },
    {
      Name: 'YaYa Cafe',
      Street: '3706 GUADALUPE ST',
      YelpCategories: 'Cafes,Coffee & Tea,Vietnamese',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 221
    },
    {
      Name: 'Brixton, The',
      Street: '1412 E 6TH ST',
      YelpCategories: 'Dive Bars,Lounges',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 167
    },
    {
      Name: 'Noon Mediterranean, Inc',
      Street: '2530 GUADALUPE ST',
      YelpCategories: 'Mediterranean,Greek',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 41
    },
    {
      Name: 'HEB Food Store #628',
      Street: '2512 E RIVERSIDE DR',
      YelpCategories: 'Gas Stations',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'Sam\'s Club #8259',
      Street: '9900 S IH',
      YelpCategories: 'Department Stores,Wholesale Stores,Grocery',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 31
    },
    {
      Name: 'Donut Taco Palace I',
      Street: '5446 W US 290 HWY',
      YelpCategories: 'Tacos,Donuts,Sandwiches',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 90
    },
    {
      Name: 'Kung Fu Buffet',
      Street: '15424 FM 1825 RD',
      YelpCategories: 'Chinese',
      Score: 71,
      YelpRaiting: 3,
      YelpReviewCount: 137
    },
    {
      Name: 'Sprouts Farmers Market',
      Street: '4006 S LAMAR BLVD',
      YelpCategories: 'Grocery,Farmers Market,Health Markets',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 77
    },
    {
      Name: 'Dollar General Store #12630',
      Street: '13712 FM 969 RD',
      YelpCategories: 'Discount Store',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 4
    },
    {
      Name: 'Tinos Greek Cafe',
      Street: '1201 BARBARA JORDAN BLVD',
      YelpCategories: 'Greek',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 93
    },
    {
      Name: 'Gourmands',
      Street: '2316 WEBBERVILLE RD',
      YelpCategories: 'Sandwiches,Pubs,Salad',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 478
    },
    {
      Name: 'El Pollo Rico',
      Street: '9717 N LAMAR BLVD',
      YelpCategories: 'Mexican',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 37
    },
    {
      Name: 'Rodeway Inn',
      Street: '2711 S IH',
      YelpCategories: 'Hotels',
      Score: 92,
      YelpRaiting: 2,
      YelpReviewCount: 4
    },
    {
      Name: 'Torchy\'s Tacos',
      Street: '11521 N FM 620 RD',
      YelpCategories: 'Breakfast & Brunch,Tacos',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 524
    },
    {
      Name: 'Happy Hearts Bilingual Learning Center',
      Street: '6615 MANCHACA RD',
      YelpCategories: 'Child Care & Day Care',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 7
    },
    {
      Name: 'Donut Taco Palace II',
      Street: '1807 W SLAUGHTER LN',
      YelpCategories: 'Bakeries,Donuts',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 77
    },
    {
      Name: 'Mama Fu\'s Lakeline',
      Street: '11301 LAKELINE BLVD',
      YelpCategories: 'Asian Fusion,Chinese',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 175
    },
    {
      Name: 'Edis Chocolates',
      Street: '3808 SPICEWOOD SPRINGS RD',
      YelpCategories: 'Desserts,Chocolatiers & Shops,Cupcakes',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 85
    },
    {
      Name: 'Harmony School of Political Science and Communication-Austin',
      Street: '13415 N FM 620 RD',
      YelpCategories: 'Elementary Schools,Middle Schools & High Schools',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Starbucks Coffee #16052',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Coffee & Tea',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 24
    },
    {
      Name: 'Howdy Donut',
      Street: '343 S CONGRESS AVE',
      YelpCategories: 'Donuts',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 68
    },
    {
      Name: 'Lucy\'s Fried Chicken',
      Street: '2218 COLLEGE AVE',
      YelpCategories: 'American (New),Chicken Wings',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 869
    },
    {
      Name: 'Tropicana Cuban Restaurant',
      Street: '9616 N LAMAR BLVD',
      YelpCategories: 'Cuban,Cafes,Sandwiches',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 164
    },
    {
      Name: 'JD\'s Market Decker',
      Street: '6506 DECKER LN',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Chosun Galbi Korean BBQ & Grill',
      Street: '713 E HUNTLAND DR',
      YelpCategories: 'Korean,Barbeque',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 329
    },
    {
      Name: 'WL - West Lake Market',
      Street: '96 REDBUD TRL',
      YelpCategories: 'Grocery',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Larry\'s Giant Subs',
      Street: '5030 W US 290 HWY',
      YelpCategories: 'Sandwiches',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 81
    },
    {
      Name: 'LT Country Market',
      Street: '3325 S FM 620 RD',
      YelpCategories: 'Convenience Stores',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 14
    },
    {
      Name: 'Wienerschnitzel #816',
      Street: '2512 W BRAKER LN',
      YelpCategories: 'Hot Dogs,Fast Food,Sandwiches',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 43
    },
    {
      Name: 'Olive & June',
      Street: '3411 GLENVIEW AVE',
      YelpCategories: 'Italian',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 522
    },
    {
      Name: 'Coffee Bean & Tea Leaf,The',
      Street: '5701 W SLAUGHTER LN',
      YelpCategories: 'Coffee & Tea,Breakfast & Brunch,Sandwiches',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 56
    },
    {
      Name: 'Wok On Fire Restaurant',
      Street: '9901 BRODIE LN',
      YelpCategories: 'Thai,Asian Fusion,Taiwanese',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 197
    },
    {
      Name: '1st Food Mart',
      Street: '1410 S 1ST ST',
      YelpCategories: 'Convenience Stores',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 9
    },
    {
      Name: 'Cherry Creek Catfish Company',
      Street: '5700 MANCHACA RD',
      YelpCategories: 'Seafood,Comfort Food',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 334
    },
    {
      Name: 'Taco-Mex',
      Street: '2944 E 12TH ST',
      YelpCategories: 'Tex-Mex',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 20
    },
    {
      Name: 'Austin Hookah Lounge',
      Street: '2621 JONES RD',
      YelpCategories: 'Hookah Bars',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 33
    },
    {
      Name: 'Jimmy John\'s # 1293',
      Street: '1100 CENTER RIDGE DR',
      YelpCategories: 'Sandwiches',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 40
    },
    {
      Name: 'Teapioca Lounge',
      Street: '9600 S IH',
      YelpCategories: 'Coffee & Tea,Bubble Tea,Juice Bars & Smoothies',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 238
    },
    {
      Name: 'Music Lab, Inc',
      Street: '1306 W OLTORF ST',
      YelpCategories: 'Recording & Rehearsal Studios,Musical Instruments & Teachers,Electronics',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 8
    },
    {
      Name: 'Corner Bar',
      Street: '1901 S LAMAR BLVD',
      YelpCategories: 'Sports Bars,Cocktail Bars,Beer Bar',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 87
    },
    {
      Name: 'Kerbey Lane Cafe',
      Street: '3003 S LAMAR BLVD',
      YelpCategories: 'Breakfast & Brunch,Cafes',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 884
    },
    {
      Name: 'Sorrentos Coffee',
      Street: '3021 W ANDERSON LN',
      YelpCategories: 'Coffee & Tea,Juice Bars & Smoothies,Breakfast & Brunch',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 153
    },
    {
      Name: 'Little Munchkins Learning Ctr',
      Street: '2020 DENTON DR',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 16
    },
    {
      Name: 'MN - Big Country Grill',
      Street: '101 N LEXINGTON ST',
      YelpCategories: 'American (Traditional),Burgers',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 55
    },
    {
      Name: 'Cover 2',
      Street: '13701 N US 183 HWY',
      YelpCategories: 'American (New),Sports Bars',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 279
    },
    {
      Name: 'Central Donut',
      Street: '8516 ANDERSON MILL RD',
      YelpCategories: 'Donuts',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 60
    },
    {
      Name: 'Drink.Well.',
      Street: '207 E 53RD ST',
      YelpCategories: 'Gastropubs,Bars,American (Traditional)',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 297
    },
    {
      Name: 'AVM Subway LLC',
      Street: '809 CONGRESS AVE',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 23
    },
    {
      Name: 'Weather Up',
      Street: '1808 E CESAR CHAVEZ ST',
      YelpCategories: 'Diners,Cocktail Bars,Breakfast & Brunch',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 294
    },
    {
      Name: 'China Hill',
      Street: '2800 W WILLIAM CANNON DR',
      YelpCategories: 'Chinese',
      Score: 80,
      YelpRaiting: 3,
      YelpReviewCount: 154
    },
    {
      Name: 'El Naranjo Restaurant',
      Street: '85 RAINEY ST',
      YelpCategories: 'Mexican',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 386
    },
    {
      Name: 'Reserve at Lake Travis Swim Park',
      Street: '2208 SEABISCUIT CV',
      YelpCategories: 'Resorts',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 12
    },
    {
      Name: 'Hillside Farmacy',
      Street: '1209 E 11TH ST',
      YelpCategories: 'American (New),Breakfast & Brunch,Bars',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 788
    },
    {
      Name: 'Midnight Cowboy',
      Street: '313 E 6TH ST',
      YelpCategories: 'Bars',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 352
    },
    {
      Name: 'Make It Sweet',
      Street: '9070 RESEARCH BLVD',
      YelpCategories: 'Cooking Schools,Desserts',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 105
    },
    {
      Name: 'Pelons',
      Street: '802 RED RIVER ST',
      YelpCategories: 'Tex-Mex,Bars,Tacos',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 362
    },
    {
      Name: 'Workhorse',
      Street: '100 E NORTH LOOP BLVD',
      YelpCategories: 'Dive Bars,American (Traditional)',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 276
    },
    {
      Name: 'Midtown Live',
      Street: '7408 CAMERON RD',
      YelpCategories: 'Soul Food,Sports Bars,Dance Clubs',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 20
    },
    {
      Name: 'Lupe Tortilla Mexican Restaurant',
      Street: '10515 N MOPAC EXPY',
      YelpCategories: 'Mexican,Gluten-Free,Tex-Mex',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 570
    },
    {
      Name: 'HandleBar',
      Street: '121 E 5TH ST',
      YelpCategories: 'Beer Bar,Cocktail Bars,Dive Bars',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 310
    },
    {
      Name: 'INKA Chicken',
      Street: '1707 W WELLS BRANCH PKWY',
      YelpCategories: 'Peruvian,Latin American,Gluten-Free',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 521
    },
    {
      Name: 'Texas Bakery',
      Street: '10901 N LAMAR BLVD',
      YelpCategories: 'Bakeries',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 78
    },
    {
      Name: 'Street',
      Street: '3407 GREYSTONE DR',
      YelpCategories: 'Sushi Bars,Japanese',
      Score: 74,
      YelpRaiting: 4,
      YelpReviewCount: 105
    },
    {
      Name: 'Hop Doddy Burger Bar',
      Street: '2438 W ANDERSON LN',
      YelpCategories: 'Burgers,Juice Bars & Smoothies,Cocktail Bars',
      Score: 72,
      YelpRaiting: 4,
      YelpReviewCount: 1599
    },
    {
      Name: 'Firehouse Subs #465',
      Street: '7318 MC NEIL DR',
      YelpCategories: 'Sandwiches,Fast Food,Delis',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 64
    },
    {
      Name: 'Quad Food Mart',
      Street: '628 E OLTORF ST',
      YelpCategories: 'Convenience Stores',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Tarka Indian Kitchen',
      Street: '2525 W ANDERSON LN',
      YelpCategories: 'Indian',
      Score: 74,
      YelpRaiting: 4,
      YelpReviewCount: 480
    },
    {
      Name: 'BC - Whole Foods Market - Meat',
      Street: '12601 HILL COUNTRY BLVD',
      YelpCategories: 'Grocery,Health Markets,Coffee & Tea',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 78
    },
    {
      Name: 'BC - Whole Foods Market - Prepared Foods',
      Street: '12601 HILL COUNTRY BLVD',
      YelpCategories: 'Grocery,Health Markets,Coffee & Tea',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 78
    },
    {
      Name: 'Blenders and Bowls',
      Street: '206 E 4TH ST',
      YelpCategories: 'Juice Bars & Smoothies,Acai Bowls,Breakfast & Brunch',
      Score: 85,
      YelpRaiting: 5,
      YelpReviewCount: 352
    },
    {
      Name: 'Corner Bakery Cafe',
      Street: '9761 GREAT HILLS TRL',
      YelpCategories: 'Bakeries,Cafes',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 124
    },
    {
      Name: 'Firehouse Subs',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Sandwiches,Fast Food,Delis',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 94
    },
    {
      Name: 'Little Caesar\'s',
      Street: '2601 E 7TH ST',
      YelpCategories: 'Pizza',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 12
    },
    {
      Name: 'Lamar Food Store',
      Street: '1222 S LAMAR BLVD',
      YelpCategories: 'Grocery',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Kikka@Whole Foods Arbor Trails',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'IV Hydration,Cryotherapy,Undersea/Hyperbaric Medicine',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 25
    },
    {
      Name: 'WL - P. Terry\'s Burger Stand',
      Street: '701 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Burgers,Fast Food',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 90
    },
    {
      Name: 'Taqueria Las Chivas, Inc.',
      Street: '8624 N LAMAR BLVD',
      YelpCategories: 'Mexican,Sports Bars',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 30
    },
    {
      Name: 'Jack in the Box #867',
      Street: '6210 W WILLIAM CANNON DR',
      YelpCategories: 'Fast Food,Burgers',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 28
    },
    {
      Name: 'Circle K Store #2704687',
      Street: '606 W SLAUGHTER LN',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 94,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Whole Foods Market - Meat Market',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Grocery',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 148
    },
    {
      Name: 'Whole Foods Market - Seafood Market',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Grocery',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 148
    },
    {
      Name: 'Viva Meat Market',
      Street: '8610 N LAMAR BLVD',
      YelpCategories: 'Grocery',
      Score: 74,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'K1 Speed',
      Street: '2500 MC HALE CT',
      YelpCategories: 'Amusement Parks,Go Karts,Venues & Event Spaces',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 189
    },
    {
      Name: 'Taco More Restaurant',
      Street: '2015 E RIVERSIDE DR',
      YelpCategories: 'Tacos',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 189
    },
    {
      Name: 'Jack in the Box #845',
      Street: '1936 E OLTORF ST',
      YelpCategories: 'Fast Food',
      Score: 87,
      YelpRaiting: 2,
      YelpReviewCount: 33
    },
    {
      Name: 'Jack in the Box #810',
      Street: '7901 BURNET RD',
      YelpCategories: 'Fast Food',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 23
    },
    {
      Name: 'Jack in the Box #825',
      Street: '814 E RUNDBERG LN',
      YelpCategories: 'Fast Food',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 11
    },
    {
      Name: 'Jack in the Box #840',
      Street: '110 E WILLIAM CANNON DR',
      YelpCategories: 'American (New),Fast Food',
      Score: 87,
      YelpRaiting: 2,
      YelpReviewCount: 26
    },
    {
      Name: 'Jack in the Box #842',
      Street: '904 E BRAKER LN',
      YelpCategories: 'Fast Food,Burgers',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 18
    },
    {
      Name: 'Jack in the Box #843',
      Street: '9825 BURNET RD',
      YelpCategories: 'Burgers',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 16
    },
    {
      Name: 'Jack in the Box #922',
      Street: '12309 DESSAU RD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 92,
      YelpRaiting: 2,
      YelpReviewCount: 24
    },
    {
      Name: 'MN - Creative World Learning Center - Austin Inc.',
      Street: '11401 E US 290 HWY',
      YelpCategories: 'Preschools,Child Care & Day Care',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 9
    },
    {
      Name: 'Mavericks',
      Street: '1700 GRAND AVENUE PKWY',
      YelpCategories: 'Dance Clubs,Music Venues',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 52
    },
    {
      Name: 'Los Potrillos Restaurant',
      Street: '9120 N IH',
      YelpCategories: 'Mexican',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 15
    },
    {
      Name: 'Wild Wood Bakehouse',
      Street: '3016 GUADALUPE ST',
      YelpCategories: 'Bakeries,Gluten-Free,American (Traditional)',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 287
    },
    {
      Name: 'Jack in the Box #864',
      Street: '14910 FM 1825 RD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 87,
      YelpRaiting: 2,
      YelpReviewCount: 21
    },
    {
      Name: 'ABIA Ruta Maya',
      Street: '3600 PRESIDENTIAL BLVD',
      YelpCategories: 'Coffee & Tea',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 75
    },
    {
      Name: 'Jack in the Box #907',
      Street: '1151 AIRPORT BLVD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 11
    },
    {
      Name: 'The Hideout Theatre',
      Street: '617 CONGRESS AVE',
      YelpCategories: 'Performing Arts,Comedy Clubs',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 109
    },
    {
      Name: 'Gold\'s Gym - Anderson Arbor',
      Street: '13435 N US 183 HWY',
      YelpCategories: 'Gyms,Trainers,Yoga',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 55
    },
    {
      Name: 'Tacos Ivan',
      Street: '7007 VILLAGE CENTER DR',
      YelpCategories: 'Food Stands,Mexican',
      Score: 78,
      YelpRaiting: 5,
      YelpReviewCount: 46
    },
    {
      Name: 'Don Mario Mexican Restaurant',
      Street: '1700 N FM 620 RD',
      YelpCategories: 'Mexican',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 173
    },
    {
      Name: 'Cedar Food Mart',
      Street: '729 E SLAUGHTER LN',
      YelpCategories: 'Beer, Wine & Spirits',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'University Towers',
      Street: '801 W 24TH ST',
      YelpCategories: 'Apartments',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 4
    },
    {
      Name: 'Los Pepes Mexican Food',
      Street: '4700 LOYOLA LN',
      YelpCategories: 'Mexican',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Domino\'s Pizza',
      Street: '8141 MESA DR',
      YelpCategories: 'Pizza,Chicken Wings,Sandwiches',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 46
    },
    {
      Name: 'One-2-One Bar',
      Street: '1509 S LAMAR BLVD',
      YelpCategories: 'Bars,Music Venues',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 75
    },
    {
      Name: 'Chipotle Mexican Grill #1723',
      Street: '2320 S LAMAR BLVD',
      YelpCategories: 'Mexican,Fast Food',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 53
    },
    {
      Name: 'Noon Mediterranean, Inc',
      Street: '2438 W ANDERSON LN',
      YelpCategories: 'Mediterranean,Greek',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 59
    },
    {
      Name: 'Firehouse Lounge',
      Street: '605 BRAZOS ST',
      YelpCategories: 'Lounges,Cocktail Bars',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 408
    },
    {
      Name: 'Berts on 24th',
      Street: '907 W 24TH ST',
      YelpCategories: 'Barbeque',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 48
    },
    {
      Name: 'Bungalow',
      Street: '92 RAINEY ST',
      YelpCategories: 'Bars',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 143
    },
    {
      Name: 'Pepe\'s Fruit Cup #3',
      Street: '2015 E RIVERSIDE DR',
      YelpCategories: 'Desserts,Soup,Burgers',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 22
    },
    {
      Name: 'Clark\'s Oyster Bar',
      Street: '1200 W 6TH ST',
      YelpCategories: 'Seafood',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 487
    },
    {
      Name: 'Cafe Regents',
      Street: '3230 TRAVIS COUNTRY CIR',
      YelpCategories: 'Education',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Orange Leaf Self Serve Frozen Yogurt',
      Street: '9600 S IH',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Desserts,Do-It-Yourself Food',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 28
    },
    {
      Name: 'Red Ash Restaurant',
      Street: '303 COLORADO ST',
      YelpCategories: 'Italian,Seafood,Tapas/Small Plates',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 364
    },
    {
      Name: 'LW - China Pacific Restaurant',
      Street: '107 S FM 620 RD',
      YelpCategories: 'Chinese',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 57
    },
    {
      Name: 'Dollar Tree #5110',
      Street: '9515 N LAMAR BLVD',
      YelpCategories: 'Department Stores',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 8
    },
    {
      Name: 'Hi Hat Public House',
      Street: '2121 E 6TH ST',
      YelpCategories: 'American (New),Bars',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 211
    },
    {
      Name: 'Hampton Inn & Suites Austin@The Univ./Capitol',
      Street: '1701 LAVACA ST',
      YelpCategories: 'Hotels',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 89
    },
    {
      Name: 'La Catedral Del Marisco #2',
      Street: '1605 E OLTORF ST',
      YelpCategories: 'Seafood,Mexican,Breakfast & Brunch',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 40
    },
    {
      Name: 'Daily Juice Cafe',
      Street: '3720 FAR WEST BLVD',
      YelpCategories: 'Juice Bars & Smoothies,Acai Bowls',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 82
    },
    {
      Name: 'SV - Texadelphia',
      Street: '5400 BRODIE LN',
      YelpCategories: 'Sandwiches,American (Traditional),Cheesesteaks',
      Score: 77,
      YelpRaiting: 4,
      YelpReviewCount: 62
    },
    {
      Name: 'Dunkin Donuts',
      Street: '12200 RESEARCH BLVD',
      YelpCategories: 'Donuts',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 142
    },
    {
      Name: 'Cafe Josie',
      Street: '1200 W 6TH ST',
      YelpCategories: 'American (New),Seafood,Wine Bars',
      Score: 85,
      YelpRaiting: 5,
      YelpReviewCount: 261
    },
    {
      Name: 'Polvos En La Brissa',
      Street: '14735 BRATTON LN',
      YelpCategories: 'Mexican',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 25
    },
    {
      Name: 'Nueces Mart',
      Street: '2700 NUECES ST',
      YelpCategories: 'Convenience Stores',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Lubys Etc at Lavaca',
      Street: '700 LAVACA ST',
      YelpCategories: 'Cafeteria',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'The Bonneville Restaurant',
      Street: '202 W CESAR CHAVEZ ST',
      YelpCategories: 'American (New)',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 262
    },
    {
      Name: 'Snap Kitchen',
      Street: '6317 FM 2244 RD',
      YelpCategories: 'Gluten-Free,Health Markets',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 30
    },
    {
      Name: 'School House Pub',
      Street: '2207 MANOR RD',
      YelpCategories: 'Pubs,American (Traditional)',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 145
    },
    {
      Name: 'Salt & Time Butcher Shop and Salumeria',
      Street: '1912 E 7TH ST',
      YelpCategories: 'Butcher,American (New),Beer, Wine & Spirits',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 425
    },
    {
      Name: 'Epicerie',
      Street: '2307 HANCOCK DR',
      YelpCategories: 'Grocery,Cafes',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 315
    },
    {
      Name: 'Subway',
      Street: '3710 CRAWFORD AVE',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 75,
      YelpRaiting: 3,
      YelpReviewCount: 16
    },
    {
      Name: 'Subway',
      Street: '2315 S CONGRESS AVE',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 19
    },
    {
      Name: 'Hana World Market - Meat and Fish',
      Street: '1700 W PARMER LN',
      YelpCategories: 'Food Court,International Grocery',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 147
    },
    {
      Name: 'Hana World Market - Deli',
      Street: '1700 W PARMER LN',
      YelpCategories: 'Food Court,International Grocery',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 147
    },
    {
      Name: 'LW - Holiday Inn Express',
      Street: '15707 OAK GROVE BLVD',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 19
    },
    {
      Name: 'Dr. Wok',
      Street: '13201 POND SPRINGS RD',
      YelpCategories: 'Chinese',
      Score: 81,
      YelpRaiting: 3,
      YelpReviewCount: 105
    },
    {
      Name: 'Freddy\'s Frozen Custard & Steakburgers',
      Street: '8300 N FM 620 RD',
      YelpCategories: 'Burgers,Ice Cream & Frozen Yogurt',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 55
    },
    {
      Name: 'McDonald\'s # 11150',
      Street: '1143 1 2 AIRPORT BLVD',
      YelpCategories: 'Burgers,Fast Food,Coffee & Tea',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 44
    },
    {
      Name: 'Casino\'s South Side',
      Street: '1502 W BEN WHITE BLVD',
      YelpCategories: 'Casinos',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 1
    },
    {
      Name: 'Hyatt Place - Austin Downtown',
      Street: '211 E 3RD ST',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 149
    },
    {
      Name: 'Kid Spa Austin',
      Street: '10526 W PARMER LN',
      YelpCategories: 'Preschools,Child Care & Day Care',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 47
    },
    {
      Name: 'Water Tank Bar & Grill, The',
      Street: '7309 MC NEIL DR',
      YelpCategories: 'Bars,Karaoke,Music Venues',
      Score: 78,
      YelpRaiting: 3,
      YelpReviewCount: 83
    },
    {
      Name: 'Gloria\'s Restaurant',
      Street: '300 W 6TH ST',
      YelpCategories: 'Mexican,Salvadoran,Tex-Mex',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 275
    },
    {
      Name: 'Cultivo, LLC',
      Street: '2512 E 12TH ST',
      YelpCategories: 'Caterers,Personal Chefs',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 41
    },
    {
      Name: 'Coco Paloma Desserts',
      Street: '8711 BURNET RD',
      YelpCategories: 'Bakeries,Desserts',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 45
    },
    {
      Name: 'Menchie\'s Frozen Yogurt',
      Street: '5145 N FM 620 RD',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 33
    },
    {
      Name: 'Donut 7',
      Street: '11005 BURNET RD',
      YelpCategories: 'Donuts,Breakfast & Brunch,Tacos',
      Score: 85,
      YelpRaiting: 5,
      YelpReviewCount: 209
    },
    {
      Name: 'Dollar Tree #3627',
      Street: '4211 S LAMAR BLVD',
      YelpCategories: 'Discount Store',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 34
    },
    {
      Name: 'Cuppa Austin',
      Street: '9225 W PARMER LN',
      YelpCategories: 'Coffee & Tea',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 261
    },
    {
      Name: 'Thai, How Are You? Thai Food & Sushi',
      Street: '2100 GUADALUPE ST',
      YelpCategories: 'Food Trucks,Thai,Sushi Bars',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Craft Pride',
      Street: '61 RAINEY ST',
      YelpCategories: 'Bars,Breakfast & Brunch,Pizza',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 403
    },
    {
      Name: 'Santorini Cafe',
      Street: '11800 N LAMAR BLVD',
      YelpCategories: 'Greek,Wine Bars',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 612
    },
    {
      Name: 'Tuk Tuk Thai Cafe',
      Street: '5517 MANCHACA RD',
      YelpCategories: 'Thai',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 558
    },
    {
      Name: 'Family Dollar Store # 30028',
      Street: '14001 FM 969 RD',
      YelpCategories: 'Shopping',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Foodspot',
      Street: '2538 ELMONT DR',
      YelpCategories: 'Gas Stations',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'White Horse, The',
      Street: '500 COMAL ST',
      YelpCategories: 'Dance Clubs,Dive Bars,Music Venues',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 318
    },
    {
      Name: 'El Pollo Rico #5',
      Street: '1717 S PLEASANT VALLEY RD',
      YelpCategories: 'Mexican,Chicken Wings',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 17
    },
    {
      Name: 'Shipley Donuts',
      Street: '2113 W ANDERSON LN',
      YelpCategories: 'Donuts,Breakfast & Brunch',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 43
    },
    {
      Name: 'Chicken Express',
      Street: '8300 N FM 620 RD',
      YelpCategories: 'Chicken Wings,Fast Food',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 47
    },
    {
      Name: 'WL - Pinkberry #170',
      Street: '3300 BEE CAVES RD',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 48
    },
    {
      Name: 'Container Bar',
      Street: '90 RAINEY ST',
      YelpCategories: 'Bars,Music Venues',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 273
    },
    {
      Name: 'Holiday In Express Austin Airport',
      Street: '7601 E BEN WHITE BLVD',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 93,
      YelpRaiting: 2,
      YelpReviewCount: 25
    },
    {
      Name: 'Sodexo at Farmers Insurance',
      Street: '15700 LONG VISTA DR',
      YelpCategories: 'Insurance',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Dollar Tree #3279',
      Street: '5310 BURNET RD',
      YelpCategories: 'Shopping',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 27
    },
    {
      Name: 'Marble Slab Creamery',
      Street: '14010 N US 183 HWY',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Desserts,Caterers',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 51
    },
    {
      Name: 'Renaissance Austin Hotel',
      Street: '9721 ARBORETUM BLVD',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 216
    },
    {
      Name: 'Moviehouse & Eatery',
      Street: '8300 N FM 620 RD',
      YelpCategories: 'Cinema',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 654
    },
    {
      Name: 'Texas Mutual Cafe',
      Street: '6210 E US 290 HWY',
      YelpCategories: 'Insurance',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Marco\'s Pizza',
      Street: '11011 RESEARCH BLVD',
      YelpCategories: 'Italian,Pizza',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 74
    },
    {
      Name: 'Houndstooth Coffee',
      Street: '401 CONGRESS AVE',
      YelpCategories: 'Coffee & Tea',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 273
    },
    {
      Name: 'Driskill Hotel - The Grill',
      Street: '604 BRAZOS ST',
      YelpCategories: 'American (New)',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 195
    },
    {
      Name: 'Emo\'s East',
      Street: '2015 E RIVERSIDE DR',
      YelpCategories: 'Music Venues,Venues & Event Spaces,Bars',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 147
    },
    {
      Name: 'Tony C\'s Pizza & Wine Bar',
      Street: '10526 W PARMER LN',
      YelpCategories: 'Pizza,Italian,Sandwiches',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 287
    },
    {
      Name: 'RockSports - Joel\'s Coffee',
      Street: '11301 LAKELINE BLVD',
      YelpCategories: 'Sewing & Alterations,Embroidery & Crochet,Screen Printing/T-Shirt Printing',
      Score: 91,
      YelpRaiting: 1,
      YelpReviewCount: 7
    },
    {
      Name: 'Whisler\'s',
      Street: '1816 E 6TH ST',
      YelpCategories: 'Cocktail Bars',
      Score: 86,
      YelpRaiting: 5,
      YelpReviewCount: 349
    },
    {
      Name: 'Donn\'s BBQ',
      Street: '2617 S IH',
      YelpCategories: 'Barbeque,Breakfast & Brunch',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 91
    },
    {
      Name: 'Lodge, The',
      Street: '411 E 6TH ST',
      YelpCategories: 'Bars',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 24
    },
    {
      Name: 'Third Base',
      Street: '13301 N US 183 HWY',
      YelpCategories: 'American (Traditional)',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 166
    },
    {
      Name: 'Chick-fil-A',
      Street: '503 W MARTIN LUTHER KING JR BLVD',
      YelpCategories: 'Fast Food',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 115
    },
    {
      Name: 'Searsucker',
      Street: '415 COLORADO ST',
      YelpCategories: 'American (New)',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 580
    },
    {
      Name: 'Four Seasons Community School',
      Street: '3909 ADELPHI LN',
      YelpCategories: 'Preschools,Child Care & Day Care',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'Kung Fu Saloon',
      Street: '716 W 6TH ST',
      YelpCategories: 'Arcades,Sports Bars,Burgers',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 344
    },
    {
      Name: 'Salvation Pizza',
      Street: '624 W 34TH ST',
      YelpCategories: 'Pizza,Salad,Sandwiches',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 455
    },
    {
      Name: 'Tropical Market',
      Street: '10805 N LAMAR BLVD',
      YelpCategories: 'Imported Food',
      Score: 72,
      YelpRaiting: 4,
      YelpReviewCount: 7
    },
    {
      Name: 'Star Market',
      Street: '7930 THAXTON RD',
      YelpCategories: 'Gas Stations,Grocery',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 15
    },
    {
      Name: 'Belmont, The',
      Street: '305 W 6TH ST',
      YelpCategories: 'Music Venues,Venues & Event Spaces',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 70
    },
    {
      Name: 'Super Bowl',
      Street: '719 W WILLIAM CANNON DR',
      YelpCategories: 'Chinese',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 191
    },
    {
      Name: 'Japan Cafe & Grill',
      Street: '11200 LAKELINE MALL DR',
      YelpCategories: 'Japanese',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 23
    },
    {
      Name: 'Starstop 40',
      Street: '7701 CAMERON RD',
      YelpCategories: 'Convenience Stores',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'La Quinta Inn & Suites',
      Street: '10701 LAKELINE MALL DR',
      YelpCategories: 'Hotels',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 40
    },
    {
      Name: 'Winebelly',
      Street: '519 W OLTORF ST',
      YelpCategories: 'Tapas Bars,Wine Bars,Spanish',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 352
    },
    {
      Name: 'Snap Kitchen #7',
      Street: '3563 FAR WEST BLVD',
      YelpCategories: 'Gluten-Free,Health Markets',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 35
    },
    {
      Name: 'Corner Store #1551',
      Street: '12300 HARRIS BRANCH PKWY',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Totopos Grill',
      Street: '110 E WILLIAM CANNON DR',
      YelpCategories: 'Mexican',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 8
    },
    {
      Name: 'Signature #2',
      Street: '608 S LAMAR BLVD',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'JD\'s Supermarket - Bakery/Deli',
      Street: '9111 FM 812 RD',
      YelpCategories: 'Grocery',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 5
    },
    {
      Name: 'JR\'s Tacos',
      Street: '1921 CEDAR BEND DR',
      YelpCategories: 'Mexican,Breakfast & Brunch',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 129
    },
    {
      Name: 'Romano\'s Macaroni Grill',
      Street: '9828 GREAT HILLS TRL',
      YelpCategories: 'Italian',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 168
    },
    {
      Name: 'Bufalina',
      Street: '1519 E CESAR CHAVEZ ST',
      YelpCategories: 'Pizza,Italian',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 446
    },
    {
      Name: 'Uncle Julio\'s Fine Mexican Food',
      Street: '301 BRAZOS ST',
      YelpCategories: 'Tex-Mex,Mexican',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 332
    },
    {
      Name: 'Nugent Grocery Inc',
      Street: '808 JUSTIN LN',
      YelpCategories: 'Convenience Stores',
      Score: 76,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'Jersey Mike\'s Subs',
      Street: '2700 W ANDERSON LN',
      YelpCategories: 'Fast Food,Delis,Sandwiches',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 32
    },
    {
      Name: 'Citizen Eatery',
      Street: '5011 BURNET RD',
      YelpCategories: 'Vegetarian,Vegan,Breakfast & Brunch',
      Score: 87,
      YelpRaiting: 5,
      YelpReviewCount: 348
    },
    {
      Name: 'New Awlins Cajun Cafe',
      Street: '8650 SPICEWOOD SPRINGS RD',
      YelpCategories: 'Cajun/Creole,Italian,Seafood',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 244
    },
    {
      Name: 'P. Terry\'s Burger Stand',
      Street: '12301 N MOPAC EXPY',
      YelpCategories: 'Burgers,Fast Food',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 272
    },
    {
      Name: 'Highland',
      Street: '404 COLORADO ST',
      YelpCategories: 'Dance Clubs,Gay Bars,Lounges',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 43
    },
    {
      Name: 'Which Wich',
      Street: '259 W 3RD ST',
      YelpCategories: 'Sandwiches',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 91
    },
    {
      Name: 'Pour House',
      Street: '11835 JOLLYVILLE RD',
      YelpCategories: 'Pizza,Pubs',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 354
    },
    {
      Name: 'Domino\'s Pizza Store #6609',
      Street: '1509 S LAMAR BLVD',
      YelpCategories: 'Pizza',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 24
    },
    {
      Name: 'Domino\'s Pizza-Store #6404',
      Street: '720 BASTROP HWY',
      YelpCategories: 'Pizza,Chicken Wings,Sandwiches',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 27
    },
    {
      Name: 'Emerald Tavern Games and Cafe',
      Street: '9012 RESEARCH BLVD',
      YelpCategories: 'Coffee & Tea,Cafes,Tabletop Games',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 121
    },
    {
      Name: 'La Posada Mexican Restaurant',
      Street: '6800 WEST GATE BLVD',
      YelpCategories: 'Mexican,Tex-Mex,Salad',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 196
    },
    {
      Name: 'Milto\'s',
      Street: '2909 GUADALUPE ST',
      YelpCategories: 'Pizza,Greek,Mediterranean',
      Score: 76,
      YelpRaiting: 4,
      YelpReviewCount: 333
    },
    {
      Name: 'Buckshot',
      Street: '422 E 6TH ST',
      YelpCategories: 'Bars',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 85
    },
    {
      Name: 'Thai Spice',
      Street: '3600 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Thai',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 89
    },
    {
      Name: 'CEFCO #91',
      Street: '14200 N FM 620 RD',
      YelpCategories: 'Convenience Stores',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Domino\'s Pizza',
      Street: '1420 W WELLS BRANCH PKWY',
      YelpCategories: 'Pizza,Chicken Wings,Sandwiches',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 34
    },
    {
      Name: 'J.L. Smith Academy Austin, LLC',
      Street: '11530 MANCHACA RD',
      YelpCategories: 'Preschools,Elementary Schools',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Vista Academy of Austin-Mueller',
      Street: '1504 E 51ST ST',
      YelpCategories: 'Elementary Schools',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 4
    },
    {
      Name: 'Orange Leaf Frozen Yogurt',
      Street: '10526 W PARMER LN',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 44
    },
    {
      Name: 'Wright Bros. Brew and Brew',
      Street: '500 SAN MARCOS ST',
      YelpCategories: 'Bars,Cafes',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 231
    },
    {
      Name: 'Wheatsville Food Co-Op - Deli',
      Street: '4001 S LAMAR BLVD',
      YelpCategories: 'Grocery,Organic Stores',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 157
    },
    {
      Name: 'Hay Elotes',
      Street: '2214 E 7TH ST',
      YelpCategories: 'Desserts,Juice Bars & Smoothies,Ice Cream & Frozen Yogurt',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 140
    },
    {
      Name: 'Holiday Inn Express',
      Street: '10711 RESEARCH BLVD',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 38
    },
    {
      Name: 'Mean Eyed Cat',
      Street: '1621 W 5TH ST',
      YelpCategories: 'Music Venues,Bars,Barbeque',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 250
    },
    {
      Name: 'Crosswater Yacht Club',
      Street: '1505 HURST CREEK RD',
      YelpCategories: 'Boat Repair',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Subway',
      Street: '3407 W WELLS BRANCH PKWY',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 15
    },
    {
      Name: 'Phil\'s Ice House',
      Street: '13265 N US 183 HWY',
      YelpCategories: 'Burgers,American (Traditional),Sandwiches',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 190
    },
    {
      Name: 'Taco Cabana',
      Street: '5242 N LAMAR BLVD',
      YelpCategories: 'Mexican',
      Score: 74,
      YelpRaiting: 2,
      YelpReviewCount: 89
    },
    {
      Name: 'Mi -Tienda',
      Street: '8007 GESSNER DR',
      YelpCategories: 'Grocery',
      Score: 85,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Raising Cane\'s Chicken Fingers',
      Street: '415 W MARTIN LUTHER KING JR BLVD',
      YelpCategories: 'Fast Food',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 149
    },
    {
      Name: 'Subway',
      Street: '9300 N LAMAR BLVD',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'MN - Domino\'s Pizza',
      Street: '11211 E US 290 HWY',
      YelpCategories: 'Pizza,Chicken Wings,Sandwiches',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 35
    },
    {
      Name: 'League, The',
      Street: '10526 W PARMER LN',
      YelpCategories: 'Bars,American (Traditional)',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 341
    },
    {
      Name: 'Tiff\'s Treats South Austin',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Desserts,Bakeries',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 37
    },
    {
      Name: 'Starbucks Coffee Company',
      Street: '14028 N US 183 HWY',
      YelpCategories: 'Coffee & Tea',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Country Boyz Fixins',
      Street: '4140 E 12TH ST',
      YelpCategories: 'American (Traditional),Soul Food,Seafood',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 104
    },
    {
      Name: 'Summit',
      Street: '120 W 5TH ST',
      YelpCategories: 'Lounges',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 15
    },
    {
      Name: 'MN - McDonald\'s of Manor',
      Street: '12609 LEXINGTON ST',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 91,
      YelpRaiting: 2,
      YelpReviewCount: 24
    },
    {
      Name: 'Austin\'s Pizza # 40',
      Street: '2928 GUADALUPE ST',
      YelpCategories: 'Keys & Locksmiths',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'BC - Bee Cave Coffee Company',
      Street: '13420 GALLERIA CIR',
      YelpCategories: 'Coffee & Tea,Breakfast & Brunch,Sandwiches',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 129
    },
    {
      Name: 'Golden Chick',
      Street: '9600 N LAMAR BLVD',
      YelpCategories: 'Fast Food',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'Juiceland',
      Street: '2601 E CESAR CHAVEZ ST',
      YelpCategories: 'Juice Bars & Smoothies,Vegan,Vegetarian',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 61
    },
    {
      Name: 'Dolce Neve',
      Street: '1713 S 1ST ST',
      YelpCategories: 'Gelato,Ice Cream & Frozen Yogurt,Coffee & Tea',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 544
    },
    {
      Name: 'Royal Blue Grocery',
      Street: '301 BRAZOS ST',
      YelpCategories: 'Grocery',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 40
    },
    {
      Name: 'Hightower, The',
      Street: '1209 E 7TH ST',
      YelpCategories: 'American (New)',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 490
    },
    {
      Name: 'Whole Foods Market - Produce',
      Street: '11920 DOMAIN DR',
      YelpCategories: 'Grocery,Coffee & Tea,Health Markets',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 343
    },
    {
      Name: 'Whole  Foods Mkt. - Specialty(Cheese, Wine/Beer)',
      Street: '11920 DOMAIN DR',
      YelpCategories: 'Grocery,Coffee & Tea,Health Markets',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 343
    },
    {
      Name: 'Whole Foods Market - Meat Department',
      Street: '11920 DOMAIN DR',
      YelpCategories: 'Grocery,Coffee & Tea,Health Markets',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 343
    },
    {
      Name: 'Gus\'s Fried Chicken',
      Street: '117 SAN JACINTO BLVD',
      YelpCategories: 'Southern,Chicken Shop,Comfort Food',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 1881
    },
    {
      Name: 'Kikka at Whole Foods Domain',
      Street: '11920 DOMAIN DR',
      YelpCategories: 'Grocery,Coffee & Tea,Health Markets',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 343
    },
    {
      Name: 'Antojitos Hondurenos',
      Street: '7901 CAMERON RD',
      YelpCategories: 'Latin American',
      Score: 74,
      YelpRaiting: 3,
      YelpReviewCount: 17
    },
    {
      Name: 'Trinity Hall',
      Street: '311 E 5TH ST',
      YelpCategories: 'Venues & Event Spaces',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'In-N-Out Burger',
      Street: '4515 AIRPORT BLVD',
      YelpCategories: 'Burgers,Fast Food',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 606
    },
    {
      Name: 'Whole Foods Market - Prepared Foods',
      Street: '11920 DOMAIN DR',
      YelpCategories: 'Grocery,Coffee & Tea,Health Markets',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 343
    },
    {
      Name: 'Whole Foods Market - Bakery',
      Street: '11920 DOMAIN DR',
      YelpCategories: 'Grocery,Coffee & Tea,Health Markets',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 343
    },
    {
      Name: 'China Dragon',
      Street: '2700 W PECAN ST',
      YelpCategories: 'Chinese,Seafood,Noodles',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 121
    },
    {
      Name: 'Xian Sushi and Noodle',
      Street: '1801 E 51ST ST',
      YelpCategories: 'Sushi Bars,Chinese,Noodles',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 451
    },
    {
      Name: 'Kool Corner',
      Street: '6413 MANOR RD',
      YelpCategories: 'Convenience Stores',
      Score: 92,
      YelpRaiting: 2,
      YelpReviewCount: 2
    },
    {
      Name: 'Subway',
      Street: '1801 E 51ST ST',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 12
    },
    {
      Name: 'Half Step',
      Street: '75 1 2 RAINEY ST',
      YelpCategories: 'Cocktail Bars',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 165
    },
    {
      Name: 'Rosal Bakery',
      Street: '8101 SALT SPRINGS DR',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'Mariscos Los Jarochos',
      Street: '9200 N LAMAR BLVD',
      YelpCategories: 'Seafood,Mexican',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 45
    },
    {
      Name: 'Taco Bell #030146',
      Street: '6511 S IH',
      YelpCategories: 'Fast Food,Tex-Mex,Mexican',
      Score: 92,
      YelpRaiting: 2,
      YelpReviewCount: 21
    },
    {
      Name: 'Gatsby, The',
      Street: '708 E 6TH ST',
      YelpCategories: 'Cocktail Bars,Pubs,Music Venues',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 64
    },
    {
      Name: 'Taco Bell #30088',
      Street: '1825 W PARMER LN',
      YelpCategories: 'Fast Food,Mexican,Tex-Mex',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 37
    },
    {
      Name: 'Taco Bell #030168',
      Street: '2600 W BRAKER LN',
      YelpCategories: 'Tex-Mex,Fast Food,Mexican',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 11
    },
    {
      Name: 'Taco Bell #030153',
      Street: '5604 CAMERON RD',
      YelpCategories: 'Fast Food,Tex-Mex,Mexican',
      Score: 87,
      YelpRaiting: 2,
      YelpReviewCount: 29
    },
    {
      Name: 'Taco Bell #030140',
      Street: '201 E OLTORF ST',
      YelpCategories: 'Mexican,Fast Food',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 24
    },
    {
      Name: 'Taco Bell #030114',
      Street: '502 W WILLIAM CANNON DR',
      YelpCategories: 'Mexican,Tex-Mex,Fast Food',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 19
    },
    {
      Name: '7-Eleven Convenience Store # 36589A',
      Street: '10207 LAKE CREEK PKWY',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 87,
      YelpRaiting: 2,
      YelpReviewCount: 8
    },
    {
      Name: 'Sap\'s Fine Thai Cuisine',
      Street: '5800 BURNET RD',
      YelpCategories: 'Thai',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 347
    },
    {
      Name: 'La Moreliana Meat Market #2',
      Street: '1909 E WILLIAM CANNON DR',
      YelpCategories: 'Mexican',
      Score: 74,
      YelpRaiting: 4,
      YelpReviewCount: 9
    },
    {
      Name: 'Starbucks Coffee Company #19801',
      Street: '301 W 3RD ST',
      YelpCategories: 'Coffee & Tea',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 40
    },
    {
      Name: 'Domino\'s',
      Street: '1700 W PARMER LN',
      YelpCategories: 'Pizza,Chicken Wings,Sandwiches',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 46
    },
    {
      Name: 'Menchie\'s Frozen Yogurt',
      Street: '14028 N US 183 HWY',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 54
    },
    {
      Name: 'La Catedral Del Marisco',
      Street: '2711 E CESAR CHAVEZ ST',
      YelpCategories: 'Mexican',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Kublai Khan',
      Street: '12901 N IH',
      YelpCategories: 'Sushi Bars,Mongolian',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 194
    },
    {
      Name: 'Drink Daily Greens LLC',
      Street: '979 SPRINGDALE RD',
      YelpCategories: 'Juice Bars & Smoothies',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 9
    },
    {
      Name: 'Fairfield Inn Austin Northwest',
      Street: '11201 N MOPAC EXPY',
      YelpCategories: 'Hotels',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 42
    },
    {
      Name: 'Dos Batos',
      Street: '2525 W ANDERSON LN',
      YelpCategories: 'Mexican',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 455
    },
    {
      Name: 'Noon Mediterranean, Inc',
      Street: '6301 W PARMER LN',
      YelpCategories: 'Mediterranean,Greek',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 38
    },
    {
      Name: 'Omni Barton Crk Resort & Spa-Hill Country Kitchen',
      Street: '8212 BARTON CLUB DR',
      YelpCategories: 'Hotels',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 181
    },
    {
      Name: 'BC - Jersey Giant Pizza',
      Street: '13908 W SH',
      YelpCategories: 'Pizza,Italian',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 135
    },
    {
      Name: 'Southside Flying Pizza',
      Street: '1222 S LAMAR BLVD',
      YelpCategories: 'Pizza',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 69
    },
    {
      Name: 'Cornucopia Popcorn, Inc',
      Street: '3211 RED RIVER ST',
      YelpCategories: 'Popcorn Shops',
      Score: 83,
      YelpRaiting: 5,
      YelpReviewCount: 54
    },
    {
      Name: 'Omni Barton Creek Resort & Spa-Club Pool Cabana',
      Street: '8212 BARTON CLUB DR',
      YelpCategories: 'Hotels',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 181
    },
    {
      Name: 'Omni Barton Creek Resort & Spa-Halfway House',
      Street: '8511 CARRANZO DR',
      YelpCategories: 'Golf Equipment',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Omni Barton Crk Resort /Spa-Lakeside Dining Rm',
      Street: '1800 CLUBHOUSE HILL DR',
      YelpCategories: 'Restaurants',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Rockstar Bagels',
      Street: '1900 ROSEWOOD AVE',
      YelpCategories: 'Bagels',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 145
    },
    {
      Name: 'SV - Austin Custom Winery',
      Street: '5207 BRODIE LN',
      YelpCategories: 'Wineries',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 15
    },
    {
      Name: 'Noble Sandwich Co.',
      Street: '12233 N FM 620 RD',
      YelpCategories: 'Sandwiches,Breakfast & Brunch,Burgers',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 387
    },
    {
      Name: 'Holiday Inn Austin Airport',
      Street: '6711 E BEN WHITE BLVD',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 75
    },
    {
      Name: 'Cedro',
      Street: '14028 N US 183 HWY',
      YelpCategories: 'Italian,Wine Bars,Breakfast & Brunch',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 397
    },
    {
      Name: 'Ruth\'s Chris Steak House',
      Street: '107 W 6TH ST',
      YelpCategories: 'Steakhouses',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 280
    },
    {
      Name: 'Moonies Burger House',
      Street: '13450 N US 183 HWY',
      YelpCategories: 'Burgers,Fast Food',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 25
    },
    {
      Name: 'Palm Door, LLC',
      Street: '508 E 6TH ST',
      YelpCategories: 'Venues & Event Spaces',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 16
    },
    {
      Name: 'RW - Chinatown',
      Street: '2712 BEE CAVES RD',
      YelpCategories: 'Sushi Bars,Dim Sum',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 137
    },
    {
      Name: 'The Park on South Lamar',
      Street: '4024 S LAMAR BLVD',
      YelpCategories: 'Burgers,Sports Bars,Pizza',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 408
    },
    {
      Name: 'Wendy\'s W118',
      Street: '1000 E 41ST ST',
      YelpCategories: 'Fast Food,Burgers',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 22
    },
    {
      Name: 'Big Lots # 4387',
      Street: '801 E WILLIAM CANNON DR',
      YelpCategories: 'Department Stores',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 10
    },
    {
      Name: 'Himalaya Kosheli Nepali & Indian Restaurant',
      Street: '8650 SPICEWOOD SPRINGS RD',
      YelpCategories: 'Indian',
      Score: 71,
      YelpRaiting: 5,
      YelpReviewCount: 29
    },
    {
      Name: 'Toms',
      Street: '1401 S CONGRESS AVE',
      YelpCategories: 'Coffee & Tea,Shoe Stores,Eyewear & Opticians',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 149
    },
    {
      Name: 'Tropical Smoothie Cafe',
      Street: '11928 STONEHOLLOW DR',
      YelpCategories: 'Cafes',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Garage',
      Street: '503 COLORADO ST',
      YelpCategories: 'Cocktail Bars',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 201
    },
    {
      Name: 'Tiny Pies',
      Street: '5035 BURNET RD',
      YelpCategories: 'Desserts',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 188
    },
    {
      Name: 'Crazy Fruits',
      Street: '729 E SLAUGHTER LN',
      YelpCategories: 'Desserts,Mexican',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 38
    },
    {
      Name: 'Wells Food Store & Cafe',
      Street: '1918 ROSEWOOD AVE',
      YelpCategories: 'Convenience Stores,Beer, Wine & Spirits',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Gammad Oriental Store',
      Street: '2309 W PARMER LN',
      YelpCategories: 'Filipino,International Grocery',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 54
    },
    {
      Name: 'Salata',
      Street: '10515 N MOPAC EXPY',
      YelpCategories: 'Salad,Vegan,Vegetarian',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 211
    },
    {
      Name: 'Mama Fu\'s Arboretum',
      Street: '10710 RESEARCH BLVD',
      YelpCategories: 'Asian Fusion,Chinese',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 91
    },
    {
      Name: 'Crown Donuts',
      Street: '10700 ANDERSON MILL RD',
      YelpCategories: 'Donuts',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 30
    },
    {
      Name: 'Kitty Cohen\'s',
      Street: '2211 WEBBERVILLE RD',
      YelpCategories: 'Venues & Event Spaces,Cocktail Bars',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 88
    },
    {
      Name: 'Jenny Craig # 1702',
      Street: '10710 RESEARCH BLVD',
      YelpCategories: 'Weight Loss Centers',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Numero 28 Pizzeria & Vineria',
      Street: '452 W 2ND ST',
      YelpCategories: 'Italian,Gelato,Pizza',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 325
    },
    {
      Name: 'Licha\'s Cantina',
      Street: '1306 E 6TH ST',
      YelpCategories: 'Bars,Mexican,Gluten-Free',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 476
    },
    {
      Name: 'ABIA - Vino Volo',
      Street: '3600 PRESIDENTIAL BLVD',
      YelpCategories: 'Parking',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 22
    },
    {
      Name: 'LW - Lupine Lane',
      Street: '1001 HIGHLANDS BLVD',
      YelpCategories: 'Preschools,Summer Camps',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Wendy\'s 101 - 1671',
      Street: '1418 E ANDERSON LN',
      YelpCategories: 'Burgers,Fast Food',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 18
    },
    {
      Name: 'Five Guys Burgers and Fries',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Burgers,Fast Food',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 133
    },
    {
      Name: 'Five Guys Burgers and Fries',
      Street: '3208 GUADALUPE ST',
      YelpCategories: 'Fast Food,Burgers',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 199
    },
    {
      Name: 'Wendy\'s #W128',
      Street: '5000 W SLAUGHTER LN',
      YelpCategories: 'Fast Food,Burgers',
      Score: 89,
      YelpRaiting: 2,
      YelpReviewCount: 45
    },
    {
      Name: 'Wendy\'s #W129/11274',
      Street: '10701 RESEARCH BLVD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 16
    },
    {
      Name: 'Wendy\'s W-125/9854',
      Street: '5760 AIRPORT BLVD',
      YelpCategories: 'Burgers,Fast Food',
      Score: 83,
      YelpRaiting: 3,
      YelpReviewCount: 20
    },
    {
      Name: 'Wendy\'s W120',
      Street: '1425 W WELLS BRANCH PKWY',
      YelpCategories: 'Fast Food,Burgers',
      Score: 91,
      YelpRaiting: 2,
      YelpReviewCount: 23
    },
    {
      Name: 'Wendy\'s Old Fashioned Hamburgers #116',
      Street: '2224 E RIVERSIDE DR',
      YelpCategories: 'Burgers,Fast Food',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 14
    },
    {
      Name: 'Wendy\'s W115/8401',
      Street: '1910 W BRAKER LN',
      YelpCategories: 'Burgers,Fast Food',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 20
    },
    {
      Name: 'See\'s Candy Shop',
      Street: '10710 RESEARCH BLVD',
      YelpCategories: 'Chocolatiers & Shops,Candy Stores,Gift Shops',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 38
    },
    {
      Name: 'Wendy\'s W-105/2022',
      Street: '12421 N MOPAC EXPY',
      YelpCategories: 'Burgers,Fast Food',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 35
    },
    {
      Name: 'Amaya\'s Taco Village',
      Street: '9900 S IH',
      YelpCategories: 'Tex-Mex,Mexican',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 97
    },
    {
      Name: 'Wendy\'s W123',
      Street: '619 N IH',
      YelpCategories: 'Burgers,Fast Food',
      Score: 90,
      YelpRaiting: 2,
      YelpReviewCount: 25
    },
    {
      Name: 'SV - Wendy\'s W108',
      Street: '4961 W US 290 HWY',
      YelpCategories: 'Fast Food,Burgers',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 31
    },
    {
      Name: 'Steak n Shake',
      Street: '9300 S IH',
      YelpCategories: 'Burgers,Breakfast & Brunch,American (Traditional)',
      Score: 91,
      YelpRaiting: 2,
      YelpReviewCount: 176
    },
    {
      Name: 'The Brass Tap',
      Street: '10910 DOMAIN DR',
      YelpCategories: 'Beer Bar,Pubs',
      Score: 74,
      YelpRaiting: 4,
      YelpReviewCount: 107
    },
    {
      Name: 'Oltorf Food Mart',
      Street: '2225 E OLTORF ST',
      YelpCategories: 'Convenience Stores',
      Score: 86,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Concrete Cowboy',
      Street: '719 W 6TH ST',
      YelpCategories: 'Bars,Dance Clubs',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 36
    },
    {
      Name: 'Raising Canes Chicken Fingers',
      Street: '3201 BEE CAVES RD',
      YelpCategories: 'Fast Food',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 32
    },
    {
      Name: 'Duval Market',
      Street: '500 E 51ST ST',
      YelpCategories: 'Convenience Stores,Beer, Wine & Spirits',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'El Pollo Rico # 12',
      Street: '8702 RESEARCH BLVD',
      YelpCategories: 'Mexican',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 34
    },
    {
      Name: 'Hyatt Regency Austin',
      Street: '208 BARTON SPRINGS RD',
      YelpCategories: 'Hotels',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 339
    },
    {
      Name: 'Courtesy Shell #2',
      Street: '3906 S CONGRESS AVE',
      YelpCategories: 'Gas Stations',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 5
    },
    {
      Name: 'Conservatory at North Austin',
      Street: '14320 TANDEM BLVD',
      YelpCategories: 'Retirement Homes',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'BC - Daily Juice Cafe',
      Street: '12921 SHOPS PKWY',
      YelpCategories: 'Juice Bars & Smoothies,Acai Bowls,Wraps',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 41
    },
    {
      Name: 'WL - Tacodeli V, L.L.C.',
      Street: '701 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Breakfast & Brunch,Seafood,Tacos',
      Score: 86,
      YelpRaiting: 5,
      YelpReviewCount: 148
    },
    {
      Name: 'Tortilleria Krystal',
      Street: '1033 E HOWARD LN',
      YelpCategories: 'Mexican',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 28
    },
    {
      Name: 'Dollar General # 6619',
      Street: '2205 W PECAN ST',
      YelpCategories: 'Discount Store',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 5
    },
    {
      Name: 'Terry Black\'s Barbecue, LLC',
      Street: '1003 BARTON SPRINGS RD',
      YelpCategories: 'Barbeque,Salad,Sandwiches',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 1658
    },
    {
      Name: 'Wingstop #706',
      Street: '7112 ED BLUESTEIN BLVD',
      YelpCategories: 'Chicken Wings',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 22
    },
    {
      Name: 'Royal Blue Grocery',
      Street: '51 RAINEY ST',
      YelpCategories: 'Beer, Wine & Spirits,Grocery',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 21
    },
    {
      Name: 'Sundancer Grill LLC',
      Street: '16410 STEWART RD',
      YelpCategories: 'American (Traditional),Seafood,Bars',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 218
    },
    {
      Name: 'Foxhole Culinary Tavern',
      Street: '13995 N US 183 HWY',
      YelpCategories: 'American (New),Desserts',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 595
    },
    {
      Name: 'Davod\'s Mediterranean Market',
      Street: '13497 N US 183 HWY',
      YelpCategories: 'International Grocery,Mediterranean,Middle Eastern',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 87
    },
    {
      Name: 'Mangia Pizza',
      Street: '12001 BURNET RD',
      YelpCategories: 'Pizza,Sandwiches,Burgers',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 49
    },
    {
      Name: 'Domino\'s Pizza',
      Street: '4631 AIRPORT BLVD',
      YelpCategories: 'Chicken Wings,Pizza,Sandwiches',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 18
    },
    {
      Name: 'Kellie\'s Baking Co.',
      Street: '5245 BURNET RD',
      YelpCategories: 'Bakeries',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 30
    },
    {
      Name: 'Bartlett\'s',
      Street: '2408 W ANDERSON LN',
      YelpCategories: 'Steakhouses,American (New),Seafood',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 648
    },
    {
      Name: 'Smoothie King',
      Street: '504 W 24TH ST',
      YelpCategories: 'Juice Bars & Smoothies,Health Markets',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 31
    },
    {
      Name: 'Country Inn & Suites',
      Street: '7400 N IH',
      YelpCategories: 'Hotels',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 26
    },
    {
      Name: 'Alamo Drafthouse Cinema',
      Street: '320 E 6TH ST',
      YelpCategories: 'Cinema',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 536
    },
    {
      Name: 'Oasis Texas Brewing Co.',
      Street: '6550 COMANCHE TRL',
      YelpCategories: 'Breweries,Gastropubs',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 217
    },
    {
      Name: 'Mt. Playmore',
      Street: '13609 N IH',
      YelpCategories: 'Kids Activities,Venues & Event Spaces',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 217
    },
    {
      Name: 'Salvation Pizza',
      Street: '11501 ROCK ROSE AVE',
      YelpCategories: 'Pizza',
      Score: 70,
      YelpRaiting: 3,
      YelpReviewCount: 128
    },
    {
      Name: 'North by Northwest Parkside',
      Street: '5701 W SLAUGHTER LN',
      YelpCategories: 'Breweries,American (Traditional),Venues & Event Spaces',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 269
    },
    {
      Name: 'Lighthouse, The',
      Street: '8650 SPICEWOOD SPRINGS RD',
      YelpCategories: 'Juice Bars & Smoothies,Specialty Food',
      Score: 80,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Cuvee Coffee',
      Street: '2000 E 6TH ST',
      YelpCategories: 'Coffee & Tea,Venues & Event Spaces,Beer Bar',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 243
    },
    {
      Name: 'Punch Bowl Social Austin',
      Street: '11310 DOMAIN DR',
      YelpCategories: 'Gastropubs,American (New),Eatertainment',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 622
    },
    {
      Name: 'WL- Kerbey Lane Cafe -Westlake',
      Street: '701 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'American (Traditional),Breakfast & Brunch,Diners',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 153
    },
    {
      Name: 'SV - Stouthaus Coffee Pub',
      Street: '4715 S LAMAR BLVD',
      YelpCategories: 'Coffee & Tea,Beer, Wine & Spirits,Venues & Event Spaces',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 240
    },
    {
      Name: 'RC Mart',
      Street: '2901 MEDICAL ARTS ST',
      YelpCategories: 'Convenience Stores',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Juiceland Shady Hollow, LLC',
      Street: '9901 BRODIE LN',
      YelpCategories: 'Juice Bars & Smoothies,Vegan,Vegetarian',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 59
    },
    {
      Name: 'Sawyer and Company',
      Street: '4827 E CESAR CHAVEZ ST',
      YelpCategories: 'Cajun/Creole,Diners,Seafood',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 482
    },
    {
      Name: 'BC - Park Manor',
      Street: '14058 BEE CAVE PKWY',
      YelpCategories: 'Skilled Nursing',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 5
    },
    {
      Name: 'Fighting Orange',
      Street: '3807 N IH',
      YelpCategories: 'Convenience Stores',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Dai Due Butcher Shop & Supper Club',
      Street: '2406 MANOR RD',
      YelpCategories: 'Butcher,American (New),Breakfast & Brunch',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 455
    },
    {
      Name: 'El Tacorrido',
      Street: '9320 N LAMAR BLVD',
      YelpCategories: 'Mexican',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 137
    },
    {
      Name: 'El Pollo Regio',
      Street: '1725 OHLEN RD',
      YelpCategories: 'Mexican,Chicken Shop',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 137
    },
    {
      Name: 'Nothing Bundt Cakes - South Austin',
      Street: '9600 S IH',
      YelpCategories: 'Cupcakes,Desserts,Bakeries',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 47
    },
    {
      Name: 'Dawson Child Inc Child Development Center',
      Street: '3001 S 1ST ST',
      YelpCategories: 'Child Care & Day Care',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Patika Coffee, LLC',
      Street: '2159 S LAMAR BLVD',
      YelpCategories: 'Coffee & Tea,Cafes,Breakfast & Brunch',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 300
    },
    {
      Name: 'The Counter Cafe',
      Street: '1914 E 6TH ST',
      YelpCategories: 'Breakfast & Brunch,Diners,Burgers',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 320
    },
    {
      Name: 'Last Straw',
      Street: '1914 E 6TH ST',
      YelpCategories: 'Bars,Breakfast & Brunch,Burgers',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 20
    },
    {
      Name: 'Zumochi LLC',
      Street: '1606 W STASSNEY LN',
      YelpCategories: 'Food Delivery Services',
      Score: 100,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'El Chilito Tacos y Cafe',
      Street: '1623 E 7TH ST',
      YelpCategories: 'Mexican,Tex-Mex',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 82
    },
    {
      Name: 'Brookdale Spicewood Springs',
      Street: '4401 SPICEWOOD SPRINGS RD',
      YelpCategories: 'Assisted Living Facilities',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 1
    },
    {
      Name: '2222 Market',
      Street: '1112 W KOENIG LN',
      YelpCategories: 'Convenience Stores',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Starbucks Coffee',
      Street: '208 BARTON SPRINGS RD',
      YelpCategories: 'Coffee & Tea',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 14
    },
    {
      Name: 'Tacodeli IV, LLC',
      Street: '7301 BURNET RD',
      YelpCategories: 'Breakfast & Brunch,Caterers,Tacos',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 175
    },
    {
      Name: 'Fixe',
      Street: '500 W 5TH ST',
      YelpCategories: 'Southern,American (New),Wine Bars',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 558
    },
    {
      Name: 'Brooklyn Pie',
      Street: '5425 BURNET RD',
      YelpCategories: 'Pizza,Chicken Wings,Desserts',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 84
    },
    {
      Name: 'Austin Eastciders',
      Street: '979 SPRINGDALE RD',
      YelpCategories: 'Cideries',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 40
    },
    {
      Name: 'BC - Primrose School of Bee Cave',
      Street: '3801 JUNIPER TRCE',
      YelpCategories: 'Preschools,Child Care & Day Care',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 12
    },
    {
      Name: 'iPlay - Austin',
      Street: '8816 CULLEN LN',
      YelpCategories: 'Amusement Parks,Kids Activities,Summer Camps',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 59
    },
    {
      Name: 'Sunflower Restaurant',
      Street: '8557 RESEARCH BLVD',
      YelpCategories: 'Vietnamese',
      Score: 77,
      YelpRaiting: 4,
      YelpReviewCount: 291
    },
    {
      Name: 'Jimmy John\'s Gourmet Sandwiches',
      Street: '13429 N US 183 HWY',
      YelpCategories: 'Sandwiches,Delis,Fast Food',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 72
    },
    {
      Name: 'Jimmy John\'s Gourmet Sandwiches',
      Street: '10622 BURNET RD',
      YelpCategories: 'Sandwiches,Fast Food,Delis',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 43
    },
    {
      Name: 'Korea House',
      Street: '2700 W ANDERSON LN',
      YelpCategories: 'Korean,Barbeque,Noodles',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 743
    },
    {
      Name: 'Empire Control Room & Garage',
      Street: '606 E 7TH ST',
      YelpCategories: 'Music Venues',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 58
    },
    {
      Name: 'China Harbor Austin',
      Street: '801 E WILLIAM CANNON DR',
      YelpCategories: 'Chinese',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 88
    },
    {
      Name: 'BC - Bright Horizons at Bee Cave',
      Street: '14058 BEE CAVE PKWY',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Word of Mouth Bakery',
      Street: '917 W 12TH ST',
      YelpCategories: 'Bakeries,Cafes,Breakfast & Brunch',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 30
    },
    {
      Name: 'Hooters',
      Street: '401 S 1ST ST',
      YelpCategories: 'American (Traditional),Sports Bars,Chicken Wings',
      Score: 88,
      YelpRaiting: 2,
      YelpReviewCount: 206
    },
    {
      Name: 'Hampton Inn & Suites Austin - Downtown',
      Street: '200 SAN JACINTO BLVD',
      YelpCategories: 'Hotels',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 116
    },
    {
      Name: 'Veggie Heaven',
      Street: '1611 W 5TH ST',
      YelpCategories: 'Vegetarian,Chinese,Vegan',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 516
    },
    {
      Name: 'Corner Store # 1552',
      Street: '12200 FM 969 RD',
      YelpCategories: 'Convenience Stores,Gas Stations',
      Score: 84,
      YelpRaiting: 1,
      YelpReviewCount: 4
    },
    {
      Name: 'Mary\'s Cafe',
      Street: '3209 RED RIVER ST',
      YelpCategories: 'Coffee & Tea,Breakfast & Brunch,Sandwiches',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 219
    },
    {
      Name: 'Soup Peddler, The',
      Street: '13219 N US 183 HWY',
      YelpCategories: 'Soup,Juice Bars & Smoothies,Sandwiches',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 134
    },
    {
      Name: 'JD\'s Supermarket - Meat, Produce, Grocery',
      Street: '9111 FM 812 RD',
      YelpCategories: 'Grocery',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 5
    },
    {
      Name: 'Walgreens #15672',
      Street: '1920 E RIVERSIDE DR',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 21
    },
    {
      Name: 'Dock and Roll Diner',
      Street: '1250 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Food Stands,Sandwiches,Seafood',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 65
    },
    {
      Name: 'Taqueria Chapala # 5',
      Street: '2121 E OLTORF ST',
      YelpCategories: 'Mexican',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 1
    },
    {
      Name: 'Austin Java - City Hall',
      Street: '301 W 2ND ST',
      YelpCategories: 'Landmarks & Historical Buildings',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 22
    },
    {
      Name: 'Hilton Garden Inn Austin',
      Street: '11617 RESEARCH BLVD',
      YelpCategories: 'Hotels',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 49
    },
    {
      Name: 'Jalapeno\'s Taco Bar',
      Street: '1940 W WILLIAM CANNON DR',
      YelpCategories: 'Mexican',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 126
    },
    {
      Name: 'Marisco Grill',
      Street: '9515 N LAMAR BLVD',
      YelpCategories: 'Seafood,Mexican,Soup',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 16
    },
    {
      Name: 'Spartan Pizza',
      Street: '1007 E 6TH ST',
      YelpCategories: 'Pizza,Sandwiches',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 231
    },
    {
      Name: 'Salvation Pizza/Durham Trading Partners X',
      Street: '51 RAINEY ST',
      YelpCategories: 'Pizza,Salad,Sandwiches',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 105
    },
    {
      Name: 'Italic',
      Street: '123 W 6TH ST',
      YelpCategories: 'Italian,Wine Bars,Sandwiches',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 419
    },
    {
      Name: 'Edible Arrangements',
      Street: '3421 W WILLIAM CANNON DR',
      YelpCategories: 'Gift Shops,Chocolatiers & Shops',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 22
    },
    {
      Name: 'Maggie Louise Confections',
      Street: '1017 E 6TH ST',
      YelpCategories: 'Chocolatiers & Shops',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 39
    },
    {
      Name: 'Starbucks Coffee #22300',
      Street: '1801 E 51ST ST',
      YelpCategories: 'Coffee & Tea',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 43
    },
    {
      Name: 'Lammes Candies Since 1885, Inc.',
      Street: '2927 W ANDERSON LN',
      YelpCategories: 'Chocolatiers & Shops,Candy Stores',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 8
    },
    {
      Name: 'Launderette',
      Street: '2115 HOLLY ST',
      YelpCategories: 'American (New),Breakfast & Brunch,Wine Bars',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 833
    },
    {
      Name: 'Empire Control Room & Garage',
      Street: '604 E 7TH ST',
      YelpCategories: 'Music Venues',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 58
    },
    {
      Name: 'Juiceland MLK',
      Street: '1900 E MARTIN LUTHER KING JR BLVD',
      YelpCategories: 'Juice Bars & Smoothies',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 49
    },
    {
      Name: 'Fresh Heim',
      Street: '13776 N US 183 HWY',
      YelpCategories: 'Salad,Steakhouses,Bars',
      Score: 85,
      YelpRaiting: 5,
      YelpReviewCount: 294
    },
    {
      Name: 'Counter 3 Five VII',
      Street: '315 CONGRESS AVE',
      YelpCategories: 'American (New),Wine Bars',
      Score: 85,
      YelpRaiting: 5,
      YelpReviewCount: 168
    },
    {
      Name: 'Walnut Hills Nursing & Rehab',
      Street: '3509 ROGGE LN',
      YelpCategories: 'Health & Medical',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Shake Shack South Lamar Austin',
      Street: '1100 S LAMAR BLVD',
      YelpCategories: 'Boot Camps,Gyms,Trainers',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 26
    },
    {
      Name: 'Caspian Grill',
      Street: '12518 RESEARCH BLVD',
      YelpCategories: 'Persian/Iranian,Mediterranean,Vegan',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 346
    },
    {
      Name: 'Thirsty Turtle',
      Street: '1200 W HOWARD LN',
      YelpCategories: 'Dive Bars,Pool Halls',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 15
    },
    {
      Name: 'Onnit Academy',
      Street: '4401 FREIDRICH LN',
      YelpCategories: 'Gyms,Vitamins & Supplements,Sports Wear',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 12
    },
    {
      Name: 'J W Marriott Austin - Corner',
      Street: '110 E 2ND ST',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 376
    },
    {
      Name: 'J W Marriott Austin - Burger Bar',
      Street: '110 E 2ND ST',
      YelpCategories: 'Burgers,American (Traditional)',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 154
    },
    {
      Name: 'Fresh Plus',
      Street: '2401 SAN GABRIEL ST',
      YelpCategories: 'Grocery',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 16
    },
    {
      Name: 'Tea Haus',
      Street: '2525 W ANDERSON LN',
      YelpCategories: 'Coffee & Tea,Bubble Tea,Juice Bars & Smoothies',
      Score: 74,
      YelpRaiting: 5,
      YelpReviewCount: 375
    },
    {
      Name: 'Stay Gold',
      Street: '1910 E CESAR CHAVEZ ST',
      YelpCategories: 'Cocktail Bars,Music Venues',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 108
    },
    {
      Name: 'Southpark Meadows Nursing & Rehabilitation Center',
      Street: '9801 S 1ST ST',
      YelpCategories: 'Medical Centers',
      Score: 100,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'J W Marriott Austin - Starbucks',
      Street: '110 E 2ND ST',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 376
    },
    {
      Name: 'Snap Kitchen #13',
      Street: '10526 W PARMER LN',
      YelpCategories: 'Gluten-Free,Health Markets',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 32
    },
    {
      Name: 'Smoothie Factory',
      Street: '4404 W WILLIAM CANNON DR',
      YelpCategories: 'Health Markets',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 37
    },
    {
      Name: 'Los Catrachos & Sport Bar',
      Street: '1015 E BRAKER LN',
      YelpCategories: 'Sports Bars,Latin American,Honduran',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'Caffe Medici',
      Street: '1100 S LAMAR BLVD',
      YelpCategories: 'Coffee & Tea',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 79
    },
    {
      Name: 'SV - Orange Leaf Frozen Yogurt',
      Street: '5207 BRODIE LN',
      YelpCategories: 'Desserts,Ice Cream & Frozen Yogurt,Do-It-Yourself Food',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 16
    },
    {
      Name: 'Cross Creek Hospital',
      Street: '8402 CROSS PARK DR',
      YelpCategories: 'Counseling & Mental Health,Addiction Medicine',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 10
    },
    {
      Name: 'Sam\'s Club #6188 - Snack Bar',
      Street: '10901 LAKELINE MALL DR',
      YelpCategories: 'Department Stores,Wholesale Stores,Grocery',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 34
    },
    {
      Name: 'Orange Leaf Frozen Yogurt',
      Street: '1920 E RIVERSIDE DR',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Desserts,Do-It-Yourself Food',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 25
    },
    {
      Name: 'Subway # 49510',
      Street: '3220 FEATHERGRASS CT',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 18
    },
    {
      Name: 'Doubletree Austin',
      Street: '6505 N IH',
      YelpCategories: 'Hotels',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 128
    },
    {
      Name: 'Of Rigor LLC DBA The Madison/Roosevelt Room',
      Street: '307 W 5TH ST',
      YelpCategories: 'Cocktail Bars,Venues & Event Spaces,Music Venues',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 293
    },
    {
      Name: 'Papa Murphy\'s Pizza',
      Street: '12129 N FM 620 RD',
      YelpCategories: 'Pizza',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 15
    },
    {
      Name: 'Sam\'s Club #6188 - Deli',
      Street: '10901 LAKELINE MALL DR',
      YelpCategories: 'Department Stores,Wholesale Stores,Grocery',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 34
    },
    {
      Name: 'Mi Ranchito Taqueria',
      Street: '1105 W FM 1626 RD',
      YelpCategories: 'Mexican',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 182
    },
    {
      Name: 'Hotel San Jose',
      Street: '1316 S CONGRESS AVE',
      YelpCategories: 'Hotels',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 374
    },
    {
      Name: 'Taco Bueno # 3205',
      Street: '5000 W SLAUGHTER LN',
      YelpCategories: 'Fast Food,Mexican,Tex-Mex',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 75
    },
    {
      Name: 'Dry Creek Shell',
      Street: '3800 DRY CREEK DR',
      YelpCategories: 'Gas Stations',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Wetzels Pretzels/Nestle Toll House',
      Street: '11200 LAKELINE MALL DR',
      YelpCategories: 'Cafes,Bakeries,Desserts',
      Score: 78,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Jack Allens Kitchen',
      Street: '3600 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Southern,American (Traditional)',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 384
    },
    {
      Name: 'Dobie Mall - Burrito Factory',
      Street: '2025 GUADALUPE ST',
      YelpCategories: 'Mexican,American (New),Vegan',
      Score: 87,
      YelpRaiting: 5,
      YelpReviewCount: 111
    },
    {
      Name: 'MOD Super Fast Pizza, LLC',
      Street: '1801 E 51ST ST',
      YelpCategories: 'Pizza,Fast Food',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 207
    },
    {
      Name: 'WL - MOD Super Fast Pizza, LLC',
      Street: '701 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Pizza,Fast Food',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 70
    },
    {
      Name: 'Home 2 Suites Austin North',
      Street: '2800 ESPERANZA XING',
      YelpCategories: 'Hotels',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 27
    },
    {
      Name: 'Craftsman',
      Street: '2000 E CESAR CHAVEZ ST',
      YelpCategories: 'Cocktail Bars',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 105
    },
    {
      Name: 'Via 313 Pizza',
      Street: '6705 W US 290 HWY',
      YelpCategories: 'Pizza',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 636
    },
    {
      Name: 'Retirement and Nursing Center-Austin',
      Street: '6909 BURNET LN',
      YelpCategories: 'Retirement Homes',
      Score: 83,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Taqueria La Familia Mex Restaurant Inc',
      Street: '3601 W WILLIAM CANNON DR',
      YelpCategories: 'Mexican',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 100
    },
    {
      Name: 'LW - Lakeway Resort and Spa',
      Street: '101 LAKEWAY DR',
      YelpCategories: 'Venues & Event Spaces,Resorts',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 277
    },
    {
      Name: 'Subway #11715',
      Street: '1931 E BEN WHITE BLVD',
      YelpCategories: 'Sandwiches',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 5
    },
    {
      Name: 'Travis High School Child Development Center',
      Street: '1314 E OLTORF ST',
      YelpCategories: 'Child Care & Day Care,Preschools,Elementary Schools',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'La Bodega Gourmet',
      Street: '11500 FM 2244 RD',
      YelpCategories: 'Spanish,Tapas Bars,Gastropubs',
      Score: 87,
      YelpRaiting: 5,
      YelpReviewCount: 50
    },
    {
      Name: '4th Tap Brewing Cooperative',
      Street: '10615 METRIC BLVD',
      YelpCategories: 'Breweries',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 113
    },
    {
      Name: 'Osio',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Korean,Bubble Tea,Sushi Bars',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 68
    },
    {
      Name: 'Days Inn University',
      Street: '3105 N IH',
      YelpCategories: 'Hotels',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 41
    },
    {
      Name: 'Juniper',
      Street: '2400 E CESAR CHAVEZ ST',
      YelpCategories: 'Italian,Modern European,American (New)',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 251
    },
    {
      Name: 'Rhino Room',
      Street: '1012 E 6TH ST',
      YelpCategories: 'Cocktail Bars,Music Venues',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 47
    },
    {
      Name: 'Full Circle Bar',
      Street: '1810 E 12TH ST',
      YelpCategories: 'Bars',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 25
    },
    {
      Name: 'Hill-Bert\'s Burgers',
      Street: '5340 CAMERON RD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 61
    },
    {
      Name: 'Wonder Years Infant Center & Preschool',
      Street: '4804 GROVER AVE',
      YelpCategories: 'Preschools,Child Care & Day Care',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Four Seasons Hotel Austin',
      Street: '98 SAN JACINTO BLVD',
      YelpCategories: 'Hotels',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 178
    },
    {
      Name: 'McDonald\'s Restaurant at Metric',
      Street: '12443 METRIC BLVD',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 35
    },
    {
      Name: 'BC - Sonesta Bee Cave',
      Street: '12525 BEE CAVE PKWY',
      YelpCategories: 'Hotels',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 59
    },
    {
      Name: 'BC - Rocco\'s Grill',
      Street: '12432 FM 2244 RD',
      YelpCategories: 'Mexican',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 11
    },
    {
      Name: 'Proof & Cooper',
      Street: '18800 HAMILTON POOL RD',
      YelpCategories: 'Cocktail Bars,American (New)',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 152
    },
    {
      Name: 'Buttercup Chevron',
      Street: '14815 DESSAU RD',
      YelpCategories: 'Gas Stations',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 8
    },
    {
      Name: 'McDonalds #11828',
      Street: '10732 RESEARCH BLVD',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 61
    },
    {
      Name: 'Michi Ramen',
      Street: '3005 S LAMAR BLVD',
      YelpCategories: 'Ramen,Noodles,Soup',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 170
    },
    {
      Name: 'Chef Vi\'s Catering',
      Street: '8863 ANDERSON MILL RD',
      YelpCategories: 'Caterers',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 11
    },
    {
      Name: 'Hoeks Pizza',
      Street: '511 E 6TH ST',
      YelpCategories: 'Pizza',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 114
    },
    {
      Name: 'Gold\'s Gym Austin Downtown',
      Street: '115 E 6TH ST',
      YelpCategories: 'Gyms,Trainers,Yoga',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 102
    },
    {
      Name: 'MN - Cafe 290',
      Street: '11011 E US 290 HWY',
      YelpCategories: 'American (Traditional),Southern',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 167
    },
    {
      Name: 'My Sweet Austin',
      Street: '910 W 25TH ST',
      YelpCategories: 'Desserts,Custom Cakes,Patisserie/Cake Shop',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 53
    },
    {
      Name: 'Oak Haven Kids Club, LLC',
      Street: '12809 N FM 620 RD',
      YelpCategories: 'Preschools,Kids Activities,Child Care & Day Care',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 14
    },
    {
      Name: 'Google Fiber Austin',
      Street: '201 COLORADO ST',
      YelpCategories: 'Internet Service Providers,Mobile Phones,Television Service Providers',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 47
    },
    {
      Name: 'Domino\'s #6592',
      Street: '7626 W SH',
      YelpCategories: 'Pizza,Chicken Wings,Sandwiches',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 31
    },
    {
      Name: 'Westin Austin Downtown',
      Street: '310 E 5TH ST',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 145
    },
    {
      Name: 'Saigon Cafe',
      Street: '5000 HUDSON BEND RD',
      YelpCategories: 'Vietnamese,Thai',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 149
    },
    {
      Name: '183 Grill Austin Gyros',
      Street: '13729 N US 183 HWY',
      YelpCategories: 'Salad,Greek,Burgers',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 200
    },
    {
      Name: 'Juiceland Westgate',
      Street: '4526 WEST GATE BLVD',
      YelpCategories: 'Juice Bars & Smoothies',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 44
    },
    {
      Name: '7-Eleven Convenience Store #36591A',
      Street: '201 W BEN WHITE BLVD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 88,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Little Woodrow\'s',
      Street: '520 W 6TH ST',
      YelpCategories: 'Sports Bars,American (Traditional)',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 150
    },
    {
      Name: 'Shipley\'s Donuts',
      Street: '10401 ANDERSON MILL RD',
      YelpCategories: 'Donuts,Breakfast & Brunch',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 30
    },
    {
      Name: 'Lick Honest Ice Creams',
      Street: '6555 BURNET RD',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 259
    },
    {
      Name: 'Cheesecake Factory, The',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Desserts,American (New)',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 175
    },
    {
      Name: 'Wells Branch Burger King',
      Street: '1420 W WELLS BRANCH PKWY',
      YelpCategories: 'American (New)',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 20
    },
    {
      Name: 'Pavilion At Great Hills, The',
      Street: '11819 PAVILION BLVD',
      YelpCategories: 'Assisted Living Facilities',
      Score: 90,
      YelpRaiting: 2,
      YelpReviewCount: 8
    },
    {
      Name: 'Quarters Market, The',
      Street: '2222 RIO GRANDE ST',
      YelpCategories: 'Convenience Stores',
      Score: 95,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Avery Ranch Golf Club',
      Street: '10500 AVERY CLUB DR',
      YelpCategories: 'Golf',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 42
    },
    {
      Name: 'Dia\'s Market',
      Street: '812 JUSTIN LN',
      YelpCategories: 'Grocery,Specialty Food,Delis',
      Score: 81,
      YelpRaiting: 5,
      YelpReviewCount: 64
    },
    {
      Name: 'Mirchi Restaurant',
      Street: '1212 W PARMER LN',
      YelpCategories: 'Indian,Halal,Pakistani',
      Score: 74,
      YelpRaiting: 4,
      YelpReviewCount: 110
    },
    {
      Name: 'Montessori For All',
      Street: '5100 PECAN BROOK DR',
      YelpCategories: 'Montessori Schools',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Royal Jelly',
      Street: '704 W ST JOHNS AVE',
      YelpCategories: 'American (New),Cocktail Bars,Sandwiches',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 184
    },
    {
      Name: 'Spokesman',
      Street: '440 E ST ELMO RD',
      YelpCategories: 'Coffee Roasteries,Beer Bar,Cafes',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 74
    },
    {
      Name: 'South Congress Hotel',
      Street: '1603 S CONGRESS AVE',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 88
    },
    {
      Name: 'Small Victory',
      Street: '108 E 7TH ST',
      YelpCategories: 'Cocktail Bars,Lounges',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 83
    },
    {
      Name: 'Voodoo Doughnut',
      Street: '212 E 6TH ST',
      YelpCategories: 'Donuts',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 1319
    },
    {
      Name: 'Chick-fil-A Lakeline Mall',
      Street: '11200 LAKELINE MALL DR',
      YelpCategories: 'Fast Food',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 20
    },
    {
      Name: 'Total Wine & More',
      Street: '11066 PECAN PARK BLVD',
      YelpCategories: 'Beer, Wine & Spirits,Tobacco Shops',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 63
    },
    {
      Name: 'Infinite Monkey Theorem,  The',
      Street: '121 PICKLE RD',
      YelpCategories: 'Wineries,Wine Tours',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 90
    },
    {
      Name: 'LW - Little Sunshines Playhouse & Preschool',
      Street: '1501 LOHMANS CROSSING RD',
      YelpCategories: 'Preschools,Child Care & Day Care',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 5
    },
    {
      Name: 'Nanking Restaurant',
      Street: '13450 N US 183 HWY',
      YelpCategories: 'Chinese,Soup',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 167
    },
    {
      Name: 'Murphy\'s Deli',
      Street: '700 LAVACA ST',
      YelpCategories: 'Salad,Sandwiches,Breakfast & Brunch',
      Score: 82,
      YelpRaiting: 2,
      YelpReviewCount: 12
    },
    {
      Name: 'Green Pastures',
      Street: '811 W LIVE OAK ST',
      YelpCategories: 'Venues & Event Spaces',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 239
    },
    {
      Name: 'Seton Northwest Coffee Shop',
      Street: '11113 RESEARCH BLVD',
      YelpCategories: 'Hospitals,Emergency Rooms',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 99
    },
    {
      Name: 'Hanabi Japanese Cuisine',
      Street: '9503 RESEARCH BLVD',
      YelpCategories: 'Sushi Bars,Japanese',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 168
    },
    {
      Name: 'Lucy\'s Fried Chicken',
      Street: '2900 N FM 620 RD',
      YelpCategories: 'American (Traditional),Comfort Food,Cocktail Bars',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 428
    },
    {
      Name: 'Black Walnut Cafe',
      Street: '11101 BURNET RD',
      YelpCategories: 'American (Traditional),Breakfast & Brunch,Cafes',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 274
    },
    {
      Name: 'Raku Sushi Restaurant',
      Street: '2222 RIO GRANDE ST',
      YelpCategories: 'Sushi Bars,Japanese,Asian Fusion',
      Score: 73,
      YelpRaiting: 4,
      YelpReviewCount: 113
    },
    {
      Name: 'Golden Goose, The',
      Street: '2034 S LAMAR BLVD',
      YelpCategories: 'Cocktail Bars,Lounges,Dive Bars',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 47
    },
    {
      Name: 'Tiff\'s Treats',
      Street: '1235 E 51ST ST',
      YelpCategories: 'Bakeries,Ice Cream & Frozen Yogurt',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 15
    },
    {
      Name: 'Jersey Mike\'s Subs',
      Street: '600 E BEN WHITE BLVD',
      YelpCategories: 'Sandwiches,Fast Food,Delis',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 19
    },
    {
      Name: 'Dominos',
      Street: '7900 N FM 620 RD',
      YelpCategories: 'Pizza,Chicken Wings,Sandwiches',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 32
    },
    {
      Name: 'MN - Panda Express #2516',
      Street: '11808 RING DR',
      YelpCategories: 'Chinese,Fast Food',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 33
    },
    {
      Name: 'Pinthouse Pizza',
      Street: '4236 S LAMAR BLVD',
      YelpCategories: 'Pizza,Brewpubs',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 417
    },
    {
      Name: 'Jimmy John\'s #2270',
      Street: '4220 W WILLIAM CANNON DR',
      YelpCategories: 'Sandwiches,Fast Food,Delis',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 17
    },
    {
      Name: 'Fujian Grand China Buffet',
      Street: '8709 N IH',
      YelpCategories: 'Buffets,Chinese',
      Score: 82,
      YelpRaiting: 2,
      YelpReviewCount: 167
    },
    {
      Name: 'RA Sushi',
      Street: '117 W 4TH ST',
      YelpCategories: 'Sushi Bars',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 241
    },
    {
      Name: 'Wu Chow',
      Street: '500 W 5TH ST',
      YelpCategories: 'Dim Sum,Seafood,Soup',
      Score: 76,
      YelpRaiting: 4,
      YelpReviewCount: 558
    },
    {
      Name: 'Live Oak Brewing Company, LLC',
      Street: '1615 CROZIER LN',
      YelpCategories: 'Breweries',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 80
    },
    {
      Name: 'Hotel Granduca Austin',
      Street: '320 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Hotels',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 110
    },
    {
      Name: 'Popeyes # 305 - Z & H Inc',
      Street: '2919 MONTOPOLIS DR',
      YelpCategories: 'Fast Food,Chicken Wings',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 16
    },
    {
      Name: '7 - Eleven Convenience Store #36600A',
      Street: '1625 E PARMER LN',
      YelpCategories: 'Gas Stations,Convenience Stores,Coffee & Tea',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Rotten Bunch Wine Bar & Kitchen, The',
      Street: '14900 AVERY RANCH BLVD',
      YelpCategories: 'American (New),Wine Bars,Tapas Bars',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 227
    },
    {
      Name: 'Little Woodrow\'s',
      Street: '6301 W PARMER LN',
      YelpCategories: 'Sports Bars,Beer Bar',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 123
    },
    {
      Name: 'MOD Superfast Pizza',
      Street: '1920 E RIVERSIDE DR',
      YelpCategories: 'Pizza,Fast Food',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 161
    },
    {
      Name: 'IN-N-OUT BURGER',
      Street: '3701 S LAMAR BLVD',
      YelpCategories: 'Burgers,Fast Food',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 166
    },
    {
      Name: 'Lily\'s Sandwich',
      Street: '10901 N LAMAR BLVD',
      YelpCategories: 'Vietnamese',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 125
    },
    {
      Name: 'Homewood Suites Austin TechRidge',
      Street: '13301 CENTER LAKE DR',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 37
    },
    {
      Name: 'God\'s Kingdom Daycare Center 2',
      Street: '104 W HOWARD LN',
      YelpCategories: 'Child Care & Day Care',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'P. Terry\'s Burger Stand',
      Street: '1800 E OLTORF ST',
      YelpCategories: 'Burgers,Fast Food,Breakfast & Brunch',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 75
    },
    {
      Name: 'La Michoacana Meat Market',
      Street: '9811 N IH',
      YelpCategories: 'Meat Shops',
      Score: 73,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Olive Garden #1046',
      Street: '3940 S LAMAR BLVD',
      YelpCategories: 'Italian,Salad',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 171
    },
    {
      Name: 'Burger King # 2171',
      Street: '1001 E BEN WHITE BLVD',
      YelpCategories: 'Burgers,Fast Food',
      Score: 88,
      YelpRaiting: 2,
      YelpReviewCount: 20
    },
    {
      Name: 'Brush Country Nursing and Rehabilitation',
      Street: '6500 BRUSH COUNTRY RD',
      YelpCategories: 'Occupational Therapy,Hospice,Skilled Nursing',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Lustre Pearl East',
      Street: '114 LINDEN ST',
      YelpCategories: 'Salad,Cocktail Bars,Sandwiches',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 60
    },
    {
      Name: 'C-Hunt\'s Ice House',
      Street: '9611 MC NEIL RD',
      YelpCategories: 'Dive Bars',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 79
    },
    {
      Name: 'P. Terry\'s Burger Stand',
      Street: '5900 N LAMAR BLVD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 53
    },
    {
      Name: 'Crepe Crazy',
      Street: '3103 S LAMAR BLVD',
      YelpCategories: 'Creperies',
      Score: 80,
      YelpRaiting: 5,
      YelpReviewCount: 370
    },
    {
      Name: 'O\'Joy',
      Street: '11101 BURNET RD',
      YelpCategories: 'Juice Bars & Smoothies,Ice Cream & Frozen Yogurt',
      Score: 84,
      YelpRaiting: 5,
      YelpReviewCount: 81
    },
    {
      Name: 'Cooper\'s Old Time Pit BBQ Austin',
      Street: '217 CONGRESS AVE',
      YelpCategories: 'Barbeque',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 898
    },
    {
      Name: 'Golden Corral Buffet and Grill',
      Street: '12509 N LAMAR BLVD',
      YelpCategories: 'Buffets,American (Traditional)',
      Score: 75,
      YelpRaiting: 3,
      YelpReviewCount: 144
    },
    {
      Name: 'Tino\'s Greek Cafe',
      Street: '2525 W ANDERSON LN',
      YelpCategories: 'Mediterranean,Greek',
      Score: 81,
      YelpRaiting: 3,
      YelpReviewCount: 38
    },
    {
      Name: 'Nightcap',
      Street: '1401 W 6TH ST',
      YelpCategories: 'Cocktail Bars,Wine Bars,American (Traditional)',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 155
    },
    {
      Name: 'Quickie Pickie #2',
      Street: '2027 E CESAR CHAVEZ ST',
      YelpCategories: 'Coffee & Tea,Grocery,Beer, Wine & Spirits',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 39
    },
    {
      Name: 'Live Oak Market',
      Street: '4410 MANCHACA RD',
      YelpCategories: 'Coffee & Tea,Convenience Stores,Sandwiches',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 192
    },
    {
      Name: 'Flyrite Chicken',
      Street: '2129 E 7TH ST',
      YelpCategories: 'American (New),Fast Food,Sandwiches',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 274
    },
    {
      Name: 'Torchy\'s Tacos',
      Street: '1822 S CONGRESS AVE',
      YelpCategories: 'Breakfast & Brunch,Tacos',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 548
    },
    {
      Name: 'Toulouse Domain',
      Street: '3120 PALM WAY',
      YelpCategories: 'French,Wine Bars,Sandwiches',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 153
    },
    {
      Name: 'WL - Westlake Athletic and Community Center',
      Street: '4300 WESTBANK DR',
      YelpCategories: 'Community Centers',
      Score: 90,
      YelpRaiting: 2,
      YelpReviewCount: 6
    },
    {
      Name: 'Barracuda Club',
      Street: '611 E 7TH ST',
      YelpCategories: 'Dive Bars,Music Venues,Performing Arts',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 20
    },
    {
      Name: 'JuiceLand',
      Street: '10721 RESEARCH BLVD',
      YelpCategories: 'Juice Bars & Smoothies',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 38
    },
    {
      Name: 'Shanghai Noodle House',
      Street: '10300 ANDERSON MILL RD',
      YelpCategories: 'Noodles',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 63
    },
    {
      Name: 'Little Woodrow\'s',
      Street: '9500 S IH',
      YelpCategories: 'Sports Bars,Beer Bar',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 141
    },
    {
      Name: 'Rusty Cannon Pub',
      Street: '730 W STASSNEY LN',
      YelpCategories: 'American (Traditional),Pubs',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 44
    },
    {
      Name: 'Our Lady\'s Maronite Catholic Church',
      Street: '1320 E 51ST ST',
      YelpCategories: 'Churches',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 5
    },
    {
      Name: 'Eddie V\'s #8502',
      Street: '9400 ARBORETUM BLVD',
      YelpCategories: 'Seafood,Steakhouses,Lounges',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 402
    },
    {
      Name: 'Vinaigrette TX LLC',
      Street: '2201 COLLEGE AVE',
      YelpCategories: 'Salad,Soup,Sandwiches',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 281
    },
    {
      Name: 'El Flamingo Club LLC',
      Street: '8619 S US 183 HWY',
      YelpCategories: 'Bars',
      Score: 98,
      YelpRaiting: 2,
      YelpReviewCount: 2
    },
    {
      Name: 'Jack & Ginger Rock Rose, Inc',
      Street: '11500 ROCK ROSE AVE',
      YelpCategories: 'Irish Pub,Sports Bars',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 191
    },
    {
      Name: '7-Eleven Convenience Store # 36612A',
      Street: '6707 CAMERON RD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Bufalina Due LLC',
      Street: '6555 BURNET RD',
      YelpCategories: 'Pizza,Desserts',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 85
    },
    {
      Name: 'Taco Aranda',
      Street: '12115 MANCHACA RD',
      YelpCategories: 'Mexican',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 21
    },
    {
      Name: 'LEAF',
      Street: '115 W 6TH ST',
      YelpCategories: 'Salad,American (New)',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 80
    },
    {
      Name: 'Pho Please',
      Street: '1920 E RIVERSIDE DR',
      YelpCategories: 'Vietnamese',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 656
    },
    {
      Name: 'Soup Peddler, The',
      Street: '4631 AIRPORT BLVD',
      YelpCategories: 'Soup,Juice Bars & Smoothies,Sandwiches',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 75
    },
    {
      Name: 'MN - Adreland\'s Worth',
      Street: '10814 E US 290 HWY',
      YelpCategories: 'Mexican',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Borderless European Market',
      Street: '1934 RUTLAND DR',
      YelpCategories: 'Grocery,Bakeries,Beer, Wine & Spirits',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'Noon Mediterranean, Inc.',
      Street: '500 CANYON RIDGE DR',
      YelpCategories: 'Mediterranean,Greek',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 26
    },
    {
      Name: 'Rainey Street LLC dba Lustre Pearl',
      Street: '94 RAINEY ST',
      YelpCategories: 'Bars',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 75
    },
    {
      Name: 'WL- Blenders and Bowls',
      Street: '3736 BEE CAVES RD',
      YelpCategories: 'Coffee & Tea,Acai Bowls,Breakfast & Brunch',
      Score: 82,
      YelpRaiting: 5,
      YelpReviewCount: 70
    },
    {
      Name: 'Pho Hong',
      Street: '2521 RUTLAND DR',
      YelpCategories: 'Vietnamese',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 169
    },
    {
      Name: 'Santos Taqueria',
      Street: '4511 AIRPORT BLVD',
      YelpCategories: 'Mexican',
      Score: 71,
      YelpRaiting: 2,
      YelpReviewCount: 2
    },
    {
      Name: 'Parlor & Yard',
      Street: '601 W 6TH ST',
      YelpCategories: 'Bars',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 45
    },
    {
      Name: 'Lavaca Street Bar Domain',
      Street: '11420 ROCK ROSE AVE',
      YelpCategories: 'Sports Bars',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 110
    },
    {
      Name: 'Rock Rose Hall',
      Street: '11420 ROCK ROSE AVE',
      YelpCategories: 'Venues & Event Spaces',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 8
    },
    {
      Name: 'Dogwood Domain, The',
      Street: '11420 ROCK ROSE AVE',
      YelpCategories: 'Salad,Sandwiches,American (Traditional)',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 147
    },
    {
      Name: 'Juiceland',
      Street: '120 E 4TH ST',
      YelpCategories: 'Juice Bars & Smoothies',
      Score: 85,
      YelpRaiting: 5,
      YelpReviewCount: 60
    },
    {
      Name: 'True Food Kitchen',
      Street: '222 WEST AVE',
      YelpCategories: 'American (New),Vegan,Vegetarian',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 718
    },
    {
      Name: 'Michi Ramen 3',
      Street: '2513 SAN ANTONIO ST',
      YelpCategories: 'Ramen,Desserts',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 13
    },
    {
      Name: 'BC - Cafe Blue',
      Street: '12800 HILL COUNTRY BLVD',
      YelpCategories: 'Seafood,Steakhouses,Wine Bars',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 253
    },
    {
      Name: 'River City Donut II',
      Street: '11900 METRIC BLVD',
      YelpCategories: 'Donuts,Coffee & Tea',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 50
    },
    {
      Name: 'Morelian Meat Market #1',
      Street: '3600 S CONGRESS AVE',
      YelpCategories: 'Meat Shops',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'VIA 313 Pizza',
      Street: '3016 GUADALUPE ST',
      YelpCategories: 'Pizza',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 360
    },
    {
      Name: 'Z\'Tejas',
      Street: '9400 ARBORETUM BLVD',
      YelpCategories: 'Tex-Mex,Mexican,Bars',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 529
    },
    {
      Name: 'Saint Genevieve',
      Street: '11500 ROCK ROSE AVE',
      YelpCategories: 'Cocktail Bars,American (New),Salad',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 220
    },
    {
      Name: 'Fleet Coffee',
      Street: '2427 WEBBERVILLE RD',
      YelpCategories: 'Coffee & Tea,Breakfast & Brunch',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 128
    },
    {
      Name: 'Mongolian Hot Pot',
      Street: '2400 SETON AVE',
      YelpCategories: 'Mongolian,Hot Pot,Chinese',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 211
    },
    {
      Name: 'Fun Holding, LLC aka  Perfect 10 Cabaret',
      Street: '404 E HIGHLAND MALL BLVD',
      YelpCategories: 'Adult Entertainment',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 12
    },
    {
      Name: 'Library, The',
      Street: '407 E 6TH ST',
      YelpCategories: 'Bars',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 143
    },
    {
      Name: 'Parlor Room, The',
      Street: '88 RAINEY ST',
      YelpCategories: 'Bars',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 58
    },
    {
      Name: 'Irene\'s',
      Street: '506 WEST AVE',
      YelpCategories: 'Bars,American (Traditional),Coffee & Tea',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 347
    },
    {
      Name: 'El Chilito Tacos Y Cafe-Burnet',
      Street: '6425 BURNET RD',
      YelpCategories: 'Tacos',
      Score: 70,
      YelpRaiting: 3,
      YelpReviewCount: 80
    },
    {
      Name: 'Chinos and Gringos',
      Street: '6705 W US 290 HWY',
      YelpCategories: 'Tex-Mex,Asian Fusion,Breakfast & Brunch',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 178
    },
    {
      Name: 'Honey Baked Ham Company LLC, The',
      Street: '9029 RESEARCH BLVD',
      YelpCategories: 'Meat Shops,Sandwiches,Delis',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 19
    },
    {
      Name: 'Papa John\'s Pizza #4689',
      Street: '7930 THAXTON RD',
      YelpCategories: 'Pizza',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 6
    },
    {
      Name: 'Hard Luck Lounge',
      Street: '3526 E 7TH ST',
      YelpCategories: 'Dive Bars',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 29
    },
    {
      Name: 'Recovery Unplugged',
      Street: '14109 FM 969 RD',
      YelpCategories: 'Rehabilitation Center',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Jinya Ramen Bar',
      Street: '3210 ESPERANZA XING',
      YelpCategories: 'Ramen',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 540
    },
    {
      Name: 'Donut Empire',
      Street: '1033 E HOWARD LN',
      YelpCategories: 'Donuts,Breakfast & Brunch',
      Score: 86,
      YelpRaiting: 5,
      YelpReviewCount: 54
    },
    {
      Name: 'Goya Restaurant LLC',
      Street: '13776 N US 183 HWY',
      YelpCategories: 'Korean,Sushi Bars',
      Score: 83,
      YelpRaiting: 5,
      YelpReviewCount: 72
    },
    {
      Name: 'Little Darlin\', The',
      Street: '6507 CIRCLE S RD',
      YelpCategories: 'American (Traditional),Lounges',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 223
    },
    {
      Name: 'Mour',
      Street: '1414 SHORE DISTRICT DR',
      YelpCategories: 'Cafes,Bars,Breakfast & Brunch',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 155
    },
    {
      Name: 'Pieology Pizzeria',
      Street: '1201 BARBARA JORDAN BLVD',
      YelpCategories: 'Pizza',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 71
    },
    {
      Name: 'Texan Market No. 7, The',
      Street: '4205 MANCHACA RD',
      YelpCategories: 'Gas Stations',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 19
    },
    {
      Name: 'Mooyah Burgers Fries Shakes',
      Street: '11301 LAKELINE BLVD',
      YelpCategories: 'Burgers,Ice Cream & Frozen Yogurt,Hot Dogs',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 92
    },
    {
      Name: 'BC - Silverado',
      Street: '14058 BEE CAVE PKWY',
      YelpCategories: 'Retirement Homes,Assisted Living Facilities,Memory Care',
      Score: 100,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Daily Juice Cafe',
      Street: '500 CANYON RIDGE DR',
      YelpCategories: 'Juice Bars & Smoothies,Acai Bowls',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 27
    },
    {
      Name: 'Juice Society',
      Street: '1100 S LAMAR BLVD',
      YelpCategories: 'Juice Bars & Smoothies,Coffee & Tea',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 75
    },
    {
      Name: 'Yard House #8366',
      Street: '11800 DOMAIN BLVD',
      YelpCategories: 'American (New),Bars,Vegetarian',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 425
    },
    {
      Name: 'St. Elmo Brewing Co.',
      Street: '440 E ST ELMO RD',
      YelpCategories: 'Breweries,Beer Bar',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 104
    },
    {
      Name: 'Snooze, an A.M. Eatery',
      Street: '1700 S LAMAR BLVD',
      YelpCategories: 'Breakfast & Brunch,Coffee & Tea,Sandwiches',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 812
    },
    {
      Name: 'Green Light Social',
      Street: '720 W 6TH ST',
      YelpCategories: 'Beer Bar,Cocktail Bars',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 68
    },
    {
      Name: 'Lone Star Souvenir MIR Trading Inc.',
      Street: '502 E 6TH ST',
      YelpCategories: 'Grocery',
      Score: 84,
      YelpRaiting: 2,
      YelpReviewCount: 11
    },
    {
      Name: 'Central Texas Food Bank, The',
      Street: '6500 METROPOLIS DR',
      YelpCategories: 'Food Banks',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 24
    },
    {
      Name: 'Speedy Stop #107',
      Street: '5725 E PARMER LN',
      YelpCategories: 'Car Wash,Gas Stations,Convenience Stores',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Tiny Pies',
      Street: '2032 S LAMAR BLVD',
      YelpCategories: 'Desserts',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 63
    },
    {
      Name: 'Heo Eatery',
      Street: '6214 N LAMAR BLVD',
      YelpCategories: 'Vietnamese',
      Score: 75,
      YelpRaiting: 5,
      YelpReviewCount: 272
    },
    {
      Name: 'Line ATX Restaurant, The',
      Street: '111 E CESAR CHAVEZ ST',
      YelpCategories: 'Hotels',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 27
    },
    {
      Name: 'Schlotzsky\'s',
      Street: '8300 N FM 620 RD',
      YelpCategories: 'Sandwiches,Delis',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 30
    },
    {
      Name: 'Rose Room/77',
      Street: '11500 ROCK ROSE AVE',
      YelpCategories: 'Dance Clubs',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 79
    },
    {
      Name: 'Pekitas',
      Street: '8762 RESEARCH BLVD',
      YelpCategories: 'Mexican',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 8
    },
    {
      Name: 'Legend Oaks Healthcare & Rehabilitation',
      Street: '11020 DESSAU RD',
      YelpCategories: 'Hospice,Rehabilitation Center,Retirement Homes',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Hotel Ella',
      Street: '1900 RIO GRANDE ST',
      YelpCategories: 'Hotels',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 88
    },
    {
      Name: 'Pour House Pub',
      Street: '6701 BURNET RD',
      YelpCategories: 'Pubs,Burgers,Sandwiches',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 270
    },
    {
      Name: 'La Tapatia #7',
      Street: '8618 RESEARCH BLVD',
      YelpCategories: 'Mexican',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 8
    },
    {
      Name: 'Cream Whiskers',
      Street: '2222 RIO GRANDE ST',
      YelpCategories: 'Bakeries,Coffee & Tea',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 294
    },
    {
      Name: 'Qmart MLK',
      Street: '6000 FM 969 RD',
      YelpCategories: 'Convenience Stores,Gas Stations',
      Score: 88,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Smoothie King',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Juice Bars & Smoothies,Health Markets',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 26
    },
    {
      Name: 'Oskar Blues Brewery',
      Street: '10420 METRIC BLVD',
      YelpCategories: 'Breweries',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 58
    },
    {
      Name: 'KIPP Austin Public Schools, Inc',
      Street: '8004 CAMERON RD',
      YelpCategories: 'Elementary Schools,Middle Schools & High Schools',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Julie\'s Handmade Noodles',
      Street: '8557 RESEARCH BLVD',
      YelpCategories: 'Noodles,Chinese',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 204
    },
    {
      Name: 'Tam Deli Cafe',
      Street: '8222 N LAMAR BLVD',
      YelpCategories: 'Delis,Vietnamese,Sandwiches',
      Score: 73,
      YelpRaiting: 4,
      YelpReviewCount: 420
    },
    {
      Name: 'Caffe Medici',
      Street: '804 CONGRESS AVE',
      YelpCategories: 'Coffee & Tea',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 7
    },
    {
      Name: 'Burger King',
      Street: '6000 FM 969 RD',
      YelpCategories: 'American (Traditional),Burgers,Fast Food',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Mum Foods LLC',
      Street: '1606 W STASSNEY LN',
      YelpCategories: 'Food Delivery Services',
      Score: 100,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Sprinkles',
      Street: '3120 PALM WAY',
      YelpCategories: 'Cupcakes,Bakeries,Ice Cream & Frozen Yogurt',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 163
    },
    {
      Name: 'CVS/pharmacy #10661',
      Street: '1801 W PARMER LN',
      YelpCategories: 'Drugstores',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 6
    },
    {
      Name: 'Subway #2516',
      Street: '7110 CAMERON RD',
      YelpCategories: 'Sandwiches,Fast Food,Salad',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 12
    },
    {
      Name: 'Wing Daddy\'s Sauce House',
      Street: '9811 S IH',
      YelpCategories: 'Chicken Wings,Burgers',
      Score: 83,
      YelpRaiting: 3,
      YelpReviewCount: 119
    },
    {
      Name: 'Starbucks',
      Street: '11200 LAKELINE MALL DR',
      YelpCategories: 'Coffee & Tea',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 10
    },
    {
      Name: 'Lone Star Pizza Garden',
      Street: '6266 W US 290 HWY',
      YelpCategories: 'Pizza,Bars,Italian',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 245
    },
    {
      Name: 'McAlister\'s Deli',
      Street: '2525 W ANDERSON LN',
      YelpCategories: 'Delis,Sandwiches,Salad',
      Score: 73,
      YelpRaiting: 3,
      YelpReviewCount: 129
    },
    {
      Name: 'Summermoon Coffee Bar',
      Street: '11601 W US 290 HWY',
      YelpCategories: 'Coffee & Tea,Coffee Roasteries',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 49
    },
    {
      Name: 'Tutti Fruitti Frozen Yogurt',
      Street: '13429 N US 183 HWY',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 87
    },
    {
      Name: 'Menchie\'s',
      Street: '1000 E 41ST ST',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 21
    },
    {
      Name: 'Pizza Patron',
      Street: '7112 ED BLUESTEIN BLVD',
      YelpCategories: 'Pizza',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Mang Dedoy\'s Store',
      Street: '8863 ANDERSON MILL RD',
      YelpCategories: 'Filipino',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 85
    },
    {
      Name: 'Residence Inn Austin Northwest / Near the Domain',
      Street: '11301 BURNET RD',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 10
    },
    {
      Name: 'Poke - Poke',
      Street: '3100 S CONGRESS AVE',
      YelpCategories: 'Hawaiian,Poke',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 296
    },
    {
      Name: 'Which Wich',
      Street: '2525 W ANDERSON LN',
      YelpCategories: 'Sandwiches',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 45
    },
    {
      Name: 'Picnik Burnet, LLC',
      Street: '4801 BURNET RD',
      YelpCategories: 'American (New),Gluten-Free,Breakfast & Brunch',
      Score: 81,
      YelpRaiting: 5,
      YelpReviewCount: 428
    },
    {
      Name: 'Cornucopia Popcorn',
      Street: '7318 MC NEIL DR',
      YelpCategories: 'Popcorn Shops',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 15
    },
    {
      Name: 'Halal Bros',
      Street: '1910 W BRAKER LN',
      YelpCategories: 'Mediterranean,Middle Eastern',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 231
    },
    {
      Name: '3 Train Pizzeria',
      Street: '8127 MESA DR',
      YelpCategories: 'Pizza',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 48
    },
    {
      Name: 'Chow Town Foods',
      Street: '14735 BRATTON LN',
      YelpCategories: 'Caterers',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 5
    },
    {
      Name: 'Fresa\'s Chicken',
      Street: '1703 S 1ST ST',
      YelpCategories: 'Mexican',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 297
    },
    {
      Name: 'Elan Southpark Meadows',
      Street: '9320 ALICE MAE LN',
      YelpCategories: 'Assisted Living Facilities,Retirement Homes',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 5
    },
    {
      Name: 'Viva Food Mart - Taqueria',
      Street: '8610 N LAMAR BLVD',
      YelpCategories: 'Grocery',
      Score: 87,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Eastside Tavern',
      Street: '1510 E CESAR CHAVEZ ST',
      YelpCategories: 'Bars,Barbeque,American (Traditional)',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 235
    },
    {
      Name: 'K Bop',
      Street: '2002 GUADALUPE ST',
      YelpCategories: 'Korean,Bubble Tea,Juice Bars & Smoothies',
      Score: 76,
      YelpRaiting: 4,
      YelpReviewCount: 120
    },
    {
      Name: 'Kolache Factory, INC',
      Street: '4101 W PARMER LN',
      YelpCategories: 'Bakeries,Breakfast & Brunch,Caterers',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 56
    },
    {
      Name: 'Nordstrom Ebar',
      Street: '3111 PALM WAY',
      YelpCategories: 'Coffee & Tea',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'Tres Amigos',
      Street: '7535 E US 290 HWY',
      YelpCategories: 'Mexican',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 126
    },
    {
      Name: 'Fairfield Inn & Suites Austin North',
      Street: '12536 N IH',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 36
    },
    {
      Name: 'Snarf\'s',
      Street: '1400 S 1ST ST',
      YelpCategories: 'Sandwiches,Salad',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 56
    },
    {
      Name: 'La Montana Tacos',
      Street: '707 E BRAKER LN',
      YelpCategories: 'Mexican',
      Score: 79,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Austin Recovery Inc.',
      Street: '13207 WRIGHT RD',
      YelpCategories: 'Counseling & Mental Health,Rehabilitation Center',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'LW - Canyon Grille at Rough Hollow, LLC',
      Street: '103 YACHT CLUB CV',
      YelpCategories: 'American (New)',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 78
    },
    {
      Name: 'Kung Fu Tea',
      Street: '9070 RESEARCH BLVD',
      YelpCategories: 'Bubble Tea,Coffee & Tea,Juice Bars & Smoothies',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 178
    },
    {
      Name: 'Royal Blue Grocery',
      Street: '1629 E 6TH ST',
      YelpCategories: 'Grocery',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 6
    },
    {
      Name: 'Irie Bean',
      Street: '2310 S LAMAR BLVD',
      YelpCategories: 'Coffee & Tea,Wine Bars',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 179
    },
    {
      Name: 'Paul Martin\'s American Grill',
      Street: '3120 PALM WAY',
      YelpCategories: 'American (New),Steakhouses,Seafood',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 365
    },
    {
      Name: 'La Feria Restaurant',
      Street: '6301 W PARMER LN',
      YelpCategories: 'Mexican,Seafood',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 50
    },
    {
      Name: 'Frost, A Gelato Shoppe',
      Street: '11700 ROCK ROSE AVE',
      YelpCategories: 'Gelato,Coffee & Tea,Ice Cream & Frozen Yogurt',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 162
    },
    {
      Name: 'Accent Food Services',
      Street: '7700 W PARMER LN',
      YelpCategories: 'IT Services & Computer Repair',
      Score: 99,
      YelpRaiting: 2,
      YelpReviewCount: 6
    },
    {
      Name: 'Flower Child',
      Street: '11721 ROCK ROSE AVE',
      YelpCategories: 'Salad,American (New),Vegetarian',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 433
    },
    {
      Name: 'Taco Bell Cantina',
      Street: '2000 GUADALUPE ST',
      YelpCategories: 'Tex-Mex,Mexican,Fast Food',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 46
    },
    {
      Name: 'Night Owl Bar',
      Street: '8315 BURNET RD',
      YelpCategories: 'Pubs',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 41
    },
    {
      Name: 'BC - Shipley Donuts',
      Street: '3620 S FM 620 RD',
      YelpCategories: 'Donuts',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 20
    },
    {
      Name: 'Betos #2  Mexican Restaurant',
      Street: '3306 OAK SPRINGS DR',
      YelpCategories: 'Mexican',
      Score: 77,
      YelpRaiting: 5,
      YelpReviewCount: 10
    },
    {
      Name: 'DeSano Pizzeria Napoletana',
      Street: '8000 BURNET RD',
      YelpCategories: 'Pizza,Italian,Venues & Event Spaces',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 446
    },
    {
      Name: 'Texas Popcorn Company, The',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Popcorn Shops',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Riverside Golf Course',
      Street: '1020 GROVE BLVD',
      YelpCategories: 'Golf',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 37
    },
    {
      Name: 'Hampton Inn & Suites Austin-Airport',
      Street: '7712 E RIVERSIDE DR',
      YelpCategories: 'Hotels',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 32
    },
    {
      Name: 'GRIZZELDAS',
      Street: '105 TILLERY ST',
      YelpCategories: 'Mexican,Tex-Mex,Wine Bars',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 184
    },
    {
      Name: 'Promiseland Learning Center',
      Street: '1504 E 51ST ST',
      YelpCategories: 'Elementary Schools,Preschools',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Pappadeaux',
      Street: '11617 RESEARCH BLVD',
      YelpCategories: 'Cajun/Creole,Seafood,American (Traditional)',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 244
    },
    {
      Name: 'Sellers Beverages LLC',
      Street: '213 W 4TH ST',
      YelpCategories: 'Gay Bars',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 20
    },
    {
      Name: 'Old Thousand',
      Street: '1000 E 11TH ST',
      YelpCategories: 'Cocktail Bars,Chinese,Asian Fusion',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 251
    },
    {
      Name: 'P. King',
      Street: '10001 W PARMER LN',
      YelpCategories: 'Chinese',
      Score: 59,
      YelpRaiting: 4,
      YelpReviewCount: 72
    },
    {
      Name: 'Buddy\'s Mexican Grill',
      Street: '9001 CAMERON RD',
      YelpCategories: 'Food Court,Mexican',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 13
    },
    {
      Name: 'Lavaca South Lamar',
      Street: '3121 S LAMAR BLVD',
      YelpCategories: 'Sports Bars',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 25
    },
    {
      Name: 'Twin Panda',
      Street: '9231 W PARMER LN',
      YelpCategories: 'Indonesian,Chinese',
      Score: 84,
      YelpRaiting: 5,
      YelpReviewCount: 201
    },
    {
      Name: 'Sams Stonelake',
      Street: '10931 STONELAKE BLVD',
      YelpCategories: 'Seafood,Sports Bars,Cajun/Creole',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 309
    },
    {
      Name: 'Hi Sign Brewing',
      Street: '1201 BASTROP HWY',
      YelpCategories: 'Breweries',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 49
    },
    {
      Name: 'Papadom',
      Street: '310 COLORADO ST',
      YelpCategories: 'Indian,Vegan,Desserts',
      Score: 73,
      YelpRaiting: 4,
      YelpReviewCount: 124
    },
    {
      Name: 'Staybridge Austin NW',
      Street: '13087 N US 183 HWY',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 22
    },
    {
      Name: 'Jack in the Box',
      Street: '6800 BERKMAN DR',
      YelpCategories: 'Fast Food',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 1
    },
    {
      Name: 'Tillery Kitchen & Bar',
      Street: '3201 E CESAR CHAVEZ ST',
      YelpCategories: 'Bars,American (New),Venues & Event Spaces',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 127
    },
    {
      Name: '7 - Eleven # 23807B',
      Street: '6306 MANCHACA RD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 10
    },
    {
      Name: 'Fairfield Inn and Suites Austin NW/Research',
      Street: '13087 N US 183 HWY',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 22
    },
    {
      Name: 'Golden Corral #988',
      Street: '7300 S IH',
      YelpCategories: 'Buffets',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 62
    },
    {
      Name: 'Local Post, The',
      Street: '7113 BURNET RD',
      YelpCategories: 'Pubs,Sports Bars,Burgers',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 94
    },
    {
      Name: 'Marshalls Tavern #3 LP',
      Street: '13125 POND SPRINGS RD',
      YelpCategories: 'Bars',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'MN - Chokdee Restaurant',
      Street: '11300 HWY 290 E ST',
      YelpCategories: 'Thai',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 88
    },
    {
      Name: 'Palm Door Sabine Bar',
      Street: '401 SABINE ST',
      YelpCategories: 'Venues & Event Spaces',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 36
    },
    {
      Name: 'Kiwami Ramen',
      Street: '2700 W ANDERSON LN',
      YelpCategories: 'Ramen',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 21
    },
    {
      Name: 'Encantos Tex-Mex Restaurant & Bar',
      Street: '14509 FM 969 RD',
      YelpCategories: 'Tex-Mex,Pizza,Chicken Wings',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 20
    },
    {
      Name: 'LW - Primrose School of Lakeway',
      Street: '601 S FM 620 RD',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 97,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Super China',
      Street: '11657 RESEARCH BLVD',
      YelpCategories: 'Chinese',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 103
    },
    {
      Name: 'Vigilante Gaming Bar',
      Street: '7010 EASY WIND DR',
      YelpCategories: 'Bars,Gastropubs',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 133
    },
    {
      Name: 'Pho Thaison',
      Street: '1908 GUADALUPE ST',
      YelpCategories: 'Vietnamese,Sushi Bars,Thai',
      Score: 74,
      YelpRaiting: 3,
      YelpReviewCount: 185
    },
    {
      Name: 'DisFruta',
      Street: '3504 BURLESON RD',
      YelpCategories: 'Shaved Ice,Ice Cream & Frozen Yogurt',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 10
    },
    {
      Name: 'Super Donuts # 3742',
      Street: '3742 FAR WEST BLVD',
      YelpCategories: 'Donuts',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 35
    },
    {
      Name: 'B.D. Rileys PUB at Mueller',
      Street: '1905 ALDRICH ST',
      YelpCategories: 'Irish Pub,Sports Bars,Fish & Chips',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 122
    },
    {
      Name: 'Crafty Loaf LLC',
      Street: '1934 RUTLAND DR',
      YelpCategories: 'Gluten-Free,Bakeries,Specialty Food',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 6
    },
    {
      Name: 'Local Outpost Saloon, The',
      Street: '13201 POND SPRINGS RD',
      YelpCategories: 'Bars,Pool Halls',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 19
    },
    {
      Name: 'Reel Popcorn',
      Street: '8708 S CONGRESS AVE',
      YelpCategories: 'Popcorn Shops',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 58
    },
    {
      Name: 'Panera Bread',
      Street: '13000 N IH',
      YelpCategories: 'Salad,Soup,Sandwiches',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 54
    },
    {
      Name: 'Jade Restaurant',
      Street: '3801 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Asian Fusion,Dim Sum,Hong Kong Style Cafe',
      Score: 80,
      YelpRaiting: 5,
      YelpReviewCount: 72
    },
    {
      Name: 'Menchie\'s Frozen Yogurt',
      Street: '9828 GREAT HILLS TRL',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Custom Cakes,Desserts',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 22
    },
    {
      Name: 'Mister Tramps',
      Street: '8565 RESEARCH BLVD',
      YelpCategories: 'Sports Bars,Pubs,American (Traditional)',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 268
    },
    {
      Name: 'SV - Bougie\'s Donuts & Coffee',
      Street: '5400 BRODIE LN',
      YelpCategories: 'Donuts,Coffee & Tea,Bakeries',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 127
    },
    {
      Name: 'Hudson Tavern',
      Street: '5000 HUDSON BEND RD',
      YelpCategories: 'Sports Bars',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Slab BBQ & Beer',
      Street: '7101 W SH',
      YelpCategories: 'Barbeque,Beer Bar',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 179
    },
    {
      Name: 'Stonehouse Coffee Bar',
      Street: '1105 S LAMAR BLVD',
      YelpCategories: 'Coffee & Tea,Gelato,Wine Bars',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 118
    },
    {
      Name: 'El Dorado Cafe',
      Street: '3300 W ANDERSON LN',
      YelpCategories: 'Comfort Food,Mexican,Breakfast & Brunch',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 353
    },
    {
      Name: 'Hacienda Jalisco',
      Street: '8766 RESEARCH BLVD',
      YelpCategories: 'Mexican',
      Score: 74,
      YelpRaiting: 3,
      YelpReviewCount: 7
    },
    {
      Name: 'Starbucks #6373',
      Street: '9617 ANDERSON MILL RD',
      YelpCategories: 'Coffee & Tea',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 65
    },
    {
      Name: 'Jungle Island',
      Street: '2410 E RIVERSIDE DR',
      YelpCategories: 'Pizza,Arcades,Venues & Event Spaces',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 14
    },
    {
      Name: 'Cedar Corner Store',
      Street: '1401 CEDAR AVE',
      YelpCategories: 'Delis,Chicken Wings,Sandwiches',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Mi Casa Market #1',
      Street: '11700 DESSAU RD',
      YelpCategories: 'Mexican,Grocery,Meat Shops',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 18
    },
    {
      Name: 'Native Hostel',
      Street: '807 E 4TH ST',
      YelpCategories: 'Hostels',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 85
    },
    {
      Name: 'MN-Little Beijing',
      Street: '100 E PARSONS ST',
      YelpCategories: 'Chinese',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 38
    },
    {
      Name: 'Jugo',
      Street: '603 BRAZOS ST',
      YelpCategories: 'Juice Bars & Smoothies,Coffee & Tea',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 17
    },
    {
      Name: 'Uship',
      Street: '205 E RIVERSIDE DR',
      YelpCategories: 'Towing',
      Score: 93,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Kula Revolving Sushi Bar',
      Street: '6929 AIRPORT BLVD',
      YelpCategories: 'Conveyor Belt Sushi,Sushi Bars',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 655
    },
    {
      Name: 'Serena Lissy Chocolate',
      Street: '5700 MANCHACA RD',
      YelpCategories: 'Chocolatiers & Shops',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Thai Kitchen',
      Street: '3009 GUADALUPE ST',
      YelpCategories: 'Thai',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 493
    },
    {
      Name: 'Brazos Taco House',
      Street: '6801 AIRPORT BLVD',
      YelpCategories: 'Tacos',
      Score: 74,
      YelpRaiting: 5,
      YelpReviewCount: 43
    },
    {
      Name: 'Wells Branch Food Mart',
      Street: '3505 W WELLS BRANCH PKWY',
      YelpCategories: 'Grocery',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 1
    },
    {
      Name: 'Meches Mexican Restaurant',
      Street: '13602 FM 812 RD',
      YelpCategories: 'Mexican',
      Score: 83,
      YelpRaiting: 5,
      YelpReviewCount: 15
    },
    {
      Name: 'Eskimo Hut Beer-Wine-Frozen Daquiris to Go',
      Street: '1045 NORWOOD PARK BLVD',
      YelpCategories: 'Convenience Stores,Juice Bars & Smoothies,Ice Cream & Frozen Yogurt',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 15
    },
    {
      Name: 'Lick Ice Creams',
      Street: '1905 ALDRICH ST',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 73
    },
    {
      Name: 'Pitchfork Pretty',
      Street: '2708 E CESAR CHAVEZ ST',
      YelpCategories: 'Cocktail Bars,American (New),Barbeque',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 154
    },
    {
      Name: 'Vicecreme',
      Street: '6550 COMANCHE TRL',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Desserts',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 65
    },
    {
      Name: 'Spice Fine Indian Cuisine',
      Street: '500 CANYON RIDGE DR',
      YelpCategories: 'Indian',
      Score: 77,
      YelpRaiting: 4,
      YelpReviewCount: 80
    },
    {
      Name: 'Still Austin Distillery',
      Street: '440 E ST ELMO RD',
      YelpCategories: 'Distilleries',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 61
    },
    {
      Name: 'Hong Kong Supermarket',
      Street: '8557 RESEARCH BLVD',
      YelpCategories: 'International Grocery',
      Score: 70,
      YelpRaiting: 3,
      YelpReviewCount: 57
    },
    {
      Name: 'Opal Divines Austin Grill',
      Street: '2200 S IH',
      YelpCategories: 'American (Traditional),Cocktail Bars',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 39
    },
    {
      Name: 'Nickel City',
      Street: '1133 E 11TH ST',
      YelpCategories: 'Dive Bars,Cocktail Bars',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 33
    },
    {
      Name: 'La Finca Super Mercado',
      Street: '9616 N LAMAR BLVD',
      YelpCategories: 'International Grocery',
      Score: 70,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Red\'s Porch',
      Street: '4200 W BRAKER LN',
      YelpCategories: 'Bars,Tacos,American (New)',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 166
    },
    {
      Name: 'Rock House Bar + Trailer Park',
      Street: '6900 N FM 620 RD',
      YelpCategories: 'Food Trucks',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 12
    },
    {
      Name: 'First Wok',
      Street: '603 W STASSNEY LN',
      YelpCategories: 'Chinese',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 374
    },
    {
      Name: 'El Rancho Supermarket #2 Seafood, Creamria, Meat',
      Street: '6800 BERKMAN DR',
      YelpCategories: 'Grocery',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 14
    },
    {
      Name: 'Hunan Bistro',
      Street: '10700 ANDERSON MILL RD',
      YelpCategories: 'Chinese,Asian Fusion,Desserts',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 50
    },
    {
      Name: 'Second Bar & Kitchen',
      Street: '3600 PRESIDENTIAL BLVD',
      YelpCategories: 'American (New),Desserts,Breakfast & Brunch',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 54
    },
    {
      Name: 'La Madeleine #203',
      Street: '14028 N US 183 HWY',
      YelpCategories: 'French',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 113
    },
    {
      Name: 'Fying Man Brewing Co.',
      Street: '2400 PATTERSON INDUSTRIAL DR',
      YelpCategories: 'Breweries',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 20
    },
    {
      Name: 'Primrose School of Four Points',
      Street: '6606 SITIO DEL RIO BLVD',
      YelpCategories: 'Preschools,Child Care & Day Care',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 5
    },
    {
      Name: 'Woody\'s Country Market',
      Street: '100 W FM 1626 RD',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Onion Creek Ballroom',
      Street: '9941 OLD LOCKHART RD',
      YelpCategories: 'Venues & Event Spaces',
      Score: 97,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Sleep Inn and Suites',
      Street: '8410 E US 290 HWY',
      YelpCategories: 'Hotels',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 19
    },
    {
      Name: 'Houndstooth Coffee',
      Street: '2823 E MARTIN LUTHER KING JR BLVD',
      YelpCategories: 'Coffee & Tea,Breakfast & Brunch,Bars',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 39
    },
    {
      Name: 'LW - Aloha Austin',
      Street: '2125 LOHMANS CROSSING RD',
      YelpCategories: 'Acai Bowls',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Oddwood Ales, LLC',
      Street: '3108 MANOR RD',
      YelpCategories: 'Breweries',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 39
    },
    {
      Name: 'Sake Mama',
      Street: '519 E 6TH ST',
      YelpCategories: 'Bars',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Walgreens #3341',
      Street: '5600 S 1ST ST',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 33
    },
    {
      Name: 'U PAK M',
      Street: '11940 MANCHACA RD',
      YelpCategories: 'Grocery,Gas Stations',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'Riverside Chevron',
      Street: '400 S CONGRESS AVE',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 26
    },
    {
      Name: 'Wheatsville Food Co-Op',
      Street: '3101 GUADALUPE ST',
      YelpCategories: 'Delis,Grocery,Bakeries',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 347
    },
    {
      Name: 'Walgreens',
      Street: '9307 N LAMAR BLVD',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 11
    },
    {
      Name: 'Lamar Corner Store',
      Street: '7545 N LAMAR BLVD',
      YelpCategories: 'Convenience Stores',
      Score: 77,
      YelpRaiting: 2,
      YelpReviewCount: 4
    },
    {
      Name: 'Around the Corner',
      Street: '2321 W NORTH LOOP BLVD',
      YelpCategories: 'Convenience Stores',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Dollar General Store #3193',
      Street: '5738 MANCHACA RD',
      YelpCategories: 'Department Stores',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Escarpment Exxon',
      Street: '6109 W WILLIAM CANNON DR',
      YelpCategories: 'Gas Stations,Convenience Stores,Car Wash',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 19
    },
    {
      Name: 'Walgreens',
      Street: '6721 S CONGRESS AVE',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 8
    },
    {
      Name: 'Speedway Food Mart',
      Street: '104 E 31ST ST',
      YelpCategories: 'Grocery',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'The Children\'s Center of Austin',
      Street: '4308 N QUINLAN PARK RD',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Brew Market and Cafe',
      Street: '3842 AIRPORT BLVD',
      YelpCategories: 'Beer, Wine & Spirits,Grocery',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Heritage at Gaines Ranch - Retail',
      Street: '4409 GAINES RANCH LOOP',
      YelpCategories: 'Retirement Homes',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'North Loop Food Store',
      Street: '120 E NORTH LOOP BLVD',
      YelpCategories: 'Convenience Stores',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 51
    },
    {
      Name: 'H & R Grocery',
      Street: '6400 S CONGRESS AVE',
      YelpCategories: 'Convenience Stores',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 6
    },
    {
      Name: 'Bread Basket, The',
      Street: '1514 HOLLY ST',
      YelpCategories: 'Convenience Stores',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 7
    },
    {
      Name: 'Texan Market #5',
      Street: '12400 AMHERST DR',
      YelpCategories: 'Convenience Stores',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 18
    },
    {
      Name: 'All Star Grocery',
      Street: '4619 S CONGRESS AVE',
      YelpCategories: 'Grocery',
      Score: 93,
      YelpRaiting: 1,
      YelpReviewCount: 2
    },
    {
      Name: 'Manor Express',
      Street: '2101 MANOR RD',
      YelpCategories: 'Convenience Stores',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'La Michoacana Meat Market',
      Street: '6908 CAMERON RD',
      YelpCategories: 'Restaurants,Meat Shops',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 13
    },
    {
      Name: 'Candlewood',
      Street: '4320 S IH',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 45
    },
    {
      Name: 'Q.P. Food Mart',
      Street: '5625 WEST GATE BLVD',
      YelpCategories: 'Convenience Stores',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'C- Mart',
      Street: '7007 VILLAGE CENTER DR',
      YelpCategories: 'Convenience Stores',
      Score: 83,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'C-Mart #10',
      Street: '3008 W SLAUGHTER LN',
      YelpCategories: 'Convenience Stores',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'C- Mart #9',
      Street: '8523 RESEARCH BLVD',
      YelpCategories: 'Convenience Stores',
      Score: 93,
      YelpRaiting: 2,
      YelpReviewCount: 3
    },
    {
      Name: 'Walgreens',
      Street: '6911 N FM 620 RD',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 17
    },
    {
      Name: 'Quick Stop Grocery',
      Street: '1197 HARGRAVE ST',
      YelpCategories: 'Convenience Stores',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Capital Food Mart',
      Street: '8911 N LAMAR BLVD',
      YelpCategories: 'Grocery,Convenience Stores',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Cost Plus World Market #74',
      Street: '9333 RESEARCH BLVD',
      YelpCategories: 'Home Decor,Beer, Wine & Spirits,Furniture Stores',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 41
    },
    {
      Name: 'La Michoacana - Retail',
      Street: '1917 E 7TH ST',
      YelpCategories: 'Meat Shops,Mexican',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 50
    },
    {
      Name: 'Sam\'s Club #6453 Bakery',
      Street: '9700 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Department Stores,Wholesale Stores,Grocery',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 63
    },
    {
      Name: 'Anyday Grocery',
      Street: '919 SPRINGDALE RD',
      YelpCategories: 'Convenience Stores',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'WL - Randall\'s Grocery #2477',
      Street: '3300 BEE CAVES RD',
      YelpCategories: 'Bakeries,Grocery,Florists',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'HEB #27- Anderson Mill',
      Street: '11521 N FM 620 RD',
      YelpCategories: 'Massage,Skin Care,Massage Therapy',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 31
    },
    {
      Name: 'Walgreens #07673',
      Street: '10600 W PARMER LN',
      YelpCategories: 'Cosmetics & Beauty Supply,Convenience Stores,Pharmacy',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 11
    },
    {
      Name: 'Zip\'n',
      Street: '7845 SHOAL CREEK BLVD',
      YelpCategories: 'Convenience Stores',
      Score: 82,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'CVS Pharmacy #7442',
      Street: '11300 N LAMAR BLVD',
      YelpCategories: 'Drugstores',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 19
    },
    {
      Name: 'CVS Pharmacy #6822',
      Street: '5256 BURNET RD',
      YelpCategories: 'Drugstores',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 39
    },
    {
      Name: 'CVS Pharmacy #6892',
      Street: '2927 GUADALUPE ST',
      YelpCategories: 'Drugstores',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 40
    },
    {
      Name: 'CVS Pharmacy #6964',
      Street: '2610 LAKE AUSTIN BLVD',
      YelpCategories: 'Drugstores',
      Score: 98,
      YelpRaiting: 2,
      YelpReviewCount: 16
    },
    {
      Name: 'CVS/Pharmacy #7210',
      Street: '1901 W WILLIAM CANNON DR',
      YelpCategories: 'Drugstores',
      Score: 99,
      YelpRaiting: 2,
      YelpReviewCount: 14
    },
    {
      Name: 'Bread Basket',
      Street: '2213 JUSTIN LN',
      YelpCategories: 'Grocery',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Jack N Jill Stores',
      Street: '704 E ST JOHNS AVE',
      YelpCategories: 'Convenience Stores',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Hyde Park Bar & Grill South',
      Street: '4521 WEST GATE BLVD',
      YelpCategories: 'American (Traditional),Bars',
      Score: 81,
      YelpRaiting: 3,
      YelpReviewCount: 399
    },
    {
      Name: 'CVS Pharmacy #7606',
      Street: '2222 GUADALUPE ST',
      YelpCategories: 'Drugstores',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 12
    },
    {
      Name: 'CVS Pharmacy #6945',
      Street: '4405 E RIVERSIDE DR',
      YelpCategories: 'Drugstores',
      Score: 91,
      YelpRaiting: 2,
      YelpReviewCount: 29
    },
    {
      Name: 'MN - Dollar General #6946',
      Street: '12750 LAPOYNOR ST',
      YelpCategories: 'Discount Store',
      Score: 99,
      YelpRaiting: 2,
      YelpReviewCount: 2
    },
    {
      Name: 'Candlewood Suites Hotel',
      Street: '9701 STONELAKE BLVD',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 17
    },
    {
      Name: 'Oriental Grocery & Bakery',
      Street: '707 E BRAKER LN',
      YelpCategories: 'Grocery,Bakeries,Filipino',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 19
    },
    {
      Name: 'CVS/Pharmacy #8322',
      Street: '11725 N FM 620 RD',
      YelpCategories: 'Drugstores',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 20
    },
    {
      Name: 'La Michoacana Meat Market',
      Street: '5706 MANOR RD',
      YelpCategories: 'Meat Shops,Fruits & Veggies',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'CVS Pharmacy # 7243',
      Street: '3201 BEE CAVES RD',
      YelpCategories: 'Drugstores',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 20
    },
    {
      Name: 'Corner Store, The',
      Street: '525 W BEN WHITE BLVD',
      YelpCategories: 'Convenience Stores',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 5
    },
    {
      Name: 'Walgreens # 09679',
      Street: '12601 TECH RIDGE BLVD',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 18
    },
    {
      Name: 'Afri Carib Market',
      Street: '825 E RUNDBERG LN',
      YelpCategories: 'Grocery',
      Score: 98,
      YelpRaiting: 2,
      YelpReviewCount: 5
    },
    {
      Name: 'Wal-Mart Supercenter #1253-Meat/Produce',
      Street: '710 E BEN WHITE BLVD',
      YelpCategories: 'Department Stores,Grocery',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 113
    },
    {
      Name: 'Pho Saigon',
      Street: '10901 N LAMAR BLVD',
      YelpCategories: 'Vietnamese,Noodles',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 675
    },
    {
      Name: 'MT Supermarket - Meat/Seafood',
      Street: '10901 N LAMAR BLVD',
      YelpCategories: 'Grocery',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 280
    },
    {
      Name: 'Tino\'s Greek Cafe',
      Street: '9901 BRODIE LN',
      YelpCategories: 'Greek,Mediterranean',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 167
    },
    {
      Name: 'Baskin Robbins',
      Street: '730 W STASSNEY LN',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 17
    },
    {
      Name: 'The Summit at Westlake Hills',
      Street: '1034 LIBERTY PARK DR',
      YelpCategories: 'Retirement Homes',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 14
    },
    {
      Name: 'Taqueria La Escondida #2',
      Street: '10900 W US 290 HWY',
      YelpCategories: 'Mexican',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 19
    },
    {
      Name: 'Bombay Express',
      Street: '13000 N IH',
      YelpCategories: 'Indian,Vegetarian,Desserts',
      Score: 85,
      YelpRaiting: 5,
      YelpReviewCount: 305
    },
    {
      Name: 'Homer\'s Bar and Grill',
      Street: '1779 W WELLS BRANCH PKWY',
      YelpCategories: 'Karaoke,Sports Bars',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 29
    },
    {
      Name: 'Sonic Drive In #113',
      Street: '9215 W PARMER LN',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 85,
      YelpRaiting: 2,
      YelpReviewCount: 58
    },
    {
      Name: 'First Chinese BBQ',
      Street: '10901 N LAMAR BLVD',
      YelpCategories: 'Chinese,Barbeque',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 408
    },
    {
      Name: 'Vino Vino',
      Street: '4119 GUADALUPE ST',
      YelpCategories: 'Wine Bars,American (New),Cocktail Bars',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 507
    },
    {
      Name: 'Star of Texas',
      Street: '611 W 22ND ST',
      YelpCategories: 'Hotels',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 13
    },
    {
      Name: 'Spec\'s Wine, Liquor & Fine Foods',
      Street: '5775 AIRPORT BLVD',
      YelpCategories: 'Beer, Wine & Spirits',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 111
    },
    {
      Name: 'LW - Hills Country Club-World of Tennis',
      Street: '1 WORLD OF TENNIS SQ',
      YelpCategories: 'Tennis',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 6
    },
    {
      Name: 'III Forks #350',
      Street: '111 LAVACA ST',
      YelpCategories: 'Steakhouses,Seafood,Bars',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 391
    },
    {
      Name: 'RW - Panera Bread Bakery and Cafe',
      Street: '2805 BEE CAVES RD',
      YelpCategories: 'Sandwiches,Salad,Soup',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 97
    },
    {
      Name: '2nd Street Market',
      Street: '200 SAN JACINTO BLVD',
      YelpCategories: 'Grocery',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'C-Mart #7',
      Street: '5200 E WILLIAM CANNON DR',
      YelpCategories: 'Convenience Stores',
      Score: 83,
      YelpRaiting: 1,
      YelpReviewCount: 2
    },
    {
      Name: 'Family Dollar Store #1782',
      Street: '5811 BERKMAN DR',
      YelpCategories: 'Department Stores',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Family Dollar Store #5520',
      Street: '5301 E STASSNEY LN',
      YelpCategories: 'Department Stores',
      Score: 96,
      YelpRaiting: 1,
      YelpReviewCount: 2
    },
    {
      Name: 'Family Dollar Store #26767',
      Street: '9308 ANDERSON MILL RD',
      YelpCategories: 'Department Stores',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 6
    },
    {
      Name: 'Family Dollar Store #6846',
      Street: '4701 E MARTIN LUTHER KING JR BLVD',
      YelpCategories: 'Discount Store',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'Chuy\'s 183',
      Street: '11680 RESEARCH BLVD',
      YelpCategories: 'Tex-Mex,Mexican,Bars',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 700
    },
    {
      Name: 'Holiday Inn Austin Town Lake Pecan Tree Restaurant',
      Street: '20 N IH',
      YelpCategories: 'Hotels',
      Score: 81,
      YelpRaiting: 3,
      YelpReviewCount: 164
    },
    {
      Name: 'Schlotzsky\'s',
      Street: '218 S LAMAR BLVD',
      YelpCategories: 'Sandwiches,Delis',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 83
    },
    {
      Name: 'Dollar General Store #10315',
      Street: '9600 MANCHACA RD',
      YelpCategories: 'Discount Store',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'LW - Brookdale Lakeway Skilled Nursing',
      Street: '1917 LOHMANS CROSSING RD',
      YelpCategories: 'Skilled Nursing,Rehabilitation Center',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 10
    },
    {
      Name: 'Blake Manor Food Mart',
      Street: '17530 BLAKE MANOR RD',
      YelpCategories: 'Convenience Stores',
      Score: 70,
      YelpRaiting: 2,
      YelpReviewCount: 2
    },
    {
      Name: 'The Children\'s Courtyard',
      Street: '10625 BONAVENTURE DR',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Kolache Factory',
      Street: '3706 N LAMAR BLVD',
      YelpCategories: 'Bakeries,Breakfast & Brunch,Caterers',
      Score: 76,
      YelpRaiting: 3,
      YelpReviewCount: 75
    },
    {
      Name: 'Waterloo Ice House',
      Street: '9600 ESCARPMENT BLVD',
      YelpCategories: 'American (Traditional),Sports Bars',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 162
    },
    {
      Name: 'Dollar General Store #10876',
      Street: '825 E RUNDBERG LN',
      YelpCategories: 'Fashion',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Ashley Furniture Homestore',
      Street: '9900 S IH',
      YelpCategories: 'Furniture Stores,Home Decor,Mattresses',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 235
    },
    {
      Name: 'California Pizza Kitchen',
      Street: '3401 ESPERANZA XING',
      YelpCategories: 'Pizza,American (New),Salad',
      Score: 74,
      YelpRaiting: 3,
      YelpReviewCount: 201
    },
    {
      Name: 'Plucker\'s Wing Bar',
      Street: '3909 S LAMAR BLVD',
      YelpCategories: 'Chicken Wings,Sports Bars,American (Traditional)',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 428
    },
    {
      Name: 'La Quinta Inn Austin North',
      Street: '7622 N IH',
      YelpCategories: 'Hotels',
      Score: 81,
      YelpRaiting: 3,
      YelpReviewCount: 42
    },
    {
      Name: 'La Quinta Inn #0478',
      Street: '4200 S IH',
      YelpCategories: 'Hotels',
      Score: 91,
      YelpRaiting: 2,
      YelpReviewCount: 56
    },
    {
      Name: 'CVS Pharmacy #0357',
      Street: '1701 E PARMER LN',
      YelpCategories: 'Pharmacy',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 17
    },
    {
      Name: 'Taco More',
      Street: '9414 PARKFIELD DR',
      YelpCategories: 'Tacos',
      Score: 81,
      YelpRaiting: 5,
      YelpReviewCount: 299
    },
    {
      Name: 'Long John Silvers',
      Street: '704 E WILLIAM CANNON DR',
      YelpCategories: 'Fast Food,Seafood',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 12
    },
    {
      Name: 'Austin Community College Children\'s Lab School',
      Street: '3401 WEBBERVILLE RD',
      YelpCategories: 'Colleges & Universities,Adult Education',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'Aster\'s Ethiopian Restaurant',
      Street: '2804 N IH',
      YelpCategories: 'Ethiopian',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 479
    },
    {
      Name: 'Chili\'s Grill and Bar',
      Street: '6619 N IH',
      YelpCategories: 'American (Traditional),Bars,Tex-Mex',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 55
    },
    {
      Name: 'Westwood Country Club - Tennis Grill',
      Street: '3808 W 35TH ST',
      YelpCategories: 'Venues & Event Spaces,Tennis',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Taqueria Guadalajara',
      Street: '9207 N LAMAR BLVD',
      YelpCategories: 'Mexican',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 53
    },
    {
      Name: 'El Taquito',
      Street: '1713 OLD EAST RIVERSIDE DR',
      YelpCategories: 'Mexican',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 380
    },
    {
      Name: 'Dollar Tree Store #2988',
      Street: '500 W WILLIAM CANNON DR',
      YelpCategories: 'Discount Store',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'Domino\'s Pizza',
      Street: '1807 W SLAUGHTER LN',
      YelpCategories: 'Pizza,Chicken Wings,Sandwiches',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 33
    },
    {
      Name: 'Chucho\'s Mexican Restaurant',
      Street: '1615 GRAND AVENUE PKWY',
      YelpCategories: 'Mexican',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 90
    },
    {
      Name: 'Amy\'s Ice Cream',
      Street: '9600 S IH',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 72
    },
    {
      Name: 'Spec\'s Wines, Spirits & Finer Foods, #62',
      Street: '10515 N MOPAC EXPY',
      YelpCategories: 'Beer, Wine & Spirits',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 141
    },
    {
      Name: 'CVS/Pharmacy #3881',
      Street: '520 W SLAUGHTER LN',
      YelpCategories: 'Drugstores',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 18
    },
    {
      Name: 'Renaissance- Austin',
      Street: '11279 TAYLOR DRAPER LN',
      YelpCategories: 'Retirement Homes',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Cups and Cones, LLC',
      Street: '2900 N QUINLAN PARK RD',
      YelpCategories: 'Coffee & Tea,Ice Cream & Frozen Yogurt,Burgers',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 42
    },
    {
      Name: 'Hyatt Regency Austin- Marker 10',
      Street: '208 BARTON SPRINGS RD',
      YelpCategories: 'Hotels',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 339
    },
    {
      Name: 'Querencia at Barton Creek',
      Street: '2500 BARTON CREEK BLVD',
      YelpCategories: 'Retirement Homes',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'SV - BJ\'s Restaurant & Brewhouse',
      Street: '5207 BRODIE LN',
      YelpCategories: 'American (New),Breweries,Pizza',
      Score: 79,
      YelpRaiting: 3,
      YelpReviewCount: 364
    },
    {
      Name: 'Seton Healthcare- Dell Children\'s Center',
      Street: '4900 MUELLER BLVD',
      YelpCategories: 'Hospitals,Pediatricians',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 100
    },
    {
      Name: 'Cinemark #384',
      Street: '9900 S IH',
      YelpCategories: 'Cinema',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 118
    },
    {
      Name: 'Walnut Market #2',
      Street: '5517 CAMERON RD',
      YelpCategories: 'Grocery,Gas Stations',
      Score: 86,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Zocalo Cafe- Taqueria Fresca',
      Street: '1110 WEST LYNN ST',
      YelpCategories: 'Mexican',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 461
    },
    {
      Name: 'Pizza Hut',
      Street: '1015 E BRAKER LN',
      YelpCategories: 'Pizza,Italian,Chicken Wings',
      Score: 98,
      YelpRaiting: 2,
      YelpReviewCount: 53
    },
    {
      Name: 'Crawfish Shack and Oyster Bar',
      Street: '2013 W WELLS BRANCH PKWY',
      YelpCategories: 'Seafood,Cajun/Creole',
      Score: 77,
      YelpRaiting: 4,
      YelpReviewCount: 437
    },
    {
      Name: 'Jalisco\'s Restaurant and Bar',
      Street: '6601 S CONGRESS AVE',
      YelpCategories: 'Mexican',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 217
    },
    {
      Name: '7-Eleven Convenience Store',
      Street: '2600 GUADALUPE ST',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 13
    },
    {
      Name: 'Mexican American Cultural Ctr - COA Pks & Rec.',
      Street: '600 RIVER ST',
      YelpCategories: 'Museums',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 12
    },
    {
      Name: 'Eberly',
      Street: '615 S LAMAR BLVD',
      YelpCategories: 'Bars,American (Traditional)',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 337
    },
    {
      Name: 'Hyatt Regency Austin - Cactus Cafe',
      Street: '208 BARTON SPRINGS RD',
      YelpCategories: 'Hotels',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 339
    },
    {
      Name: 'Hyatt Regency - S.W.B. Southwest Bistro',
      Street: '208 BARTON SPRINGS RD',
      YelpCategories: 'Hotels',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 339
    },
    {
      Name: 'Hyatt Regency Austin- Banquet Kitchen',
      Street: '208 BARTON SPRINGS RD',
      YelpCategories: 'Hotels',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 339
    },
    {
      Name: 'Residence Inn Parmer Lane',
      Street: '12401 N LAMAR BLVD',
      YelpCategories: 'Hotels',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 18
    },
    {
      Name: 'Parkside',
      Street: '301 E 6TH ST',
      YelpCategories: 'Seafood,American (New)',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 919
    },
    {
      Name: 'Fogo De Chao Churrascaria',
      Street: '309 E 3RD ST',
      YelpCategories: 'Brazilian,Steakhouses',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 707
    },
    {
      Name: 'Hilton Garden Inn Austin Downtown',
      Street: '500 N IH',
      YelpCategories: 'Hotels',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 170
    },
    {
      Name: '7-Eleven',
      Street: '11518 N FM 620 RD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 8
    },
    {
      Name: 'Piranha Killer Sushi',
      Street: '207 SAN JACINTO BLVD',
      YelpCategories: 'Sushi Bars,Desserts,Wine Bars',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 799
    },
    {
      Name: 'Gattitown #2006',
      Street: '9900 S IH',
      YelpCategories: 'Pizza,Arcades',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 55
    },
    {
      Name: 'Gatti\'s Pizza #125',
      Street: '7101 W SH',
      YelpCategories: 'Pizza',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 28
    },
    {
      Name: 'Gus Garcia Young Men\'s Leadership Academy',
      Street: '7414 JOHNNY MORRIS RD',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 3
    },
    {
      Name: 'Lifetime Fitness Cafe',
      Street: '7101 S MOPAC EXPY',
      YelpCategories: 'Gyms,Sports Clubs,Trainers',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 243
    },
    {
      Name: 'Bread Basket- Texaco',
      Street: '12800 PEARCE LN',
      YelpCategories: 'Convenience Stores',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Freebirds',
      Street: '1000 E 41ST ST',
      YelpCategories: 'Tex-Mex,Mexican',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 170
    },
    {
      Name: 'North Austin Muslim Community Center',
      Street: '11900 N LAMAR BLVD',
      YelpCategories: 'Mosques',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Hunan Ranch Chinese Restaurant and Grill',
      Street: '14900 AVERY RANCH BLVD',
      YelpCategories: 'Chinese,Noodles,Soup',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 217
    },
    {
      Name: 'Bender Bar and Grill',
      Street: '321 W BEN WHITE BLVD',
      YelpCategories: 'Lounges,Dive Bars,American (Traditional)',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 280
    },
    {
      Name: 'Fresh Plus',
      Street: '1221 WEST LYNN ST',
      YelpCategories: 'Grocery,Beer, Wine & Spirits,Fruits & Veggies',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 79
    },
    {
      Name: 'Cele Service Station',
      Street: '18726 CAMERON RD',
      YelpCategories: 'Barbeque',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 54
    },
    {
      Name: 'Star Seeds Cafe',
      Street: '3101 N IH',
      YelpCategories: 'Diners,Breakfast & Brunch,American (Traditional)',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 332
    },
    {
      Name: 'California Pizza Kitchen',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Pizza,American (Traditional)',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 115
    },
    {
      Name: 'Papa John\'s Pizza #1128',
      Street: '9222 W PARMER LN',
      YelpCategories: 'Pizza',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 30
    },
    {
      Name: 'El Regio',
      Street: '6615 BERKMAN DR',
      YelpCategories: 'Mexican,Chicken Shop',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 81
    },
    {
      Name: 'Austin Sports Center Snack Bar',
      Street: '425 WOODWARD ST',
      YelpCategories: 'Sports Clubs',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Austin Grind',
      Street: '4005 W PARMER LN',
      YelpCategories: 'Coffee & Tea',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 181
    },
    {
      Name: 'Sunrise Mini Mart',
      Street: '539 W OLTORF ST',
      YelpCategories: 'Convenience Stores',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Orange Market',
      Street: '910 W 25TH ST',
      YelpCategories: 'Convenience Stores,Beer, Wine & Spirits',
      Score: 86,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'WL - Randall\'s #2477- Deli Station',
      Street: '3300 BEE CAVES RD',
      YelpCategories: 'Bakeries,Grocery,Florists',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Dolce Vita',
      Street: '4222 DUVAL ST',
      YelpCategories: 'Coffee & Tea,Bars,Sandwiches',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 345
    },
    {
      Name: 'South Austin Market Place',
      Street: '2101 E BEN WHITE BLVD',
      YelpCategories: 'Apartments',
      Score: 87,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Independence Brewing Co.',
      Street: '3913 TODD LN',
      YelpCategories: 'Breweries,Beer, Wine & Spirits',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 103
    },
    {
      Name: 'Corner Store #1301',
      Street: '1310 W HOWARD LN',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 89,
      YelpRaiting: 2,
      YelpReviewCount: 4
    },
    {
      Name: 'Conoco',
      Street: '6214 E RIVERSIDE DR',
      YelpCategories: 'Convenience Stores,Gas Stations',
      Score: 91,
      YelpRaiting: 2,
      YelpReviewCount: 2
    },
    {
      Name: 'HEB  Retail',
      Street: '1000 E 41ST ST',
      YelpCategories: 'Drugstores',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 9
    },
    {
      Name: 'HEB',
      Street: '7301 N FM 620 RD',
      YelpCategories: 'Drugstores',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 53
    },
    {
      Name: 'Whataburger #321',
      Street: '801 E WILLIAM CANNON DR',
      YelpCategories: 'Burgers,Fast Food',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 33
    },
    {
      Name: 'Green Mesquite, The',
      Street: '1400 BARTON SPRINGS RD',
      YelpCategories: 'Barbeque',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 564
    },
    {
      Name: 'Catfish Parlour',
      Street: '11910 RESEARCH BLVD',
      YelpCategories: 'Seafood',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 276
    },
    {
      Name: 'Carousel Lounge',
      Street: '1110 E 52ND ST',
      YelpCategories: 'Lounges',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 71
    },
    {
      Name: 'El Arroyo',
      Street: '1624 W 5TH ST',
      YelpCategories: 'Mexican,Tex-Mex',
      Score: 83,
      YelpRaiting: 3,
      YelpReviewCount: 370
    },
    {
      Name: 'Bluebonnet Trail Elementary',
      Street: '11316 FARMHAVEN RD',
      YelpCategories: 'Elementary Schools',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Taco Cabana #129',
      Street: '2507 E RIVERSIDE DR',
      YelpCategories: 'Mexican',
      Score: 82,
      YelpRaiting: 2,
      YelpReviewCount: 98
    },
    {
      Name: 'Los Comales Taqueria',
      Street: '2136 E 7TH ST',
      YelpCategories: 'Mexican',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 91
    },
    {
      Name: 'Peche',
      Street: '208 W 4TH ST',
      YelpCategories: 'Lounges,French,Cocktail Bars',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 983
    },
    {
      Name: 'Rudy\'s Country Store',
      Street: '11570 RESEARCH BLVD',
      YelpCategories: 'Barbeque,Gas Stations',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 1072
    },
    {
      Name: 'Taco Shack III',
      Street: '12439 METRIC BLVD',
      YelpCategories: 'Mexican',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 116
    },
    {
      Name: 'Subway #10569',
      Street: '2110 W SLAUGHTER LN',
      YelpCategories: 'Fast Food,Sandwiches',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 12
    },
    {
      Name: 'Coco\'s Cafe',
      Street: '8557 RESEARCH BLVD',
      YelpCategories: 'Taiwanese,Coffee & Tea,Bubble Tea',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 445
    },
    {
      Name: 'Mobil Food Mart #2',
      Street: '717 E 7TH ST',
      YelpCategories: 'Convenience Stores',
      Score: 86,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Threadgill\'s',
      Street: '6416 N LAMAR BLVD',
      YelpCategories: 'American (Traditional),Southern,Breakfast & Brunch',
      Score: 78,
      YelpRaiting: 3,
      YelpReviewCount: 358
    },
    {
      Name: 'Hoffbrau',
      Street: '613 W 6TH ST',
      YelpCategories: 'Steakhouses',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 126
    },
    {
      Name: 'Shop 24',
      Street: '213 E 6TH ST',
      YelpCategories: 'Convenience Stores',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'Culver\'s',
      Street: '2240 W BRAKER LN',
      YelpCategories: 'Burgers,Fast Food',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 184
    },
    {
      Name: 'Aussie\'s Bar & Grill',
      Street: '306 BARTON SPRINGS RD',
      YelpCategories: 'Bars,American (New),Burgers',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 158
    },
    {
      Name: 'Amy\'s Ice Cream',
      Street: '1012 W 6TH ST',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 349
    },
    {
      Name: 'Hao-Hao Restaurant',
      Street: '1901 W WILLIAM CANNON DR',
      YelpCategories: 'Vietnamese,Chinese',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 234
    },
    {
      Name: 'Twin Lion Chinese Restaurant',
      Street: '4815 W BRAKER LN',
      YelpCategories: 'Chinese',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 276
    },
    {
      Name: 'Taj Palace Restaurant',
      Street: '6700 MIDDLE FISKVILLE RD',
      YelpCategories: 'Indian,Buffets',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 288
    },
    {
      Name: 'Elephant Room',
      Street: '315 CONGRESS AVE',
      YelpCategories: 'Jazz & Blues',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 367
    },
    {
      Name: 'Magnolia Cafe South',
      Street: '1920 S CONGRESS AVE',
      YelpCategories: 'Breakfast & Brunch,American (Traditional)',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 1407
    },
    {
      Name: 'Baby Acapulco #1',
      Street: '1705 SOUTH LAKESHORE BLVD',
      YelpCategories: 'Mexican',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 108
    },
    {
      Name: 'Bill Miller BBQ',
      Street: '709 E BEN WHITE BLVD',
      YelpCategories: 'Barbeque',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 106
    },
    {
      Name: 'Paramount Theatre',
      Street: '713 CONGRESS AVE',
      YelpCategories: 'Performing Arts',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 188
    },
    {
      Name: 'Randall\'s #2475- Food',
      Street: '5311 BALCONES DR',
      YelpCategories: 'Drugstores,Grocery',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 32
    },
    {
      Name: 'Sonic Drive In',
      Street: '7708 BURNET RD',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 32
    },
    {
      Name: 'B B Rover\'s Intl. Cafe',
      Street: '12636 RESEARCH BLVD',
      YelpCategories: 'Pubs,American (Traditional)',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 144
    },
    {
      Name: 'Arby\'s Roast Beef  #00602',
      Street: '4411 S LAMAR BLVD',
      YelpCategories: 'Fast Food,Sandwiches',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 34
    },
    {
      Name: 'Avenue B Grocery',
      Street: '4403 AVENUE',
      YelpCategories: 'Grocery,Sandwiches',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 116
    },
    {
      Name: 'Camino Real Restaurant',
      Street: '8650 SPICEWOOD SPRINGS RD',
      YelpCategories: 'Mexican,Tex-Mex',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 163
    },
    {
      Name: 'Matt\'s El Rancho',
      Street: '2613 S LAMAR BLVD',
      YelpCategories: 'Mexican,Tex-Mex',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 1039
    },
    {
      Name: 'Phoenicia Bakery & Deli, Inc.',
      Street: '2912 S LAMAR BLVD',
      YelpCategories: 'Sandwiches,Delis',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 153
    },
    {
      Name: 'Short Stop #3',
      Street: '2217 E 7TH ST',
      YelpCategories: 'Burgers',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 14
    },
    {
      Name: 'Galindo Elementary',
      Street: '3800 S 2ND ST',
      YelpCategories: 'Elementary Schools',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Esther\'s Follies',
      Street: '525 E 6TH ST',
      YelpCategories: 'Performing Arts,Comedy Clubs',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 391
    },
    {
      Name: 'Dairy Queen',
      Street: '8728 N LAMAR BLVD',
      YelpCategories: 'Fast Food,Ice Cream & Frozen Yogurt,Burgers',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 24
    },
    {
      Name: 'Denny\'s #686',
      Street: '7100 N IH',
      YelpCategories: 'American (Traditional),Breakfast & Brunch,Diners',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 60
    },
    {
      Name: 'Habitat Hotel',
      Street: '500 E HIGHLAND MALL BLVD',
      YelpCategories: 'Hotels',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 130
    },
    {
      Name: 'Book People Coffeeshop',
      Street: '603 N LAMAR BLVD',
      YelpCategories: 'Bookstores',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 410
    },
    {
      Name: 'East Side Cafe',
      Street: '2113 MANOR RD',
      YelpCategories: 'American (Traditional),Breakfast & Brunch,Bars',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 907
    },
    {
      Name: 'Warehouse Saloon & Billards',
      Street: '509 E BEN WHITE BLVD',
      YelpCategories: 'Pool Halls,Sports Bars,Karaoke',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 83
    },
    {
      Name: 'Westwood Country Club',
      Street: '3808 W 35TH ST',
      YelpCategories: 'Venues & Event Spaces,Tennis',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Conans Pizza - South',
      Street: '2018 W STASSNEY LN',
      YelpCategories: 'Pizza,Vegan',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 159
    },
    {
      Name: 'Texas French Bread',
      Street: '2900 RIO GRANDE ST',
      YelpCategories: 'Bakeries,American (New),Wine Bars',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 299
    },
    {
      Name: 'Short Stop',
      Street: '1144 AIRPORT BLVD',
      YelpCategories: 'Fast Food',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Clicks Billiards',
      Street: '2121 E OLTORF ST',
      YelpCategories: 'Pool Halls,Sports Bars',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 36
    },
    {
      Name: 'Saxon Pub, The',
      Street: '1320 S LAMAR BLVD',
      YelpCategories: 'Music Venues,Bars',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 162
    },
    {
      Name: 'Short Stop',
      Street: '6603 BERKMAN DR',
      YelpCategories: 'Burgers',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'Little Caesar\'s Pizza',
      Street: '4410 E RIVERSIDE DR',
      YelpCategories: 'Pizza',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 14
    },
    {
      Name: 'People\'s Pharmacy',
      Street: '4201 WESTBANK DR',
      YelpCategories: 'Delis,Drugstores,Gluten-Free',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 46
    },
    {
      Name: 'Gracy Woods Nursing Home',
      Street: '12021 METRIC BLVD',
      YelpCategories: 'Home Health Care',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 5
    },
    {
      Name: 'St David\'s South Hosp (Columbia)',
      Street: '901 W BEN WHITE BLVD',
      YelpCategories: 'Medical Centers',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 119
    },
    {
      Name: 'Whataburger #347',
      Street: '2801 W ANDERSON LN',
      YelpCategories: 'Fast Food,Burgers',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 77
    },
    {
      Name: 'Sonic Drive In',
      Street: '2632 S LAMAR BLVD',
      YelpCategories: 'Burgers,Fast Food,Ice Cream & Frozen Yogurt',
      Score: 74,
      YelpRaiting: 2,
      YelpReviewCount: 47
    },
    {
      Name: 'El Mercado',
      Street: '1302 S 1ST ST',
      YelpCategories: 'Tex-Mex',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 249
    },
    {
      Name: 'Travis High School',
      Street: '1211 E OLTORF ST',
      YelpCategories: 'Middle Schools & High Schools,Vocational & Technical School',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Casa de Luz',
      Street: '1701 TOOMEY RD',
      YelpCategories: 'Salad,Soup',
      Score: 80,
      YelpRaiting: 5,
      YelpReviewCount: 531
    },
    {
      Name: 'Pit #7',
      Street: '4707 BURNET RD',
      YelpCategories: 'Barbeque',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 128
    },
    {
      Name: 'Red River Cafe',
      Street: '2912 MEDICAL ARTS ST',
      YelpCategories: 'Breakfast & Brunch,Cafes,American (Traditional)',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 142
    },
    {
      Name: 'Short Stop #5',
      Street: '3001 W ANDERSON LN',
      YelpCategories: 'Burgers,Fast Food',
      Score: 81,
      YelpRaiting: 3,
      YelpReviewCount: 41
    },
    {
      Name: 'Peoples Pharmacy',
      Street: '3801 S LAMAR BLVD',
      YelpCategories: 'Drugstores,Delis,Gluten-Free',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 85
    },
    {
      Name: 'Barton Hills Elementary',
      Street: '2108 BARTON HILLS DR',
      YelpCategories: 'Elementary Schools',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Gullett Elementary',
      Street: '6310 TREADWELL BLVD',
      YelpCategories: 'Playgrounds',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Highland Park Elementary',
      Street: '4900 FAIRVIEW DR',
      YelpCategories: 'Elementary Schools',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Westminster Manor',
      Street: '4100 JACKSON AVE',
      YelpCategories: 'Retirement Homes',
      Score: 81,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Dairy Queen',
      Street: '2034 W STASSNEY LN',
      YelpCategories: 'Fast Food,Ice Cream & Frozen Yogurt,Burgers',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 56
    },
    {
      Name: 'Cain & Abel\'s',
      Street: '2313 RIO GRANDE ST',
      YelpCategories: 'American (Traditional),Sports Bars',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 97
    },
    {
      Name: 'Sonic Drive-In',
      Street: '5105 E STASSNEY LN',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 24
    },
    {
      Name: 'Little Caesar\'s Pizza',
      Street: '512 W STASSNEY LN',
      YelpCategories: 'Pizza',
      Score: 89,
      YelpRaiting: 2,
      YelpReviewCount: 34
    },
    {
      Name: 'Austin Baptist Chapel',
      Street: '908 E CESAR CHAVEZ ST',
      YelpCategories: 'Community Service/Non-Profit',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Taco Cabana #203',
      Street: '8415 RESEARCH BLVD',
      YelpCategories: 'Mexican',
      Score: 83,
      YelpRaiting: 2,
      YelpReviewCount: 45
    },
    {
      Name: 'Fonda San Miguel',
      Street: '2330 W NORTH LOOP BLVD',
      YelpCategories: 'Mexican,Breakfast & Brunch,Salad',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 741
    },
    {
      Name: 'Thundercloud Subs',
      Street: '3201 BEE CAVES RD',
      YelpCategories: 'Sandwiches',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 57
    },
    {
      Name: 'Dairy Queen',
      Street: '1501 TOWN CREEK DR',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Fast Food,Burgers',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 18
    },
    {
      Name: '24 Diner',
      Street: '600 N LAMAR BLVD',
      YelpCategories: 'Diners',
      Score: 73,
      YelpRaiting: 4,
      YelpReviewCount: 1693
    },
    {
      Name: 'Crown & Anchor Pub',
      Street: '2911 SAN JACINTO BLVD',
      YelpCategories: 'Pubs',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 267
    },
    {
      Name: 'Magnolia Cafe',
      Street: '2304 LAKE AUSTIN BLVD',
      YelpCategories: 'American (New),Breakfast & Brunch',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 774
    },
    {
      Name: 'Dairy Queen',
      Street: '8300 BURNET RD',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Fast Food,Burgers',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 72
    },
    {
      Name: 'Austin High School',
      Street: '1715 W CESAR CHAVEZ ST',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'High Road on Dawson, The',
      Street: '700 DAWSON RD',
      YelpCategories: 'Venues & Event Spaces,Social Clubs',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Hai Ky',
      Street: '1931 E OLTORF ST',
      YelpCategories: 'Vietnamese',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 416
    },
    {
      Name: 'Denny\'s #1008',
      Street: '2320 S IH',
      YelpCategories: 'American (Traditional),Diners,Breakfast & Brunch',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 89
    },
    {
      Name: 'Omni Hotel South Park',
      Street: '4140 GOVERNORS ROW',
      YelpCategories: 'Hotels',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 162
    },
    {
      Name: 'Mr. Gatti\'s #152',
      Street: '3711 GUADALUPE ST',
      YelpCategories: 'Pizza',
      Score: 88,
      YelpRaiting: 2,
      YelpReviewCount: 8
    },
    {
      Name: 'Sonic Drive In',
      Street: '9325 N LAMAR BLVD',
      YelpCategories: 'Burgers,Ice Cream & Frozen Yogurt,Fast Food',
      Score: 81,
      YelpRaiting: 2,
      YelpReviewCount: 17
    },
    {
      Name: 'Northwest Little League',
      Street: '3105 HUNT TRL',
      YelpCategories: 'Amateur Sports Teams',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Friends',
      Street: '208 E 6TH ST',
      YelpCategories: 'Music Venues,Jazz & Blues',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 106
    },
    {
      Name: 'SV - Luby\'s',
      Street: '5200 BRODIE LN',
      YelpCategories: 'American (Traditional),Buffets',
      Score: 81,
      YelpRaiting: 3,
      YelpReviewCount: 65
    },
    {
      Name: 'Flea Market #C',
      Street: '9500 E US 290 HWY',
      YelpCategories: 'Flea Markets',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 53
    },
    {
      Name: 'Flea Market #J',
      Street: '9500 E US 290 HWY',
      YelpCategories: 'Flea Markets',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 53
    },
    {
      Name: 'Flea Market #X',
      Street: '9500 E US 290 HWY',
      YelpCategories: 'Flea Markets',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 53
    },
    {
      Name: 'Taco Cabana #206',
      Street: '2117 W BEN WHITE BLVD',
      YelpCategories: 'Mexican',
      Score: 93,
      YelpRaiting: 2,
      YelpReviewCount: 83
    },
    {
      Name: 'Whataburger #576',
      Street: '6205 N LAMAR BLVD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 77
    },
    {
      Name: 'St. Davids Hospital-Cupboard',
      Street: '919 E 32ND ST',
      YelpCategories: 'Hospitals,Rehabilitation Center',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 9
    },
    {
      Name: 'Tarry House Snack Bar',
      Street: '3006 BOWMAN AVE',
      YelpCategories: 'Tennis',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'Helping Hand Home For Children',
      Street: '3804 AVENUE',
      YelpCategories: 'Community Service/Non-Profit',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Sonic #43',
      Street: '9708 MANCHACA RD',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 19
    },
    {
      Name: 'Wheatsville Food Co-Op Deli',
      Street: '3101 GUADALUPE ST',
      YelpCategories: 'Delis,Grocery,Bakeries',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 347
    },
    {
      Name: 'Sonic Drive-In #6',
      Street: '804 W STASSNEY LN',
      YelpCategories: 'Burgers,Fast Food,Ice Cream & Frozen Yogurt',
      Score: 92,
      YelpRaiting: 2,
      YelpReviewCount: 15
    },
    {
      Name: 'Casis Elementary',
      Street: '2710 EXPOSITION BLVD',
      YelpCategories: 'Elementary Schools',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Target Store T-0095',
      Street: '8601 RESEARCH BLVD',
      YelpCategories: 'Department Stores',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 42
    },
    {
      Name: 'Great American Cookie Co.-B1',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Bakeries,Desserts',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'Wally\'s Burger Express',
      Street: '8107 MESA DR',
      YelpCategories: 'Burgers,Tacos,Hot Dogs',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 172
    },
    {
      Name: 'Thundercloud Subs',
      Street: '1608 LAVACA ST',
      YelpCategories: 'Sandwiches',
      Score: 81,
      YelpRaiting: 3,
      YelpReviewCount: 36
    },
    {
      Name: 'Crockett High School',
      Street: '5601 MANCHACA RD',
      YelpCategories: 'Restaurants',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 1
    },
    {
      Name: 'Whataburger #162',
      Street: '3210 E MARTIN LUTHER KING JR BLVD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 55
    },
    {
      Name: 'Thundercloud Subs',
      Street: '201 E RIVERSIDE DR',
      YelpCategories: 'Sandwiches',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 110
    },
    {
      Name: 'Delta Tau Delta Fraternity',
      Street: '2801 SAN JACINTO BLVD',
      YelpCategories: 'Community Service/Non-Profit,Social Clubs',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Taco Cabana #122',
      Street: '8620 BURNET RD',
      YelpCategories: 'Mexican',
      Score: 92,
      YelpRaiting: 2,
      YelpReviewCount: 80
    },
    {
      Name: 'Whataburger # 614',
      Street: '1908 W BEN WHITE BLVD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 57
    },
    {
      Name: 'Iron Works, The',
      Street: '100 RED RIVER ST',
      YelpCategories: 'Barbeque',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 970
    },
    {
      Name: 'Short Stop  #11',
      Street: '11689 RESEARCH BLVD',
      YelpCategories: 'Fast Food,Burgers,Sandwiches',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 39
    },
    {
      Name: 'VFW Post 8925',
      Street: '8706 FM 812 RD',
      YelpCategories: 'Venues & Event Spaces',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'HEB Deli #236',
      Street: '1434 W WELLS BRANCH PKWY',
      YelpCategories: 'Drugstores',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Onion Creek Country Club',
      Street: '2510 ONION CREEK PKWY',
      YelpCategories: 'Tennis,Golf',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Four Seasons Chinese',
      Street: '14735 BRATTON LN',
      YelpCategories: 'Chinese',
      Score: 77,
      YelpRaiting: 4,
      YelpReviewCount: 178
    },
    {
      Name: 'Uchi',
      Street: '801 S LAMAR BLVD',
      YelpCategories: 'Sushi Bars,Japanese,Cocktail Bars',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 2137
    },
    {
      Name: 'China Dynasty',
      Street: '2110 W SLAUGHTER LN',
      YelpCategories: 'Chinese',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 117
    },
    {
      Name: 'Shady Springs Party Barn',
      Street: '9401 SHERMAN RD',
      YelpCategories: 'Venues & Event Spaces,Party & Event Planning',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 10
    },
    {
      Name: 'Smokey J\'s Barbeque #1',
      Street: '7008 N FM 620 RD',
      YelpCategories: 'Barbeque',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 95
    },
    {
      Name: 'Bluebonnet Hill Golf',
      Street: '9100 DECKER LN',
      YelpCategories: 'Golf',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 38
    },
    {
      Name: 'Marbridge Found-Senior Dorm',
      Street: '2310 BLISS SPILLAR RD',
      YelpCategories: 'Skilled Nursing,Rehabilitation Center',
      Score: 85,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Subway Sandwiches',
      Street: '2217 W BEN WHITE BLVD',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 16
    },
    {
      Name: 'Mainspring Schools',
      Street: '1100 W LIVE OAK ST',
      YelpCategories: 'Child Care & Day Care,Preschools,Community Service/Non-Profit',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 7
    },
    {
      Name: 'Ebenezer Child Development Center',
      Street: '1014 E 10TH ST',
      YelpCategories: 'Child Care & Day Care',
      Score: 93,
      YelpRaiting: 2,
      YelpReviewCount: 4
    },
    {
      Name: 'Pho Van',
      Street: '8557 RESEARCH BLVD',
      YelpCategories: 'Vietnamese',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 312
    },
    {
      Name: 'Residence Inn By Marriott',
      Street: '3713 TUDOR BLVD',
      YelpCategories: 'Hotels',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 17
    },
    {
      Name: 'San Francisco Bakery Cafe',
      Street: '2900 W ANDERSON LN',
      YelpCategories: 'Sandwiches,Bakeries',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 321
    },
    {
      Name: 'Thundercloud Subs',
      Street: '2500 W PARMER LN',
      YelpCategories: 'Sandwiches,Salad,Soup',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 44
    },
    {
      Name: 'Prodigy Child Development Cent',
      Street: '2300 CEDAR BEND DR',
      YelpCategories: 'Preschools,Child Care & Day Care',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Sonic Drive In #54',
      Street: '2706 GONZALES ST',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 90,
      YelpRaiting: 2,
      YelpReviewCount: 18
    },
    {
      Name: 'Mt Sinai Baptist Church',
      Street: '5900 CAMERON RD',
      YelpCategories: 'Churches',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'El Michoacano Mexican Rest.',
      Street: '2701 E SH',
      YelpCategories: 'Mexican',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 49
    },
    {
      Name: 'Smoothie Yogurt Paradise',
      Street: '11200 LAKELINE MALL DR',
      YelpCategories: 'Juice Bars & Smoothies',
      Score: 81,
      YelpRaiting: 3,
      YelpReviewCount: 5
    },
    {
      Name: 'Papa John\'s Pizza #930',
      Street: '1925 RUTLAND DR',
      YelpCategories: 'Pizza',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 16
    },
    {
      Name: 'Tan My Restaurant',
      Street: '1601 OHLEN RD',
      YelpCategories: 'Vietnamese,Soup',
      Score: 70,
      YelpRaiting: 5,
      YelpReviewCount: 606
    },
    {
      Name: 'Kiefer\'s Cafe & Catering',
      Street: '2007 KRAMER LN',
      YelpCategories: 'Sandwiches,Delis,Breakfast & Brunch',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 88
    },
    {
      Name: 'Iron Cactus, The',
      Street: '606 TRINITY ST',
      YelpCategories: 'Mexican,Bars',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 928
    },
    {
      Name: 'Taco Shack',
      Street: '4412 MEDICAL PKWY',
      YelpCategories: 'Mexican',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 47
    },
    {
      Name: 'G & S Lounge',
      Street: '2420 S 1ST ST',
      YelpCategories: 'Dive Bars,Music Venues',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 148
    },
    {
      Name: 'Papa John\'s Pizza #933',
      Street: '2113 W WELLS BRANCH PKWY',
      YelpCategories: 'Pizza',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 23
    },
    {
      Name: 'Abiding Love Lutheran Child',
      Street: '4612 CONVICT HILL RD',
      YelpCategories: 'Child Care & Day Care',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 6
    },
    {
      Name: 'Williams-Sonoma #978',
      Street: '9722 GREAT HILLS TRL',
      YelpCategories: 'Kitchen & Bath,Specialty Food',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 27
    },
    {
      Name: 'Taco Cabana #127',
      Street: '9605 RESEARCH BLVD',
      YelpCategories: 'Mexican',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 84
    },
    {
      Name: 'Little Mexico',
      Street: '2304 S 1ST ST',
      YelpCategories: 'Mexican',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 138
    },
    {
      Name: 'Quacks 43rd Street Bakery',
      Street: '411 E 43RD ST',
      YelpCategories: 'Bakeries,Coffee & Tea,Bagels',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 644
    },
    {
      Name: 'Country Home Learning Center',
      Street: '6900 ESCARPMENT BLVD',
      YelpCategories: 'Child Care & Day Care,Preschools,Summer Camps',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 19
    },
    {
      Name: 'Tears of Joy',
      Street: '618 E 6TH ST',
      YelpCategories: 'Specialty Food',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 67
    },
    {
      Name: 'El Mercado Restaurant Uptown',
      Street: '1702 LAVACA ST',
      YelpCategories: 'Sports Bars,Tex-Mex,Burgers',
      Score: 81,
      YelpRaiting: 3,
      YelpReviewCount: 210
    },
    {
      Name: 'Ross Old Austin Cafe',
      Street: '11800 N LAMAR BLVD',
      YelpCategories: 'American (Traditional),Burgers',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 197
    },
    {
      Name: 'Caffe Medici',
      Street: '2222 GUADALUPE ST',
      YelpCategories: 'Coffee & Tea',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 199
    },
    {
      Name: 'Outback Steakhouse',
      Street: '11600 RESEARCH BLVD',
      YelpCategories: 'Steakhouses',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 186
    },
    {
      Name: 'Stepping Stone School',
      Street: '2001 W WELLS BRANCH PKWY',
      YelpCategories: 'Child Care & Day Care,Preschools,Summer Camps',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 7
    },
    {
      Name: 'Taco Cabana #140',
      Street: '6430 S IH',
      YelpCategories: 'Mexican',
      Score: 87,
      YelpRaiting: 2,
      YelpReviewCount: 72
    },
    {
      Name: 'El Charrito',
      Street: '7100 E US 290 HWY',
      YelpCategories: 'Tex-Mex,Mexican',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 15
    },
    {
      Name: 'Taco Cabana #128',
      Street: '12525 N MOPAC EXPY',
      YelpCategories: 'Mexican',
      Score: 82,
      YelpRaiting: 2,
      YelpReviewCount: 91
    },
    {
      Name: 'Raggedy Anne\'s',
      Street: '2113 W WELLS BRANCH PKWY',
      YelpCategories: 'Bars',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 15
    },
    {
      Name: 'Casino El Camino',
      Street: '517 E 6TH ST',
      YelpCategories: 'Dive Bars,American (Traditional),Cocktail Bars',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 1100
    },
    {
      Name: 'Frullati Cafe',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Juice Bars & Smoothies,Sandwiches,Bakeries',
      Score: 81,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Frank & Angie\'s Restaurant',
      Street: '508 WEST AVE',
      YelpCategories: 'Pizza,Italian,Sandwiches',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 248
    },
    {
      Name: 'Little Folks Bilingual CDC',
      Street: '5706 REICHER DR',
      YelpCategories: 'Child Care & Day Care',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 6
    },
    {
      Name: 'Doc\'s Motorworks Bar & Grill',
      Street: '1106 W 38TH ST',
      YelpCategories: 'Sandwiches,American (Traditional),Sports Bars',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 116
    },
    {
      Name: '311 Club',
      Street: '311 E 6TH ST',
      YelpCategories: 'Pubs,Music Venues',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 22
    },
    {
      Name: 'New Mandarin Chinese Rest',
      Street: '212 E OLTORF ST',
      YelpCategories: 'Chinese',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 103
    },
    {
      Name: 'Food, Food',
      Street: '2727 EXPOSITION BLVD',
      YelpCategories: 'Sandwiches,Bakeries,Cupcakes',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 71
    },
    {
      Name: 'Brick Oven Restaurant',
      Street: '1209 RED RIVER ST',
      YelpCategories: 'Italian,Pizza',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 135
    },
    {
      Name: 'Amy\'s Ice Cream',
      Street: '3500 GUADALUPE ST',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 278
    },
    {
      Name: 'Pete\'s Peanut Bar & Piano Empo',
      Street: '421 E 6TH ST',
      YelpCategories: 'Bars,Piano Bars',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 375
    },
    {
      Name: 'La Michoacana Taqueria',
      Street: '1917 E 7TH ST',
      YelpCategories: 'Meat Shops,Mexican',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 50
    },
    {
      Name: '15th Street Cafe',
      Street: '303 W 15TH ST',
      YelpCategories: 'Cafes',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 9
    },
    {
      Name: 'Hilltop Bar & Grill',
      Street: '22308 W SH',
      YelpCategories: 'Bars,Burgers,Music Venues',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 65
    },
    {
      Name: 'Fazoli\'s Italian Food',
      Street: '13201 N FM 620 RD',
      YelpCategories: 'Italian',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 73
    },
    {
      Name: 'Tinseltown USA Pflugerville',
      Street: '15436 FM',
      YelpCategories: 'Cinema',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 124
    },
    {
      Name: 'Hoover\'s Cooking',
      Street: '2002 MANOR RD',
      YelpCategories: 'Southern,American (Traditional),Comfort Food',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 778
    },
    {
      Name: 'Casey Elementary',
      Street: '9400 TEXAS OAKS DR',
      YelpCategories: 'Elementary Schools',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Clint Small Middle School',
      Street: '4801 MONTEREY OAKS BLVD',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'HEB Bakery/Deli',
      Street: '1000 E 41ST ST',
      YelpCategories: 'Drugstores',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 9
    },
    {
      Name: 'Vespaio',
      Street: '1610 S CONGRESS AVE',
      YelpCategories: 'Italian,Desserts,Pizza',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 735
    },
    {
      Name: 'Balcones Youth Sports',
      Street: '3106 ADELPHI LN',
      YelpCategories: 'Amateur Sports Teams',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Seton Shoal Creek',
      Street: '3501 MILLS AVE',
      YelpCategories: 'Hospitals,Psychiatrists',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 17
    },
    {
      Name: 'Super 8 Motel',
      Street: '5526 N IH',
      YelpCategories: 'Hotels',
      Score: 98,
      YelpRaiting: 2,
      YelpReviewCount: 83
    },
    {
      Name: 'Chili\'s  #484',
      Street: '11012 PECAN PARK BLVD',
      YelpCategories: 'American (Traditional),Bars,Tex-Mex',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 89
    },
    {
      Name: '34th Street Cafe',
      Street: '1005 W 34TH ST',
      YelpCategories: 'American (New)',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 124
    },
    {
      Name: 'Threadgill\'s',
      Street: '301 W RIVERSIDE DR',
      YelpCategories: 'Southern,Music Venues',
      Score: 83,
      YelpRaiting: 3,
      YelpReviewCount: 538
    },
    {
      Name: 'Suzi\'s China Grill',
      Street: '7858 SHOAL CREEK BLVD',
      YelpCategories: 'Chinese,Sushi Bars',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 216
    },
    {
      Name: 'Cedar Valley Groc. Inc.',
      Street: '12009 W US 290 HWY',
      YelpCategories: 'Grocery',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'Buddy\'s Place',
      Street: '8619 BURNET RD',
      YelpCategories: 'Dive Bars',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 50
    },
    {
      Name: 'Stepping Stone School',
      Street: '8121 SHOAL CREEK BLVD',
      YelpCategories: 'Child Care & Day Care,Preschools,Summer Camps',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 20
    },
    {
      Name: 'Texas Mist',
      Street: '1115 BASTROP HWY',
      YelpCategories: 'Dive Bars,Music Venues',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 13
    },
    {
      Name: 'Shakespeare\'s Pub',
      Street: '314 E 6TH ST',
      YelpCategories: 'Pubs',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 181
    },
    {
      Name: 'Pok-E-Jo\'s',
      Street: '2121 W PARMER LN',
      YelpCategories: 'Barbeque,Smokehouse',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 171
    },
    {
      Name: 'Waterloo Ice House',
      Street: '8600 BURNET RD',
      YelpCategories: 'American (Traditional),Bars,Breakfast & Brunch',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 191
    },
    {
      Name: 'Schlotzsky\'s Deli',
      Street: '111 W WILLIAM CANNON DR',
      YelpCategories: 'Sandwiches,Delis',
      Score: 86,
      YelpRaiting: 2,
      YelpReviewCount: 85
    },
    {
      Name: 'Papa John\'s Pizza  #938',
      Street: '5343 BURNET RD',
      YelpCategories: 'Pizza',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 24
    },
    {
      Name: 'Sazon',
      Street: '1816 S LAMAR BLVD',
      YelpCategories: 'Mexican',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 327
    },
    {
      Name: 'Lake Austin Spa Resort-Mn Dining Rm',
      Street: '1705 S QUINLAN PARK RD',
      YelpCategories: 'Day Spas,Resorts,Health Retreats',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 99
    },
    {
      Name: 'XTC',
      Street: '3501 ANDTREE BLVD',
      YelpCategories: 'Adult Entertainment',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 34
    },
    {
      Name: 'Einstein Bros Bagels  #2846',
      Street: '2404 GUADALUPE ST',
      YelpCategories: 'Bagels,Coffee & Tea',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 127
    },
    {
      Name: 'Touche',
      Street: '417 E 6TH ST',
      YelpCategories: 'Bars',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 48
    },
    {
      Name: 'Subway Sandwiches at Castillion',
      Street: '2323 SAN ANTONIO ST',
      YelpCategories: 'Fast Food,Sandwiches',
      Score: 89,
      YelpRaiting: 2,
      YelpReviewCount: 7
    },
    {
      Name: 'New World Deli',
      Street: '4101 GUADALUPE ST',
      YelpCategories: 'Delis,Caterers',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 281
    },
    {
      Name: 'Chick-Fil-A at Maconda Park',
      Street: '13201 N FM 620 RD',
      YelpCategories: 'Fast Food',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 66
    },
    {
      Name: 'ZuZu Restaurant',
      Street: '5770 N MOPAC EXPY',
      YelpCategories: 'Mexican,Breakfast & Brunch',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 191
    },
    {
      Name: 'Taco Cabana #199',
      Street: '9705 MANCHACA RD',
      YelpCategories: 'Mexican',
      Score: 92,
      YelpRaiting: 2,
      YelpReviewCount: 86
    },
    {
      Name: 'Jo\'s Hot Coffee Good Food',
      Street: '1300 S CONGRESS AVE',
      YelpCategories: 'Coffee & Tea,Sandwiches',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 741
    },
    {
      Name: 'Din Ho Chinese BBQ',
      Street: '8557 RESEARCH BLVD',
      YelpCategories: 'Chinese',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 725
    },
    {
      Name: 'Stepping Stone School',
      Street: '6616 MC NEIL DR',
      YelpCategories: 'Child Care & Day Care,Preschools,Summer Camps',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'Taco Xpress',
      Street: '2529 S LAMAR BLVD',
      YelpCategories: 'Tex-Mex,Breakfast & Brunch',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 553
    },
    {
      Name: 'HEB #24',
      Street: '7301 N FM 620 RD',
      YelpCategories: 'Drugstores',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 53
    },
    {
      Name: 'Phoenicia Deli & Bakery',
      Street: '4701 BURNET RD',
      YelpCategories: 'Delis,Mediterranean',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 110
    },
    {
      Name: 'Vasquez Tacos',
      Street: '915 E BRAKER LN',
      YelpCategories: 'Mexican',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 113
    },
    {
      Name: 'Cipollina',
      Street: '1213 WEST LYNN ST',
      YelpCategories: 'Italian',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 236
    },
    {
      Name: 'El Buen Pastor Child Dev. Cent',
      Street: '1208 WILLOW ST',
      YelpCategories: 'Child Care & Day Care',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Heritage of Gaines Ranch-Main Kit',
      Street: '4409 GAINES RANCH LOOP',
      YelpCategories: 'Retirement Homes',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'TravisCo Correctional Complex',
      Street: '3614 BILL PRICE RD',
      YelpCategories: 'Public Services & Government',
      Score: 92,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'St. Gabriel Catholic School',
      Street: '2500 WIMBERLY LN',
      YelpCategories: 'Elementary Schools',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Casa Marianella',
      Street: '821 GUNTER ST',
      YelpCategories: 'Community Service/Non-Profit',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Rodeo',
      Street: '9515 N LAMAR BLVD',
      YelpCategories: 'Nightlife',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'ABIA Ray Benson\'s Roadhouse Bar',
      Street: '3600 PRESIDENTIAL BLVD',
      YelpCategories: 'Bars',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 78
    },
    {
      Name: 'Amy\'s Ice Cream',
      Street: '4477 S LAMAR BLVD',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 102
    },
    {
      Name: 'ABIA Maudie\'s',
      Street: '3600 PRESIDENTIAL BLVD',
      YelpCategories: 'Tex-Mex',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 139
    },
    {
      Name: 'ABIA Salt Lick Deli',
      Street: '3600 PRESIDENTIAL BLVD',
      YelpCategories: 'Barbeque,American (Traditional),Sandwiches',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 856
    },
    {
      Name: 'ABIA Amy\'s Ice Cream',
      Street: '3600 PRESIDENTIAL BLVD',
      YelpCategories: 'Parking',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 22
    },
    {
      Name: 'Swad Restaurant',
      Street: '9515 N LAMAR BLVD',
      YelpCategories: 'Indian,Vegetarian',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 357
    },
    {
      Name: 'Taco Deli',
      Street: '1500 SPYGLASS DR',
      YelpCategories: 'Caterers,Breakfast & Brunch,Tacos',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 928
    },
    {
      Name: 'Thundercloud Subs',
      Street: '3601 W WILLIAM CANNON DR',
      YelpCategories: 'Sandwiches',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 88
    },
    {
      Name: 'Scruffy\'s Convenient Store',
      Street: '307 E 6TH ST',
      YelpCategories: 'Convenience Stores,Gift Shops,Souvenir Shops',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'Chick-Fil-A',
      Street: '5033 W US 290 HWY',
      YelpCategories: 'Fast Food',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 33
    },
    {
      Name: 'Barnes and Nobles Booksellers',
      Street: '14010 N US 183 HWY',
      YelpCategories: 'Bookstores,Toy Stores,Music & DVDs',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 37
    },
    {
      Name: 'HEB - Deli/Bakery/Produce - Brodie',
      Street: '6900 BRODIE LN',
      YelpCategories: 'Urgent Care',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 18
    },
    {
      Name: 'Bright Horizons Family Solution',
      Street: '2411 W BRAKER LN',
      YelpCategories: 'Preschools,Child Care & Day Care',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 17
    },
    {
      Name: 'Starbucks Coffee  #6402',
      Street: '1700 W PARMER LN',
      YelpCategories: 'Coffee & Tea',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 97
    },
    {
      Name: 'Montopolis Rec Center',
      Street: '1200 MONTOPOLIS DR',
      YelpCategories: 'Amateur Sports Teams',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Manuel\'s @ Great Hills',
      Street: '10201 JOLLYVILLE RD',
      YelpCategories: 'Mexican,Breakfast & Brunch',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 395
    },
    {
      Name: 'Varsity Pizza',
      Street: '3000 DUVAL ST',
      YelpCategories: 'Pizza,Gluten-Free,Sports Bars',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 31
    },
    {
      Name: 'Draught House, The',
      Street: '4112 MEDICAL PKWY',
      YelpCategories: 'Pubs,Breweries',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 547
    },
    {
      Name: 'Buffalo Billiards',
      Street: '201 E 6TH ST',
      YelpCategories: 'Pool Halls,Sports Bars',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 212
    },
    {
      Name: 'Dave and Busters',
      Street: '9333 RESEARCH BLVD',
      YelpCategories: 'American (Traditional),Arcades,Bars',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 233
    },
    {
      Name: 'Chili\'s Grill & Bar',
      Street: '4420 N LAMAR BLVD',
      YelpCategories: 'Tex-Mex,American (Traditional),Bars',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 83
    },
    {
      Name: 'Enchiladas Y Mas',
      Street: '1911 W ANDERSON LN',
      YelpCategories: 'Mexican,Salad,Sandwiches',
      Score: 76,
      YelpRaiting: 4,
      YelpReviewCount: 447
    },
    {
      Name: 'Jason\'s Deli',
      Street: '1000 E 41ST ST',
      YelpCategories: 'Delis,Sandwiches,Salad',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 117
    },
    {
      Name: 'Children\'s Courtyard',
      Street: '11718 METRIC BLVD',
      YelpCategories: 'Preschools,Child Care & Day Care,Elementary Schools',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'Bright Horizons',
      Street: '6111 DAVIS LN',
      YelpCategories: 'Child Care & Day Care,Preschools,Elementary Schools',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 11
    },
    {
      Name: 'Jester Market',
      Street: '6507 JESTER BLVD',
      YelpCategories: 'Grocery,Beer, Wine & Spirits,Specialty Food',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'Sonic',
      Street: '1637 W WELLS BRANCH PKWY',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 92,
      YelpRaiting: 2,
      YelpReviewCount: 30
    },
    {
      Name: 'Staybridge Suites Holiday Inn',
      Street: '10201 STONELAKE BLVD',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 46
    },
    {
      Name: 'Blind Pig Pub',
      Street: '317 E 6TH ST',
      YelpCategories: 'Dive Bars,Pubs,Music Venues',
      Score: 75,
      YelpRaiting: 3,
      YelpReviewCount: 199
    },
    {
      Name: 'China Cafe',
      Street: '13729 N US 183 HWY',
      YelpCategories: 'Chinese',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 171
    },
    {
      Name: 'ABIA Austin Chronicle',
      Street: '3600 PRESIDENTIAL BLVD',
      YelpCategories: 'Print Media,Newspapers & Magazines',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 2
    },
    {
      Name: 'ABIA Earl Campbell\'s',
      Street: '3600 PRESIDENTIAL BLVD',
      YelpCategories: 'Sports Bars',
      Score: 98,
      YelpRaiting: 2,
      YelpReviewCount: 156
    },
    {
      Name: 'Zen Restaurant',
      Street: '2900 W ANDERSON LN',
      YelpCategories: 'Japanese,Sushi Bars',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 210
    },
    {
      Name: 'Taqueria Arandinas',
      Street: '2100 E RIVERSIDE DR',
      YelpCategories: 'Mexican,Breakfast & Brunch',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 132
    },
    {
      Name: 'Casa Garcia # 1',
      Street: '1901 W WILLIAM CANNON DR',
      YelpCategories: 'Mexican',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 291
    },
    {
      Name: 'Arturo\'s Bakery and Cafe',
      Street: '314 W 17TH ST',
      YelpCategories: 'Breakfast & Brunch,Mexican,Coffee & Tea',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 524
    },
    {
      Name: 'McDonald\'s',
      Street: '5355 N IH',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 93,
      YelpRaiting: 2,
      YelpReviewCount: 35
    },
    {
      Name: 'Asian American Cultural Center',
      Street: '11713 JOLLYVILLE RD',
      YelpCategories: 'Child Care & Day Care',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 13
    },
    {
      Name: 'Freda\'s Seafood Grill',
      Street: '10903 PECAN PARK BLVD',
      YelpCategories: 'Seafood,Cajun/Creole,Wine Bars',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 505
    },
    {
      Name: 'Krispy Kreme',
      Street: '701 E STASSNEY LN',
      YelpCategories: 'Donuts,Coffee & Tea',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 74
    },
    {
      Name: 'Azul Tequila',
      Street: '4211 S LAMAR BLVD',
      YelpCategories: 'Tex-Mex,Mexican',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 339
    },
    {
      Name: 'Mr. Gatti\'s #164',
      Street: '6800 WEST GATE BLVD',
      YelpCategories: 'Pizza',
      Score: 85,
      YelpRaiting: 2,
      YelpReviewCount: 20
    },
    {
      Name: 'CoCo\'s Cafe',
      Street: '1910 GUADALUPE ST',
      YelpCategories: 'Coffee & Tea,Taiwanese,Bubble Tea',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 373
    },
    {
      Name: 'JuiceLand',
      Street: '1625 BARTON SPRINGS RD',
      YelpCategories: 'Juice Bars & Smoothies',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 258
    },
    {
      Name: 'Baby Acapulco #4',
      Street: '13609 N IH',
      YelpCategories: 'Mexican,Desserts,Breakfast & Brunch',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 280
    },
    {
      Name: 'House of Little Angels',
      Street: '735 TURTLE CREEK BLVD',
      YelpCategories: 'Child Care & Day Care',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Asia Chinese Restaurant',
      Street: '1931 E BEN WHITE BLVD',
      YelpCategories: 'Chinese,Vietnamese',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 82
    },
    {
      Name: 'Wink',
      Street: '1014 N LAMAR BLVD',
      YelpCategories: 'American (New),Wine Bars',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 755
    },
    {
      Name: 'Barfly\'s',
      Street: '5420 AIRPORT BLVD',
      YelpCategories: 'Bars',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 249
    },
    {
      Name: 'Mr. Gatti\'s #110',
      Street: '2931 W ANDERSON LN',
      YelpCategories: 'Pizza',
      Score: 77,
      YelpRaiting: 2,
      YelpReviewCount: 46
    },
    {
      Name: 'Blazer Tag',
      Street: '1701 W BEN WHITE BLVD',
      YelpCategories: 'Arcades,Team Building Activities,Laser Tag',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 104
    },
    {
      Name: 'Starbucks  #6356',
      Street: '1509 S LAMAR BLVD',
      YelpCategories: 'Coffee & Tea',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 62
    },
    {
      Name: 'One World Theater',
      Street: '7701 BEE CAVES RD',
      YelpCategories: 'Music Venues,Venues & Event Spaces',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 88
    },
    {
      Name: 'Westlake High School',
      Street: '3800 WESTBANK DR',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Boston Market #1981',
      Street: '4607 W BRAKER LN',
      YelpCategories: 'American (Traditional),Sandwiches',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 68
    },
    {
      Name: 'Giddy-Ups',
      Street: '12000 MANCHACA RD',
      YelpCategories: 'Dive Bars,Music Venues',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 52
    },
    {
      Name: 'Fry\'s Electronics #22',
      Street: '12707 N MOPAC EXPY',
      YelpCategories: 'Electronics,Music & DVDs,Computers',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 332
    },
    {
      Name: 'Starbucks #6374',
      Street: '7301 N FM 620 RD',
      YelpCategories: 'Coffee & Tea',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 42
    },
    {
      Name: 'Hyatt Place North Central',
      Street: '7522 N IH',
      YelpCategories: 'Hotels',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 91
    },
    {
      Name: 'Las Cazuelas',
      Street: '1701 E CESAR CHAVEZ ST',
      YelpCategories: 'Mexican',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 324
    },
    {
      Name: 'Fleming\'s Prime Steakhouse & Wine Bar',
      Street: '320 E 2ND ST',
      YelpCategories: 'Steakhouses,Wine Bars,Seafood',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 292
    },
    {
      Name: 'TCBY',
      Street: '303 W MARTIN LUTHER KING JR BLVD',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 58
    },
    {
      Name: 'Dobie Mall--Subway',
      Street: '2025 GUADALUPE ST',
      YelpCategories: 'Fast Food,Sandwiches',
      Score: 84,
      YelpRaiting: 1,
      YelpReviewCount: 5
    },
    {
      Name: 'Bone Daddy\'s House of Smoke',
      Street: '11617 RESEARCH BLVD',
      YelpCategories: 'American (Traditional),Barbeque',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 291
    },
    {
      Name: 'Brick Oven',
      Street: '1608 W 35TH ST',
      YelpCategories: 'Pizza,Gluten-Free,Italian',
      Score: 75,
      YelpRaiting: 4,
      YelpReviewCount: 180
    },
    {
      Name: 'Chili\'s Grill & Bar',
      Street: '701 E STASSNEY LN',
      YelpCategories: 'Tex-Mex,Bars,American (Traditional)',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 68
    },
    {
      Name: 'McDonald\'s',
      Street: '2426 E RIVERSIDE DR',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 88,
      YelpRaiting: 2,
      YelpReviewCount: 48
    },
    {
      Name: 'Austin Community College Culinary Arts School',
      Street: '3401 WEBBERVILLE RD',
      YelpCategories: 'Colleges & Universities,Adult Education',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'McDonald\'s   #4941',
      Street: '1209 BARTON SPRINGS RD',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 86,
      YelpRaiting: 2,
      YelpReviewCount: 43
    },
    {
      Name: 'McDonald\'s  #6196',
      Street: '500 W WILLIAM CANNON DR',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 83,
      YelpRaiting: 2,
      YelpReviewCount: 44
    },
    {
      Name: 'McDonald\'s  #10125',
      Street: '2114 W SLAUGHTER LN',
      YelpCategories: 'Burgers,Fast Food,Coffee & Tea',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 35
    },
    {
      Name: 'Bill Miller Bar-B-Q',
      Street: '14718 N IH',
      YelpCategories: 'Barbeque',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 87
    },
    {
      Name: 'Big Bang',
      Street: '415 E 6TH ST',
      YelpCategories: 'Dive Bars',
      Score: 79,
      YelpRaiting: 3,
      YelpReviewCount: 20
    },
    {
      Name: 'Pok-E-Jo\'s Brodie Oaks',
      Street: '4109 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Barbeque,Smokehouse',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 82
    },
    {
      Name: 'Subway',
      Street: '4410 E RIVERSIDE DR',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 93,
      YelpRaiting: 2,
      YelpReviewCount: 17
    },
    {
      Name: 'Onion Creek Couintry Club - Gazebo & Pool',
      Street: '2510 ONION CREEK PKWY',
      YelpCategories: 'Tennis,Golf',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Maudie\'s Milagro',
      Street: '3801 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Tex-Mex',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 251
    },
    {
      Name: 'Habana Restaurant',
      Street: '2728 S CONGRESS AVE',
      YelpCategories: 'Cuban,Caribbean',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 518
    },
    {
      Name: 'Nordstrom\'s E- Bar',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Department Stores,Men\'s Clothing,Women\'s Clothing',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 165
    },
    {
      Name: 'Harmony Science Academy',
      Street: '930 E RUNDBERG LN',
      YelpCategories: 'Specialty Schools',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Texas Chili Parlor',
      Street: '1409 LAVACA ST',
      YelpCategories: 'American (Traditional),Bars',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 643
    },
    {
      Name: 'La Tazza Fresca',
      Street: '519 W 37TH ST',
      YelpCategories: 'Coffee & Tea',
      Score: 72,
      YelpRaiting: 4,
      YelpReviewCount: 241
    },
    {
      Name: 'Johnny G\'s Butcher Block',
      Street: '11600 MANCHACA RD',
      YelpCategories: 'Butcher,Restaurant Supplies',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 43
    },
    {
      Name: 'Amy\'s Ice Cream',
      Street: '1301 S CONGRESS AVE',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 468
    },
    {
      Name: 'Ronnies Real Food',
      Street: '205 S COMMONS FORD RD',
      YelpCategories: 'American (New),Bakeries',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 30
    },
    {
      Name: 'Lake Austin Day Spa',
      Street: '1705 S QUINLAN PARK RD',
      YelpCategories: 'Day Spas,Resorts,Health Retreats',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 99
    },
    {
      Name: 'Truluck\'s',
      Street: '10225 RESEARCH BLVD',
      YelpCategories: 'Seafood,Steakhouses',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 457
    },
    {
      Name: 'Starbucks Coffee #6470',
      Street: '1001 CONGRESS AVE',
      YelpCategories: 'Coffee & Tea',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 32
    },
    {
      Name: 'Chili\'s',
      Street: '12901 N IH',
      YelpCategories: 'American (Traditional),Tex-Mex,Bars',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 77
    },
    {
      Name: 'Capitol City Comedy Club',
      Street: '8120 RESEARCH BLVD',
      YelpCategories: 'Comedy Clubs',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 163
    },
    {
      Name: 'Williams Sonoma #706',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Specialty Food,Kitchen & Bath',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 17
    },
    {
      Name: 'Vasquez Mexican Restaurant #2',
      Street: '9063 RESEARCH BLVD',
      YelpCategories: 'Mexican',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 147
    },
    {
      Name: 'El Caribe Mexican Restaurant',
      Street: '5610 N LAMAR BLVD',
      YelpCategories: 'Mexican',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 255
    },
    {
      Name: 'Austin Resource Ctr. Homeless',
      Street: '500 E 7TH ST',
      YelpCategories: 'Post Offices,Career Counseling',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 5
    },
    {
      Name: 'Appletree Learning Center',
      Street: '4630 WEST GATE BLVD',
      YelpCategories: 'Child Care & Day Care',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Einstein Bros Bagels #3111',
      Street: '3010 W ANDERSON LN',
      YelpCategories: 'Bagels',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 88
    },
    {
      Name: 'Randalls #1850',
      Street: '9911 BRODIE LN',
      YelpCategories: 'Drugstores,Grocery',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 49
    },
    {
      Name: 'Mr. Gatti\'s #118',
      Street: '2121 W PARMER LN',
      YelpCategories: 'Pizza',
      Score: 92,
      YelpRaiting: 2,
      YelpReviewCount: 24
    },
    {
      Name: 'Cypress Grill',
      Street: '4404 W WILLIAM CANNON DR',
      YelpCategories: 'American (Traditional),Cajun/Creole,Seafood',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 542
    },
    {
      Name: 'Halcyon Coffeehouse',
      Street: '218 W 4TH ST',
      YelpCategories: 'Coffee & Tea,Breakfast & Brunch,Lounges',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 768
    },
    {
      Name: 'Taco Shack',
      Street: '2825 GUADALUPE ST',
      YelpCategories: 'Mexican',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 43
    },
    {
      Name: 'Canary Roost',
      Street: '11900 METRIC BLVD',
      YelpCategories: 'Karaoke',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 65
    },
    {
      Name: 'Our Lady of Guadalupe Parish',
      Street: '1206 E 9TH ST',
      YelpCategories: 'Churches',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Carver Museum/Library',
      Street: '1165 ANGELINA ST',
      YelpCategories: 'Museums,Cultural Center',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 18
    },
    {
      Name: 'Cheesecake Factory',
      Street: '10000 RESEARCH BLVD',
      YelpCategories: 'Desserts,American (New)',
      Score: 79,
      YelpRaiting: 3,
      YelpReviewCount: 523
    },
    {
      Name: 'Lucky Robot Japanese Kitchen',
      Street: '1303 S CONGRESS AVE',
      YelpCategories: 'Sushi Bars,Ramen',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 806
    },
    {
      Name: 'Mr. Natural',
      Street: '2414 S LAMAR BLVD',
      YelpCategories: 'Vegetarian,Vegan,Mexican',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 240
    },
    {
      Name: 'Nordstrom\'s Cafe Bistro',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Department Stores,Men\'s Clothing,Women\'s Clothing',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 165
    },
    {
      Name: 'Evangeline Cafe',
      Street: '8106 BRODIE LN',
      YelpCategories: 'Cajun/Creole',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 668
    },
    {
      Name: 'Randall\'s (Starbucks Coffee) #2482',
      Street: '8040 MESA DR',
      YelpCategories: 'Drugstores,Grocery',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 51
    },
    {
      Name: 'Soup Peddler Mary',
      Street: '501 W MARY ST',
      YelpCategories: 'Soup,Juice Bars & Smoothies',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 193
    },
    {
      Name: 'Arby\'s Roast Beef  #07529',
      Street: '8648 RESEARCH BLVD',
      YelpCategories: 'Fast Food,Sandwiches,American (New)',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 25
    },
    {
      Name: 'Galaxy Cafe',
      Street: '9911 BRODIE LN',
      YelpCategories: 'American (New)',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 306
    },
    {
      Name: 'Donut 4U',
      Street: '1425 E RUNDBERG LN',
      YelpCategories: 'Donuts',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 18
    },
    {
      Name: 'UT Golf Club',
      Street: '2200 UNIVERSITY CLUB DR',
      YelpCategories: 'Golf',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Fire Bowl Cafe',
      Street: '9828 GREAT HILLS TRL',
      YelpCategories: 'Chinese,Asian Fusion,Thai',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 235
    },
    {
      Name: 'Texican Cafe',
      Street: '11066 PECAN PARK BLVD',
      YelpCategories: 'Mexican,Tex-Mex,Seafood',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 351
    },
    {
      Name: 'Original House of Pancakes',
      Street: '1700 W PARMER LN',
      YelpCategories: 'Scandinavian,Breakfast & Brunch,American (Traditional)',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 404
    },
    {
      Name: 'Subway Sandwiches',
      Street: '6105 TECHNI CENTER DR',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Kikka Sushi @ Whole Foods',
      Street: '9607 RESEARCH BLVD',
      YelpCategories: 'Grocery,Health Markets,Coffee & Tea',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 223
    },
    {
      Name: 'Taco Shack V',
      Street: '402 BRAZOS ST',
      YelpCategories: 'Mexican,Fast Food',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 145
    },
    {
      Name: 'Abuelo\'s',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Mexican,Tex-Mex',
      Score: 76,
      YelpRaiting: 4,
      YelpReviewCount: 247
    },
    {
      Name: 'Zax Restaurant and Bar',
      Street: '312 BARTON SPRINGS RD',
      YelpCategories: 'American (New),Breakfast & Brunch,Beer Gardens',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 336
    },
    {
      Name: 'Teo',
      Street: '1206 W 38TH ST',
      YelpCategories: 'Coffee & Tea,Ice Cream & Frozen Yogurt,Gelato',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 305
    },
    {
      Name: 'Las Delicias Meat Market-Kitchen',
      Street: '111 W WILLIAM CANNON DR',
      YelpCategories: 'Meat Shops',
      Score: 87,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Castilian, The',
      Street: '2323 SAN ANTONIO ST',
      YelpCategories: 'Apartments',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 16
    },
    {
      Name: 'Dirty Dog Bar',
      Street: '505 E 6TH ST',
      YelpCategories: 'Dive Bars',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 68
    },
    {
      Name: 'Baskin Robbins',
      Street: '12407 N MOPAC EXPY',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 32
    },
    {
      Name: 'Costa del Sol',
      Street: '7901 CAMERON RD',
      YelpCategories: 'Mexican,Salvadoran',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 82
    },
    {
      Name: 'Target (Starbucks) T-1797',
      Street: '10900 LAKELINE MALL DR',
      YelpCategories: 'Department Stores',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 73
    },
    {
      Name: 'Hyde Park Baptist Church',
      Street: '3901 SPEEDWAY',
      YelpCategories: 'Churches',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 5
    },
    {
      Name: '290 West Bar & Grill',
      Street: '12013 W US 290 HWY',
      YelpCategories: 'Music Venues,Bars',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 27
    },
    {
      Name: 'Sawyer Food/Courthouse',
      Street: '1000 GUADALUPE ST',
      YelpCategories: 'Courthouses',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 19
    },
    {
      Name: 'McDonald\'s #24993',
      Street: '6010 W PARMER LN',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 86,
      YelpRaiting: 2,
      YelpReviewCount: 34
    },
    {
      Name: 'River Place Country Club',
      Street: '4207 RIVER PLACE BLVD',
      YelpCategories: 'Country Clubs,Venues & Event Spaces',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 18
    },
    {
      Name: 'Austin Catering',
      Street: '2700 W ANDERSON LN',
      YelpCategories: 'Preschools,Elementary Schools',
      Score: 75,
      YelpRaiting: 5,
      YelpReviewCount: 10
    },
    {
      Name: 'Jason\'s Deli',
      Street: '10225 RESEARCH BLVD',
      YelpCategories: 'Delis,Sandwiches,Salad',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 130
    },
    {
      Name: 'Hilton Austin-Spa & Towers',
      Street: '500 E 4TH ST',
      YelpCategories: 'Hotels',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 426
    },
    {
      Name: 'Santa Rita #1',
      Street: '1206 W 38TH ST',
      YelpCategories: 'Tex-Mex',
      Score: 76,
      YelpRaiting: 4,
      YelpReviewCount: 267
    },
    {
      Name: 'LW - Lakeway Swim Center',
      Street: '3103 LAKEWAY BLVD',
      YelpCategories: 'Swimming Pools',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Maiko Sushi Lounge',
      Street: '311 W 6TH ST',
      YelpCategories: 'Japanese,Sushi Bars',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 518
    },
    {
      Name: 'Caffe Macs Riata Vista 2',
      Street: '12545 RIATA VISTA CIR',
      YelpCategories: 'Cafes,American (New)',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Sonic Drive In',
      Street: '9916 BRODIE LN',
      YelpCategories: 'Fast Food,Burgers,Ice Cream & Frozen Yogurt',
      Score: 93,
      YelpRaiting: 2,
      YelpReviewCount: 26
    },
    {
      Name: 'Latitude 30',
      Street: '512 SAN JACINTO BLVD',
      YelpCategories: 'Dance Clubs,Bars',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 39
    },
    {
      Name: 'Pei Wei',
      Street: '1000 E 41ST ST',
      YelpCategories: 'Asian Fusion,Chinese,Gluten-Free',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 141
    },
    {
      Name: 'Parsons House @ Austin',
      Street: '1130 CAMINO LA',
      YelpCategories: 'Retirement Homes',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Boulevards Grill & Bar',
      Street: '3616 FAR WEST BLVD',
      YelpCategories: 'Sports Bars,Burgers',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 120
    },
    {
      Name: 'Taco Deli',
      Street: '12001 BURNET RD',
      YelpCategories: 'Seafood,Breakfast & Brunch,Tacos',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 887
    },
    {
      Name: 'Casa Moreno',
      Street: '4606 BURLESON RD',
      YelpCategories: 'Mexican',
      Score: 80,
      YelpRaiting: 3,
      YelpReviewCount: 56
    },
    {
      Name: 'Westlake PTO Stadium',
      Street: '4100 WESTBANK DR',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'River City Donut',
      Street: '1945 W WILLIAM CANNON DR',
      YelpCategories: 'Donuts,Coffee & Tea',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 80
    },
    {
      Name: 'Frank',
      Street: '407 COLORADO ST',
      YelpCategories: 'Hot Dogs,Lounges',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 1810
    },
    {
      Name: 'Quizno\'s Subs',
      Street: '922 CONGRESS AVE',
      YelpCategories: 'Sandwiches,Delis',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 16
    },
    {
      Name: 'La Hacienda Market #4',
      Street: '1812 PAYTON GIN RD',
      YelpCategories: 'Grocery,Meat Shops,Mexican',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 8
    },
    {
      Name: 'Chick-Fil-A',
      Street: '12901 N IH',
      YelpCategories: 'Fast Food',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 65
    },
    {
      Name: 'Billy\'s on Burnet',
      Street: '2105 HANCOCK DR',
      YelpCategories: 'American (Traditional),Pubs',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 357
    },
    {
      Name: 'Taverna',
      Street: '258 W 2ND ST',
      YelpCategories: 'Italian,Breakfast & Brunch,Pizza',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 763
    },
    {
      Name: 'China Cafe',
      Street: '3901 SPICEWOOD SPRINGS RD',
      YelpCategories: 'Chinese',
      Score: 77,
      YelpRaiting: 4,
      YelpReviewCount: 144
    },
    {
      Name: 'Panda Express',
      Street: '11521 N FM 620 RD',
      YelpCategories: 'Chinese,Fast Food',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 27
    },
    {
      Name: 'Children\'s Courtyard, The',
      Street: '11718 METRIC BLVD',
      YelpCategories: 'Preschools,Child Care & Day Care,Elementary Schools',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'Blue Dahlia Bistro',
      Street: '1115 E 11TH ST',
      YelpCategories: 'Breakfast & Brunch,French,Salad',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 1218
    },
    {
      Name: 'Subway',
      Street: '4601 SOUTHWEST PKWY',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 92,
      YelpRaiting: 2,
      YelpReviewCount: 14
    },
    {
      Name: 'Detour',
      Street: '6705 W US 290 HWY',
      YelpCategories: 'Dive Bars,Cocktail Bars,Karaoke',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 50
    },
    {
      Name: 'Alamo Draft House Cinema',
      Street: '1120 S LAMAR BLVD',
      YelpCategories: 'Cinema',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 476
    },
    {
      Name: 'Main Event',
      Street: '13301 N US 183 HWY',
      YelpCategories: 'Bowling,American (Traditional),Arcades',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 307
    },
    {
      Name: 'El Chilito',
      Street: '2219 MANOR RD',
      YelpCategories: 'Mexican',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 158
    },
    {
      Name: 'St. David\'s Episcopal Church',
      Street: '301 E 8TH ST',
      YelpCategories: 'Preschools,Montessori Schools',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'Texas Coffee Traders, Inc.',
      Street: '1400 E 4TH ST',
      YelpCategories: 'Coffee Roasteries',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 175
    },
    {
      Name: 'Starbucks Coffee #9612',
      Street: '3706 GUADALUPE ST',
      YelpCategories: 'Coffee & Tea',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 44
    },
    {
      Name: 'Bombay Bistro',
      Street: '10710 RESEARCH BLVD',
      YelpCategories: 'Indian',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 523
    },
    {
      Name: 'Jo\'s Coffee Shop',
      Street: '242 W 2ND ST',
      YelpCategories: 'Coffee & Tea,Sandwiches,Breakfast & Brunch',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 458
    },
    {
      Name: 'Whole Foods - Kikka',
      Street: '525 N LAMAR BLVD',
      YelpCategories: 'Wine Bars',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'Hey Cupcake!',
      Street: '5530 BURNET RD',
      YelpCategories: 'Desserts,Cupcakes,Caterers',
      Score: 80,
      YelpRaiting: 3,
      YelpReviewCount: 247
    },
    {
      Name: 'Mandola\'s Italian Market',
      Street: '4700 W GUADALUPE ST',
      YelpCategories: 'Italian,Wine Bars',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 856
    },
    {
      Name: 'Starbucks Coffee #9676',
      Street: '6301 W PARMER LN',
      YelpCategories: 'Coffee & Tea',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 63
    },
    {
      Name: 'Key Bar',
      Street: '617 W 6TH ST',
      YelpCategories: 'Bars',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 120
    },
    {
      Name: 'Jersey Mike\'s Subs',
      Street: '11521 N FM 620 RD',
      YelpCategories: 'Sandwiches,Fast Food,Delis',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 51
    },
    {
      Name: 'Pizza Hut',
      Street: '6307 CAMERON RD',
      YelpCategories: 'Pizza,Italian,Chicken Wings',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 18
    },
    {
      Name: 'Summer Moon Coffee Bar',
      Street: '3115 S 1ST ST',
      YelpCategories: 'Coffee Roasteries',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 825
    },
    {
      Name: 'Pizza Hut #7111',
      Street: '12636 RESEARCH BLVD',
      YelpCategories: 'Pizza,Italian,Chicken Wings',
      Score: 89,
      YelpRaiting: 2,
      YelpReviewCount: 44
    },
    {
      Name: 'A.B.Cantu/Pan-Am Rec. Center',
      Street: '2100 E 3RD ST',
      YelpCategories: 'Parks,Day Camps',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'Pizza Hut',
      Street: '1144 AIRPORT BLVD',
      YelpCategories: 'Pizza,Italian,Chicken Wings',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 30
    },
    {
      Name: 'P. Terry\'s Burger Stand',
      Street: '404 S LAMAR BLVD',
      YelpCategories: 'Burgers,Fast Food',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 610
    },
    {
      Name: 'El Borrego de Oro',
      Street: '3900 S CONGRESS AVE',
      YelpCategories: 'Mexican',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 267
    },
    {
      Name: 'Slake',
      Street: '120 E 7TH ST',
      YelpCategories: 'Cafes,American (New),Breakfast & Brunch',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 262
    },
    {
      Name: 'The Children\'s Center of Austin',
      Street: '8100 FM 2244 RD',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 12
    },
    {
      Name: 'Crowne Plaza Austin',
      Street: '6121 N IH',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 156
    },
    {
      Name: 'IHOP',
      Street: '11654 RESEARCH BLVD',
      YelpCategories: 'Breakfast & Brunch,American (Traditional),Burgers',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 119
    },
    {
      Name: 'Wingstop #188',
      Street: '9616 N LAMAR BLVD',
      YelpCategories: 'Chicken Wings',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 25
    },
    {
      Name: 'Austin\'s Pizza #7',
      Street: '10900 RESEARCH BLVD',
      YelpCategories: 'Trainers,Boxing,Circuit Training Gyms',
      Score: 73,
      YelpRaiting: 5,
      YelpReviewCount: 18
    },
    {
      Name: 'IHOP',
      Street: '14310 N IH',
      YelpCategories: 'Breakfast & Brunch,American (Traditional),Burgers',
      Score: 86,
      YelpRaiting: 2,
      YelpReviewCount: 96
    },
    {
      Name: 'Inflatable Wonderland',
      Street: '11200 LAKELINE MALL DR',
      YelpCategories: 'Indoor Playcentre',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 44
    },
    {
      Name: 'Austin\'s Pizza',
      Street: '2324 GUADALUPE ST',
      YelpCategories: 'Pizza',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 114
    },
    {
      Name: 'Taco Cabana #278',
      Street: '6611 S MOPAC EXPY',
      YelpCategories: 'Mexican',
      Score: 80,
      YelpRaiting: 2,
      YelpReviewCount: 113
    },
    {
      Name: 'Jimmy Johns',
      Street: '3203 RED RIVER ST',
      YelpCategories: 'Sandwiches,Delis,Fast Food',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 71
    },
    {
      Name: 'Jimmy Johns',
      Street: '515 CONGRESS AVE',
      YelpCategories: 'Sandwiches,Delis,Fast Food',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 99
    },
    {
      Name: 'Mom\'s Taste',
      Street: '6613 AIRPORT BLVD',
      YelpCategories: 'Korean,Grocery,Specialty Food',
      Score: 74,
      YelpRaiting: 5,
      YelpReviewCount: 41
    },
    {
      Name: 'Phil\'s Ice House',
      Street: '5620 BURNET RD',
      YelpCategories: 'Burgers',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 495
    },
    {
      Name: 'Double Dave\'s Pizza',
      Street: '13343 N US 183 HWY',
      YelpCategories: 'Hawaiian,Poke,Sushi Bars',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 38
    },
    {
      Name: 'Seton SW Healthcare',
      Street: '7900 FM 1826 RD',
      YelpCategories: 'Hospitals,Emergency Rooms',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 54
    },
    {
      Name: 'Jardin Corona',
      Street: '13233 POND SPRINGS RD',
      YelpCategories: 'Mexican',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 378
    },
    {
      Name: 'Blue Star Cafe',
      Street: '4800 BURNET RD',
      YelpCategories: 'American (New)',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 402
    },
    {
      Name: 'Taqueria Morelos',
      Street: '3100 S US 183 HWY',
      YelpCategories: 'Mexican',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 59
    },
    {
      Name: 'ABC\'s & 123\'s Infant and Child Care Cntr',
      Street: '13419 E US 290 HWY',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 3
    },
    {
      Name: 'Southside Pizza',
      Street: '2206 S CONGRESS AVE',
      YelpCategories: 'Pizza',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 429
    },
    {
      Name: 'ABIA Fara Cafe Sports Bar',
      Street: '3600 PRESIDENTIAL BLVD',
      YelpCategories: 'American (New),Desserts,Breakfast & Brunch',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 54
    },
    {
      Name: 'Boomerz Night Club',
      Street: '6148 W US 290 HWY',
      YelpCategories: 'Dive Bars,Karaoke,Music Venues',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 34
    },
    {
      Name: 'Rowe Lane Elementary',
      Street: '3112 SPEIDEL DR',
      YelpCategories: 'Elementary Schools',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Parlor, The',
      Street: '4301 GUADALUPE ST',
      YelpCategories: 'Pizza,Bars',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 204
    },
    {
      Name: 'Pok-E-Jo\'s Hancock',
      Street: '1000 E 41ST ST',
      YelpCategories: 'Barbeque,Smokehouse',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 83
    },
    {
      Name: 'Whole Foods - Bakery',
      Street: '525 N LAMAR BLVD',
      YelpCategories: 'Wine Bars',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'IHOP',
      Street: '1101 S MOPAC EXPY',
      YelpCategories: 'Breakfast & Brunch,American (Traditional),Burgers',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 58
    },
    {
      Name: 'Austin High School - Culinary',
      Street: '1715 W CESAR CHAVEZ ST',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Shooters Billards and Sports Bar',
      Street: '11416 N FM 620 RD',
      YelpCategories: 'Pool Halls,Sports Bars',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 60
    },
    {
      Name: 'MN - Texas Traditional BBQ',
      Street: '910 N CALDWELL ST',
      YelpCategories: 'Barbeque',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 61
    },
    {
      Name: 'Thien Nhon Duong',
      Street: '7801 N LAMAR BLVD',
      YelpCategories: 'Herbs & Spices',
      Score: 82,
      YelpRaiting: 5,
      YelpReviewCount: 7
    },
    {
      Name: 'Chick Fil A',
      Street: '12501 N MOPAC EXPY',
      YelpCategories: 'Fast Food',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 89
    },
    {
      Name: 'Subway',
      Street: '5800 W SLAUGHTER LN',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 28
    },
    {
      Name: 'Flat Creek Estate',
      Street: '24912 E SINGLETON BEND RD',
      YelpCategories: 'Wineries',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 93
    },
    {
      Name: 'Papa Johns Pizza #1940',
      Street: '8106 BRODIE LN',
      YelpCategories: 'Pizza',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 18
    },
    {
      Name: 'Hideout Pub, The',
      Street: '12164 N MOPAC EXPY',
      YelpCategories: 'Pubs',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 315
    },
    {
      Name: 'Koriente Restaurant',
      Street: '621 E 7TH ST',
      YelpCategories: 'Asian Fusion,Vegetarian,Gluten-Free',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 1427
    },
    {
      Name: 'Little China Restaurant',
      Street: '1921 CEDAR BEND DR',
      YelpCategories: 'Chinese,Vietnamese',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 167
    },
    {
      Name: 'Wingstop #164',
      Street: '2410 E RIVERSIDE DR',
      YelpCategories: 'Chicken Wings',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 50
    },
    {
      Name: 'Costco - Cafe',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Department Stores',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 195
    },
    {
      Name: 'Opal Divines Marina',
      Street: '12709 N MOPAC EXPY',
      YelpCategories: 'American (Traditional),Cocktail Bars',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 442
    },
    {
      Name: 'Tangent Cafe & Catering',
      Street: '6500 RIVER PLACE BLVD',
      YelpCategories: 'Sandwiches,Breakfast & Brunch,American (Traditional)',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 29
    },
    {
      Name: 'Kebabalicious',
      Street: '1311 E 7TH ST',
      YelpCategories: 'Turkish',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 205
    },
    {
      Name: 'Sam\'s Club #6453 Produce & Groceries',
      Street: '9700 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Department Stores,Wholesale Stores,Grocery',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 63
    },
    {
      Name: 'Majik Mart',
      Street: '11815 N FM 620 RD',
      YelpCategories: 'Convenience Stores',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Marshall Ford Grocery',
      Street: '4610 N FM 620 RD',
      YelpCategories: 'Grocery',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Verde\'s Mexican Parrilla',
      Street: '16018 HAMILTON POOL RD',
      YelpCategories: 'Mexican',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 495
    },
    {
      Name: 'La Quinta Inn #0186',
      Street: '7625 E BEN WHITE BLVD',
      YelpCategories: 'Hotels',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 29
    },
    {
      Name: 'ABIA Austin Java',
      Street: '3600 PRESIDENTIAL BLVD',
      YelpCategories: 'Coffee & Tea',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 91
    },
    {
      Name: 'Subway #42525',
      Street: '1923 E 7TH ST',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 92,
      YelpRaiting: 2,
      YelpReviewCount: 12
    },
    {
      Name: 'Kick Butt Coffee LLC',
      Street: '5775 AIRPORT BLVD',
      YelpCategories: 'Coffee & Tea,Bars,Music Venues',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 356
    },
    {
      Name: 'Congregation Agudas Achim',
      Street: '7300 HART LN',
      YelpCategories: 'Synagogues',
      Score: 76,
      YelpRaiting: 5,
      YelpReviewCount: 7
    },
    {
      Name: '7-Eleven - Vaishnavi Food and Gas',
      Street: '2820 S LAMAR BLVD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 12
    },
    {
      Name: 'Chuy\'s',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Tex-Mex,Bars,Mexican',
      Score: 77,
      YelpRaiting: 4,
      YelpReviewCount: 380
    },
    {
      Name: 'Walgreens #10615',
      Street: '5345 N IH',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 99,
      YelpRaiting: 2,
      YelpReviewCount: 42
    },
    {
      Name: 'Lifeworks',
      Street: '3708 S 2ND ST',
      YelpCategories: 'Counseling & Mental Health',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Brooklyn Heights Pizzeria',
      Street: '14900 AVERY RANCH BLVD',
      YelpCategories: 'Pizza',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 312
    },
    {
      Name: 'Wanna Play, LLC',
      Street: '14010 N US 183 HWY',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 96
    },
    {
      Name: 'Austex Shell',
      Street: '13296 N US 183 HWY',
      YelpCategories: 'Gas Stations',
      Score: 99,
      YelpRaiting: 1,
      YelpReviewCount: 2
    },
    {
      Name: 'Burger King',
      Street: '7105 N IH',
      YelpCategories: 'Fast Food,Burgers,Breakfast & Brunch',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 12
    },
    {
      Name: 'Heartland Healthcare Center',
      Street: '11406 RUSTIC ROCK DR',
      YelpCategories: 'Skilled Nursing,Assisted Living Facilities',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Fabi & Rosi',
      Street: '509 HEARN ST',
      YelpCategories: 'Modern European,French,German',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 531
    },
    {
      Name: 'Sonic Drive In #114',
      Street: '1605 E PARMER LN',
      YelpCategories: 'Burgers,Fast Food,Ice Cream & Frozen Yogurt',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 36
    },
    {
      Name: 'Long Performing Arts Center',
      Street: '701 W RIVERSIDE DR',
      YelpCategories: 'Performing Arts,Opera & Ballet',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 141
    },
    {
      Name: 'Bucket\'s Deli & Sports Bar',
      Street: '2020 E CESAR CHAVEZ ST',
      YelpCategories: 'Sports Bars',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 15
    },
    {
      Name: 'American Airlines Admirals Club',
      Street: '3600 PRESIDENTIAL BLVD',
      YelpCategories: 'Airport Lounges',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 44
    },
    {
      Name: 'Torchy\'s Tacos',
      Street: '2809 S 1ST ST',
      YelpCategories: 'Breakfast & Brunch,Tacos',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 729
    },
    {
      Name: 'North Hunan',
      Street: '9306 N LAMAR BLVD',
      YelpCategories: 'Chinese',
      Score: 72,
      YelpRaiting: 3,
      YelpReviewCount: 62
    },
    {
      Name: 'World Food And Halal Market',
      Street: '9616 N LAMAR BLVD',
      YelpCategories: 'Grocery',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Hea Cafe',
      Street: '502 1 2 E BEN WHITE BLVD',
      YelpCategories: 'Vietnamese,Chinese,Noodles',
      Score: 76,
      YelpRaiting: 3,
      YelpReviewCount: 159
    },
    {
      Name: 'Cabo Bob\'s',
      Street: '500 E BEN WHITE BLVD',
      YelpCategories: 'Mexican',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 680
    },
    {
      Name: 'The Ranch',
      Street: '710 W 6TH ST',
      YelpCategories: 'Bars',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 170
    },
    {
      Name: 'Panera Bread',
      Street: '4625 W WILLIAM CANNON DR',
      YelpCategories: 'Sandwiches,Salad,Soup',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 104
    },
    {
      Name: 'Hilton Garden Inn North Austin',
      Street: '12400 N IH',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 44
    },
    {
      Name: 'Afriqmart',
      Street: '2700 W PECAN ST',
      YelpCategories: 'Specialty Food',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: '7-Eleven',
      Street: '1705 SOUTH LAKESHORE BLVD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 5
    },
    {
      Name: 'West Campus Market',
      Street: '709 W 22ND ST',
      YelpCategories: 'Beer, Wine & Spirits',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'Hoboken Pie',
      Street: '718 RED RIVER ST',
      YelpCategories: 'Pizza,Italian',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 478
    },
    {
      Name: 'Polkadots Cupcake Factory',
      Street: '2826 RIO GRANDE ST',
      YelpCategories: 'Desserts,Custom Cakes,Cupcakes',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 261
    },
    {
      Name: 'Seoul Asian Market',
      Street: '5610 N LAMAR BLVD',
      YelpCategories: 'Grocery,Sushi Bars',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 555
    },
    {
      Name: 'Taqueria Chapala #4',
      Street: '4201 S CONGRESS AVE',
      YelpCategories: 'Mexican',
      Score: 77,
      YelpRaiting: 4,
      YelpReviewCount: 32
    },
    {
      Name: 'Hole in The Wall, The',
      Street: '2538 GUADALUPE ST',
      YelpCategories: 'Music Venues,Dive Bars',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 173
    },
    {
      Name: 'Panda Express #1651',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Chinese,Fast Food',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 34
    },
    {
      Name: 'Panda Express #1644',
      Street: '309 W SLAUGHTER LN',
      YelpCategories: 'Fast Food,Chinese',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 49
    },
    {
      Name: 'Q-Mart',
      Street: '10001 W PARMER LN',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 89,
      YelpRaiting: 1,
      YelpReviewCount: 2
    },
    {
      Name: 'WL - Randall\'s #2477-Starbucks',
      Street: '3300 BEE CAVES RD',
      YelpCategories: 'Bakeries,Grocery,Florists',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: '7-Eleven Convenience Store #24008',
      Street: '5101 N LAMAR BLVD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 8
    },
    {
      Name: 'Rodeway Inn University',
      Street: '2900 N IH',
      YelpCategories: 'Hotels',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 37
    },
    {
      Name: '7-Eleven #22245',
      Street: '2103 S CONGRESS AVE',
      YelpCategories: 'Gas Stations,Convenience Stores,Coffee & Tea',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 7
    },
    {
      Name: 'Niki\'s Pizza',
      Street: '1100 CENTER RIDGE DR',
      YelpCategories: 'Pizza,Italian',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 135
    },
    {
      Name: 'Shiner\'s Saloon',
      Street: '422 CONGRESS AVE',
      YelpCategories: 'Bars,American (Traditional),Music Venues',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 156
    },
    {
      Name: 'School in the Hills',
      Street: '2900 N QUINLAN PARK RD',
      YelpCategories: 'Preschools,Private Schools,Montessori Schools',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 9
    },
    {
      Name: 'Texican Cafe',
      Street: '4141 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Tex-Mex,Mexican',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 194
    },
    {
      Name: 'Twin Liquors',
      Street: '1000 E 41ST ST',
      YelpCategories: 'Beer, Wine & Spirits',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 74
    },
    {
      Name: 'Chipotle Mexican Grill #92',
      Street: '2230 GUADALUPE ST',
      YelpCategories: 'Mexican,Fast Food',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 119
    },
    {
      Name: 'WL - Randall\'s #2477-Bakery',
      Street: '3300 BEE CAVES RD',
      YelpCategories: 'Bakeries,Grocery,Florists',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Chipotle Mexican Grill #427',
      Street: '11301 LAKELINE BLVD',
      YelpCategories: 'Mexican,Fast Food',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 101
    },
    {
      Name: 'Chipotle Mexican Grill #847',
      Street: '10515 N MOPAC EXPY',
      YelpCategories: 'Mexican,Fast Food',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 56
    },
    {
      Name: 'Chipotle Mexican Grill #262',
      Street: '1700 W PARMER LN',
      YelpCategories: 'Fast Food,Mexican',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 84
    },
    {
      Name: 'WL - Chipotle Mexican Grill #43',
      Street: '3300 BEE CAVES RD',
      YelpCategories: 'Mexican,Fast Food',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 39
    },
    {
      Name: 'Thunder Cloud Subs',
      Street: '1700 GRAND AVENUE PKWY',
      YelpCategories: 'Sandwiches',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 64
    },
    {
      Name: 'Jersey Mike\'s Subs',
      Street: '4404 W WILLIAM CANNON DR',
      YelpCategories: 'Sandwiches,Delis,Fast Food',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 83
    },
    {
      Name: 'Sommer Elementary',
      Street: '16200 AVERY RANCH BLVD',
      YelpCategories: 'Elementary Schools',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Gus Garcia Recreation Center',
      Street: '1201 E RUNDBERG LN',
      YelpCategories: 'Recreation Centers',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Target #2409 Food Avenue',
      Street: '10107 RESEARCH BLVD',
      YelpCategories: 'Department Stores',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 84
    },
    {
      Name: '7-Eleven Convenience Store #26353A',
      Street: '601 W BEN WHITE BLVD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 14
    },
    {
      Name: 'LW - Rough Hollow Yacht Club',
      Street: '105 YACHT CLUB CV',
      YelpCategories: 'Trainers',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Buenos Aires Cafe',
      Street: '1201 E 6TH ST',
      YelpCategories: 'Argentine',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 562
    },
    {
      Name: 'Lola Savannah Coffee',
      Street: '6317 FM 2244 RD',
      YelpCategories: 'Coffee & Tea,Wine Bars',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 120
    },
    {
      Name: 'Minh\'s Cafe',
      Street: '12221 RIATA TRACE PKWY',
      YelpCategories: 'Vietnamese,Chinese',
      Score: 58,
      YelpRaiting: 4,
      YelpReviewCount: 172
    },
    {
      Name: 'OK Corral',
      Street: '629 W BEN WHITE BLVD',
      YelpCategories: 'Dance Clubs,Pubs',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Black Sheep Lodge',
      Street: '2108 S LAMAR BLVD',
      YelpCategories: 'Burgers,Sports Bars,American (Traditional)',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 638
    },
    {
      Name: 'Chen\'s Noodle House',
      Street: '8650 SPICEWOOD SPRINGS RD',
      YelpCategories: 'Chinese,Noodles',
      Score: 75,
      YelpRaiting: 4,
      YelpReviewCount: 424
    },
    {
      Name: 'Shangri-La',
      Street: '1016 E 6TH ST',
      YelpCategories: 'Lounges',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 266
    },
    {
      Name: 'SV - Chipotle',
      Street: '5400 BRODIE LN',
      YelpCategories: 'Mexican,Fast Food',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 136
    },
    {
      Name: 'Riata Stop',
      Street: '12221 RIATA TRACE PKWY',
      YelpCategories: 'Apartments,Property Management',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 155
    },
    {
      Name: 'Cover 3',
      Street: '2700 W ANDERSON LN',
      YelpCategories: 'American (New),Sports Bars',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 622
    },
    {
      Name: 'Wal-Mart Supercenter #2133 -Bakery',
      Street: '5017 W US 290 HWY',
      YelpCategories: 'Department Stores,Grocery',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 59
    },
    {
      Name: 'Wal-Mart Supercenter #2133 -Meat',
      Street: '5017 W US 290 HWY',
      YelpCategories: 'Department Stores,Grocery',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 59
    },
    {
      Name: 'Thai Cuisine',
      Street: '4101 W PARMER LN',
      YelpCategories: 'Thai',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 659
    },
    {
      Name: 'Starbucks Coffee #14663',
      Street: '7709 E BEN WHITE BLVD',
      YelpCategories: 'Coffee & Tea',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 37
    },
    {
      Name: 'Freebirds World Burrito',
      Street: '4032 S LAMAR BLVD',
      YelpCategories: 'Tex-Mex,Mexican',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 119
    },
    {
      Name: 'Open Door Preschool',
      Street: '1717 W 10TH ST',
      YelpCategories: 'Preschools',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: '7-Eleven #12705',
      Street: '408 W 15TH ST',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 17
    },
    {
      Name: 'Village @ Marbridge',
      Street: '2310 BLISS SPILLAR RD',
      YelpCategories: 'Skilled Nursing,Rehabilitation Center',
      Score: 92,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Oasis Mediterranean Cafe & Pizza, Inc',
      Street: '14735 BRATTON LN',
      YelpCategories: 'Pizza,Greek,Korean',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 77
    },
    {
      Name: 'Walgreens #11097',
      Street: '5819 BURNET RD',
      YelpCategories: 'Drugstores,Cosmetics & Beauty Supply,Convenience Stores',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'Pacha',
      Street: '4618 BURNET RD',
      YelpCategories: 'Coffee & Tea,Breakfast & Brunch',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 626
    },
    {
      Name: 'Ichiban at Austin',
      Street: '7310 BURNET RD',
      YelpCategories: 'Sushi Bars,Japanese,Korean',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 308
    },
    {
      Name: 'Hecho En Mexico',
      Street: '6001 W WILLIAM CANNON DR',
      YelpCategories: 'Mexican',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 479
    },
    {
      Name: 'Milano Cafe',
      Street: '4601 SOUTHWEST PKWY',
      YelpCategories: 'Italian,Modern European,Wine Bars',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 371
    },
    {
      Name: 'Saccones Pizza & Subs',
      Street: '11416 N FM 620 RD',
      YelpCategories: 'Pizza,Sandwiches,Italian',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 258
    },
    {
      Name: 'Austin\'s Pizza',
      Street: '15424 FM 1825 RD',
      YelpCategories: 'Pizza',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 63
    },
    {
      Name: '7-Eleven Convenience Store #25445A',
      Street: '8900 N LAMAR BLVD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 83,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Balcones Club Grill',
      Street: '8600 BALCONES CLUB DR',
      YelpCategories: 'Golf,Country Clubs',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 10
    },
    {
      Name: 'La Condesa Restaurant',
      Street: '400 W 2ND ST',
      YelpCategories: 'Mexican',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 1309
    },
    {
      Name: 'Malverde at La Condesa',
      Street: '400 W 2ND ST',
      YelpCategories: 'Venues & Event Spaces',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 11
    },
    {
      Name: 'Muangthai Thai Cuisine',
      Street: '13945 N US 183 HWY',
      YelpCategories: 'Thai',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 408
    },
    {
      Name: 'Opa',
      Street: '2050 S LAMAR BLVD',
      YelpCategories: 'Wine Bars,Greek,Coffee & Tea',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 408
    },
    {
      Name: 'Sunrise Mini Mart #5',
      Street: '7401 BURNET RD',
      YelpCategories: 'Convenience Stores',
      Score: 76,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'SV - Mighty Fine Burgers Fries Shakes',
      Street: '5601 BRODIE LN',
      YelpCategories: 'Burgers',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 347
    },
    {
      Name: 'Peckerheads',
      Street: '402 E 6TH ST',
      YelpCategories: 'Bars',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 36
    },
    {
      Name: 'R S Food Mart',
      Street: '1219 ROSEWOOD AVE',
      YelpCategories: 'Convenience Stores,Beer, Wine & Spirits',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 8
    },
    {
      Name: 'Roaring Fork',
      Street: '10850 STONELAKE BLVD',
      YelpCategories: 'American (New)',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 987
    },
    {
      Name: 'La Michoacana Meat Market',
      Street: '2237 E RIVERSIDE DR',
      YelpCategories: 'Butcher,Grocery',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Barton Hill Food Mart',
      Street: '2900 S LAMAR BLVD',
      YelpCategories: 'Convenience Stores',
      Score: 85,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Austin\'s Pizza-Index Hospitality',
      Street: '1600 W 35TH ST',
      YelpCategories: 'Pizza',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 30
    },
    {
      Name: 'Subway #46185',
      Street: '1420 W WELLS BRANCH PKWY',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 9
    },
    {
      Name: 'Bridgepoint Cafe Catering',
      Street: '5918 WEST COURTYARD DR',
      YelpCategories: 'Caterers',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 12
    },
    {
      Name: 'Stepping Stone School',
      Street: '12301 HYMEADOW DR',
      YelpCategories: 'Child Care & Day Care,Preschools,Summer Camps',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 18
    },
    {
      Name: 'Open Door Preschool-East',
      Street: '3804 CHERRYWOOD RD',
      YelpCategories: 'Child Care & Day Care,Elementary Schools,Preschools',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Starbright Preschool',
      Street: '3900 VALLEY VIEW RD',
      YelpCategories: 'Child Care & Day Care,Preschools,Elementary Schools',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Bennu Coffee',
      Street: '2001 E MARTIN LUTHER KING JR BLVD',
      YelpCategories: 'Coffee & Tea,Tacos,Pizza',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 643
    },
    {
      Name: 'BC - Barnes & Noble Booksellers',
      Street: '12701 HILL COUNTRY BLVD',
      YelpCategories: 'Bookstores',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 18
    },
    {
      Name: 'BC - Cinemark Hill Country',
      Street: '12812 HILL COUNTRY BLVD',
      YelpCategories: 'Cinema',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 70
    },
    {
      Name: 'Bread Basket-East Cannon',
      Street: '8101 SALT SPRINGS DR',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 85,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'Panera Bread',
      Street: '9901 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Sandwiches,Salad,Soup',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 204
    },
    {
      Name: 'BC - Subway',
      Street: '12717 SHOPS PKWY',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 84,
      YelpRaiting: 5,
      YelpReviewCount: 6
    },
    {
      Name: 'BC - Tony C\'s',
      Street: '12800 HILL COUNTRY BLVD',
      YelpCategories: 'Pizza,Italian',
      Score: 74,
      YelpRaiting: 4,
      YelpReviewCount: 256
    },
    {
      Name: 'BC - Walgreens #11272',
      Street: '12200 BEE CAVE PKWY',
      YelpCategories: 'Cosmetics & Beauty Supply,Drugstores,Convenience Stores',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 9
    },
    {
      Name: 'BC - World Market #276',
      Street: '12700 SHOPS PKWY',
      YelpCategories: 'Furniture Stores,Home Decor,Beer, Wine & Spirits',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 13
    },
    {
      Name: 'Taco-Mex',
      Street: '2611 MANOR RD',
      YelpCategories: 'Mexican',
      Score: 81,
      YelpRaiting: 5,
      YelpReviewCount: 170
    },
    {
      Name: 'Covenant Presbyterian Church',
      Street: '3003 NORTHLAND DR',
      YelpCategories: 'Churches',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'Central Donut',
      Street: '1910 W BRAKER LN',
      YelpCategories: 'Donuts,Breakfast & Brunch,Sandwiches',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 57
    },
    {
      Name: 'Chupacabra Cantina [400 Bar]',
      Street: '400 E 6TH ST',
      YelpCategories: 'Bars,Mexican',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 417
    },
    {
      Name: 'Baguette House & Cafe',
      Street: '10901 N LAMAR BLVD',
      YelpCategories: 'Vietnamese,Sandwiches',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 343
    },
    {
      Name: 'Gold\'s Gym - Tech Ridge',
      Street: '235 CANYON RIDGE DR',
      YelpCategories: 'Gyms,Trainers,Yoga',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 94
    },
    {
      Name: 'Aloft Hotel Austin Domain',
      Street: '11601 DOMAIN DR',
      YelpCategories: 'Hotels',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 146
    },
    {
      Name: 'Third Base',
      Street: '9600 S IH',
      YelpCategories: 'Sports Bars',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 227
    },
    {
      Name: 'Mi Pueblo Meat Market',
      Street: '6575 DECKER LN',
      YelpCategories: 'Meat Shops',
      Score: 73,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Super Donuts 12',
      Street: '12800 PEARCE LN',
      YelpCategories: 'Donuts,Breakfast & Brunch,Coffee & Tea',
      Score: 83,
      YelpRaiting: 5,
      YelpReviewCount: 7
    },
    {
      Name: 'Arab Cowboy Hookah Lounge',
      Street: '901 W 24TH ST',
      YelpCategories: 'Hookah Bars',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 76
    },
    {
      Name: 'Jimmy John\'s #1292',
      Street: '816 CONGRESS AVE',
      YelpCategories: 'Sandwiches,Delis,Fast Food',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 10
    },
    {
      Name: '7-Eleven Convenience Store #21884',
      Street: '917 N LAMAR BLVD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 75,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Sprouts Farmers Market',
      Street: '10225 RESEARCH BLVD',
      YelpCategories: 'Grocery,Farmers Market,Health Markets',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 154
    },
    {
      Name: 'Rogue Running',
      Street: '410 PRESSLER ST',
      YelpCategories: 'Sports Wear,Shoe Stores',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 39
    },
    {
      Name: 'WL - Izumi Sushi',
      Street: '701 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Japanese,Sushi Bars,Seafood',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 166
    },
    {
      Name: 'Star Bar',
      Street: '600 W 6TH ST',
      YelpCategories: 'Bars',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 87
    },
    {
      Name: 'Carrabba\'s Italian Grill',
      Street: '11590 RESEARCH BLVD',
      YelpCategories: 'Italian,Seafood',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 190
    },
    {
      Name: 'Randall\'s #2475- Bakery',
      Street: '5311 BALCONES DR',
      YelpCategories: 'Drugstores,Grocery',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 32
    },
    {
      Name: 'Casulo Cafe',
      Street: '3017 S IH',
      YelpCategories: 'Cafes',
      Score: 90,
      YelpRaiting: 2,
      YelpReviewCount: 3
    },
    {
      Name: 'Anderson Mill Elementary',
      Street: '10610 SALT MILL HOLW',
      YelpCategories: 'Elementary Schools',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Pho King',
      Street: '1021 E PARMER LN',
      YelpCategories: 'Vietnamese',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 245
    },
    {
      Name: 'Westwood High School',
      Street: '12400 MELLOW MEADOW DR',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'BC - Spec\'s Wine, Spirits & Finer Foods',
      Street: '13015 SHOPS PKWY',
      YelpCategories: 'Beer, Wine & Spirits',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 15
    },
    {
      Name: 'P. Terry\'s Burger Stand',
      Street: '4220 W WILLIAM CANNON DR',
      YelpCategories: 'Fast Food,Burgers',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 267
    },
    {
      Name: 'SV - Subway',
      Street: '5400 BRODIE LN',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 12
    },
    {
      Name: 'Austin Java',
      Street: '4303 VICTORY DR',
      YelpCategories: 'Coffee & Tea',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 19
    },
    {
      Name: 'Double Dave\'s Pizzaworks',
      Street: '9500 S IH',
      YelpCategories: 'Discount Store',
      Score: 89,
      YelpRaiting: 2,
      YelpReviewCount: 5
    },
    {
      Name: 'Austin Childrens Shelter',
      Street: '4800 MANOR RD',
      YelpCategories: 'Community Service/Non-Profit',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'The Goddard School',
      Street: '2111 FRATE BARKER RD',
      YelpCategories: 'Preschools,Child Care & Day Care,Summer Camps',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 6
    },
    {
      Name: 'Westlake PAC Concessions',
      Street: '4100 WESTBANK DR',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Austin Montessori School, Inc',
      Street: '5006 SUNSET TRL',
      YelpCategories: 'Montessori Schools',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Ashford Montessori',
      Street: '20301 JACKIES RANCH BLVD',
      YelpCategories: 'Montessori Schools',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Man Pasand Grocery',
      Street: '3601 W WILLIAM CANNON DR',
      YelpCategories: 'Imported Food',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 41
    },
    {
      Name: 'Nanami Sushi Bar',
      Street: '9001 BRODIE LN',
      YelpCategories: 'Sushi Bars,Japanese',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 316
    },
    {
      Name: 'Tiff\'s Treats',
      Street: '3201 BEE CAVES RD',
      YelpCategories: 'Desserts,Bakeries',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 44
    },
    {
      Name: 'Con\'olio Oils & Vinegars',
      Street: '10000 RESEARCH BLVD',
      YelpCategories: 'Olive Oil',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 98
    },
    {
      Name: 'Panera Bread',
      Street: '10900 LAKELINE MALL DR',
      YelpCategories: 'Sandwiches,Salad,Soup',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 117
    },
    {
      Name: 'Ruby Thai Kitchen',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Thai',
      Score: 73,
      YelpRaiting: 3,
      YelpReviewCount: 21
    },
    {
      Name: 'Cho Sushi',
      Street: '4300 N QUINLAN PARK RD',
      YelpCategories: 'Japanese,Sushi Bars',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 205
    },
    {
      Name: 'Chipotle Mexican Grill',
      Street: '2700 W ANDERSON LN',
      YelpCategories: 'Mexican,Fast Food',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 60
    },
    {
      Name: 'Subway #30984',
      Street: '1210 SAN ANTONIO ST',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 15
    },
    {
      Name: 'BC - Twin Liquors Hill Country Galleria',
      Street: '3925 MARKET ST',
      YelpCategories: 'Specialty Food',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 13
    },
    {
      Name: 'Coffee Bean & Tea Leaf, The',
      Street: '1000 E 41ST ST',
      YelpCategories: 'Coffee & Tea,Breakfast & Brunch,Sandwiches',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 107
    },
    {
      Name: 'Thundercloud Subs #23',
      Street: '3801 S CONGRESS AVE',
      YelpCategories: 'Sandwiches',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 46
    },
    {
      Name: 'Westin Austin @ The Domain',
      Street: '11301 DOMAIN DR',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 184
    },
    {
      Name: 'Michelle\'s Patisserie',
      Street: '12233 N FM 620 RD',
      YelpCategories: 'Bakeries,Custom Cakes',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 118
    },
    {
      Name: 'More Home Slice',
      Street: '1421 S CONGRESS AVE',
      YelpCategories: 'Pizza',
      Score: 87,
      YelpRaiting: 5,
      YelpReviewCount: 448
    },
    {
      Name: 'Kid Spa Austin, LLC.',
      Street: '5700 W SLAUGHTER LN',
      YelpCategories: 'Preschools,Specialty Schools,Child Care & Day Care',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 72
    },
    {
      Name: 'Family Dollar',
      Street: '3851 AIRPORT BLVD',
      YelpCategories: 'Department Stores',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 9
    },
    {
      Name: 'Henbit',
      Street: '111 CONGRESS AVE',
      YelpCategories: 'American (New),Fast Food,Breakfast & Brunch',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 34
    },
    {
      Name: 'Valhalla',
      Street: '710 RED RIVER ST',
      YelpCategories: 'Lounges',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 36
    },
    {
      Name: 'Barton Creek Market',
      Street: '2700 BARTON CREEK BLVD',
      YelpCategories: 'Grocery,Delis,Cafes',
      Score: 80,
      YelpRaiting: 5,
      YelpReviewCount: 8
    },
    {
      Name: 'Berry Austin',
      Street: '5523 BALCONES DR',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Desserts',
      Score: 86,
      YelpRaiting: 5,
      YelpReviewCount: 102
    },
    {
      Name: 'Abacus School of Austin',
      Street: '14115 AVERY RANCH BLVD',
      YelpCategories: 'Child Care & Day Care',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 12
    },
    {
      Name: 'LW - Flores Mexican Restaurant',
      Street: '2127 LOHMANS CROSSING RD',
      YelpCategories: 'Mexican',
      Score: 81,
      YelpRaiting: 3,
      YelpReviewCount: 88
    },
    {
      Name: 'Torchy\'s Tacos',
      Street: '4211 SPICEWOOD SPRINGS RD',
      YelpCategories: 'Breakfast & Brunch,Tacos',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 788
    },
    {
      Name: 'Trinity Child Development Center',
      Street: '5801 WESTMINSTER DR',
      YelpCategories: 'Child Care & Day Care',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'TNT Tacos and Tequila',
      Street: '507 PRESSLER ST',
      YelpCategories: 'Bars,Mexican',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 573
    },
    {
      Name: 'Subway',
      Street: '2501 W PARMER LN',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 8
    },
    {
      Name: 'Subway',
      Street: '1700 W PARMER LN',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 7
    },
    {
      Name: 'Child\'s Day Child Development Center',
      Street: '2525 WALLINGWOOD DR',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 12
    },
    {
      Name: 'Spider House Ballroom',
      Street: '2906 FRUTH ST',
      YelpCategories: 'Music Venues,Lounges',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 60
    },
    {
      Name: 'Sushi Zushi',
      Street: '3221 FEATHERGRASS CT',
      YelpCategories: 'Japanese,Sushi Bars,Bars',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 458
    },
    {
      Name: 'BC - Baguette et Chocolat',
      Street: '12101 FM 2244 RD',
      YelpCategories: 'Bakeries,French',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 386
    },
    {
      Name: '7-Eleven Convenience Store #34251A',
      Street: '9200 BURNET RD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 9
    },
    {
      Name: 'Barton Hills Market #1',
      Street: '1220 BARTON HILLS DR',
      YelpCategories: 'Grocery',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 16
    },
    {
      Name: 'HEB Plus #12 - Deli/Bakery/Produce',
      Street: '2508 E RIVERSIDE DR',
      YelpCategories: 'Pharmacy',
      Score: 93,
      YelpRaiting: 2,
      YelpReviewCount: 11
    },
    {
      Name: 'Family Dollar Store #6011',
      Street: '8764 RESEARCH BLVD',
      YelpCategories: 'Department Stores',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'El Meson',
      Street: '2038 S LAMAR BLVD',
      YelpCategories: 'Mexican,Latin American',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 296
    },
    {
      Name: 'Congress Ave Grocery',
      Street: '227 CONGRESS AVE',
      YelpCategories: 'Convenience Stores',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Combo Donut',
      Street: '1509 S LAMAR BLVD',
      YelpCategories: 'Donuts',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 39
    },
    {
      Name: 'Takoba',
      Street: '1411 E 7TH ST',
      YelpCategories: 'Mexican,Bars',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 728
    },
    {
      Name: 'Yo So Cool',
      Street: '1201 BARBARA JORDAN BLVD',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 70
    },
    {
      Name: 'New Madina Market',
      Street: '9200 N LAMAR BLVD',
      YelpCategories: 'Grocery',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 12
    },
    {
      Name: 'Hangar Lounge',
      Street: '318 COLORADO ST',
      YelpCategories: 'Lounges',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 160
    },
    {
      Name: 'Carmela\'s Pizzeria Cafe & Deli',
      Street: '18901 HAMILTON POOL RD',
      YelpCategories: 'Pizza,Cafes,Delis',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 69
    },
    {
      Name: 'ATX Food Mart',
      Street: '3002 S CONGRESS AVE',
      YelpCategories: 'Grocery',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Tacodeli III',
      Street: '4200 N LAMAR BLVD',
      YelpCategories: 'Caterers,Breakfast & Brunch,Tacos',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 635
    },
    {
      Name: 'Maru Japanese Restaurant',
      Street: '4636 BURNET RD',
      YelpCategories: 'Sushi Bars',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 260
    },
    {
      Name: 'Yumilicious',
      Street: '2700 W ANDERSON LN',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 141
    },
    {
      Name: 'Taqueria Los Jalisciences #6',
      Street: '6400 S 1ST ST',
      YelpCategories: 'Mexican',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 23
    },
    {
      Name: 'St. Roch\'s Bar',
      Street: '515 PEDERNALES ST',
      YelpCategories: 'Bars',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 69
    },
    {
      Name: 'MN - Taqueria Huentitan',
      Street: '11209 E US 290 HWY',
      YelpCategories: 'Mexican',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'BC - Hill Country Food Mart',
      Street: '13908 W SH',
      YelpCategories: 'Grocery,Convenience Stores',
      Score: 73,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'Top Notch',
      Street: '7525 BURNET RD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 606
    },
    {
      Name: 'Crow Bar',
      Street: '3116 S CONGRESS AVE',
      YelpCategories: 'Cocktail Bars',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 180
    },
    {
      Name: 'CVS/pharmacy #1430',
      Street: '2101 S LAMAR BLVD',
      YelpCategories: 'Pharmacy',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 27
    },
    {
      Name: 'Rosedale Market',
      Street: '1309 W 45TH ST',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 43
    },
    {
      Name: 'Oak Hills Food Mart',
      Street: '6134 W US 290 HWY',
      YelpCategories: 'Convenience Stores',
      Score: 86,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Gusto Italian Kitchen and Wine Bar',
      Street: '4800 BURNET RD',
      YelpCategories: 'Italian,Wine Bars',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 353
    },
    {
      Name: 'La Placita Mexican Restaurant',
      Street: '5310 S PLEASANT VALLEY RD',
      YelpCategories: 'Mexican',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 14
    },
    {
      Name: 'Los Huaraches Restaurant',
      Street: '1628 E CESAR CHAVEZ ST',
      YelpCategories: 'Mexican',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 21
    },
    {
      Name: 'Austin Country Club - Pool Snack Bar',
      Street: '4408 LONG CHAMP DR',
      YelpCategories: 'Country Clubs',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 16
    },
    {
      Name: 'CC Zing',
      Street: '12129 N FM 620 RD',
      YelpCategories: 'Weight Loss Centers',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Mangieri\'s Pizza Cafe',
      Street: '5900 W SLAUGHTER LN',
      YelpCategories: 'Italian,Pizza',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 198
    },
    {
      Name: 'Baskin Robbins',
      Street: '9911 BRODIE LN',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 20
    },
    {
      Name: 'Cake and Spoon Baking Co, The',
      Street: '3008 GONZALES ST',
      YelpCategories: 'Bakeries',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 48
    },
    {
      Name: 'Fairfield Food Store',
      Street: '8538 RESEARCH BLVD',
      YelpCategories: 'Convenience Stores,Gas Stations',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Silver Grill Cafe',
      Street: '4005 W PARMER LN',
      YelpCategories: 'American (Traditional),Barbeque',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 275
    },
    {
      Name: 'BC - Maudie\'s Hill Country LLC',
      Street: '12506 SHOPS PKWY',
      YelpCategories: 'Tex-Mex,Mexican,Bars',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 242
    },
    {
      Name: 'Fuddruckers',
      Street: '11023 PECAN PARK BLVD',
      YelpCategories: 'Burgers,American (Traditional)',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 93
    },
    {
      Name: 'Bouldin Creek Coffee House Cafe',
      Street: '1900 S 1ST ST',
      YelpCategories: 'Vegetarian,Cafes,Vegan',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 1933
    },
    {
      Name: 'Pronto Food Mart',
      Street: '4301 DUVAL ST',
      YelpCategories: 'Beer, Wine & Spirits,Convenience Stores',
      Score: 71,
      YelpRaiting: 5,
      YelpReviewCount: 31
    },
    {
      Name: 'Papalote Taco House',
      Street: '2803 S LAMAR BLVD',
      YelpCategories: 'Mexican',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 479
    },
    {
      Name: '7-Eleven',
      Street: '1403 S LAMAR BLVD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 6
    },
    {
      Name: 'Meadows Coffee House',
      Street: '3001 S CONGRESS AVE',
      YelpCategories: 'Coffee & Tea',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 2
    },
    {
      Name: 'Alonti',
      Street: '701 S LAMAR BLVD',
      YelpCategories: 'Caterers',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 12
    },
    {
      Name: 'Vince Young Steakhouse',
      Street: '301 SAN JACINTO BLVD',
      YelpCategories: 'Steakhouses,American (New),Seafood',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 386
    },
    {
      Name: 'Full English',
      Street: '2000 SOUTHERN OAKS DR',
      YelpCategories: 'British,Tea Rooms,Breakfast & Brunch',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 260
    },
    {
      Name: 'Anderson Mill Pub',
      Street: '10401 ANDERSON MILL RD',
      YelpCategories: 'Dive Bars',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 28
    },
    {
      Name: 'Bombay Bistro',
      Street: '4200 S LAMAR BLVD',
      YelpCategories: 'Indian,Bars,Buffets',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 397
    },
    {
      Name: 'Eastside Pies Too!',
      Street: '5312 AIRPORT BLVD',
      YelpCategories: 'Pizza',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 197
    },
    {
      Name: 'Barchi Japanese Restaurant',
      Street: '206 COLORADO ST',
      YelpCategories: 'Sushi Bars,Bars,Japanese',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 595
    },
    {
      Name: 'Congress Austin',
      Street: '200 CONGRESS AVE',
      YelpCategories: 'American (New)',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 146
    },
    {
      Name: '512 on 6th, The',
      Street: '408 E 6TH ST',
      YelpCategories: 'Dive Bars',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 24
    },
    {
      Name: 'Backspin Bar & Grill',
      Street: '5000 W SLAUGHTER LN',
      YelpCategories: 'Sports Bars,American (Traditional)',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 142
    },
    {
      Name: 'Cocinita La Dona',
      Street: '1710 MONTOPOLIS DR',
      YelpCategories: 'Imported Food',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'AFC Sushi@St. Edwards University',
      Street: '3001 S CONGRESS AVE',
      YelpCategories: 'Colleges & Universities',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 31
    },
    {
      Name: 'Hopdoddy Burger Bar',
      Street: '1400 S CONGRESS AVE',
      YelpCategories: 'Burgers,American (Traditional)',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 4357
    },
    {
      Name: 'Heart Hospital of Austin',
      Street: '3801 N LAMAR BLVD',
      YelpCategories: 'Hospitals,Cardiologists',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 58
    },
    {
      Name: 'Thirsty Nickel',
      Street: '325 E 6TH ST',
      YelpCategories: 'Dance Clubs,Music Venues',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 88
    },
    {
      Name: 'Rooftop on Sixth, The',
      Street: '403 E 6TH ST',
      YelpCategories: 'Bars',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 67
    },
    {
      Name: 'Taqueria Los Altos',
      Street: '3301 N IH',
      YelpCategories: 'Mexican',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 69
    },
    {
      Name: 'Tortilleria Rio Grande',
      Street: '500 W WILLIAM CANNON DR',
      YelpCategories: 'Mexican',
      Score: 76,
      YelpRaiting: 4,
      YelpReviewCount: 34
    },
    {
      Name: 'W Hotel Austin - Concessionaire of Alcohol',
      Street: '200 LAVACA ST',
      YelpCategories: 'Lounges',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 100
    },
    {
      Name: 'Buckner Villas',
      Street: '11110 TOM ADAMS DR',
      YelpCategories: 'Retirement Homes',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Panda Express #1939',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Chinese,Fast Food',
      Score: 95,
      YelpRaiting: 1,
      YelpReviewCount: 3
    },
    {
      Name: 'IPIC-GOLD CLASS ENTERTAINMENT LLC',
      Street: '3225 AMY DONOVAN PLZ',
      YelpCategories: 'Cinema',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 549
    },
    {
      Name: 'Maki Toki',
      Street: '1910 W BRAKER LN',
      YelpCategories: 'Sushi Bars,Japanese,Bars',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 169
    },
    {
      Name: 'Soup Peddler Lamar',
      Street: '2801 S LAMAR BLVD',
      YelpCategories: 'Juice Bars & Smoothies,Sandwiches,Soup',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 248
    },
    {
      Name: 'Amy\'s Ice Creams',
      Street: '2901 S LAMAR BLVD',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 63
    },
    {
      Name: 'La Patisserie',
      Street: '602 W ANNIE ST',
      YelpCategories: 'Desserts,Bakeries,Coffee & Tea',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 371
    },
    {
      Name: 'La Escondida #3',
      Street: '1333 W BEN WHITE BLVD',
      YelpCategories: 'Mexican',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 45
    },
    {
      Name: 'Bawarchi Austin',
      Street: '7318 MC NEIL DR',
      YelpCategories: 'Indian',
      Score: 73,
      YelpRaiting: 3,
      YelpReviewCount: 52
    },
    {
      Name: 'Franklin Barbecue',
      Street: '900 E 11TH ST',
      YelpCategories: 'Barbeque,Sandwiches',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 4200
    },
    {
      Name: 'El Buen Samaritano Episcopal Mission',
      Street: '7000 WOODHUE DR',
      YelpCategories: 'Community Service/Non-Profit',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 6
    },
    {
      Name: 'Dobie Mall - Oma\'s Kitchen',
      Street: '2025 GUADALUPE ST',
      YelpCategories: 'Korean',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 57
    },
    {
      Name: 'Backspace, The',
      Street: '507 SAN JACINTO BLVD',
      YelpCategories: 'Italian,Pizza',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 615
    },
    {
      Name: 'Royal Blue Grocery',
      Street: '609 CONGRESS AVE',
      YelpCategories: 'Grocery,Beer, Wine & Spirits,Delis',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 159
    },
    {
      Name: 'Peoples Pharmacy #4',
      Street: '13860 N US 183 HWY',
      YelpCategories: 'Drugstores,Health & Medical',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 41
    },
    {
      Name: 'Baker St. The Corners, LLC',
      Street: '3003 S LAMAR BLVD',
      YelpCategories: 'British,Pubs',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 258
    },
    {
      Name: 'The Coffee Bean & Tea Leaf',
      Street: '13376 N US 183 HWY',
      YelpCategories: 'Coffee & Tea,Breakfast & Brunch,Sandwiches',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 111
    },
    {
      Name: 'Big Daddy\'s Burgers & Bar',
      Street: '9070 RESEARCH BLVD',
      YelpCategories: 'Burgers,Bars,American (Traditional)',
      Score: 76,
      YelpRaiting: 4,
      YelpReviewCount: 366
    },
    {
      Name: 'Auguste Escoffier School of Culinary Arts',
      Street: '6020 DILLARD CIR',
      YelpCategories: 'Cooking Schools',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 7
    },
    {
      Name: 'Hot Mama\'s Cafe',
      Street: '2401 E 6TH ST',
      YelpCategories: 'Caterers',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 121
    },
    {
      Name: 'Bluebonnet Food Mart',
      Street: '1701 BLUEBONNET LN',
      YelpCategories: 'Grocery',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 24
    },
    {
      Name: 'The Volstead Lounge',
      Street: '1500 E 6TH ST',
      YelpCategories: 'Dance Clubs,Dive Bars,Cocktail Bars',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 83
    },
    {
      Name: 'Morelia Mexican Grill',
      Street: '9900 W PARMER LN',
      YelpCategories: 'Mexican,Sports Bars',
      Score: 74,
      YelpRaiting: 3,
      YelpReviewCount: 220
    },
    {
      Name: 'Violet Crown Social Club',
      Street: '1111 E 6TH ST',
      YelpCategories: 'Lounges,Dive Bars',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 174
    },
    {
      Name: 'Buffet King',
      Street: '5451 N IH',
      YelpCategories: 'Chinese,Buffets',
      Score: 79,
      YelpRaiting: 3,
      YelpReviewCount: 171
    },
    {
      Name: 'Town and Country Optimist',
      Street: '9100 MEADOWHEATH DR',
      YelpCategories: 'Sports Clubs',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Torchy\'s Tacos',
      Street: '3005 S LAMAR BLVD',
      YelpCategories: 'Breakfast & Brunch,Tacos',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 423
    },
    {
      Name: 'Trophy Club, The',
      Street: '308 1 2 E 6TH ST',
      YelpCategories: 'Bars',
      Score: 83,
      YelpRaiting: 3,
      YelpReviewCount: 57
    },
    {
      Name: 'Chuy\'s Bakery',
      Street: '801 E WILLIAM CANNON DR',
      YelpCategories: 'Bakeries',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'Barile Restaurant',
      Street: '300 S LAMAR BLVD',
      YelpCategories: 'Italian,Wine Bars,Cocktail Bars',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 14
    },
    {
      Name: 'Progressive Insurance',
      Street: '7301 METRO CENTER DR',
      YelpCategories: 'Insurance',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'French Quarter Grille, The',
      Street: '13000 N IH',
      YelpCategories: 'American (Traditional),Cajun/Creole,Seafood',
      Score: 85,
      YelpRaiting: 5,
      YelpReviewCount: 542
    },
    {
      Name: 'BJ\'s Restaurant & Brewhouse',
      Street: '10515 N MOPAC EXPY',
      YelpCategories: 'American (New),Breweries,Pizza',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 411
    },
    {
      Name: 'Yogurtland, Austin',
      Street: '2525 W ANDERSON LN',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 86,
      YelpRaiting: 5,
      YelpReviewCount: 155
    },
    {
      Name: 'Alfred\'s Catering',
      Street: '5706 MANOR RD',
      YelpCategories: 'Event Planning & Services',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 7
    },
    {
      Name: 'Mediterranean Chef, The',
      Street: '5908 AURORA DR',
      YelpCategories: 'Mediterranean',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 156
    },
    {
      Name: 'Mooseknuckle Pub',
      Street: '406 E 6TH ST',
      YelpCategories: 'Sports Bars',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 64
    },
    {
      Name: 'Sahara,The',
      Street: '1413 WEBBERVILLE RD',
      YelpCategories: 'Lounges,Music Venues',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 58
    },
    {
      Name: 'RW - Amy\'s Ice Cream',
      Street: '2805 BEE CAVES RD',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 31
    },
    {
      Name: 'Lavaca Teppan',
      Street: '1712 LAVACA ST',
      YelpCategories: 'Japanese',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 166
    },
    {
      Name: 'Souper Salad',
      Street: '12901 N IH',
      YelpCategories: 'American (Traditional),Buffets',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 96
    },
    {
      Name: 'Burnet Express',
      Street: '8400 BURNET RD',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'C Mart #2',
      Street: '7811 S 1ST ST',
      YelpCategories: 'Convenience Stores',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'La Casita Mexican Restaurant',
      Street: '1519 W ANDERSON LN',
      YelpCategories: 'Mexican',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 138
    },
    {
      Name: 'Randall\'s Food Stores #2471 - Retail Food',
      Street: '2727 EXPOSITION BLVD',
      YelpCategories: 'Grocery,Drugstores',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 12
    },
    {
      Name: 'Dominos Pizza',
      Street: '719 W WILLIAM CANNON DR',
      YelpCategories: 'Pizza,Chicken Wings,Sandwiches',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 41
    },
    {
      Name: 'Mikado Ryotei',
      Street: '9033 RESEARCH BLVD',
      YelpCategories: 'Sushi Bars,Japanese,Tapas Bars',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 430
    },
    {
      Name: 'Masala Wok',
      Street: '10515 N MOPAC EXPY',
      YelpCategories: 'Indian,Asian Fusion,Chinese',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 288
    },
    {
      Name: 'Subway #51421',
      Street: '10900 LAKELINE MALL DR',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 12
    },
    {
      Name: 'Jimmy John\'s #1008',
      Street: '610 E STASSNEY LN',
      YelpCategories: 'Sandwiches,Delis,Fast Food',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 61
    },
    {
      Name: 'Lone Star Kolaches',
      Street: '3601 W WILLIAM CANNON DR',
      YelpCategories: 'Bakeries',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 53
    },
    {
      Name: 'Donut Hole, The',
      Street: '6863 W US 290 HWY',
      YelpCategories: 'Donuts',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 37
    },
    {
      Name: 'Sam\'s Club #8259 (Bakery)',
      Street: '9900 S IH',
      YelpCategories: 'Department Stores,Wholesale Stores,Grocery',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 31
    },
    {
      Name: 'Sam\'s Club (Restaurant)',
      Street: '9900 S IH',
      YelpCategories: 'Department Stores,Wholesale Stores,Grocery',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 31
    },
    {
      Name: 'MTM Indian Foods',
      Street: '9225 W PARMER LN',
      YelpCategories: 'Grocery',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 9
    },
    {
      Name: '1-Stop Food Store',
      Street: '5101 AIRPORT BLVD',
      YelpCategories: 'Convenience Stores',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Jack in the Box #904',
      Street: '6133 E BEN WHITE BLVD',
      YelpCategories: 'Fast Food',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 21
    },
    {
      Name: 'Edible Arrangements',
      Street: '507 PRESSLER ST',
      YelpCategories: 'Gift Shops,Chocolatiers & Shops',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 20
    },
    {
      Name: 'Creek Side Cafe',
      Street: '8310 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'American (New)',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Sprouts Farmers Market-Meat,Deli,Bakery',
      Street: '4006 S LAMAR BLVD',
      YelpCategories: 'Grocery,Farmers Market,Health Markets',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 77
    },
    {
      Name: 'Phonatic Vietnamese Cuisine',
      Street: '2525 W ANDERSON LN',
      YelpCategories: 'Vietnamese',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 410
    },
    {
      Name: 'LW - Lakeway Market',
      Street: '2114 LAKEWAY BLVD',
      YelpCategories: 'Beer Bar',
      Score: 74,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Cenote',
      Street: '1010 E CESAR CHAVEZ ST',
      YelpCategories: 'Coffee & Tea,Cafes,American (New)',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 646
    },
    {
      Name: 'Stepping Stone School XVII',
      Street: '1007 E 40TH ST',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Micheladas',
      Street: '333 E 2ND ST',
      YelpCategories: 'Mexican,Bars',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 181
    },
    {
      Name: 'Lenoir Restaurant',
      Street: '1807 S 1ST ST',
      YelpCategories: 'American (New),Bars',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 393
    },
    {
      Name: 'BC - All Star Burger',
      Street: '12921 HILL COUNTRY BLVD',
      YelpCategories: 'Burgers',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 274
    },
    {
      Name: 'Duy Vietnamese Restaurant',
      Street: '10901 N LAMAR BLVD',
      YelpCategories: 'Vietnamese',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 141
    },
    {
      Name: 'Manna Korean Restaurant',
      Street: '6808 N LAMAR BLVD',
      YelpCategories: 'Korean',
      Score: 72,
      YelpRaiting: 4,
      YelpReviewCount: 182
    },
    {
      Name: 'Starbucks Coffee #15747',
      Street: '11521 N FM 620 RD',
      YelpCategories: 'Coffee & Tea',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 43
    },
    {
      Name: 'Fricano\'s Deli & Catering',
      Street: '2405 NUECES ST',
      YelpCategories: 'Delis,Sandwiches',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 534
    },
    {
      Name: 'Stiles Switch BBQ & Brew',
      Street: '6610 N LAMAR BLVD',
      YelpCategories: 'Barbeque',
      Score: 76,
      YelpRaiting: 4,
      YelpReviewCount: 1366
    },
    {
      Name: 'Pflugerville Donuts',
      Street: '1700 GRAND AVENUE PKWY',
      YelpCategories: 'Donuts,Breakfast & Brunch',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 20
    },
    {
      Name: 'Hopfields',
      Street: '3110 GUADALUPE ST',
      YelpCategories: 'Pubs,French,Gastropubs',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 422
    },
    {
      Name: 'Hana World Market - Supermarket',
      Street: '1700 W PARMER LN',
      YelpCategories: 'Food Court,International Grocery',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 147
    },
    {
      Name: 'Sam\'s Club #8259-Permits',
      Street: '9900 S IH',
      YelpCategories: 'Department Stores,Wholesale Stores,Grocery',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 31
    },
    {
      Name: 'Yuyo Pervano',
      Street: '1900 MANOR RD',
      YelpCategories: 'Peruvian,Seafood',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 99
    },
    {
      Name: 'Swift\'s Attic',
      Street: '315 CONGRESS AVE',
      YelpCategories: 'American (New),Gastropubs,Tapas Bars',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 954
    },
    {
      Name: 'KP Indian Grocery',
      Street: '1212 W PARMER LN',
      YelpCategories: 'Grocery',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 10
    },
    {
      Name: 'Elizabeth Street Cafe',
      Street: '1501 S 1ST ST',
      YelpCategories: 'Vietnamese,French,Coffee & Tea',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 1222
    },
    {
      Name: 'Copper Restaurant & Dessert Lounge',
      Street: '3401 ESPERANZA XING',
      YelpCategories: 'Desserts,American (New),Breakfast & Brunch',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 412
    },
    {
      Name: 'The Magellan International School',
      Street: '7938 GREAT NORTHERN BLVD',
      YelpCategories: 'Elementary Schools,Preschools',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 21
    },
    {
      Name: 'Cafe Malta',
      Street: '3421 W WILLIAM CANNON DR',
      YelpCategories: 'Mediterranean',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 439
    },
    {
      Name: 'Fresh Plus',
      Street: '2917 W ANDERSON LN',
      YelpCategories: 'Grocery',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 58
    },
    {
      Name: 'Asiana Indian Cuisine',
      Street: '801 E WILLIAM CANNON DR',
      YelpCategories: 'Indian',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 621
    },
    {
      Name: 'Alamo Drafthouse South Mopac',
      Street: '5701 W SLAUGHTER LN',
      YelpCategories: 'Cinema',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 478
    },
    {
      Name: 'Karma Lounge',
      Street: '105 E 5TH ST',
      YelpCategories: 'Lounges,Dance Clubs,Cocktail Bars',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'Javelina',
      Street: '69 RAINEY ST',
      YelpCategories: 'American (Traditional),Pubs',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 279
    },
    {
      Name: 'Whataburger #1022',
      Street: '8300 N FM 620 RD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 27
    },
    {
      Name: 'Austin Cake Ball LLC',
      Street: '5310 BURNET RD',
      YelpCategories: 'Desserts,Bakeries,Chocolatiers & Shops',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 134
    },
    {
      Name: 'Couch Potato Austin LLC',
      Street: '900 OLD KOENIG LN',
      YelpCategories: 'Food Delivery Services',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 58
    },
    {
      Name: 'Longhorn Steakhouse #5396',
      Street: '9900 S IH',
      YelpCategories: 'Steakhouses,American (Traditional),Barbeque',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 114
    },
    {
      Name: 'C-Mart Icehouse',
      Street: '1308 W KOENIG LN',
      YelpCategories: 'Convenience Stores',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Papa John\'s Pizza # 1015',
      Street: '2030 E OLTORF ST',
      YelpCategories: 'Pizza',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 31
    },
    {
      Name: 'Dollar General Store # 12797',
      Street: '5000 SPRINGDALE RD',
      YelpCategories: 'Discount Store',
      Score: 96,
      YelpRaiting: 1,
      YelpReviewCount: 2
    },
    {
      Name: 'Tamale House',
      Street: '1707 E 6TH ST',
      YelpCategories: 'Mexican,Breakfast & Brunch,Tex-Mex',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 339
    },
    {
      Name: 'Bruegger\'s Bagels',
      Street: '3267 BEE CAVES RD',
      YelpCategories: 'Sandwiches,Breakfast & Brunch,Bagels',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 86
    },
    {
      Name: 'Hao - Q Asian Kitchen',
      Street: '3742 FAR WEST BLVD',
      YelpCategories: 'Chinese,Vietnamese',
      Score: 74,
      YelpRaiting: 4,
      YelpReviewCount: 193
    },
    {
      Name: 'Flores Mexican Restaurant',
      Street: '8300 N FM 620 RD',
      YelpCategories: 'Mexican,Tex-Mex',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 202
    },
    {
      Name: 'WL - Blue Dahlia Bistro',
      Street: '3663 BEE CAVES RD',
      YelpCategories: 'Cafes,French,Coffee & Tea',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 187
    },
    {
      Name: 'Fresa\'s Chicken al Carbon',
      Street: '915 N LAMAR BLVD',
      YelpCategories: 'Mexican',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 355
    },
    {
      Name: 'Coffee Bean & Tea Leaf, The',
      Street: '5145 N FM 620 RD',
      YelpCategories: 'Coffee & Tea,Breakfast & Brunch,Sandwiches',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 37
    },
    {
      Name: 'Ann\'s Kitchen Cakes',
      Street: '8650 SPICEWOOD SPRINGS RD',
      YelpCategories: 'Bakeries,Desserts',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 98
    },
    {
      Name: 'Blue Baker',
      Street: '10000 RESEARCH BLVD',
      YelpCategories: 'Cafes,Bakeries,Pizza',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 298
    },
    {
      Name: 'BC - Whole Foods Market - Bakery',
      Street: '12601 HILL COUNTRY BLVD',
      YelpCategories: 'Grocery,Health Markets,Coffee & Tea',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 78
    },
    {
      Name: 'BC - Whole Foods Market - Specialty',
      Street: '12601 HILL COUNTRY BLVD',
      YelpCategories: 'Grocery,Health Markets,Coffee & Tea',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 78
    },
    {
      Name: 'BC - Whole Foods Market - Seafood',
      Street: '12601 HILL COUNTRY BLVD',
      YelpCategories: 'Grocery,Health Markets,Coffee & Tea',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 78
    },
    {
      Name: 'BC - Whole Foods Market - Wine Bar',
      Street: '12601 HILL COUNTRY BLVD',
      YelpCategories: 'Grocery,Health Markets,Coffee & Tea',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 78
    },
    {
      Name: 'BC - Whole Foods Market - Produce',
      Street: '12601 HILL COUNTRY BLVD',
      YelpCategories: 'Grocery,Health Markets,Coffee & Tea',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 78
    },
    {
      Name: 'BC - Whole Foods Market - Coffee Bar',
      Street: '12601 HILL COUNTRY BLVD',
      YelpCategories: 'Grocery,Health Markets,Coffee & Tea',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 78
    },
    {
      Name: 'BC - Whole Foods Market - Retail',
      Street: '12601 HILL COUNTRY BLVD',
      YelpCategories: 'Grocery,Health Markets,Coffee & Tea',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 78
    },
    {
      Name: 'Salty Sow',
      Street: '1917 MANOR RD',
      YelpCategories: 'American (Traditional),Gastropubs',
      Score: 81,
      YelpRaiting: 5,
      YelpReviewCount: 2328
    },
    {
      Name: 'Austin Diner',
      Street: '5222 BURNET RD',
      YelpCategories: 'Diners',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 272
    },
    {
      Name: '7-Eleven #24397',
      Street: '5901 BURNET RD',
      YelpCategories: 'Convenience Stores,Coffee & Tea',
      Score: 77,
      YelpRaiting: 4,
      YelpReviewCount: 9
    },
    {
      Name: 'Counter Culture',
      Street: '2337 E CESAR CHAVEZ ST',
      YelpCategories: 'Vegan',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 665
    },
    {
      Name: 'SV - Longhorn Steakhouse #5423',
      Street: '4809 W US 290 HWY',
      YelpCategories: 'Steakhouses,American (Traditional),Barbeque',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 130
    },
    {
      Name: 'Central Texas Rehabilitation Hospital',
      Street: '700 W 45TH ST',
      YelpCategories: 'Occupational Therapy,Physical Therapy,Speech Therapists',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 17
    },
    {
      Name: 'Juice Land Burnet',
      Street: '7329 BURNET RD',
      YelpCategories: 'Juice Bars & Smoothies,Vegan,Vegetarian',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 152
    },
    {
      Name: 'Circle K Store #2704690',
      Street: '1420 E ANDERSON LN',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 4
    },
    {
      Name: 'Circle K Store #2704677',
      Street: '1601 E ST ELMO RD',
      YelpCategories: 'Convenience Stores,Gas Stations',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Con\'olio Oils & Vinegars',
      Street: '215 LAVACA ST',
      YelpCategories: 'Specialty Food',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 27
    },
    {
      Name: 'Circle K Store #2704684',
      Street: '6412 W US 290 HWY',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 81,
      YelpRaiting: 2,
      YelpReviewCount: 8
    },
    {
      Name: '7-Eleven Convenience Store #35801H',
      Street: '9704 GILES LN',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 95,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Circle K Store #2704682',
      Street: '6500 S US 183 HWY',
      YelpCategories: 'Convenience Stores,Gas Stations',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Circle K Store #2704675',
      Street: '2453 SH',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 93,
      YelpRaiting: 2,
      YelpReviewCount: 8
    },
    {
      Name: '7-Eleven Convenience Store #35808H',
      Street: '863 AIRPORT BLVD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Whole Foods Market - Prepared Foods',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Grocery',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 148
    },
    {
      Name: 'Whole Foods Market - Bakery',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Grocery',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 148
    },
    {
      Name: 'Whole Foods Market - Grocery',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Grocery',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 148
    },
    {
      Name: 'Edge of Town, The',
      Street: '15601 VISION DR',
      YelpCategories: 'Pubs,American (New),Lounges',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 13
    },
    {
      Name: 'Lotus Hunan Chinese Restaurant',
      Street: '3201 BEE CAVES RD',
      YelpCategories: 'Chinese,Seafood,Soup',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 139
    },
    {
      Name: 'Russian Bistro NaZdorovye',
      Street: '307 E 5TH ST',
      YelpCategories: 'Russian,Middle Eastern,Bars',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 494
    },
    {
      Name: 'Smokey Mo\'s BBQ',
      Street: '6001 W PARMER LN',
      YelpCategories: 'Barbeque',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 85
    },
    {
      Name: 'Econo Lodge',
      Street: '9100 BURNET RD',
      YelpCategories: 'Hotels',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 19
    },
    {
      Name: 'Denny\'s #7356',
      Street: '1601 N IH',
      YelpCategories: 'American (Traditional),Breakfast & Brunch,Diners',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 80
    },
    {
      Name: 'Sleep Inn & Suites',
      Street: '14004 OWEN TECH BLVD',
      YelpCategories: 'Hotels',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 23
    },
    {
      Name: 'Jack in the Box #865',
      Street: '6419 AIRPORT BLVD',
      YelpCategories: 'Fast Food',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 23
    },
    {
      Name: 'Jack in the Box #823',
      Street: '1801 W BEN WHITE BLVD',
      YelpCategories: 'Fast Food',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 13
    },
    {
      Name: 'E-Z Stop Groceries & Gas / Conoco',
      Street: '5029 MANOR RD',
      YelpCategories: 'Gas Stations,Grocery',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Jack in the Box #848',
      Street: '8630 N LAMAR BLVD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 73,
      YelpRaiting: 2,
      YelpReviewCount: 9
    },
    {
      Name: 'Jack in the Box #906',
      Street: '7404 MC NEIL DR',
      YelpCategories: 'Fast Food',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 48
    },
    {
      Name: 'Jack in the Box #905',
      Street: '8706 E US 290 HWY',
      YelpCategories: 'Burgers,Fast Food,Breakfast & Brunch',
      Score: 90,
      YelpRaiting: 2,
      YelpReviewCount: 12
    },
    {
      Name: 'Jack in the Box #869',
      Street: '1000 E 41ST ST',
      YelpCategories: 'Fast Food',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 14
    },
    {
      Name: 'Angel Donuts & Treats, LLC',
      Street: '8300 N FM 620 RD',
      YelpCategories: 'Bakeries,Bubble Tea,Donuts',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 184
    },
    {
      Name: 'Jack in the Box #912',
      Street: '6540 ED BLUESTEIN BLVD',
      YelpCategories: 'Fast Food',
      Score: 82,
      YelpRaiting: 2,
      YelpReviewCount: 13
    },
    {
      Name: 'LW - Thai Spice',
      Street: '2121 LOHMANS CROSSING RD',
      YelpCategories: 'Thai',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 142
    },
    {
      Name: 'Rio',
      Street: '601 RIO GRANDE ST',
      YelpCategories: 'Dance Clubs,Lounges,Venues & Event Spaces',
      Score: 87,
      YelpRaiting: 2,
      YelpReviewCount: 95
    },
    {
      Name: 'Bluebonnet School of Canyon Creek',
      Street: '10321 BOULDER LN',
      YelpCategories: 'Child Care & Day Care,Preschools',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 14
    },
    {
      Name: 'BC - Cuisine Royale by Mam',
      Street: '3929 MARKET ST',
      YelpCategories: 'Thai',
      Score: 74,
      YelpRaiting: 4,
      YelpReviewCount: 194
    },
    {
      Name: 'Faith Lutheran Church',
      Street: '6600 WOODROW AVE',
      YelpCategories: 'Churches',
      Score: 97,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Banger\'s Sausage House and Beer Garden',
      Street: '79 RAINEY ST',
      YelpCategories: 'Beer Gardens,Breakfast & Brunch,Wine Bars',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 1984
    },
    {
      Name: 'Bob\'s Steak and Chop House',
      Street: '301 LAVACA ST',
      YelpCategories: 'Steakhouses,Seafood',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 315
    },
    {
      Name: 'TCBY Frozen Yogurt',
      Street: '5701 W SLAUGHTER LN',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 28
    },
    {
      Name: 'Love Goat',
      Street: '2716 GUADALUPE ST',
      YelpCategories: 'Bars',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 25
    },
    {
      Name: 'Mr. Catfish and More',
      Street: '1144 AIRPORT BLVD',
      YelpCategories: 'Seafood',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 29
    },
    {
      Name: 'Sunflower Farmers Markets LLC',
      Street: '6920 MANCHACA RD',
      YelpCategories: 'Grocery,Farmers Market,Health Markets',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 203
    },
    {
      Name: 'East Side Pies III',
      Street: '1809 W ANDERSON LN',
      YelpCategories: 'Pizza',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 141
    },
    {
      Name: 'Athena Montessori Academy',
      Street: '1503 MORGAN LN',
      YelpCategories: 'Montessori Schools',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 11
    },
    {
      Name: 'Zachary Scott Theatre Center',
      Street: '202 S LAMAR BLVD',
      YelpCategories: 'Performing Arts,Venues & Event Spaces',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 66
    },
    {
      Name: 'El Secreto De La Abuela',
      Street: '817 AIRPORT BLVD',
      YelpCategories: 'Mexican,Tex-Mex',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 53
    },
    {
      Name: 'Barley Bean',
      Street: '2222 RIO GRANDE ST',
      YelpCategories: 'Coffee & Tea,Bakeries,Coffee Roasteries',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 72
    },
    {
      Name: 'Snap Kitchen',
      Street: '10001 RESEARCH BLVD',
      YelpCategories: 'Gluten-Free,Health Markets',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 69
    },
    {
      Name: 'Austin Daily Press',
      Street: '1900 E MARTIN LUTHER KING JR BLVD',
      YelpCategories: 'Delis,Sandwiches,Comfort Food',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 229
    },
    {
      Name: 'Michi Ramen 2',
      Street: '6519 N LAMAR BLVD',
      YelpCategories: 'Ramen,Asian Fusion',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 1157
    },
    {
      Name: 'Pinthouse Pizza',
      Street: '4729 BURNET RD',
      YelpCategories: 'Pizza,Brewpubs',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 866
    },
    {
      Name: 'The Steeping Room',
      Street: '4400 N LAMAR BLVD',
      YelpCategories: 'Breakfast & Brunch,Tea Rooms',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 263
    },
    {
      Name: 'Lit Lounge',
      Street: '215 E 6TH ST',
      YelpCategories: 'Dance Clubs,Lounges,Asian Fusion',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 24
    },
    {
      Name: 'Palmer Events Center',
      Street: '900 BARTON SPRINGS RD',
      YelpCategories: 'Venues & Event Spaces',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 38
    },
    {
      Name: 'Austin Convention Center - N. Kitchen',
      Street: '500 E CESAR CHAVEZ ST',
      YelpCategories: 'Venues & Event Spaces',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 75
    },
    {
      Name: 'Austin Convention Center - Concession',
      Street: '500 E CESAR CHAVEZ ST',
      YelpCategories: 'Venues & Event Spaces',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 75
    },
    {
      Name: '360 Pizza, LLC',
      Street: '6203 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Pizza,Desserts,Sandwiches',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 203
    },
    {
      Name: 'Soto Restaurant',
      Street: '11066 PECAN PARK BLVD',
      YelpCategories: 'Japanese,Sushi Bars',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 709
    },
    {
      Name: 'Buzz Mill, The',
      Street: '1505 TOWN CREEK DR',
      YelpCategories: 'Coffee & Tea,Cheesesteaks,Breakfast & Brunch',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 395
    },
    {
      Name: 'Nik\'s Italian Kitchen & Bar',
      Street: '7900 N FM 620 RD',
      YelpCategories: 'Italian,Bars,American (New)',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 205
    },
    {
      Name: 'Burger King',
      Street: '3001 MONTOPOLIS DR',
      YelpCategories: 'Fast Food,Burgers',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 1
    },
    {
      Name: 'Colleen\'s Kitchen',
      Street: '1911 ALDRICH ST',
      YelpCategories: 'Southern,American (New),Cocktail Bars',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 185
    },
    {
      Name: 'Gourdough\'s Public House',
      Street: '2700 S LAMAR BLVD',
      YelpCategories: 'Pubs,American (Traditional)',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 1184
    },
    {
      Name: 'Primizie Catering',
      Street: '4601 SOUTHWEST PKWY',
      YelpCategories: 'Caterers',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 43
    },
    {
      Name: 'Texas Club Bar & Grill',
      Street: '4914 BURLESON RD',
      YelpCategories: 'Bars,Dance Clubs,Karaoke',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Austin Roller Rink',
      Street: '11600 MANCHACA RD',
      YelpCategories: 'Skating Rinks,Venues & Event Spaces,Arcades',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 49
    },
    {
      Name: 'River City Market',
      Street: '2209 S CONGRESS AVE',
      YelpCategories: 'Beer, Wine & Spirits,Grocery,Specialty Food',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 84
    },
    {
      Name: 'CU 29 Cocktail Bar',
      Street: '720 BRAZOS ST',
      YelpCategories: 'Lounges,Cocktail Bars',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 220
    },
    {
      Name: 'Brio Tuscan Grille',
      Street: '10000 RESEARCH BLVD',
      YelpCategories: 'Italian,Breakfast & Brunch',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 337
    },
    {
      Name: 'Aguilera\'s Mexican Restaurant',
      Street: '7210 CAMERON RD',
      YelpCategories: 'Mexican',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 23
    },
    {
      Name: 'Yo-Way Frozen Yogurt',
      Street: '4301 W WILLIAM CANNON DR',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 73
    },
    {
      Name: 'Las Cimas Deli (Whole Foods Market)',
      Street: '807 LAS CIMAS PKWY',
      YelpCategories: 'Fast Food,Cafes',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 8
    },
    {
      Name: 'Caffe Aragon',
      Street: '914 CONGRESS AVE',
      YelpCategories: 'Cafes,Italian,Sandwiches',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 17
    },
    {
      Name: 'Los Jaliscienses #2',
      Street: '6201 E US 290 HWY',
      YelpCategories: 'Mexican,Tex-Mex',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 125
    },
    {
      Name: 'Applebee\'s',
      Street: '11013 LAKELINE MALL DR',
      YelpCategories: 'American (Traditional),Sports Bars,Burgers',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 86
    },
    {
      Name: 'Applebee\'s',
      Street: '6315 S IH',
      YelpCategories: 'American (Traditional),Sports Bars,Burgers',
      Score: 93,
      YelpRaiting: 2,
      YelpReviewCount: 70
    },
    {
      Name: 'Coffee Bean & Tea Leaf, The',
      Street: '5030 W US 290 HWY',
      YelpCategories: 'Coffee & Tea,Sandwiches,Breakfast & Brunch',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 48
    },
    {
      Name: '7-Eleven 36559H',
      Street: '3636 N FM 620 RD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Hana World Market - Foodcourt',
      Street: '1700 W PARMER LN',
      YelpCategories: 'Food Court,International Grocery',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 147
    },
    {
      Name: 'Atria at the Arboretum',
      Street: '9306 GREAT HILLS TRL',
      YelpCategories: 'Retirement Homes',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Water 2 Wine',
      Street: '3300 W ANDERSON LN',
      YelpCategories: 'Beer, Wine & Spirits',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 51
    },
    {
      Name: 'Papa Murphy\'s Pizza',
      Street: '2110 W SLAUGHTER LN',
      YelpCategories: 'Pizza',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 40
    },
    {
      Name: 'Josephine House',
      Street: '1601 WATERSTON AVE',
      YelpCategories: 'American (Traditional),Breakfast & Brunch',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 252
    },
    {
      Name: 'SV - Zoes Kitchen',
      Street: '5601 BRODIE LN',
      YelpCategories: 'Greek,Mediterranean,Sandwiches',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 186
    },
    {
      Name: 'Arlan\'s Market',
      Street: '1148 AIRPORT BLVD',
      YelpCategories: 'Grocery,Fruits & Veggies,Meat Shops',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 6
    },
    {
      Name: 'Hampton Inn',
      Street: '6401 W US 290 HWY',
      YelpCategories: 'Hotels',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 18
    },
    {
      Name: 'Growler Room',
      Street: '6800 BURNET RD',
      YelpCategories: 'Beer Bar',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 60
    },
    {
      Name: 'Arlan\'s Markets, Inc.',
      Street: '6305 CAMERON RD',
      YelpCategories: 'Grocery,Fruits & Veggies,Butcher',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'Infamous Brewing Co.',
      Street: '4602 WELETKA DR',
      YelpCategories: 'Breweries',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 72
    },
    {
      Name: 'Mosaic Market',
      Street: '4600 MUELLER BLVD',
      YelpCategories: 'Grocery,Beer, Wine & Spirits,Delis',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 23
    },
    {
      Name: 'Pizza Hut #7149',
      Street: '2919 MANCHACA RD',
      YelpCategories: 'Pizza,Italian,Chicken Wings',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 12
    },
    {
      Name: '7 Eleven # 32248',
      Street: '14016 N FM 620 RD',
      YelpCategories: 'Gas Stations,Convenience Stores,Coffee & Tea',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Subway',
      Street: '6001 W PARMER LN',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 15
    },
    {
      Name: 'Daruma',
      Street: '612 E 6TH ST',
      YelpCategories: 'Ramen',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 561
    },
    {
      Name: 'QMart Stassney',
      Street: '105 E STASSNEY LN',
      YelpCategories: 'Convenience Stores,Gas Stations',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 5
    },
    {
      Name: 'Hill\'s Cafe',
      Street: '4700 S CONGRESS AVE',
      YelpCategories: 'Burgers,American (Traditional)',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 361
    },
    {
      Name: 'Crema Bakery & Cafe',
      Street: '9001 BRODIE LN',
      YelpCategories: 'Coffee & Tea,Bakeries,Delis',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 312
    },
    {
      Name: 'Lucille',
      Street: '77 RAINEY ST',
      YelpCategories: 'Bars',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 209
    },
    {
      Name: 'Austin Ale House',
      Street: '301 W 6TH ST',
      YelpCategories: 'American (New),Breakfast & Brunch,Nightlife',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 279
    },
    {
      Name: 'TEJI\'s Indian Restaurant',
      Street: '2100 GUADALUPE ST',
      YelpCategories: 'Indian,Grocery',
      Score: 79,
      YelpRaiting: 3,
      YelpReviewCount: 373
    },
    {
      Name: 'Turf & Surf Po\'boy',
      Street: '405 LAVACA ST',
      YelpCategories: 'Cajun/Creole,Food Stands,Seafood',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 990
    },
    {
      Name: 'Nook, The',
      Street: '309 E 6TH ST',
      YelpCategories: 'Music Venues,Bars',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 33
    },
    {
      Name: 'TJ\'s Seafood',
      Street: '7110 CAMERON RD',
      YelpCategories: 'Seafood',
      Score: 79,
      YelpRaiting: 3,
      YelpReviewCount: 19
    },
    {
      Name: 'TopGolf USA Austin',
      Street: '2700 ESPERANZA XING',
      YelpCategories: 'Bars,American (New),Golf',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 614
    },
    {
      Name: 'Driskill Hotel - Lobby Bar',
      Street: '604 BRAZOS ST',
      YelpCategories: 'Lounges,American (New),Cocktail Bars',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 338
    },
    {
      Name: 'Driskill Hotel - Banquet Kitchen',
      Street: '604 BRAZOS ST',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 455
    },
    {
      Name: 'Driskill Hotel -1886 Cafe',
      Street: '604 BRAZOS ST',
      YelpCategories: 'American (Traditional),Bakeries,Breakfast & Brunch',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 400
    },
    {
      Name: 'Driskill Hotel - Bakery Kitchen',
      Street: '604 BRAZOS ST',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 455
    },
    {
      Name: 'University of Texas Golf Club Pool',
      Street: '2210 UNIVERSITY CLUB DR',
      YelpCategories: 'Golf',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Freebirds World Burrito',
      Street: '8300 N FM 620 RD',
      YelpCategories: 'Mexican,Tex-Mex',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 53
    },
    {
      Name: 'BC - Faraday\'s Kitchen Store',
      Street: '12918 SHOPS PKWY',
      YelpCategories: 'Cooking Schools,Kitchen Supplies,Appliances',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 18
    },
    {
      Name: 'Jeffrey\'s Restaurant and Bar',
      Street: '1204 WEST LYNN ST',
      YelpCategories: 'American (Traditional)',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 265
    },
    {
      Name: 'Rincon Catracho Restaurant',
      Street: '1729 E RIVERSIDE DR',
      YelpCategories: 'Honduran',
      Score: 81,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Austin Oaks Hospital',
      Street: '1407 W STASSNEY LN',
      YelpCategories: 'Hospitals',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 16
    },
    {
      Name: 'Tyson\'s Tacos',
      Street: '4905 AIRPORT BLVD',
      YelpCategories: 'Mexican,Coffee & Tea,Breakfast & Brunch',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 568
    },
    {
      Name: 'Chuck E. Cheese\'s #951',
      Street: '9811 S IH',
      YelpCategories: 'Pizza,Arcades',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 31
    },
    {
      Name: 'Taco Shack #10',
      Street: '12233 N FM 620 RD',
      YelpCategories: 'Mexican',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 47
    },
    {
      Name: 'Barlata',
      Street: '1500 S LAMAR BLVD',
      YelpCategories: 'Tapas Bars',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 546
    },
    {
      Name: 'Wayside Schools',
      Street: '6405 S IH',
      YelpCategories: 'Elementary Schools',
      Score: 97,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'BC - Jersey Mike\'s Subs',
      Street: '4005 MARKET ST',
      YelpCategories: 'Fast Food,Delis,Sandwiches',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 15
    },
    {
      Name: 'Alta\'s Cafe',
      Street: '74 TRINITY ST',
      YelpCategories: 'Coffee & Tea,Cafes',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 154
    },
    {
      Name: 'F & F Fruit Cups',
      Street: '7110 CAMERON RD',
      YelpCategories: 'Juice Bars & Smoothies,Desserts',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 33
    },
    {
      Name: 'Lone Star Kolaches',
      Street: '13764 N US 183 HWY',
      YelpCategories: 'Bakeries,Bagels',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 22
    },
    {
      Name: 'RW - Trader Joes',
      Street: '2805 BEE CAVES RD',
      YelpCategories: 'Grocery',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 202
    },
    {
      Name: 'Hamilton Twelve Wedding & Event Venue',
      Street: '18619 HAMILTON POOL RD',
      YelpCategories: 'Caterers,Venues & Event Spaces',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 15
    },
    {
      Name: 'Sunrise Mini Mart',
      Street: '907 E ST JOHNS AVE',
      YelpCategories: 'Convenience Stores',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Phil\'s Philly Grill',
      Street: '11200 LAKELINE MALL DR',
      YelpCategories: 'American (Traditional)',
      Score: 81,
      YelpRaiting: 3,
      YelpReviewCount: 19
    },
    {
      Name: 'Manon\'s LLC',
      Street: '8309 RESEARCH BLVD',
      YelpCategories: 'Food Trucks,Kitchen Incubators',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'Caribe Night Club',
      Street: '4134 FELTER LN',
      YelpCategories: 'Dance Clubs,Hookah Bars',
      Score: 92,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Tarbouch LLC',
      Street: '534 E OLTORF ST',
      YelpCategories: 'Mediterranean,Lebanese,Hookah Bars',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 332
    },
    {
      Name: 'La Mancha Tex Mex Tavern',
      Street: '2203 HANCOCK DR',
      YelpCategories: 'Tex-Mex,Mexican',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 311
    },
    {
      Name: 'Noon Mediterranean, Inc',
      Street: '1801 E 51ST ST',
      YelpCategories: 'Mediterranean,Greek',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 23
    },
    {
      Name: 'BC - Schmidt Family Barbecue',
      Street: '12532 FM 2244 RD',
      YelpCategories: 'Barbeque,Salad,Breakfast & Brunch',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 240
    },
    {
      Name: 'Callaway House Austin, The',
      Street: '505 W 22ND ST',
      YelpCategories: 'Apartments',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 10
    },
    {
      Name: 'Austin Beer Garden Brewing Co., The',
      Street: '1305 W OLTORF ST',
      YelpCategories: 'Breweries,Sandwiches,Pizza',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 561
    },
    {
      Name: 'Elroy & Ross Market',
      Street: '7200 ELROY RD',
      YelpCategories: 'Mexican',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 8
    },
    {
      Name: 'Elroy & Ross Market',
      Street: '7200 ELROY RD',
      YelpCategories: 'Mexican',
      Score: 72,
      YelpRaiting: 3,
      YelpReviewCount: 8
    },
    {
      Name: 'Joy East',
      Street: '2410 E RIVERSIDE DR',
      YelpCategories: 'Chinese,Sushi Bars,Buffets',
      Score: 86,
      YelpRaiting: 2,
      YelpReviewCount: 78
    },
    {
      Name: 'Lucy\'s Fried Chicken',
      Street: '5408 BURNET RD',
      YelpCategories: 'American (Traditional)',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 519
    },
    {
      Name: 'RW -  Arise Austin Medical Center',
      Street: '3003 BEE CAVES RD',
      YelpCategories: 'Medical Centers',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 45
    },
    {
      Name: 'Juiceland Oakhill',
      Street: '6705 W US 290 HWY',
      YelpCategories: 'Juice Bars & Smoothies,Vegan,Vegetarian',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 80
    },
    {
      Name: 'Spinners',
      Street: '14106 N IH',
      YelpCategories: 'American (Traditional),Beer Bar,Music Venues',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 67
    },
    {
      Name: 'Alamo Drafthouse Cinema',
      Street: '14028 N US 183 HWY',
      YelpCategories: 'Bars,Cinema',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 509
    },
    {
      Name: 'Matamoros Tacos',
      Street: '10304 N LAMAR BLVD',
      YelpCategories: 'Mexican,Food Stands',
      Score: 76,
      YelpRaiting: 5,
      YelpReviewCount: 48
    },
    {
      Name: 'District',
      Street: '5900 W SLAUGHTER LN',
      YelpCategories: 'American (New),Breakfast & Brunch,Cocktail Bars',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 420
    },
    {
      Name: 'Sustainable Food Center',
      Street: '2921 E 17TH ST',
      YelpCategories: 'Community Service/Non-Profit,Community Gardens,Cooking Classes',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 8
    },
    {
      Name: 'Cielo Night Club',
      Street: '505 NECHES ST',
      YelpCategories: 'Pubs',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 8
    },
    {
      Name: 'Hunan Lion Restaurant',
      Street: '4006 S LAMAR BLVD',
      YelpCategories: 'Chinese,Asian Fusion,Noodles',
      Score: 74,
      YelpRaiting: 4,
      YelpReviewCount: 258
    },
    {
      Name: 'U-Flote-M',
      Street: '6410 HUDSON BEND RD',
      YelpCategories: 'Convenience Stores',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Meridian Hive Meadery',
      Street: '8120 EXCHANGE DR',
      YelpCategories: 'Wineries',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 28
    },
    {
      Name: 'Voodoo Room',
      Street: '419 E 6TH ST',
      YelpCategories: 'Bars,Dance Clubs',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 23
    },
    {
      Name: 'Home 2 Suites',
      Street: '14022 N US 183 HWY',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 43
    },
    {
      Name: 'Brooklyn Pie Co.',
      Street: '9500 S IH',
      YelpCategories: 'Pizza',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 136
    },
    {
      Name: 'Einstein Bros. Bagels #3606',
      Street: '6611 S MOPAC EXPY',
      YelpCategories: 'Bagels',
      Score: 93,
      YelpRaiting: 2,
      YelpReviewCount: 91
    },
    {
      Name: 'Minibar',
      Street: '607 SAN JACINTO BLVD',
      YelpCategories: 'Bars',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 15
    },
    {
      Name: 'Majestic',
      Street: '419 E 6TH ST',
      YelpCategories: 'Dance Clubs,Lounges',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Stassney Food Mart',
      Street: '5717 S IH',
      YelpCategories: 'General Dentistry,Pediatric Dentists,Oral Surgeons',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 18
    },
    {
      Name: 'Apple Mart',
      Street: '2101 WICKERSHAM LN',
      YelpCategories: 'Grocery',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 7
    },
    {
      Name: 'Asian American Resource Center (AARC)',
      Street: '8401 CAMERON RD',
      YelpCategories: 'Recreation Centers',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 6
    },
    {
      Name: 'Haymaker',
      Street: '2310 MANOR RD',
      YelpCategories: 'Sandwiches,Bars,Comfort Food',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 434
    },
    {
      Name: 'Amy\'s Ice Creams, Inc',
      Street: '13265 N US 183 HWY',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 102
    },
    {
      Name: 'Wheatsville Food Co-Op',
      Street: '4001 S LAMAR BLVD',
      YelpCategories: 'Grocery,Organic Stores',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 157
    },
    {
      Name: 'WL - Maryes Gourmet Pizza',
      Street: '3663 BEE CAVES RD',
      YelpCategories: 'Pizza,Salad,Sandwiches',
      Score: 70,
      YelpRaiting: 5,
      YelpReviewCount: 153
    },
    {
      Name: 'Snow Pea Asian Bistro',
      Street: '14028 N US 183 HWY',
      YelpCategories: 'Sushi Bars,Chinese,Asian Fusion',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 265
    },
    {
      Name: 'Biryani Pot Indian Cuisine',
      Street: '12407 N MOPAC EXPY',
      YelpCategories: 'Indian',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 330
    },
    {
      Name: 'El Tacorrido',
      Street: '2316 S 1ST ST',
      YelpCategories: 'Mexican',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 330
    },
    {
      Name: '7-Eleven Convenience Store #36609',
      Street: '10800 RESEARCH BLVD',
      YelpCategories: 'Gas Stations,Convenience Stores,Coffee & Tea',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'St. Andrew\'s Episcopal School-Cafeteria',
      Street: '5901 SOUTHWEST PKWY',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 3
    },
    {
      Name: 'BC - Tadashi',
      Street: '12820 HILL COUNTRY BLVD',
      YelpCategories: 'Sushi Bars,Japanese,Asian Fusion',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 222
    },
    {
      Name: 'Javi\'s Best of Tex-Mex',
      Street: '7709 E BEN WHITE BLVD',
      YelpCategories: 'Tex-Mex',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 252
    },
    {
      Name: 'McDonald\'s at Parmer & Dessau',
      Street: '1608 E PARMER LN',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 90,
      YelpRaiting: 2,
      YelpReviewCount: 26
    },
    {
      Name: 'Cabo Bob\'s Burritos',
      Street: '2828 RIO GRANDE ST',
      YelpCategories: 'Mexican',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 309
    },
    {
      Name: 'Epoch Coffee',
      Street: '2700 W ANDERSON LN',
      YelpCategories: 'Coffee & Tea,Sandwiches,Cafes',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 264
    },
    {
      Name: 'BC - CVS/ Pharmacy # 8925',
      Street: '14057 BEE CAVE PKWY',
      YelpCategories: 'Drugstores',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 8
    },
    {
      Name: 'Black Walnut Cafe',
      Street: '10817 FM 2222 RD',
      YelpCategories: 'Cafes,American (New),Breakfast & Brunch',
      Score: 75,
      YelpRaiting: 4,
      YelpReviewCount: 317
    },
    {
      Name: 'Odd Duck',
      Street: '1201 S LAMAR BLVD',
      YelpCategories: 'American (Traditional),Bars',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 1418
    },
    {
      Name: 'Pizza Hut',
      Street: '8400 BRODIE LN',
      YelpCategories: 'Pizza,Italian,Chicken Wings',
      Score: 99,
      YelpRaiting: 2,
      YelpReviewCount: 23
    },
    {
      Name: 'Little Longhorn Saloon, The',
      Street: '5434 BURNET RD',
      YelpCategories: 'Dive Bars,Music Venues',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 190
    },
    {
      Name: 'Halal Bros',
      Street: '2712 GUADALUPE ST',
      YelpCategories: 'Middle Eastern,Halal',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 525
    },
    {
      Name: 'Lone Star Court',
      Street: '10901 DOMAIN DR',
      YelpCategories: 'Hotels',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 174
    },
    {
      Name: 'Crawfish Shack & Oyster Bar',
      Street: '9500 S IH',
      YelpCategories: 'Cajun/Creole,Seafood',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 320
    },
    {
      Name: 'Capital City Bakery',
      Street: '2211 E CESAR CHAVEZ ST',
      YelpCategories: 'Bakeries,Cupcakes,Custom Cakes',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 426
    },
    {
      Name: 'Luby\'s/ Fuddruckers',
      Street: '415 W SLAUGHTER LN',
      YelpCategories: 'American (Traditional),Buffets,Salad',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 33
    },
    {
      Name: 'Bamboo Bistro',
      Street: '6818 WEST GATE BLVD',
      YelpCategories: 'Asian Fusion,Chinese,Thai',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 244
    },
    {
      Name: 'Casa Linda Taqueria',
      Street: '623 W DITTMAR RD',
      YelpCategories: 'Mexican,Fast Food',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 40
    },
    {
      Name: 'East Side King',
      Street: '2310 S LAMAR BLVD',
      YelpCategories: 'Asian Fusion',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 399
    },
    {
      Name: 'Lucky Bakery',
      Street: '8557 RESEARCH BLVD',
      YelpCategories: 'Bakeries',
      Score: 70,
      YelpRaiting: 5,
      YelpReviewCount: 78
    },
    {
      Name: 'Villarina Foods of Texas',
      Street: '3201 BEE CAVES RD',
      YelpCategories: 'Italian,Specialty Food',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 20
    },
    {
      Name: 'Whole Foods Market - Grocery',
      Street: '11920 DOMAIN DR',
      YelpCategories: 'Grocery,Coffee & Tea,Health Markets',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 343
    },
    {
      Name: 'Whole Foods Market - Seafood',
      Street: '11920 DOMAIN DR',
      YelpCategories: 'Grocery,Coffee & Tea,Health Markets',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 343
    },
    {
      Name: 'P. Terry\'s Burger Stand',
      Street: '12018 RESEARCH BLVD',
      YelpCategories: 'Burgers,Fast Food',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 129
    },
    {
      Name: 'Barton Food Mart',
      Street: '1500 SPYGLASS DR',
      YelpCategories: 'Convenience Stores',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 21
    },
    {
      Name: 'Cafe Creme',
      Street: '1834 E OLTORF ST',
      YelpCategories: 'Coffee & Tea,Cafes',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Sweet Treets Bakery',
      Street: '6705 W US 290 HWY',
      YelpCategories: 'Bakeries,Desserts,Cupcakes',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 185
    },
    {
      Name: '360 Pizza, LLC',
      Street: '2107 KINNEY AVE',
      YelpCategories: 'Pizza,Desserts,Sandwiches',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 129
    },
    {
      Name: 'Garbo\'s Lobster',
      Street: '14735 BRATTON LN',
      YelpCategories: 'Seafood',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 453
    },
    {
      Name: 'Hampton Inn Austin South',
      Street: '4141 GOVERNORS ROW',
      YelpCategories: 'Hotels',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 40
    },
    {
      Name: 'Taco Bell',
      Street: '9504 N LAMAR BLVD',
      YelpCategories: 'Fast Food,Mexican,Tex-Mex',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 8
    },
    {
      Name: 'Taco Bell #030144',
      Street: '3421 W WILLIAM CANNON DR',
      YelpCategories: 'Mexican,Tex-Mex,Fast Food',
      Score: 99,
      YelpRaiting: 2,
      YelpReviewCount: 22
    },
    {
      Name: 'Vintage Villas Hotel',
      Street: '4209 ECK LN',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 116
    },
    {
      Name: 'Taco Bell #030098',
      Street: '9900 W PARMER LN',
      YelpCategories: 'Tex-Mex,Fast Food,Mexican',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 13
    },
    {
      Name: 'Taco Bell #030090',
      Street: '161 W SLAUGHTER LN',
      YelpCategories: 'Fast Food,Mexican,Tex-Mex',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 21
    },
    {
      Name: 'Taco Bell #030116',
      Street: '13770 N US 183 HWY',
      YelpCategories: 'Mexican,Tex-Mex,Fast Food',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 44
    },
    {
      Name: 'Taco Bell #030074',
      Street: '2308 E RIVERSIDE DR',
      YelpCategories: 'Mexican,Tex-Mex,Fast Food',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 32
    },
    {
      Name: 'Taco Bell #030157',
      Street: '1016 E ANDERSON LN',
      YelpCategories: 'Mexican,Tex-Mex,Fast Food',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 30
    },
    {
      Name: 'Taco Bell #030142',
      Street: '1701 W BEN WHITE BLVD',
      YelpCategories: 'Fast Food,Tex-Mex,Mexican',
      Score: 88,
      YelpRaiting: 2,
      YelpReviewCount: 23
    },
    {
      Name: 'Taco Bell #030080',
      Street: '3324 W SLAUGHTER LN',
      YelpCategories: 'Fast Food,Mexican',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 28
    },
    {
      Name: 'Taco Bell #030141',
      Street: '4811 W BRAKER LN',
      YelpCategories: 'Mexican,Tex-Mex,Fast Food',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 45
    },
    {
      Name: 'Taco Bell #030129',
      Street: '1925 AIRPORT BLVD',
      YelpCategories: 'Mexican,Tex-Mex,Fast Food',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 32
    },
    {
      Name: 'Taco Bell #030139',
      Street: '3501 W WELLS BRANCH PKWY',
      YelpCategories: 'Tex-Mex,Fast Food,Mexican',
      Score: 98,
      YelpRaiting: 2,
      YelpReviewCount: 17
    },
    {
      Name: 'Taco Bell #30081',
      Street: '7515 N FM 620 RD',
      YelpCategories: 'Mexican,Tex-Mex,Fast Food',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 33
    },
    {
      Name: 'Taco Bell #30099',
      Street: '7793 BURNET RD',
      YelpCategories: 'Mexican,Fast Food,Tex-Mex',
      Score: 96,
      YelpRaiting: 2,
      YelpReviewCount: 29
    },
    {
      Name: '7-Eleven Convenience Store # 36564A',
      Street: '7002 N FM 620 RD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: '7-Eleven Convenience Store # 36588A',
      Street: '1100 W PARMER LN',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Azul Tequila',
      Street: '3815 DRY CREEK DR',
      YelpCategories: 'Mexican',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 180
    },
    {
      Name: 'Yummi Taco',
      Street: '12518 RESEARCH BLVD',
      YelpCategories: 'Mexican,Asian Fusion,Breakfast & Brunch',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 217
    },
    {
      Name: 'Aristocrat Lounge',
      Street: '6507 BURNET RD',
      YelpCategories: 'Dive Bars,Lounges',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 74
    },
    {
      Name: 'Cheer Up Charlies',
      Street: '900 RED RIVER ST',
      YelpCategories: 'Dive Bars',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 102
    },
    {
      Name: 'BC - Fuddruckers',
      Street: '12815 SHOPS PKWY',
      YelpCategories: 'Burgers',
      Score: 80,
      YelpRaiting: 3,
      YelpReviewCount: 65
    },
    {
      Name: 'Ashley\'s Playhouse',
      Street: '13343 N US 183 HWY',
      YelpCategories: 'Child Care & Day Care',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 42
    },
    {
      Name: 'Stinson\'s Bistro',
      Street: '4416 BURNET RD',
      YelpCategories: 'American (Traditional),Cocktail Bars,Venues & Event Spaces',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 168
    },
    {
      Name: 'Wendy\'s Old Fashioned Hamburgers #113',
      Street: '6210 E BEN WHITE BLVD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 18
    },
    {
      Name: 'WL - Gold\'s Gym',
      Street: '701 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Gyms,Trainers,Yoga',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 47
    },
    {
      Name: 'Tex-Mex Joes',
      Street: '7600 N LAMAR BLVD',
      YelpCategories: 'Tex-Mex,Mexican',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 131
    },
    {
      Name: 'Newk\'s Eatery',
      Street: '9722 GREAT HILLS TRL',
      YelpCategories: 'Pizza,Sandwiches,American (New)',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 318
    },
    {
      Name: 'Omni Barton Creek Resort & Spa Club-19th Hole',
      Street: '8212 BARTON CLUB DR',
      YelpCategories: 'Hotels',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 181
    },
    {
      Name: 'Omni Barton Crk Resort & Spa-Country Club Kitchen',
      Street: '8212 BARTON CLUB DR',
      YelpCategories: 'Hotels',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 181
    },
    {
      Name: 'Omni Barton Creek Resort & Spa-Lobby Shop',
      Street: '8212 BARTON CLUB DR',
      YelpCategories: 'Hotels',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 181
    },
    {
      Name: 'Omni Barton Creek Resort & Spa-Banquet Kitchen',
      Street: '8212 BARTON CLUB DR',
      YelpCategories: 'Hotels',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 181
    },
    {
      Name: 'Omni Barton Creek Resort & Spa-Lakeside Cabana',
      Street: '1800 CLUBHOUSE HILL DR',
      YelpCategories: 'Restaurants',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Minimax Food Mart #3',
      Street: '11800 DESSAU RD',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 8
    },
    {
      Name: 'Maudies at the Triangle',
      Street: '4600 W GUADALUPE ST',
      YelpCategories: 'Apartments',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 90
    },
    {
      Name: 'BC - We Olive & Wine Bar',
      Street: '12800 HILL COUNTRY BLVD',
      YelpCategories: 'Specialty Food,Wine Bars',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 47
    },
    {
      Name: '7-Eleven Convenience Store #36273A',
      Street: '3550 FAR WEST BLVD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: '7-Eleven Convenience Store #36597A',
      Street: '5445 W US 290 HWY',
      YelpCategories: 'Coffee & Tea,Convenience Stores,Gas Stations',
      Score: 93,
      YelpRaiting: 2,
      YelpReviewCount: 5
    },
    {
      Name: '7-Eleven Convenience Store # 36604A',
      Street: '6518 ED BLUESTEIN BLVD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 94,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Sound Gallery, The',
      Street: '4930 S CONGRESS AVE',
      YelpCategories: 'Vinyl Records,High Fidelity Audio Equipment,Music & DVDs',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 46
    },
    {
      Name: 'Casa Chapala Mexican Grill',
      Street: '9041 RESEARCH BLVD',
      YelpCategories: 'Mexican,Chicken Wings,Cocktail Bars',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 392
    },
    {
      Name: 'BC - Woody\'s Tavern and Grill, Inc',
      Street: '12801 SHOPS PKWY',
      YelpCategories: 'American (Traditional),Sports Bars',
      Score: 74,
      YelpRaiting: 3,
      YelpReviewCount: 77
    },
    {
      Name: 'Big Lots # 1749',
      Street: '8740 RESEARCH BLVD',
      YelpCategories: 'Department Stores',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'Big Lots # 1835',
      Street: '2506 W PARMER LN',
      YelpCategories: 'Department Stores',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 16
    },
    {
      Name: 'Taco Bell #030263',
      Street: '1548 E PARMER LN',
      YelpCategories: 'Mexican,Fast Food,Tex-Mex',
      Score: 91,
      YelpRaiting: 2,
      YelpReviewCount: 37
    },
    {
      Name: 'Brazos Hall',
      Street: '204 E 4TH ST',
      YelpCategories: 'Venues & Event Spaces',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 23
    },
    {
      Name: 'BC - Chili\'s Grill & Bar',
      Street: '12713 GALLERIA CIR',
      YelpCategories: 'American (Traditional),Bars,Tex-Mex',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 71
    },
    {
      Name: 'La Mexicana Supermercado-Store/Grocery',
      Street: '14236 FM 969 RD',
      YelpCategories: 'Grocery,Fruits & Veggies,Latin American',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Noble Sandwiches',
      Street: '4805 BURNET RD',
      YelpCategories: 'Sandwiches,Breakfast & Brunch,Burgers',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 481
    },
    {
      Name: 'WL - Belmont Village West Lake Hills',
      Street: '4310 BEE CAVES RD',
      YelpCategories: 'Retirement Homes',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'WL - Juiceland',
      Street: '701 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Juice Bars & Smoothies',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 26
    },
    {
      Name: 'Isla',
      Street: '208 W 4TH ST',
      YelpCategories: 'Cocktail Bars,Peruvian',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 140
    },
    {
      Name: 'Five Guys Burgers and Fries',
      Street: '10000 RESEARCH BLVD',
      YelpCategories: 'Burgers,Fast Food',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 213
    },
    {
      Name: 'Wendy\'s #W127',
      Street: '305 W SLAUGHTER LN',
      YelpCategories: 'Fast Food,Burgers',
      Score: 94,
      YelpRaiting: 3,
      YelpReviewCount: 20
    },
    {
      Name: 'Pop',
      Street: '620 W 6TH ST',
      YelpCategories: 'Cocktail Bars,Champagne Bars,American (Traditional)',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 30
    },
    {
      Name: 'Sarah\'s Mediterranean Grill & Market',
      Street: '5222 BURNET RD',
      YelpCategories: 'Greek,Mediterranean',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 467
    },
    {
      Name: 'Last Call-PF Neighborhood Bar',
      Street: '1615 GRAND AVENUE PKWY',
      YelpCategories: 'Sports Bars,Dive Bars',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 21
    },
    {
      Name: 'Wendy\'s W114/8076',
      Street: '6247 MC NEIL DR',
      YelpCategories: 'Fast Food,Burgers',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 27
    },
    {
      Name: 'Wendy\'s W104',
      Street: '4115 S CONGRESS AVE',
      YelpCategories: 'Burgers,Fast Food',
      Score: 93,
      YelpRaiting: 2,
      YelpReviewCount: 33
    },
    {
      Name: 'Wendy\'s W-102/1682',
      Street: '3596 FAR WEST BLVD',
      YelpCategories: 'Fast Food,Burgers',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 33
    },
    {
      Name: 'Wendy\'s Old Fashion Hamburger',
      Street: '10203 LAKE CREEK PKWY',
      YelpCategories: 'Fast Food,Burgers',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 32
    },
    {
      Name: 'Austins Pizza',
      Street: '1705 N CUERNAVACA DR',
      YelpCategories: 'Pizza',
      Score: 79,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Master Donuts',
      Street: '6100 E RIVERSIDE DR',
      YelpCategories: 'Donuts',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 67
    },
    {
      Name: '7 Eleven # 36610A',
      Street: '2616 W BRAKER LN',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Microtel Inn & Suites by Wyndham',
      Street: '7705 METRO CENTER DR',
      YelpCategories: 'Hotels',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 31
    },
    {
      Name: 'Dollar Tree # 3211',
      Street: '13729 N US 183 HWY',
      YelpCategories: 'Shopping',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 21
    },
    {
      Name: 'Balkan Cafe & Grill',
      Street: '11800 N LAMAR BLVD',
      YelpCategories: 'Modern European,Cafes,Bars',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 240
    },
    {
      Name: 'Blacks Barbecue',
      Street: '3110 GUADALUPE ST',
      YelpCategories: 'Barbeque',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 487
    },
    {
      Name: 'Lucky\'s Puccia & Pizzeria',
      Street: '1611 W 5TH ST',
      YelpCategories: 'Sandwiches,Food Stands,Street Vendors',
      Score: 80,
      YelpRaiting: 5,
      YelpReviewCount: 240
    },
    {
      Name: 'University United Methodist Church',
      Street: '2409 GUADALUPE ST',
      YelpCategories: 'Religious Organizations',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Trader Joe\'s #454',
      Street: '9722 GREAT HILLS TRL',
      YelpCategories: 'Grocery',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 189
    },
    {
      Name: 'Lone Star Kolaches',
      Street: '2210 W ANDERSON LN',
      YelpCategories: 'Breakfast & Brunch',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 32
    },
    {
      Name: 'Michoacana Natural Ice Cream',
      Street: '9426 PARKFIELD DR',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 75
    },
    {
      Name: 'Seventh Flag Coffee',
      Street: '1506 S 1ST ST',
      YelpCategories: 'Coffee & Tea',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 276
    },
    {
      Name: 'Happy Hearts Bilingual Learning Center #2',
      Street: '1112 W SLAUGHTER LN',
      YelpCategories: 'Child Care & Day Care',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Radio Coffee & Beer',
      Street: '4204 MANCHACA RD',
      YelpCategories: 'Coffee & Tea,Tacos,Beer Bar',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 554
    },
    {
      Name: 'Red Lobster # 0314',
      Street: '3815 S LAMAR BLVD',
      YelpCategories: 'Seafood,American (Traditional)',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 119
    },
    {
      Name: 'Lux Lounge',
      Street: '620 W 6TH ST',
      YelpCategories: 'Lounges',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 26
    },
    {
      Name: 'Bambu Desserts and Drinks',
      Street: '10901 N LAMAR BLVD',
      YelpCategories: 'Coffee & Tea,Juice Bars & Smoothies,Bubble Tea',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 191
    },
    {
      Name: 'Taco Joint',
      Street: '2807 SAN JACINTO BLVD',
      YelpCategories: 'Mexican',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 363
    },
    {
      Name: 'Little Angels Daycare',
      Street: '16407 DECKER CREEK DR',
      YelpCategories: 'Child Care & Day Care',
      Score: 86,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'BC - Simply Pho House',
      Street: '12918 SHOPS PKWY',
      YelpCategories: 'Vietnamese,Bubble Tea,Asian Fusion',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 171
    },
    {
      Name: 'P. Terry\'s Burger Stand',
      Street: '8515 BURNET RD',
      YelpCategories: 'Burgers,Fast Food',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 68
    },
    {
      Name: 'Snarf\'s Sandwiches',
      Street: '2901 MEDICAL ARTS ST',
      YelpCategories: 'Salad,Sandwiches',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 100
    },
    {
      Name: 'Toulouse',
      Street: '409 E 6TH ST',
      YelpCategories: 'Venues & Event Spaces,Cocktail Bars',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 26
    },
    {
      Name: 'Fast Folks Cyclery & Cafe',
      Street: '1201 E CESAR CHAVEZ ST',
      YelpCategories: 'Bikes',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 17
    },
    {
      Name: 'Fat Sal\'s Deli',
      Street: '2604 GUADALUPE ST',
      YelpCategories: 'Hot Dogs,Burgers,Sandwiches',
      Score: 75,
      YelpRaiting: 4,
      YelpReviewCount: 202
    },
    {
      Name: 'Alamo Drafthouse Cinema',
      Street: '2700 W ANDERSON LN',
      YelpCategories: 'Cinema',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 566
    },
    {
      Name: 'Olamaie',
      Street: '1610 SAN ANTONIO ST',
      YelpCategories: 'Southern,American (New),Cocktail Bars',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 349
    },
    {
      Name: 'Troy',
      Street: '8105 MESA DR',
      YelpCategories: 'Turkish,Mediterranean,Salad',
      Score: 86,
      YelpRaiting: 5,
      YelpReviewCount: 400
    },
    {
      Name: 'Figure 8 Coffee Purveyors',
      Street: '1111 CHICON ST',
      YelpCategories: 'Coffee & Tea,Bakeries,Sandwiches',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 182
    },
    {
      Name: 'Slab',
      Street: '9012 RESEARCH BLVD',
      YelpCategories: 'Barbeque,Beer Bar',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 648
    },
    {
      Name: 'Red Lobster # 0095',
      Street: '109 W ANDERSON LN',
      YelpCategories: 'Seafood,American (Traditional)',
      Score: 80,
      YelpRaiting: 3,
      YelpReviewCount: 125
    },
    {
      Name: 'Hyridge Mart',
      Street: '3503 HYRIDGE DR',
      YelpCategories: 'Grocery,Organic Stores,Vape Shops',
      Score: 84,
      YelpRaiting: 5,
      YelpReviewCount: 10
    },
    {
      Name: 'Chocolaterie Tessa',
      Street: '7425 BURNET RD',
      YelpCategories: 'Chocolatiers & Shops',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 57
    },
    {
      Name: 'Jacoby\'s Restaurant & Mercantile',
      Street: '3235 E CESAR CHAVEZ ST',
      YelpCategories: 'American (New),Southern',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 470
    },
    {
      Name: 'Nasha',
      Street: '1614 E 7TH ST',
      YelpCategories: 'Indian',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 296
    },
    {
      Name: 'Independence Fine Foods',
      Street: '1807 W SLAUGHTER LN',
      YelpCategories: 'Coffee & Tea,Sandwiches,Burgers',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 370
    },
    {
      Name: 'Sugar Mama\'s Bakeshop Eastside',
      Street: '2406 MANOR RD',
      YelpCategories: 'Cupcakes,Bakeries',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 136
    },
    {
      Name: 'Peace Bakery & Deli',
      Street: '11220 N LAMAR BLVD',
      YelpCategories: 'Mediterranean,Middle Eastern,Desserts',
      Score: 80,
      YelpRaiting: 5,
      YelpReviewCount: 340
    },
    {
      Name: 'Challenger School Elementary',
      Street: '15101 AVERY RANCH BLVD',
      YelpCategories: 'Elementary Schools,Preschools,Child Care & Day Care',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 6
    },
    {
      Name: 'Indian Roller',
      Street: '10006 MANCHACA RD',
      YelpCategories: 'Bars',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 87
    },
    {
      Name: 'Tropical Smoothie Cafe',
      Street: '6001 AIRPORT BLVD',
      YelpCategories: 'Coffee & Tea,American (Traditional)',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'El Tacorrido',
      Street: '5811 BERKMAN DR',
      YelpCategories: 'Mexican',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'Nothing Bundt Cakes',
      Street: '10225 RESEARCH BLVD',
      YelpCategories: 'Bakeries,Desserts,Cupcakes',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 68
    },
    {
      Name: 'Sichuan River Restaurant',
      Street: '4534 WEST GATE BLVD',
      YelpCategories: 'Szechuan',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 254
    },
    {
      Name: 'Austin Club Carnaval',
      Street: '2237 E RIVERSIDE DR',
      YelpCategories: 'Music Venues',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Sa-Ten',
      Street: '916 SPRINGDALE RD',
      YelpCategories: 'Japanese,Coffee & Tea',
      Score: 82,
      YelpRaiting: 5,
      YelpReviewCount: 321
    },
    {
      Name: 'Suprabhat',
      Street: '9225 W PARMER LN',
      YelpCategories: 'Indian,Vegetarian',
      Score: 78,
      YelpRaiting: 4,
      YelpReviewCount: 198
    },
    {
      Name: 'Cover 3',
      Street: '1717 W 6TH ST',
      YelpCategories: 'American (New),Sports Bars',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 140
    },
    {
      Name: 'SquareRut Kava Bar Lamar, LLC',
      Street: '5000 N LAMAR BLVD',
      YelpCategories: 'Lounges,Cafes',
      Score: 77,
      YelpRaiting: 4,
      YelpReviewCount: 32
    },
    {
      Name: 'Taco Flats',
      Street: '5520 BURNET RD',
      YelpCategories: 'Mexican,Cocktail Bars,Beer Bar',
      Score: 77,
      YelpRaiting: 4,
      YelpReviewCount: 350
    },
    {
      Name: 'Brookdale Parmer Lane #24782',
      Street: '12429 SCOFIELD FARMS DR',
      YelpCategories: 'Assisted Living Facilities',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 1
    },
    {
      Name: 'Jacoby\'s Austin - Catering Kitchen',
      Street: '3235 E CESAR CHAVEZ ST',
      YelpCategories: 'American (New),Southern',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 470
    },
    {
      Name: 'The Peached Tortilla',
      Street: '5520 BURNET RD',
      YelpCategories: 'Asian Fusion,Southern',
      Score: 82,
      YelpRaiting: 5,
      YelpReviewCount: 554
    },
    {
      Name: 'Eureka',
      Street: '200 E 6TH ST',
      YelpCategories: 'Bars,American (New),Burgers',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 606
    },
    {
      Name: 'Drinks',
      Street: '2001 E CESAR CHAVEZ ST',
      YelpCategories: 'Lounges,American (New)',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 92
    },
    {
      Name: 'Rosa\'s Cafe & Tortilla Factory #42',
      Street: '509 W SLAUGHTER LN',
      YelpCategories: 'Tex-Mex',
      Score: 79,
      YelpRaiting: 3,
      YelpReviewCount: 141
    },
    {
      Name: 'Daily Juice Cafe',
      Street: '8620 BURNET RD',
      YelpCategories: 'Juice Bars & Smoothies,Vegan',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 52
    },
    {
      Name: 'Asia Cafe',
      Street: '8650 SPICEWOOD SPRINGS RD',
      YelpCategories: 'Chinese,Seafood,Soup',
      Score: 72,
      YelpRaiting: 4,
      YelpReviewCount: 784
    },
    {
      Name: 'Casey\'s New Orleans Snowballs',
      Street: '808 E 51ST ST',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Food Trucks',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 275
    },
    {
      Name: 'Harmony School of Innovation - Austin',
      Street: '2124 E ST ELMO RD',
      YelpCategories: 'Education',
      Score: 96,
      YelpRaiting: 1,
      YelpReviewCount: 2
    },
    {
      Name: 'Fresh Donuts',
      Street: '14509 FM 969 RD',
      YelpCategories: 'Donuts,Breakfast & Brunch,Burgers',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 22
    },
    {
      Name: 'Waller Creek Pub House',
      Street: '603 SABINE ST',
      YelpCategories: 'American (Traditional),Pubs,Beer, Wine & Spirits',
      Score: 81,
      YelpRaiting: 5,
      YelpReviewCount: 189
    },
    {
      Name: 'Vivo',
      Street: '6406 N IH',
      YelpCategories: 'Tex-Mex',
      Score: 75,
      YelpRaiting: 4,
      YelpReviewCount: 212
    },
    {
      Name: 'New Fortune Chinese Seafood Restaurant',
      Street: '10901 N LAMAR BLVD',
      YelpCategories: 'Dim Sum,Seafood',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 421
    },
    {
      Name: 'Gold\'s Gym Highland',
      Street: '6001 MIDDLE FISKVILLE RD',
      YelpCategories: 'Gyms,Trainers,Yoga',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 68
    },
    {
      Name: 'Premos Food Store',
      Street: '5327 CAMERON RD',
      YelpCategories: 'Gas Stations',
      Score: 93,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Jimmy John\'s Gourmet Sandwiches',
      Street: '10900 RESEARCH BLVD',
      YelpCategories: 'Sandwiches,Delis,Fast Food',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 85
    },
    {
      Name: 'Jimmy John\'s Gourmet Sandwiches',
      Street: '2937 W ANDERSON LN',
      YelpCategories: 'Sandwiches,Delis,Fast Food',
      Score: 77,
      YelpRaiting: 3,
      YelpReviewCount: 77
    },
    {
      Name: 'Barton Hills Assisted Living',
      Street: '1606 NASH AVE',
      YelpCategories: 'Assisted Living Facilities',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Torchy\'s Tacos',
      Street: '1801 E 51ST ST',
      YelpCategories: 'Breakfast & Brunch,Tacos',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 312
    },
    {
      Name: 'Papa Murphy\'s Pizza',
      Street: '12407 N MOPAC EXPY',
      YelpCategories: 'Pizza',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 28
    },
    {
      Name: 'Ned Granger Building Cafe',
      Street: '314 W 11TH ST',
      YelpCategories: 'Tex-Mex,American (Traditional),Breakfast & Brunch',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Silverado Senior Living - Onion Creek',
      Street: '11330 FARRAH LN',
      YelpCategories: 'Retirement Homes,Assisted Living Facilities,Memory Care',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Noon Mediterranean, Inc',
      Street: '1920 E RIVERSIDE DR',
      YelpCategories: 'Mediterranean,Greek',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 35
    },
    {
      Name: 'Sweetness Bakery Austin',
      Street: '3742 FAR WEST BLVD',
      YelpCategories: 'Bakeries,Cupcakes,Breakfast & Brunch',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 57
    },
    {
      Name: 'Casa Vallarta Rest',
      Street: '6002 BURLESON RD',
      YelpCategories: 'Mexican',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 56
    },
    {
      Name: 'Zilker Brewing Company',
      Street: '1701 E 6TH ST',
      YelpCategories: 'Breweries,Beer Bar',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 163
    },
    {
      Name: 'Hay Elotes',
      Street: '1200 W HOWARD LN',
      YelpCategories: 'Desserts,Juice Bars & Smoothies,Ice Cream & Frozen Yogurt',
      Score: 83,
      YelpRaiting: 3,
      YelpReviewCount: 54
    },
    {
      Name: 'Austin Java - 360',
      Street: '3310 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Coffee & Tea,Breakfast & Brunch,American (Traditional)',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 30
    },
    {
      Name: 'La Mexicana Supermercado-Meat Counter',
      Street: '14236 FM 969 RD',
      YelpCategories: 'Grocery,Fruits & Veggies,Latin American',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'La Mexicana Supermercado-Kitchen/Deli',
      Street: '14236 FM 969 RD',
      YelpCategories: 'Grocery,Fruits & Veggies,Latin American',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'College Roadhouse LLC',
      Street: '9515 N LAMAR BLVD',
      YelpCategories: 'Pubs,Korean,Karaoke',
      Score: 86,
      YelpRaiting: 5,
      YelpReviewCount: 104
    },
    {
      Name: 'Chipotle Mexican Grill',
      Street: '1920 E RIVERSIDE DR',
      YelpCategories: 'Mexican,Fast Food',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 47
    },
    {
      Name: 'Jersey Mike\'s Subs',
      Street: '1000 E 41ST ST',
      YelpCategories: 'Fast Food,Delis,Sandwiches',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 23
    },
    {
      Name: 'Pinkberry 205',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Szechuan House',
      Street: '11005 BURNET RD',
      YelpCategories: 'Szechuan',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 272
    },
    {
      Name: 'BC - ThunderCloud Subs',
      Street: '12400 W SH',
      YelpCategories: 'Sandwiches',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 21
    },
    {
      Name: 'Bee Grocery, The',
      Street: '1001 E 6TH ST',
      YelpCategories: 'Delis,Grocery',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 59
    },
    {
      Name: 'BC - Einstein Bros. Bagels #3633',
      Street: '12532 FM 2244 RD',
      YelpCategories: 'Sandwiches,Bagels,Cafes',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 45
    },
    {
      Name: 'Holiday Inn Express & Suites',
      Street: '701 E STASSNEY LN',
      YelpCategories: 'Venues & Event Spaces,Hotels',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 20
    },
    {
      Name: 'SV - Jenny Craig Weight Loss Center #1699',
      Street: '5601 BRODIE LN',
      YelpCategories: 'Weight Loss Centers',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 1
    },
    {
      Name: 'Bee Cave Coffee Co.',
      Street: '3220 AMY DONOVAN PLZ',
      YelpCategories: 'Coffee & Tea',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 55
    },
    {
      Name: '7-Eleven Store #36986',
      Street: '2330 GUADALUPE ST',
      YelpCategories: 'Convenience Stores,Coffee & Tea',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 1
    },
    {
      Name: 'Which Wich',
      Street: '1701 W PARMER LN',
      YelpCategories: 'Sandwiches',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 71
    },
    {
      Name: 'Flores Mexican Restaurant',
      Street: '4625 W WILLIAM CANNON DR',
      YelpCategories: 'Mexican,Breakfast & Brunch,Cocktail Bars',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 168
    },
    {
      Name: 'Alfredo\'s Mexican Restaurant',
      Street: '15608 SPRING HILL LN',
      YelpCategories: 'Mexican',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 12
    },
    {
      Name: 'Ramen Tatsu-Ya (South Lamar)',
      Street: '1234 S LAMAR BLVD',
      YelpCategories: 'Ramen',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 1374
    },
    {
      Name: 'Beto\'s Mexican Restaurant',
      Street: '3518 E 7TH ST',
      YelpCategories: 'Mexican',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 32
    },
    {
      Name: 'Capitol Nursing and Rehab Center',
      Street: '3200 W SLAUGHTER LN',
      YelpCategories: 'Rehabilitation Center',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 12
    },
    {
      Name: 'Riverside Nursing & Rehab Center',
      Street: '6801 E RIVERSIDE DR',
      YelpCategories: 'Skilled Nursing,Retirement Homes,Rehabilitation Center',
      Score: 93,
      YelpRaiting: 1,
      YelpReviewCount: 3
    },
    {
      Name: 'Apis Restaurant',
      Street: '23526 W SH',
      YelpCategories: 'American (New)',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 138
    },
    {
      Name: 'Stepping Stone School XVIII',
      Street: '9325 ALICE MAE LN',
      YelpCategories: 'Preschools,Child Care & Day Care,Summer Camps',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 14
    },
    {
      Name: 'CVS Pharmacy # 10139',
      Street: '7300 N FM 620 RD',
      YelpCategories: 'Drugstores',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Tutty Frutty',
      Street: '500 W WILLIAM CANNON DR',
      YelpCategories: 'Mexican,Ice Cream & Frozen Yogurt,Juice Bars & Smoothies',
      Score: 86,
      YelpRaiting: 5,
      YelpReviewCount: 34
    },
    {
      Name: 'Wheel, The',
      Street: '1902 E MARTIN LUTHER KING JR BLVD',
      YelpCategories: 'Bars',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 85
    },
    {
      Name: 'Casa Colombia',
      Street: '2409 E 7TH ST',
      YelpCategories: 'Colombian',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 270
    },
    {
      Name: 'Sidewinder, The',
      Street: '715 RED RIVER ST',
      YelpCategories: 'Music Venues',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 17
    },
    {
      Name: 'Big Easy Bar and Grill',
      Street: '1806 E 12TH ST',
      YelpCategories: 'Cajun/Creole,Seafood',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 96
    },
    {
      Name: 'Bon Appetit @ 7700 Parmer',
      Street: '7700 PARMER LN',
      YelpCategories: 'Cafeteria',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 4
    },
    {
      Name: 'Sala and Betty',
      Street: '5201 AIRPORT BLVD',
      YelpCategories: 'American (New),Diners,Sandwiches',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 393
    },
    {
      Name: 'Bun Belly',
      Street: '5001 AIRPORT BLVD',
      YelpCategories: 'Vietnamese,Asian Fusion',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 417
    },
    {
      Name: 'Donut Hole, The',
      Street: '1700 N FM 620 RD',
      YelpCategories: 'Donuts,Coffee & Tea',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 7
    },
    {
      Name: 'Hu La Hu Market',
      Street: '4901 S 1ST ST',
      YelpCategories: 'Coffee & Tea,Beer, Wine & Spirits,Convenience Stores',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Gelateria Gemelli',
      Street: '1009 E 6TH ST',
      YelpCategories: 'Gelato,Ice Cream & Frozen Yogurt',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 246
    },
    {
      Name: 'Sam\'s Club #6188 - Bakery',
      Street: '10901 LAKELINE MALL DR',
      YelpCategories: 'Department Stores,Wholesale Stores,Grocery',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 34
    },
    {
      Name: 'Sam\'s Club #6188 - Meat Market',
      Street: '10901 LAKELINE MALL DR',
      YelpCategories: 'Department Stores,Wholesale Stores,Grocery',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 34
    },
    {
      Name: 'Sam\'s Club #6188 - Grocery',
      Street: '10901 LAKELINE MALL DR',
      YelpCategories: 'Department Stores,Wholesale Stores,Grocery',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 34
    },
    {
      Name: 'Grove Wine Bar and Kitchen, The',
      Street: '800 W 6TH ST',
      YelpCategories: 'Wine Bars,Italian,Pizza',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 197
    },
    {
      Name: '7-Eleven Convenience Store #36642A',
      Street: '7715 E BEN WHITE BLVD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 90,
      YelpRaiting: 2,
      YelpReviewCount: 4
    },
    {
      Name: 'Subway # 7225',
      Street: '6705 W US 290 HWY',
      YelpCategories: 'Sandwiches,Fast Food',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 14
    },
    {
      Name: 'Flaming Pizza',
      Street: '3220 FEATHERGRASS CT',
      YelpCategories: 'Pizza',
      Score: 84,
      YelpRaiting: 5,
      YelpReviewCount: 111
    },
    {
      Name: 'Sheraton Austin At The Capitol',
      Street: '701 E 11TH ST',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 247
    },
    {
      Name: 'Jersey Mike\'s Subs #15070',
      Street: '12901 N IH',
      YelpCategories: 'Fast Food,Delis,Sandwiches',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 13
    },
    {
      Name: 'Saffron',
      Street: '3616 FAR WEST BLVD',
      YelpCategories: 'Indian,Himalayan/Nepalese,Buffets',
      Score: 71,
      YelpRaiting: 5,
      YelpReviewCount: 344
    },
    {
      Name: 'Windsor Nursing and Rehabilitation Center of Duval',
      Street: '5301 DUVAL RD',
      YelpCategories: 'Rehabilitation Center,Occupational Therapy,Physical Therapy',
      Score: 99,
      YelpRaiting: 1,
      YelpReviewCount: 4
    },
    {
      Name: 'Howdy Donut',
      Street: '3267 BEE CAVES RD',
      YelpCategories: 'Donuts',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 57
    },
    {
      Name: 'P. Terry\'s Burger Stand',
      Street: '515 CONGRESS AVE',
      YelpCategories: 'Burgers,Fast Food',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 74
    },
    {
      Name: '7-Eleven Convenience Store #30467C',
      Street: '10111 N LAMAR BLVD',
      YelpCategories: 'Convenience Stores,Coffee & Tea',
      Score: 87,
      YelpRaiting: 2,
      YelpReviewCount: 1
    },
    {
      Name: 'Omelettry, The',
      Street: '4631 AIRPORT BLVD',
      YelpCategories: 'American (Traditional),Breakfast & Brunch,Diners',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 234
    },
    {
      Name: '68 Degrees',
      Street: '2401 LAKE AUSTIN BLVD',
      YelpCategories: 'Italian',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 66
    },
    {
      Name: 'Galaxy Cafe',
      Street: '8127 MESA DR',
      YelpCategories: 'American (Traditional),Breakfast & Brunch,Wraps',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 89
    },
    {
      Name: 'Drafting Room',
      Street: '88 1 2 RAINEY ST',
      YelpCategories: 'Wine Bars',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 31
    },
    {
      Name: 'DoubleDave\'s Pizzaworks',
      Street: '8108 MESA DR',
      YelpCategories: 'Pizza,Sandwiches',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 30
    },
    {
      Name: 'Vanilla Orchid, The',
      Street: '7433 BURNET RD',
      YelpCategories: 'Caterers',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 8
    },
    {
      Name: 'Gregorio\'s',
      Street: '8309 RESEARCH BLVD',
      YelpCategories: 'Caterers',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 28
    },
    {
      Name: 'Palomita Child Development Center',
      Street: '4905 MAUFRAIS LN',
      YelpCategories: 'Child Care & Day Care',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Trader Joe\'s # 452',
      Street: '211 WALTER SEAHOLM DR',
      YelpCategories: 'Grocery',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 87
    },
    {
      Name: 'Southside Flying Pizza',
      Street: '2702 E CESAR CHAVEZ ST',
      YelpCategories: 'Salad,Pizza,Gluten-Free',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 88
    },
    {
      Name: 'Hampton Inn Austin North',
      Street: '7619 N IH',
      YelpCategories: 'Hotels',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 50
    },
    {
      Name: 'Townsend, The',
      Street: '718 CONGRESS AVE',
      YelpCategories: 'Music Venues,Lounges,Cocktail Bars',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 75
    },
    {
      Name: 'Recess Arcade Bar',
      Street: '222 E 6TH ST',
      YelpCategories: 'Bars,Eatertainment',
      Score: 84,
      YelpRaiting: 3,
      YelpReviewCount: 88
    },
    {
      Name: 'Cash Corner',
      Street: '2000 S IH',
      YelpCategories: '',
      Score: 82,
      YelpRaiting: 2,
      YelpReviewCount: 1
    },
    {
      Name: 'SV - Total Wine & More',
      Street: '5601 BRODIE LN',
      YelpCategories: 'Beer, Wine & Spirits,Tobacco Shops',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 50
    },
    {
      Name: 'McDonald\'s Restaurant at North Lamar',
      Street: '9422 N LAMAR BLVD',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 18
    },
    {
      Name: '7-Eleven Convenience Store # 35473A',
      Street: '1624 E HOWARD LN',
      YelpCategories: 'Gas Stations,Convenience Stores,Coffee & Tea',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 8
    },
    {
      Name: 'Moojo',
      Street: '2322 GUADALUPE ST',
      YelpCategories: 'Desserts,Ice Cream & Frozen Yogurt,Vegan',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 258
    },
    {
      Name: 'Kingdom Nightclub',
      Street: '103 E 5TH ST',
      YelpCategories: 'Dance Clubs',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 80
    },
    {
      Name: 'Yard Bar',
      Street: '6700 BURNET RD',
      YelpCategories: 'Bars,American (New),Dog Parks',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 282
    },
    {
      Name: '360 Uno',
      Street: '3801 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Italian,Pizza,Breakfast & Brunch',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 247
    },
    {
      Name: 'La Reyna Bakery',
      Street: '5200 E WILLIAM CANNON DR',
      YelpCategories: 'Bakeries',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 7
    },
    {
      Name: 'Almarah Mediterranean Cuisine',
      Street: '12129 N FM 620 RD',
      YelpCategories: 'Mediterranean,Greek,Desserts',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 555
    },
    {
      Name: 'Lonesome Dove Western Bistro Austin',
      Street: '419 COLORADO ST',
      YelpCategories: 'American (New),Steakhouses,Cocktail Bars',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 199
    },
    {
      Name: 'Emmer and Rye',
      Street: '51 RAINEY ST',
      YelpCategories: 'Tapas/Small Plates,American (New),Breakfast & Brunch',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 412
    },
    {
      Name: 'Brodie Park Market',
      Street: '9001 BRODIE LN',
      YelpCategories: 'Convenience Stores',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 53
    },
    {
      Name: 'Juliet',
      Street: '1500 BARTON SPRINGS RD',
      YelpCategories: 'Italian,Cocktail Bars,Desserts',
      Score: 80,
      YelpRaiting: 4,
      YelpReviewCount: 395
    },
    {
      Name: 'LW - Lexus Of Lakeway',
      Street: '108 S FM 620 RD',
      YelpCategories: 'Car Dealers,Auto Repair,Auto Parts & Supplies',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 45
    },
    {
      Name: 'Crazy Fruits # 2',
      Street: '6100 E RIVERSIDE DR',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Mexican,Juice Bars & Smoothies',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 15
    },
    {
      Name: 'Dobie Center - UTA',
      Street: '2021 GUADALUPE ST',
      YelpCategories: 'University Housing',
      Score: 90,
      YelpRaiting: 2,
      YelpReviewCount: 47
    },
    {
      Name: 'YMOK DayCare Austin LLC',
      Street: '510 CLARKE ST',
      YelpCategories: 'Child Care & Day Care,Summer Camps',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'Tempura Grill',
      Street: '9310 N LAMAR BLVD',
      YelpCategories: 'Indian,Halal,Pakistani',
      Score: 73,
      YelpRaiting: 4,
      YelpReviewCount: 54
    },
    {
      Name: 'Halal Corner, The',
      Street: '1200 BARBARA JORDAN BLVD',
      YelpCategories: 'Halal,Mediterranean,Middle Eastern',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 374
    },
    {
      Name: 'Unit D Pizzeria',
      Street: '2406 MANOR RD',
      YelpCategories: 'Pizza',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 176
    },
    {
      Name: 'Corona Cafe',
      Street: '1215 CORONA DR',
      YelpCategories: 'Coffee & Tea,Cafes',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 205
    },
    {
      Name: 'Jet\'s Pizza',
      Street: '9001 BRODIE LN',
      YelpCategories: 'Pizza',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 146
    },
    {
      Name: 'First Class Child Development Center 3',
      Street: '1901 NATIONAL PARK BLVD',
      YelpCategories: 'Preschools',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 1
    },
    {
      Name: 'Challenger School',
      Street: '13015 POND SPRINGS RD',
      YelpCategories: 'Preschools,Elementary Schools,Child Care & Day Care',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Deep Eddy Cabaret',
      Street: '2315 LAKE AUSTIN BLVD',
      YelpCategories: 'Dive Bars',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 89
    },
    {
      Name: 'Shake Shack The Domain Austin LLC',
      Street: '11228 DOMAIN DR',
      YelpCategories: 'Unofficial Yelp Events',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 5
    },
    {
      Name: 'Holy Roast Coffee Shop',
      Street: '4900 MUELLER BLVD',
      YelpCategories: 'Art Galleries,Toy Stores',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'Cafe No Se',
      Street: '1603 S CONGRESS AVE',
      YelpCategories: 'Cafes,Breakfast & Brunch,Burgers',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 312
    },
    {
      Name: 'WL - Daily Juice',
      Street: '3300 BEE CAVES RD',
      YelpCategories: 'Juice Bars & Smoothies,Acai Bowls,Wraps',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 41
    },
    {
      Name: 'Smokey Mo\'s Bar-B-Q',
      Street: '10621 W PARMER LN',
      YelpCategories: 'Barbeque',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 41
    },
    {
      Name: 'McDonalds\'s #27171',
      Street: '8500 E US 290 HWY',
      YelpCategories: 'Fast Food,Burgers,Coffee & Tea',
      Score: 87,
      YelpRaiting: 2,
      YelpReviewCount: 27
    },
    {
      Name: 'Dominos',
      Street: '2013 W WELLS BRANCH PKWY',
      YelpCategories: 'Pizza,Chicken Wings,Sandwiches',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: '7-Eleven Convenience Store # 36563A',
      Street: '11643 RESEARCH BLVD',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Biryani & Co.',
      Street: '11150 RESEARCH BLVD',
      YelpCategories: 'Indian',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 174
    },
    {
      Name: 'Scoreboard Sports Bar & Grill',
      Street: '6507 JESTER BLVD',
      YelpCategories: 'Sports Bars,American (Traditional),Pizza',
      Score: 81,
      YelpRaiting: 5,
      YelpReviewCount: 122
    },
    {
      Name: 'Dollar General Store # 16194',
      Street: '4800 ROSS RD',
      YelpCategories: 'Discount Store',
      Score: 89,
      YelpRaiting: 1,
      YelpReviewCount: 3
    },
    {
      Name: 'Kesos Taco House',
      Street: '600 W MARTIN LUTHER KING JR BLVD',
      YelpCategories: 'Tex-Mex,Mexican',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 104
    },
    {
      Name: 'Homewood Suites - Austin',
      Street: '4143 GOVERNORS ROW',
      YelpCategories: 'Hotels',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 39
    },
    {
      Name: 'Dunkin Donuts',
      Street: '401 W SLAUGHTER LN',
      YelpCategories: 'Donuts',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 97
    },
    {
      Name: 'Domino\'s Pizza # 9259',
      Street: '2501 E 7TH ST',
      YelpCategories: 'Chicken Wings,Pizza,Sandwiches',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 6
    },
    {
      Name: 'El Rinconcito Del Sabor # 1',
      Street: '7213 CAMERON RD',
      YelpCategories: 'Mexican',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 24
    },
    {
      Name: 'Buffalo Wild Wings #620',
      Street: '7604 N IH',
      YelpCategories: 'Chicken Wings,American (Traditional),Sports Bars',
      Score: 95,
      YelpRaiting: 2,
      YelpReviewCount: 192
    },
    {
      Name: 'Buffalo Wild Wings #621',
      Street: '13000 N IH',
      YelpCategories: 'Chicken Wings,American (Traditional),Sports Bars',
      Score: 93,
      YelpRaiting: 2,
      YelpReviewCount: 161
    },
    {
      Name: 'Buffalo Wild Wings #622',
      Street: '901 LITTLE TEXAS LN',
      YelpCategories: 'Sports Bars,American (Traditional),Chicken Wings',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 115
    },
    {
      Name: 'Brentwood Christian School',
      Street: '11908 N LAMAR BLVD',
      YelpCategories: 'Middle Schools & High Schools',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'St. James Child Development Center, Child Inc',
      Street: '1941 WEBBERVILLE RD',
      YelpCategories: 'Churches',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: '7-Eleven Convenience Store #36266A',
      Street: '8600 E US 290 HWY',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 92,
      YelpRaiting: 1,
      YelpReviewCount: 2
    },
    {
      Name: 'WL- Trinity Episcopal School of Austin',
      Street: '3901 BEE CAVES RD',
      YelpCategories: 'Education',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'Tarka Indian Kitchen',
      Street: '11501 ROCK ROSE AVE',
      YelpCategories: 'Indian',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 148
    },
    {
      Name: 'Kwik Chek',
      Street: '21024 W SH',
      YelpCategories: 'Convenience Stores',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'La Mexicana',
      Street: '5717 S IH',
      YelpCategories: 'Mexican,Grocery',
      Score: 72,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'LW - The Goddard School',
      Street: '301 MEDICAL PKWY',
      YelpCategories: 'Child Care & Day Care,Preschools,Summer Camps',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'Geraldine\'s',
      Street: '605 DAVIS ST',
      YelpCategories: 'American (New),Music Venues,Breakfast & Brunch',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 296
    },
    {
      Name: 'Kung Fu Tea',
      Street: '801 W 24TH ST',
      YelpCategories: 'Coffee & Tea,Bubble Tea,Juice Bars & Smoothies',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 147
    },
    {
      Name: 'Fresh Donuts',
      Street: '7930 THAXTON RD',
      YelpCategories: 'Donuts',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 17
    },
    {
      Name: 'Jersey Mike\'s Subs',
      Street: '4601 N LAMAR BLVD',
      YelpCategories: 'Fast Food,Delis,Sandwiches',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 17
    },
    {
      Name: 'Blue Owl Brewing',
      Street: '2400 E CESAR CHAVEZ ST',
      YelpCategories: 'Breweries',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 124
    },
    {
      Name: 'San Juanita\'s Tacos',
      Street: '4619 S CONGRESS AVE',
      YelpCategories: 'Mexican',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 73
    },
    {
      Name: 'Wholy Bagel',
      Street: '4404 W WILLIAM CANNON DR',
      YelpCategories: 'Bagels,Breakfast & Brunch,Sandwiches',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 608
    },
    {
      Name: 'Filipino Asian Mart',
      Street: '615 W SLAUGHTER LN',
      YelpCategories: 'Filipino,International Grocery',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 57
    },
    {
      Name: 'Cajun Pizza Place',
      Street: '6001 W PARMER LN',
      YelpCategories: 'Pizza,Cajun/Creole,Sandwiches',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 99
    },
    {
      Name: 'Brooklyn Pie',
      Street: '12601 TECH RIDGE BLVD',
      YelpCategories: 'Pizza',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 53
    },
    {
      Name: 'Papa Joe\'s Tex-Mex',
      Street: '917 SPRINGDALE RD',
      YelpCategories: 'Tex-Mex,Mexican',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 20
    },
    {
      Name: 'Austin Gourmet Popcorn',
      Street: '13343 N US 183 HWY',
      YelpCategories: 'Candy Stores,Popcorn Shops',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 41
    },
    {
      Name: 'Holiday Inn Austin Midtown',
      Street: '6000 MIDDLE FISKVILLE RD',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 71
    },
    {
      Name: 'Cafe 605 (Hotel Van Zandt)',
      Street: '605 DAVIS ST',
      YelpCategories: 'Hotels,Venues & Event Spaces,Wedding Planning',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 223
    },
    {
      Name: 'Contigo Catering LLC',
      Street: '3709 PROMONTORY POINT DR',
      YelpCategories: 'Caterers',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Mission Dogs',
      Street: '1701 E CESAR CHAVEZ ST',
      YelpCategories: 'Hot Dogs,Asian Fusion,American (New)',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 77
    },
    {
      Name: 'Burger King #1443',
      Street: '3427 JEFFERSON ST',
      YelpCategories: 'Burgers',
      Score: 87,
      YelpRaiting: 2,
      YelpReviewCount: 14
    },
    {
      Name: 'Burger King # 9100',
      Street: '3906 W BRAKER LN',
      YelpCategories: 'Burgers',
      Score: 73,
      YelpRaiting: 3,
      YelpReviewCount: 29
    },
    {
      Name: 'Burger King #3990',
      Street: '13450 N US 183 HWY',
      YelpCategories: 'Burgers,Fast Food',
      Score: 85,
      YelpRaiting: 2,
      YelpReviewCount: 25
    },
    {
      Name: 'Burger King #11575',
      Street: '1905 W SLAUGHTER LN',
      YelpCategories: 'Fast Food,Burgers',
      Score: 97,
      YelpRaiting: 2,
      YelpReviewCount: 20
    },
    {
      Name: 'Burger King #7306',
      Street: '700 E WILLIAM CANNON DR',
      YelpCategories: 'Burgers,Fast Food',
      Score: 92,
      YelpRaiting: 2,
      YelpReviewCount: 17
    },
    {
      Name: 'Burger King # 17526',
      Street: '2500 E RIVERSIDE DR',
      YelpCategories: 'Fast Food,Burgers',
      Score: 89,
      YelpRaiting: 2,
      YelpReviewCount: 22
    },
    {
      Name: 'Daily Juice Cafe',
      Street: '205 W 3RD ST',
      YelpCategories: 'Juice Bars & Smoothies,Acai Bowls',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 131
    },
    {
      Name: 'Hyatt Place Austin Arboretum',
      Street: '3612 TUDOR BLVD',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 80
    },
    {
      Name: 'Gandhi Bazar - Spicewood',
      Street: '8650 SPICEWOOD SPRINGS RD',
      YelpCategories: 'Grocery',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 27
    },
    {
      Name: 'Vazquez Restaurant #3',
      Street: '13729 N US 183 HWY',
      YelpCategories: 'Mexican',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 164
    },
    {
      Name: 'Nono\'s Tacos',
      Street: '1762 COLONY CREEK DR',
      YelpCategories: 'Mexican',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 7
    },
    {
      Name: 'Lala\'s',
      Street: '2207 JUSTIN LN',
      YelpCategories: 'Pool Halls,Cocktail Bars',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 201
    },
    {
      Name: 'Thom\'s Market',
      Street: '160 E RIVERSIDE DR',
      YelpCategories: 'Convenience Stores',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Little Woodrow\'s',
      Street: '12601 TECH RIDGE BLVD',
      YelpCategories: 'Sports Bars',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 34
    },
    {
      Name: 'Yo So Cool 2, LLC',
      Street: '6501 S CONGRESS AVE',
      YelpCategories: 'Coffee & Tea,Ice Cream & Frozen Yogurt,Donuts',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 46
    },
    {
      Name: 'International Food Market',
      Street: '11331 N LAMAR BLVD',
      YelpCategories: 'International Grocery',
      Score: 75,
      YelpRaiting: 4,
      YelpReviewCount: 31
    },
    {
      Name: 'Steampunk Saloon',
      Street: '700 W 6TH ST',
      YelpCategories: 'Sports Bars',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 47
    },
    {
      Name: 'Olive Garden #1044',
      Street: '8833 BURNET RD',
      YelpCategories: 'Italian,Salad',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 178
    },
    {
      Name: 'Olive Garden #1537',
      Street: '12827 N FM 620 RD',
      YelpCategories: 'Italian,Salad',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 159
    },
    {
      Name: 'Villa Taco Shack',
      Street: '4406 S CONGRESS AVE',
      YelpCategories: 'Coffee & Tea,Breakfast & Brunch,Tacos',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 31
    },
    {
      Name: 'Sushi Junai 2',
      Street: '2500 W PARMER LN',
      YelpCategories: 'Sushi Bars,Japanese',
      Score: 73,
      YelpRaiting: 4,
      YelpReviewCount: 280
    },
    {
      Name: '7-Eleven Convenience Store #39069C',
      Street: '6607 CIRCLE S RD',
      YelpCategories: 'Gas Stations,Convenience Stores,Coffee & Tea',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 5
    },
    {
      Name: 'Spun Ice Cream',
      Street: '1912 E 7TH ST',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Desserts',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 291
    },
    {
      Name: 'Central Standard',
      Street: '1603 S CONGRESS AVE',
      YelpCategories: 'Bars,American (Traditional),Seafood',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 125
    },
    {
      Name: 'El Jacalito',
      Street: '2030 E OLTORF ST',
      YelpCategories: 'Tex-Mex,Bars',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 62
    },
    {
      Name: 'Daily Juice Cafe',
      Street: '11521 N FM 620 RD',
      YelpCategories: 'Juice Bars & Smoothies,Acai Bowls',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 37
    },
    {
      Name: 'Summer Moon Coffee Bar',
      Street: '11005 BURNET RD',
      YelpCategories: 'Coffee & Tea,Coffee Roasteries',
      Score: 82,
      YelpRaiting: 5,
      YelpReviewCount: 418
    },
    {
      Name: 'Scratchouse',
      Street: '617 E 7TH ST',
      YelpCategories: 'Bars,Venues & Event Spaces',
      Score: 88,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Shanghai Chinese Restaurant',
      Street: '6718 MIDDLE FISKVILLE RD',
      YelpCategories: 'Dim Sum,Asian Fusion,Szechuan',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 430
    },
    {
      Name: 'Me Con Bistro',
      Street: '3421 W WILLIAM CANNON DR',
      YelpCategories: 'Chinese,Vietnamese,Thai',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 263
    },
    {
      Name: 'Embassy Suites Austin Central',
      Street: '5901 N IH',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 100,
      YelpRaiting: 3,
      YelpReviewCount: 123
    },
    {
      Name: 'Capital Grille Restaurant, The',
      Street: '117 W 4TH ST',
      YelpCategories: 'Steakhouses,Seafood,Wine Bars',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 266
    },
    {
      Name: 'Eddie V\'s #8501',
      Street: '301 E 5TH ST',
      YelpCategories: 'Seafood,Steakhouses,Lounges',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 995
    },
    {
      Name: 'Smoothies Paradise',
      Street: '2901 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Health Markets',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'Antone\'s Nightclub LLC',
      Street: '305 E 5TH ST',
      YelpCategories: 'Jazz & Blues,Music Venues,Bars',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 59
    },
    {
      Name: 'Best Western Plus Austin Central',
      Street: '919 E KOENIG LN',
      YelpCategories: 'Hotels',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 17
    },
    {
      Name: 'Barley Swine',
      Street: '6555 BURNET RD',
      YelpCategories: 'American (New),Bars',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 947
    },
    {
      Name: 'Squarerut Kava Bar Barton Springs, LLC',
      Street: '1601 BARTON SPRINGS RD',
      YelpCategories: 'Lounges,Cafes',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 37
    },
    {
      Name: 'Healthsouth Rehabilitation Hospital of South Austin',
      Street: '330 W BEN WHITE BLVD',
      YelpCategories: 'Physical Therapy,Speech Therapists,Occupational Therapy',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 13
    },
    {
      Name: 'Clarksville Market',
      Street: '1001 WEST LYNN ST',
      YelpCategories: 'Grocery,Beer, Wine & Spirits',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 1
    },
    {
      Name: 'Napa Flats Wood-Fired Kitchen',
      Street: '8300 N FM 620 RD',
      YelpCategories: 'Pizza,Italian',
      Score: 100,
      YelpRaiting: 4,
      YelpReviewCount: 227
    },
    {
      Name: 'BBCO, LLC dba Breed & Co',
      Street: '718 W 29TH ST',
      YelpCategories: 'Nurseries & Gardening,Hardware Stores,Kitchen & Bath',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 135
    },
    {
      Name: 'Child Craft School',
      Street: '800 W 30TH ST',
      YelpCategories: 'Preschools',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 16
    },
    {
      Name: 'A.K.A. Mixology',
      Street: '8309 RESEARCH BLVD',
      YelpCategories: 'Farmers Market',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'JD\'s Super Mart #7',
      Street: '6506 DECKER LN',
      YelpCategories: 'Gas Stations,Convenience Stores',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 6
    },
    {
      Name: 'Arlan\'s Market #25',
      Street: '7108 WOODROW AVE',
      YelpCategories: 'Grocery,Bakeries,Meat Shops',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 17
    },
    {
      Name: 'MN - Starbucks # 26036',
      Street: '12608 LEXINGTON ST',
      YelpCategories: 'Coffee & Tea',
      Score: 92,
      YelpRaiting: 3,
      YelpReviewCount: 35
    },
    {
      Name: 'Mia Italian Tapas & Bar',
      Street: '11420 ROCK ROSE AVE',
      YelpCategories: 'Italian,Tapas Bars,Breakfast & Brunch',
      Score: 76,
      YelpRaiting: 4,
      YelpReviewCount: 254
    },
    {
      Name: 'Deckhand Oyster Bar',
      Street: '4211 S LAMAR BLVD',
      YelpCategories: 'Seafood,Bars',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 304
    },
    {
      Name: 'Dollar Tree #6263',
      Street: '1628 OHLEN RD',
      YelpCategories: 'Department Stores',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 3
    },
    {
      Name: 'Gino\'s Vino Osteria',
      Street: '1239 E 51ST ST',
      YelpCategories: 'Italian,Wine Bars',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 285
    },
    {
      Name: 'Village on the Park Onion Creek LLC',
      Street: '11300 FARRAH LN',
      YelpCategories: 'Retirement Homes,Assisted Living Facilities,Memory Care',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'LW - Trattoria Toscano',
      Street: '2009 MAIN ST',
      YelpCategories: 'Italian',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 74
    },
    {
      Name: 'Comfort Inn Austin',
      Street: '700 DELMAR AVE',
      YelpCategories: 'Hotels',
      Score: 73,
      YelpRaiting: 3,
      YelpReviewCount: 52
    },
    {
      Name: 'Double R Grocery',
      Street: '4501 E MARTIN LUTHER KING JR BLVD',
      YelpCategories: 'Grocery',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 1
    },
    {
      Name: 'Kung Fu Saloon',
      Street: '11501 ROCK ROSE AVE',
      YelpCategories: 'Arcades,Sports Bars,American (Traditional)',
      Score: 79,
      YelpRaiting: 3,
      YelpReviewCount: 97
    },
    {
      Name: 'Mad Greens LLC',
      Street: '3100 ESPERANZA XING',
      YelpCategories: 'Salad,Juice Bars & Smoothies,Wraps',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 126
    },
    {
      Name: 'GROWLER USA',
      Street: '609 W 29TH ST',
      YelpCategories: 'Pubs,American (Traditional),Chicken Wings',
      Score: 83,
      YelpRaiting: 5,
      YelpReviewCount: 71
    },
    {
      Name: 'Best Western Plus, Austin Airport',
      Street: '1805 AIRPORT COMMERCE DR',
      YelpCategories: 'Hotels',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 42
    },
    {
      Name: 'BC - Chisos Grill',
      Street: '12700 HILL COUNTRY BLVD',
      YelpCategories: 'American (Traditional),Tex-Mex',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 261
    },
    {
      Name: 'Dominos Pizza',
      Street: '4201 WESTBANK DR',
      YelpCategories: 'Pizza,Chicken Wings,Sandwiches',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 13
    },
    {
      Name: 'Subway',
      Street: '9520 W US 290 HWY',
      YelpCategories: 'Fast Food,Sandwiches',
      Score: 90,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Kanji J Cuisine Inc.',
      Street: '12636 RESEARCH BLVD',
      YelpCategories: 'Ramen',
      Score: 72,
      YelpRaiting: 4,
      YelpReviewCount: 216
    },
    {
      Name: 'Manana',
      Street: '1603 S CONGRESS AVE',
      YelpCategories: 'Coffee & Tea,Bakeries,Patisserie/Cake Shop',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 111
    },
    {
      Name: 'Backbeat',
      Street: '1300 S LAMAR BLVD',
      YelpCategories: 'Cocktail Bars,Venues & Event Spaces,Beer Bar',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 81
    },
    {
      Name: 'Lavaca Street Grill',
      Street: '11420 ROCK ROSE AVE',
      YelpCategories: 'Sports Bars',
      Score: 82,
      YelpRaiting: 3,
      YelpReviewCount: 110
    },
    {
      Name: 'Lox, Box, and Barrel',
      Street: '9521 W US 290 HWY',
      YelpCategories: 'American (Traditional)',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 100
    },
    {
      Name: 'Ethics',
      Street: '422 CONGRESS AVE',
      YelpCategories: 'Music Venues,Dance Clubs',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 23
    },
    {
      Name: 'Madam Mam\'s Thai Cuisine',
      Street: '9911 BRODIE LN',
      YelpCategories: 'Thai',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 302
    },
    {
      Name: 'SV - IL CANE ROSSO/ COWTIPPING CREAMERY',
      Street: '4715 S LAMAR BLVD',
      YelpCategories: 'Pizza,Salad,Sandwiches',
      Score: 82,
      YelpRaiting: 4,
      YelpReviewCount: 243
    },
    {
      Name: 'Clearport',
      Street: '516 E 6TH ST',
      YelpCategories: 'Bars,Music Venues',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 13
    },
    {
      Name: 'Revelry Kitchen & Bar',
      Street: '1410 E 6TH ST',
      YelpCategories: 'American (Traditional),Cocktail Bars,Sports Bars',
      Score: 89,
      YelpRaiting: 5,
      YelpReviewCount: 148
    },
    {
      Name: 'Hotel Eleven',
      Street: '1123 E 11TH ST',
      YelpCategories: 'Hotels',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 7
    },
    {
      Name: 'Biriyani N Grill',
      Street: '3601 W WILLIAM CANNON DR',
      YelpCategories: 'Indian,Salad,Soup',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 134
    },
    {
      Name: 'Smoothie King',
      Street: '3201 BEE CAVES RD',
      YelpCategories: 'Health Markets,Juice Bars & Smoothies',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 10
    },
    {
      Name: 'Pita Fusion',
      Street: '13776 N US 183 HWY',
      YelpCategories: 'Sandwiches',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 134
    },
    {
      Name: 'Primrose School of Shady Hollow',
      Street: '12341 BRODIE LN',
      YelpCategories: 'Preschools,Child Care & Day Care',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 9
    },
    {
      Name: 'Charm Korean BBQ',
      Street: '1200 W HOWARD LN',
      YelpCategories: 'Barbeque,Korean,Bars',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 228
    },
    {
      Name: 'Lick Ice Creams',
      Street: '1100 S LAMAR BLVD',
      YelpCategories: 'Ice Cream & Frozen Yogurt',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 1164
    },
    {
      Name: 'MN - Taco Bell  #32068',
      Street: '11032 E US 290 HWY',
      YelpCategories: 'Fast Food,Mexican',
      Score: 99,
      YelpRaiting: 2,
      YelpReviewCount: 19
    },
    {
      Name: 'LW - Mad Greens',
      Street: '2011 MAIN ST',
      YelpCategories: 'Salad,Juice Bars & Smoothies,Vegetarian',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 73
    },
    {
      Name: 'Intel ANA Cafe',
      Street: '1300 S MOPAC EXPY',
      YelpCategories: 'Cafeteria',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 2
    },
    {
      Name: 'Mariana\'s Kitchen',
      Street: '5510 S IH',
      YelpCategories: 'Mexican,Breakfast & Brunch',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 47
    },
    {
      Name: 'Domino\'s Pizza #9285',
      Street: '3701 GUADALUPE ST',
      YelpCategories: 'Pizza,Chicken Wings,Sandwiches',
      Score: 94,
      YelpRaiting: 2,
      YelpReviewCount: 14
    },
    {
      Name: 'Graceland Oaks Event Center',
      Street: '8907 CIRCLE DR',
      YelpCategories: 'Venues & Event Spaces,Wedding Chapels',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 6
    },
    {
      Name: 'Texas Wings & Grill',
      Street: '13201 POND SPRINGS RD',
      YelpCategories: 'Chicken Wings,Burgers,Sandwiches',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 85
    },
    {
      Name: 'Mango King',
      Street: '10205 N LAMAR BLVD',
      YelpCategories: 'Desserts,Ice Cream & Frozen Yogurt,Mexican',
      Score: 81,
      YelpRaiting: 5,
      YelpReviewCount: 15
    },
    {
      Name: 'MOD Super Fast Pizza',
      Street: '500 CANYON RIDGE DR',
      YelpCategories: 'Pizza,Fast Food',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 153
    },
    {
      Name: '7-Eleven Convenience Store #36680A',
      Street: '3848 AIRPORT BLVD',
      YelpCategories: 'Gas Stations,Convenience Stores,Coffee & Tea',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 7
    },
    {
      Name: 'Kasbah Hookah Lounge',
      Street: '2714 GUADALUPE ST',
      YelpCategories: 'Hookah Bars,Coffee & Tea',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 109
    },
    {
      Name: 'Snooze, an A.M. Eatery',
      Street: '3800 N LAMAR BLVD',
      YelpCategories: 'Breakfast & Brunch,Coffee & Tea,Sandwiches',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 627
    },
    {
      Name: '7-Eleven Convenience Store #36599A',
      Street: '11613 N FM 620 RD',
      YelpCategories: 'Gas Stations,Convenience Stores,Coffee & Tea',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 4
    },
    {
      Name: 'Americas Best Value Inn',
      Street: '909 E KOENIG LN',
      YelpCategories: 'Hotels',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 49
    },
    {
      Name: '827 Ray\'s Kitchen + Cellar',
      Street: '3519 N FM 620 RD',
      YelpCategories: 'Wine Bars,French',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 111
    },
    {
      Name: 'Barley Bean',
      Street: '303 COLORADO ST',
      YelpCategories: 'Coffee & Tea,Cafes,Beer Bar',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 32
    },
    {
      Name: 'Flat Track Coffee',
      Street: '1619 E CESAR CHAVEZ ST',
      YelpCategories: 'Coffee & Tea',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 134
    },
    {
      Name: 'Firehouse Subs',
      Street: '11101 BURNET RD',
      YelpCategories: 'Sandwiches,Fast Food,Delis',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 97
    },
    {
      Name: 'Taco Joint',
      Street: '134 E RIVERSIDE DR',
      YelpCategories: 'Mexican',
      Score: 82,
      YelpRaiting: 5,
      YelpReviewCount: 274
    },
    {
      Name: 'MN - Shipley Donuts',
      Street: '11300 E US 290 HWY',
      YelpCategories: 'Donuts',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 14
    },
    {
      Name: 'AFS Cinema',
      Street: '6406 N IH',
      YelpCategories: 'Cinema,Venues & Event Spaces',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'Mama Fu\'s Asian House',
      Street: '4700 W GUADALUPE ST',
      YelpCategories: 'Chinese,Asian Fusion',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 173
    },
    {
      Name: 'La Patisserie by Luxe Sweets',
      Street: '7301 BURNET RD',
      YelpCategories: 'Desserts,Bakeries',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 56
    },
    {
      Name: 'Modern Market',
      Street: '9828 GREAT HILLS TRL',
      YelpCategories: 'Salad,Breakfast & Brunch,Sandwiches',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 237
    },
    {
      Name: 'Sweet Ritual',
      Street: '4631 AIRPORT BLVD',
      YelpCategories: 'Vegan,Ice Cream & Frozen Yogurt',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 513
    },
    {
      Name: 'Musashino Sushi Dokoro',
      Street: '2905 SAN GABRIEL ST',
      YelpCategories: 'Japanese,Sushi Bars,Desserts',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 599
    },
    {
      Name: '2 n 1 Salad Bar and Grill',
      Street: '901 W BRAKER LN',
      YelpCategories: 'Salad,Cheesesteaks,American (Traditional)',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 71
    },
    {
      Name: 'Biryani - N - Grill',
      Street: '13945 N US 183 HWY',
      YelpCategories: 'Indian',
      Score: 70,
      YelpRaiting: 4,
      YelpReviewCount: 131
    },
    {
      Name: 'Paradise On Ice, LLC',
      Street: '1700 GRAND AVENUE PKWY',
      YelpCategories: 'Cocktail Bars',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 28
    },
    {
      Name: 'Toss Pizzeria and Pub',
      Street: '2901 S 1ST ST',
      YelpCategories: 'Pizza,Pubs,Sports Bars',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 254
    },
    {
      Name: 'Casa Arandinas Mexican Restaurant',
      Street: '9001 BRODIE LN',
      YelpCategories: 'Mexican',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 137
    },
    {
      Name: 'Boiler Nine',
      Street: '800 W CESAR CHAVEZ ST',
      YelpCategories: 'American (New),Bars',
      Score: 89,
      YelpRaiting: 4,
      YelpReviewCount: 203
    },
    {
      Name: 'Towne Place Suites Austin Northwest',
      Street: '10024 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Hotels',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 25
    },
    {
      Name: 'Embassy Suites Restaurant',
      Street: '300 S CONGRESS AVE',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 134
    },
    {
      Name: 'Serasana',
      Street: '3801 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Yoga,Massage,Acupuncture',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 26
    },
    {
      Name: 'Seton Medical Center Austin - Doctor\'s Lounge',
      Street: '1201 W 38TH ST',
      YelpCategories: 'Hospitals,Emergency Rooms',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 131
    },
    {
      Name: 'Lotus And Cleaver',
      Street: '11501 ROCK ROSE AVE',
      YelpCategories: 'Asian Fusion,Barbeque,Chinese',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 103
    },
    {
      Name: 'Beer Plant, The',
      Street: '3110 WINDSOR RD',
      YelpCategories: 'Vegan,Beer Bar,Gastropubs',
      Score: 83,
      YelpRaiting: 4,
      YelpReviewCount: 297
    },
    {
      Name: 'Junes Bar',
      Street: '1722 S CONGRESS AVE',
      YelpCategories: 'Wine Bars,Spanish,Tapas Bars',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 200
    },
    {
      Name: 'Garden Spot Cafe & Catering',
      Street: '9415 BURNET RD',
      YelpCategories: 'Caterers,Delis',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 82
    },
    {
      Name: 'P. Terry\'s',
      Street: '5701 N IH',
      YelpCategories: 'Fast Food,Burgers',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 79
    },
    {
      Name: 'Juiceland',
      Street: '6301 W PARMER LN',
      YelpCategories: 'Juice Bars & Smoothies,Vegan,Vegetarian',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 23
    },
    {
      Name: 'Nordstrom Bazille',
      Street: '3111 PALM WAY',
      YelpCategories: 'American (New),Cocktail Bars',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 48
    },
    {
      Name: 'Starbucks # 20588',
      Street: '516 W OLTORF ST',
      YelpCategories: 'Coffee & Tea',
      Score: 97,
      YelpRaiting: 3,
      YelpReviewCount: 20
    },
    {
      Name: 'Little Woodrow\'s',
      Street: '5425 BURNET RD',
      YelpCategories: 'Sports Bars,American (Traditional)',
      Score: 98,
      YelpRaiting: 3,
      YelpReviewCount: 61
    },
    {
      Name: 'Hop Doddy Burger Bar',
      Street: '4615 N LAMAR BLVD',
      YelpCategories: 'American (Traditional),Burgers,Salad',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 183
    },
    {
      Name: 'Civil Goat Coffee Co.',
      Street: '704 N CUERNAVACA DR',
      YelpCategories: 'Coffee & Tea,Coffee Roasteries',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 32
    },
    {
      Name: 'Peached Social House',
      Street: '6500 N LAMAR BLVD',
      YelpCategories: 'Venues & Event Spaces,Wedding Planning,Party & Event Planning',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 14
    },
    {
      Name: 'Dream Bakery',
      Street: '9422 ANDERSON MILL RD',
      YelpCategories: 'Bakeries,Desserts,Custom Cakes',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 143
    },
    {
      Name: 'Taste of Ethiopia Inc.',
      Street: '3801 S CONGRESS AVE',
      YelpCategories: 'Ethiopian,Vegan,Vegetarian',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 187
    },
    {
      Name: 'Mort Subite',
      Street: '308 CONGRESS AVE',
      YelpCategories: 'Pubs,Beer Bar,Wine Bars',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 66
    },
    {
      Name: 'MN - Whataburger #1108',
      Street: '12003 E US 290 HWY',
      YelpCategories: 'Burgers,Fast Food',
      Score: 100,
      YelpRaiting: 2,
      YelpReviewCount: 36
    },
    {
      Name: 'Sip Saam Thai',
      Street: '6301 W PARMER LN',
      YelpCategories: 'Thai',
      Score: 96,
      YelpRaiting: 5,
      YelpReviewCount: 540
    },
    {
      Name: 'Cafe Express',
      Street: '3418 N LAMAR BLVD',
      YelpCategories: 'Cafes,Sandwiches,Salad',
      Score: 78,
      YelpRaiting: 3,
      YelpReviewCount: 159
    },
    {
      Name: 'LW - Torchy\'s Tacos',
      Street: '1945 MEDICAL DR',
      YelpCategories: 'Tacos,Breakfast & Brunch',
      Score: 98,
      YelpRaiting: 4,
      YelpReviewCount: 138
    },
    {
      Name: 'Dragonbeard Kitchen',
      Street: '8201 CROSS PARK DR',
      YelpCategories: 'Asian Fusion,Hawaiian,Diners',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 188
    },
    {
      Name: 'Sur La Table',
      Street: '11800 DOMAIN DR',
      YelpCategories: 'Appliances,Cooking Classes,Home Decor',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 14
    },
    {
      Name: 'Accent Food Services',
      Street: '7700 W PARMER LN',
      YelpCategories: 'IT Services & Computer Repair',
      Score: 99,
      YelpRaiting: 2,
      YelpReviewCount: 6
    },
    {
      Name: 'Brentwood Social House',
      Street: '1601 W KOENIG LN',
      YelpCategories: 'Cafes,Coffee & Tea,Bakeries',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 167
    },
    {
      Name: 'RW - 360 Pizza',
      Street: '2712 BEE CAVES RD',
      YelpCategories: 'Pizza,Sandwiches,Salad',
      Score: 71,
      YelpRaiting: 4,
      YelpReviewCount: 22
    },
    {
      Name: 'Cafe Blue III LLC',
      Street: '340 E 2ND ST',
      YelpCategories: 'Seafood,Steakhouses,Cocktail Bars',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 146
    },
    {
      Name: 'iFratelli Pizza Arboretum',
      Street: '10001 RESEARCH BLVD',
      YelpCategories: 'Golf,Golf Lessons',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 17
    },
    {
      Name: 'Whichcraft',
      Street: '1900 SIMOND AVE',
      YelpCategories: 'Beer Bar,Beer, Wine & Spirits,Coffee & Tea',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 46
    },
    {
      Name: '7-Eleven Convenience Store # 371138A',
      Street: '2803 SAN JACINTO BLVD',
      YelpCategories: 'Convenience Stores,Coffee & Tea',
      Score: 86,
      YelpRaiting: 1,
      YelpReviewCount: 3
    },
    {
      Name: 'Towneplace Suites Austin/North Tech Ridge',
      Street: '12427 TECH RIDGE BLVD',
      YelpCategories: 'Hotels',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 11
    },
    {
      Name: 'Subway at Westlake',
      Street: '3600 N CAPITAL OF TEXAS HWY',
      YelpCategories: 'Chiropractors,Nutritionists',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Jersey Giant Pizza',
      Street: '7318 MC NEIL DR',
      YelpCategories: 'Pizza,Italian',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 69
    },
    {
      Name: 'Mango 8',
      Street: '705 W 24TH ST',
      YelpCategories: 'Shaved Ice,Bubble Tea,Juice Bars & Smoothies',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 181
    },
    {
      Name: 'Nate\'s Baked Goods & Coffee',
      Street: '401 ORCHARD ST',
      YelpCategories: 'Coffee & Tea,Breakfast & Brunch,Bakeries',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 35
    },
    {
      Name: '7 - Eleven # 36641A',
      Street: '3431 W WILLIAM CANNON DR',
      YelpCategories: 'Convenience Stores,Gas Stations,Coffee & Tea',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 2
    },
    {
      Name: 'Aviator Pizza & Drafthouse',
      Street: '6501 S CONGRESS AVE',
      YelpCategories: 'Pizza,Beer Bar,Sandwiches',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 234
    },
    {
      Name: 'Pupuseria Usuluteca y Mas',
      Street: '9306 N LAMAR BLVD',
      YelpCategories: 'Salvadoran',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 6
    },
    {
      Name: 'Xplor',
      Street: '9706 ANDERSON MILL RD',
      YelpCategories: 'Preschools,Child Care & Day Care',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 5
    },
    {
      Name: 'Grand Lux Cafe',
      Street: '11506 CENTURY OAKS TER',
      YelpCategories: 'American (Traditional),Desserts',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 241
    },
    {
      Name: 'Texadelphia',
      Street: '9828 GREAT HILLS TRL',
      YelpCategories: 'Sandwiches,Cheesesteaks,American (New)',
      Score: 95,
      YelpRaiting: 3,
      YelpReviewCount: 76
    },
    {
      Name: 'LW - Vivel Crepes & Coffee',
      Street: '2011 MAIN ST',
      YelpCategories: 'Creperies,Coffee & Tea,Juice Bars & Smoothies',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 160
    },
    {
      Name: 'Mad Greens LLC',
      Street: '13000 N FM 620 RD',
      YelpCategories: 'Salad,Juice Bars & Smoothies,Wraps',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 61
    },
    {
      Name: 'In-N-Out Burger',
      Street: '2700 GUADALUPE ST',
      YelpCategories: 'Burgers,Fast Food',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 85
    },
    {
      Name: 'Grand Oriental Express Co. Ltd',
      Street: '7517 CAMERON RD',
      YelpCategories: 'Buffets,Chinese',
      Score: 75,
      YelpRaiting: 3,
      YelpReviewCount: 118
    },
    {
      Name: 'Buddy\'s',
      Street: '9001 CAMERON RD',
      YelpCategories: 'Food Court,Mexican',
      Score: 89,
      YelpRaiting: 3,
      YelpReviewCount: 13
    },
    {
      Name: 'Dominos Pizza',
      Street: '9001 CAMERON RD',
      YelpCategories: 'Pizza',
      Score: 93,
      YelpRaiting: 1,
      YelpReviewCount: 2
    },
    {
      Name: 'Dell Seton Medical Center at the University of Texas',
      Street: '1500 RED RIVER ST',
      YelpCategories: 'Hospitals,Emergency Rooms',
      Score: 93,
      YelpRaiting: 3,
      YelpReviewCount: 20
    },
    {
      Name: 'Culinary Dropout',
      Street: '11721 ROCK ROSE AVE',
      YelpCategories: 'Bars,American (New),Music Venues',
      Score: 94,
      YelpRaiting: 4,
      YelpReviewCount: 846
    },
    {
      Name: 'Cannon + Belle Restaurant',
      Street: '500 E 4TH ST',
      YelpCategories: 'Bars,Breakfast & Brunch,American (Traditional)',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 111
    },
    {
      Name: 'Las Mangonadas',
      Street: '1144 AIRPORT BLVD',
      YelpCategories: 'Desserts,Ice Cream & Frozen Yogurt',
      Score: 87,
      YelpRaiting: 5,
      YelpReviewCount: 12
    },
    {
      Name: 'Rio Rita Lounge',
      Street: '1203 CHICON ST',
      YelpCategories: 'Coffee & Tea,Lounges',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 20
    },
    {
      Name: 'Rio Market',
      Street: '620 W 29TH ST',
      YelpCategories: 'Convenience Stores',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 1
    },
    {
      Name: 'Taqueria Krystal',
      Street: '13620 N FM 973 RD',
      YelpCategories: 'Mexican',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 13
    },
    {
      Name: 'Turf N Surf',
      Street: '3121 S LAMAR BLVD',
      YelpCategories: 'Food Trucks,Seafood,Chicken Wings',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 127
    },
    {
      Name: 'Oakwood BBQ',
      Street: '307 E BRAKER LN',
      YelpCategories: 'Barbeque',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 150
    },
    {
      Name: 'Xplor Childcare',
      Street: '5915 LA CROSSE AVE',
      YelpCategories: 'Preschools,Child Care & Day Care',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 4
    },
    {
      Name: 'Lazarus Brewing Operations',
      Street: '1902 E 6TH ST',
      YelpCategories: 'Breweries,Tacos,Coffee Roasteries',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 253
    },
    {
      Name: 'Aloft Austin Northwest',
      Street: '14020 N US 183 HWY',
      YelpCategories: 'Hotels',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 35
    },
    {
      Name: 'Soup Peddler, The',
      Street: '1112 N LAMAR BLVD',
      YelpCategories: 'Sandwiches,Soup,Juice Bars & Smoothies',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 31
    },
    {
      Name: 'TJ Donuts & Kolaches',
      Street: '12129 N FM 620 RD',
      YelpCategories: 'Donuts',
      Score: 93,
      YelpRaiting: 5,
      YelpReviewCount: 36
    },
    {
      Name: 'Russell\'s Bakery and Coffee Bar',
      Street: '3339 HANCOCK DR',
      YelpCategories: 'Bakeries,Coffee & Tea,Sandwiches',
      Score: 85,
      YelpRaiting: 4,
      YelpReviewCount: 186
    },
    {
      Name: 'Flyrite Chicken Inc',
      Street: '6539 BURNET RD',
      YelpCategories: 'Sandwiches,Fast Food,Burgers',
      Score: 85,
      YelpRaiting: 3,
      YelpReviewCount: 196
    },
    {
      Name: 'Way South Philly Deli',
      Street: '5222 BURNET RD',
      YelpCategories: 'Sandwiches,Delis,Steakhouses',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 126
    },
    {
      Name: 'Staybridge Suites South Austin',
      Street: '901 LITTLE TEXAS LN',
      YelpCategories: 'Hotels',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 12
    },
    {
      Name: 'Lazydaze Franchise Austin',
      Street: '1738 W ANDERSON LN',
      YelpCategories: 'Head Shops,Coffee & Tea',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Potato Club',
      Street: '11200 LAKELINE MALL DR',
      YelpCategories: 'Delis,Falafel,Greek',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 18
    },
    {
      Name: 'Cyclo Restaurant',
      Street: '13000 N IH',
      YelpCategories: 'Vietnamese,Chinese,Soup',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 98
    },
    {
      Name: 'P. Terry\'s Burger Stand # 14',
      Street: '13770 N US 183 HWY',
      YelpCategories: 'Fast Food,Burgers',
      Score: 95,
      YelpRaiting: 4,
      YelpReviewCount: 63
    },
    {
      Name: 'Tasty Spoon, The',
      Street: '1413 S 1ST ST',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Gelato,Coffee & Tea',
      Score: 95,
      YelpRaiting: 5,
      YelpReviewCount: 104
    },
    {
      Name: 'Poke - Poke',
      Street: '2320 HANCOCK DR',
      YelpCategories: 'Hawaiian,Poke,Acai Bowls',
      Score: 92,
      YelpRaiting: 5,
      YelpReviewCount: 87
    },
    {
      Name: 'Biderman\'s Deli, LLC',
      Street: '3742 FAR WEST BLVD',
      YelpCategories: 'Delis,Bagels,Sandwiches',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 176
    },
    {
      Name: '28 Alimentari',
      Street: '454 W 2ND ST',
      YelpCategories: 'Gelato,Italian,Breakfast & Brunch',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 25
    },
    {
      Name: 'JuiceLand',
      Street: '13096 N US 183 HWY',
      YelpCategories: 'Juice Bars & Smoothies,Vegan,Vegetarian',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 10
    },
    {
      Name: 'YETI Coolers, LLC',
      Street: '220 S CONGRESS AVE',
      YelpCategories: 'Sporting Goods',
      Score: 100,
      YelpRaiting: 5,
      YelpReviewCount: 43
    },
    {
      Name: 'Alamo Drafthouse Cinema',
      Street: '1911 ALDRICH ST',
      YelpCategories: 'Cinema',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 161
    },
    {
      Name: 'Taverna',
      Street: '3120 PALM WAY',
      YelpCategories: 'Italian',
      Score: 79,
      YelpRaiting: 4,
      YelpReviewCount: 147
    },
    {
      Name: 'Taqueria Arandinas Botanero Sports Bar',
      Street: '9616 N LAMAR BLVD',
      YelpCategories: 'Mexican',
      Score: 86,
      YelpRaiting: 3,
      YelpReviewCount: 27
    },
    {
      Name: 'Hardin House',
      Street: '2206 RIO GRANDE ST',
      YelpCategories: 'Hostels',
      Score: 89,
      YelpRaiting: 1,
      YelpReviewCount: 1
    },
    {
      Name: 'Lebowskis at Westgate',
      Street: '2701 W WILLIAM CANNON DR',
      YelpCategories: 'Bowling,Sports Bars',
      Score: 97,
      YelpRaiting: 4,
      YelpReviewCount: 91
    },
    {
      Name: 'Calvert Circle C',
      Street: '5701 W SLAUGHTER LN',
      YelpCategories: 'Emergency Rooms',
      Score: 96,
      YelpRaiting: 3,
      YelpReviewCount: 10
    },
    {
      Name: 'Dell Seton Medical Center University of Texas Coffee Shop',
      Street: '1500 RED RIVER ST',
      YelpCategories: 'Hospitals,Emergency Rooms',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 20
    },
    {
      Name: 'J.T. Youngblood\'s Restaurant',
      Street: '1905 ALDRICH ST',
      YelpCategories: 'Chicken Shop,Ice Cream & Frozen Yogurt,Cocktail Bars',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 200
    },
    {
      Name: 'Super 8 Capitol Downtown',
      Street: '1201 N IH',
      YelpCategories: 'Hotels',
      Score: 99,
      YelpRaiting: 3,
      YelpReviewCount: 37
    },
    {
      Name: 'Express Food Mart',
      Street: '8201 CROSS PARK DR',
      YelpCategories: 'Beer, Wine & Spirits,Convenience Stores',
      Score: 91,
      YelpRaiting: 2,
      YelpReviewCount: 3
    },
    {
      Name: 'Raising Canes Restaurants LLC.',
      Street: '2109 E RIVERSIDE DR',
      YelpCategories: 'Fast Food,Chicken Wings,Sandwiches',
      Score: 99,
      YelpRaiting: 4,
      YelpReviewCount: 35
    },
    {
      Name: 'SV - MAD Greens',
      Street: '5601 BRODIE LN',
      YelpCategories: 'Salad,Wraps,Juice Bars & Smoothies',
      Score: 84,
      YelpRaiting: 4,
      YelpReviewCount: 70
    },
    {
      Name: 'Residence Inn',
      Street: '6000 W US 290 HWY',
      YelpCategories: 'Hotels,Venues & Event Spaces',
      Score: 91,
      YelpRaiting: 4,
      YelpReviewCount: 7
    },
    {
      Name: 'Austin Ridge Bible Church',
      Street: '9300 FM 2244 RD',
      YelpCategories: 'Churches',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 10
    },
    {
      Name: 'Fire Bowl Cafe',
      Street: '13000 N FM 620 RD',
      YelpCategories: 'Chinese,Asian Fusion',
      Score: 88,
      YelpRaiting: 4,
      YelpReviewCount: 54
    },
    {
      Name: 'Royal Fig Catering',
      Street: '2100 W WILLIAM CANNON DR',
      YelpCategories: 'Caterers,Party & Event Planning',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 77
    },
    {
      Name: 'Little Caesars',
      Street: '5320 CAMERON RD',
      YelpCategories: 'Pizza',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 10
    },
    {
      Name: 'Unbarlievable',
      Street: '76 RAINEY ST',
      YelpCategories: 'Bars',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 131
    },
    {
      Name: 'Austinite Market, The',
      Street: '1017 BARTON SPRINGS RD',
      YelpCategories: 'Convenience Stores',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 14
    },
    {
      Name: 'Eurasia Sushi Bar & Seafood',
      Street: '7101 W SH',
      YelpCategories: 'Sushi Bars,Seafood,Cocktail Bars',
      Score: 75,
      YelpRaiting: 5,
      YelpReviewCount: 231
    },
    {
      Name: 'Moreliana Meat Market',
      Street: '5405 S PLEASANT VALLEY RD',
      YelpCategories: 'Grocery,Mexican',
      Score: 77,
      YelpRaiting: 3,
      YelpReviewCount: 1
    },
    {
      Name: 'The Highlander Hotel',
      Street: '6200 MIDDLE FISKVILLE RD',
      YelpCategories: 'Hotels',
      Score: 91,
      YelpRaiting: 3,
      YelpReviewCount: 68
    },
    {
      Name: 'Velvet Taco',
      Street: '11501 ROCK ROSE AVE',
      YelpCategories: 'Tacos,American (New),Breakfast & Brunch',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 424
    },
    {
      Name: 'Heritage at Hunters Chase, The',
      Street: '12151 HUNTERS CHASE DR',
      YelpCategories: 'Assisted Living Facilities',
      Score: 98,
      YelpRaiting: 5,
      YelpReviewCount: 5
    },
    {
      Name: 'Papalote Taco House',
      Street: '3632 S CONGRESS AVE',
      YelpCategories: 'Tacos',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 43
    },
    {
      Name: 'Autumn Leaves of South Austin',
      Street: '5200 DAVIS LN',
      YelpCategories: 'Assisted Living Facilities',
      Score: 94,
      YelpRaiting: 5,
      YelpReviewCount: 2
    },
    {
      Name: 'Marco\'s Pizza #5092',
      Street: '14815 DESSAU RD',
      YelpCategories: 'Pizza,Desserts,Chicken Wings',
      Score: 93,
      YelpRaiting: 4,
      YelpReviewCount: 42
    },
    {
      Name: 'Taqueria Villanueva',
      Street: '9405 N IH',
      YelpCategories: 'Food Stands,Tacos',
      Score: 91,
      YelpRaiting: 5,
      YelpReviewCount: 3
    },
    {
      Name: 'Nelo\'s Cycles & Coffee',
      Street: '8108 MESA DR',
      YelpCategories: 'Bikes,Bike Repair/Maintenance',
      Score: 88,
      YelpRaiting: 5,
      YelpReviewCount: 44
    },
    {
      Name: 'Barrett\'s Coffee',
      Street: '713 W ST JOHNS AVE',
      YelpCategories: 'Coffee & Tea,Coffee Roasteries',
      Score: 81,
      YelpRaiting: 5,
      YelpReviewCount: 54
    },
    {
      Name: '23 Flavors & Snacks',
      Street: '5808 MANOR RD',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Hot Dogs',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 10
    },
    {
      Name: 'Whip In',
      Street: '1950 S IH',
      YelpCategories: 'Grocery,Bars,Gastropubs',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 679
    },
    {
      Name: 'Blenders and Bowls',
      Street: '1625 E 6TH ST',
      YelpCategories: 'Acai Bowls,Juice Bars & Smoothies',
      Score: 90,
      YelpRaiting: 5,
      YelpReviewCount: 40
    },
    {
      Name: 'Mastercraft Beverage DBA Friends and Allies',
      Street: '979 SPRINGDALE RD',
      YelpCategories: 'Breweries',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 36
    },
    {
      Name: 'First Watch Restaurants #351',
      Street: '2525 W ANDERSON LN',
      YelpCategories: 'Breakfast & Brunch,Cafes,American (Traditional)',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 134
    },
    {
      Name: 'WL - Chick-Fil-A',
      Street: '701 S CAPITAL OF TEXAS HWY',
      YelpCategories: 'Fast Food',
      Score: 99,
      YelpRaiting: 5,
      YelpReviewCount: 43
    },
    {
      Name: 'Tacos Durango Inc.',
      Street: '11900 METRIC BLVD',
      YelpCategories: 'Mexican,Breakfast & Brunch',
      Score: 81,
      YelpRaiting: 4,
      YelpReviewCount: 30
    },
    {
      Name: 'Two Bucks',
      Street: '503 E 6TH ST',
      YelpCategories: 'Cocktail Bars',
      Score: 86,
      YelpRaiting: 4,
      YelpReviewCount: 18
    },
    {
      Name: 'The Rolling Rooster',
      Street: '13717 BURNET RD',
      YelpCategories: 'Southern,Comfort Food,Chicken Wings',
      Score: 74,
      YelpRaiting: 5,
      YelpReviewCount: 198
    },
    {
      Name: 'Kinda Tropical',
      Street: '3501 E 7TH ST',
      YelpCategories: 'Wine Bars,Breakfast & Brunch,Beer Bar',
      Score: 87,
      YelpRaiting: 4,
      YelpReviewCount: 43
    },
    {
      Name: 'Sam\'s Town Point',
      Street: '2115 ALLRED DR',
      YelpCategories: 'Dive Bars,Pool Halls,Music Venues',
      Score: 97,
      YelpRaiting: 5,
      YelpReviewCount: 33
    },
    {
      Name: 'Foodie Kids',
      Street: '3818 FAR WEST BLVD',
      YelpCategories: 'Cooking Classes',
      Score: 90,
      YelpRaiting: 4,
      YelpReviewCount: 11
    },
    {
      Name: 'Longhorn Pizza and Grill',
      Street: '2820 GUADALUPE ST',
      YelpCategories: 'Pizza',
      Score: 78,
      YelpRaiting: 2,
      YelpReviewCount: 56
    },
    {
      Name: 'Bon Temps Crueset',
      Street: '6550 COMANCHE TRL',
      YelpCategories: 'Bars,Cajun/Creole,Seafood',
      Score: 83,
      YelpRaiting: 3,
      YelpReviewCount: 95
    },
    {
      Name: 'Guadalupe Halal Guys',
      Street: '2915 GUADALUPE ST',
      YelpCategories: 'Halal',
      Score: 87,
      YelpRaiting: 3,
      YelpReviewCount: 116
    },
    {
      Name: 'Little Barrel and Brown',
      Street: '1716 S CONGRESS AVE',
      YelpCategories: 'American (New),French,Cocktail Bars',
      Score: 96,
      YelpRaiting: 4,
      YelpReviewCount: 363
    },
    {
      Name: 'The Bee Grocery',
      Street: '209 E 6TH ST',
      YelpCategories: 'Delis,Grocery',
      Score: 92,
      YelpRaiting: 4,
      YelpReviewCount: 59
    },
    {
      Name: 'Wild Chix & Waffles',
      Street: '2525 W ANDERSON LN',
      YelpCategories: 'Ice Cream & Frozen Yogurt,Hot Dogs',
      Score: 81,
      YelpRaiting: 3,
      YelpReviewCount: 19
    }
  ]