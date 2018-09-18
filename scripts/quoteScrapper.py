# Simple quote scrapper using BeautifulSoup

from bs4 import BeautifulSoup
import requests

r  = requests.get('https://www.brainyquote.com/topics/lobster?vm=l')

data = r.text

soup = BeautifulSoup(data, 'html.parser')

quotes = soup.find_all("a", class_="b-qt")
authors = soup.find_all("a", class_="bq-aut")

for quote, author in zip(quotes, authors):
    print(quote.get_text())
    print(author.get_text())
    print()

