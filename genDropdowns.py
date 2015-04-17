import numpy
import sys
import time
import urllib2
import json
from util import *
from bs4 import BeautifulSoup

statLists= [['age','g','fg_per_g','fga_per_g','fg_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','ast_per_g','pf_per_g','pts_per_g'],['age','g','fg_per_g','fga_per_g','fg_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','trb_per_g','ast_per_g','pf_per_g','pts_per_g'],['age','g','mp_per_g','fg_per_g','fga_per_g','fg_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','trb_per_g','ast_per_g','pf_per_g','pts_per_g'],['age','g','mp_per_g','fg_per_g','fga_per_g','fg_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','orb_per_g','drb_per_g','trb_per_g','ast_per_g','stl_per_g','blk_per_g','pf_per_g','pts_per_g'],['age','g','mp_per_g','fg_per_g','fga_per_g','fg_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','orb_per_g','drb_per_g','trb_per_g','ast_per_g','stl_per_g','blk_per_g','tov_per_g','pf_per_g','pts_per_g'],['age','g','gs','mp_per_g','fg_per_g','fga_per_g','fg_pct','fg3_per_g','fg3a_per_g','fg3_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','orb_per_g','drb_per_g','trb_per_g','ast_per_g','stl_per_g','blk_per_g','tov_per_g','pf_per_g','pts_per_g']]
yearToStatList= {1947:0,1948:0,1949:0,1950:0,1951:1,1952:2,1953:2,1954:2,1955:2,1956:2,1957:2,1958:2,1959:2,1960:2,1961:2,1962:2,1963:2,1964:2,1965:2,1966:2,1967:2,1968:2,1969:2,1970:2,1971:2,1972:2,1973:2,1974:3,1975:3,1976:3,1977:3,1978:4,1979:4,1980:5,1981:5,1982:5,1983:5,1984:5,1985:5,1986:5,1987:5,1988:5,1989:5,1990:5,1991:5,1992:5,1993:5,1994:5,1995:5,1996:5,1997:5,1998:5,1999:5,2000:5,2001:5,2002:5,2003:5,2004:5,2005:5,2006:5,2007:5,2008:5,2009:5,2010:5,2011:5,2012:5,2013:5,2014:5,2015:5}

def getSeasonsPerTeam(teams,folder):
	teamSeasons= {}
	for i,team in enumerate(teams):
		print i, team
		teamSeasons[team]= getTeamYearsFromFolder(team,folder)
		
	print teamSeasons


if __name__=="__main__":
	teams= ['ATL','BOS','BRK','CHA','CHI','CLE','DAL','DEN','DET','GSW','HOU','IND','LAC','LAL','MEM','MIA','MIL','MIN','NOP','NYK','OKC','ORL','PHI','PHO','POR','SAC','SAS','TOR','UTA','WAS']
	folder= '/Users/nikhilnathwani/Desktop/Portfolio/data/roi'
	getSeasonsPerTeam(teams,folder)