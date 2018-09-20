# Simple GitHub repo info scrapper using BeautifulSoup

from bs4 import BeautifulSoup
import requests

username = 'q349wang'
r  = requests.get('https://github.com/'+username+'?tab=repositories')

data = r.text

repoSoup = BeautifulSoup(data, 'html.parser')

repos = repoSoup.find(id="user-repositories-list").find_all("li")

repoNames = []
repoInfo = []

file = open("tmp/repoInfo.txt", "w")

for repo in repos:
	name = repo.find("a").get_text().strip()
	repoNames.append(name)
	r = requests.get('https://github.com/'+username+'/' + name)
	data = r.text
	soup = BeautifulSoup(data, 'html.parser')

	descDiv = soup.find(id="readme")
	desc = ""
	if descDiv is None:
		desc =""
	else:
		desc = descDiv.find("p").get_text()
	repoInfo.append(desc)
	print(name)
	print(desc)
	print()

	file.write(name + "\n")
	file.write(desc + "\n")
	file.write("\n")

file.close()

