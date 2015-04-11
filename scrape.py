
import numpy
import sys
import time
import urllib2
import csv	
import os
import json
from util import *
from bs4 import BeautifulSoup

#Need to: 
#Iterate over all teams
#Iterate over all seasons of that team
#Add that team+season and a team_id into a list
#Grab all player stats of that team, append team_id to those stats
#Add those player stats to a list of all players
#put the teams list into a CSV
#put the players list into a CSV


#returns list of urls for the years in which given team existed
def getURLsOfTeam(team):
	soup= grabSiteData("http://www.basketball-reference.com/teams/"+team)
	rows= soup.find("tbody").findAll("tr")
	urls= []
	for row in rows:
		dat= row.findAll("td")
	 	season= dat[0].text
	 	url= dat[2].find("a")["href"].encode("ascii","ignore")
		urls += [url]
	return urls

#parses out year from url, e.g. "/teams/BOS/2013.html"
def getYearFromURL(url):
	return int(url[url.rfind('/')+1:url.rfind(".html")])

#converts unicode string into a string that will be printed w/ double quotes
def myStr(string):
	if type(string)!=str:
		string= str(string)
	#print string.encode('ascii', 'ignore'), json.dumps(string.encode('ascii', 'ignore'))
	return string.encode('ascii', 'ignore')#json.dumps(string.encode('ascii', 'ignore'))

#returns list of {player, team_id, player stats} dicts
def genPlayerListForTeam(url,team_id,player_id):
	soup= grabSiteData("http://www.basketball-reference.com"+url)

	#list of stats in order that they appear in perGameTable
	perGameHeader= soup.find('div', {"id" : "all_per_game"}).find('thead')
	statList= [elem["data-stat"] for elem in perGameHeader.findAll("th")][1:]
	#player_id, name, team_id, link, then rest of stats in order
	statList= [u'player_id'] + [statList[0]] + [u'team_id', u'link'] + statList[1:]
	#print "\n\n\n\n\nSTATLIST", statList, "\n\n\n\n\n"

	#table of stats for each player
	perGameTable= soup.find('div', {"id" : "all_per_game"}).find('tbody')
	rows= perGameTable.findAll("tr")
	playerStatsForDB= []

	#add win shares to dicts
	for row in rows: 
		tds= row.findAll("td")[1:]
		values= [myStr(elem.text) for elem in tds]
		link= myStr(tds[0].find("a")["href"])
		values= [myStr(player_id),values[0],myStr(team_id),link] + values[1:]

		rowStats= []
		for value in values:
			#print value
			rowStats.append(value)
		#print "Player:", rowStats
		playerStatsForDB.append(rowStats)
		player_id += 1

	#print playerStatsForDB
	return playerStatsForDB, player_id

#generates list of teams and list of players for each team
#player dicts have a "team_id" field that connects them back to their team
def genTables(teams):
	team_list= [] 
	player_list= []
	team_id= 200
	player_id= 400
	for team in teams:
		print "\n\n\n\n\n"+team+"\n"
		print "getting urls"
		urls= getURLsOfTeam(team)
		print "got urls"
		for url in urls:
			print url
			yr= getYearFromURL(url)
			#team schema order: team_id, name, year
			team_stats= [team_id, team, yr]
			team_list.append(team_stats)
			p_list, player_id= genPlayerListForTeam(url, team_id, player_id)
			player_list += p_list
			team_id += 1
		print "\n\n\n"
	return team_list, player_list


def listsToCSV(lists,fn):
	csv_file= open(fn,'w+')
	csv_wr = csv.writer(csv_file)
	for row in lists:
		csv_wr.writerow(row)

if __name__ == "__main__":
	start= time.time()
	teams= ["ATL","BOS","BRK","CHA","CHI","CLE","DAL","DEN","DET","GSW","HOU","IND","LAC","LAL","MEM","MIA","MIL","MIN","NOP","NYK","OKC","ORL","PHI","PHO","POR","SAC","SAS","TOR","UTA","WAS"]

	t,p= genTables(teams)
	print "\n\n\n"
	print t
	print "\n\n\n"
	print p
	
	listsToCSV(t,"teams2.csv")
	listsToCSV(p,"players2.csv")

	print "Time taken:", time.time()-start