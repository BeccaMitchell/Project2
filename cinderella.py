# Import dependencies
import pandas as pd
import datetime as dt

# Read file in with Pandas
file = pd.read_excel("Scores.xlsx")
df=pd.DataFrame(file)

# Clear inspection data outside of Routine Inspections and use only dates from 2018
df=df.loc[df["Process Description"]=="Routine Inspection"].loc[df['Inspection Date'].dt.year == 2018]

# Clean "restaurants" to eliminate corner stores, flea markets, places unavailable to the public such as schools, work cafeteria, sorority houses, catering companies, retirement centers, etc.
df = df[~df['Restaurant Name'].str.contains('7 - Eleven', na=False)]
df = df[~df['Restaurant Name'].str.contains('Elementary', na=False)]
df = df[~df['Restaurant Name'].str.contains('Schools', na=False)]
df = df[~df['Restaurant Name'].str.contains('Montessori', na=False)]
df = df[~df['Restaurant Name'].str.contains('Stadium', na=False)]
df = df[~df['Restaurant Name'].str.contains('Preschool', na=False)]
df = df[~df['Restaurant Name'].str.contains('Retirement', na=False)]
df = df[~df['Restaurant Name'].str.contains('Recreation', na=False)]
df = df[~df['Restaurant Name'].str.contains('Services', na=False)]
df = df[~df['Restaurant Name'].str.contains('School', na=False)]
df = df[~df['Restaurant Name'].str.contains('Center', na=False)]
df = df[~df['Restaurant Name'].str.contains('Store', na=False)]
df = df[~df["Restaurant Name"].str.contains('Food Mart', na=False)]
df = df[~df["Restaurant Name"].str.contains('Flea', na=False)]
df = df[~df["Restaurant Name"].str.contains('Carwash', na=False)]
df = df[~df["Restaurant Name"].str.contains('Delta Delta', na=False)]

