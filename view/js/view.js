
var statDisplays= {'age':'Age','g':'Games played','gs':'Games started','mp_per_g':'Minutes per game','fg_per_g':'Field goals per game','fga_per_g':'FG attempts per game','fg_pct':'Field goal percentage','fg3_per_g':'3-pt field goals per game','fg3a_per_g':'3-pt FG attempts per game','fg3_pct':'3-pt field goal percentage','fg2_per_g':'2-pt field goals per game','fg2a_per_g':'2-pt FG attempts per game','fg2_pct':'2-pt field goal percentage','efg_pct':'Effective field goal percentage','ft_per_g':'Free throws per game','fta_per_g':'FT attempts per game','ft_pct':'Free throw percentage','orb_per_g':'Offensive rebounds per game','drb_per_g':'Defensive rebounds per game','trb_per_g':'Total rebounds per game','ast_per_g':'Assists per game','stl_per_g':'Steals per game','blk_per_g':'Blocks per game','tov_per_g':'Turnovers per game','pf_per_g':'Personal fouls per game','pts_per_g':'Points per game'};
var statAbbrevs= {'age':'Age','g':'G','gs':'GS','mp_per_g':'MP','fg_per_g':'FG','fga_per_g':'FGA','fg_pct':'FG%','fg3_per_g':'3P','fg3a_per_g':'3PA','fg3_pct':'3P%','fg2_per_g':'2P','fg2a_per_g':'2PA','fg2_pct':'2P%','efg_pct':'eFG%','ft_per_g':'FT','fta_per_g':'FTA','ft_pct':'FT%','orb_per_g':'ORB','drb_per_g':'DRB','trb_per_g':'TRB','ast_per_g':'AST','stl_per_g':'STL','blk_per_g':'BLK','tov_per_g':'TOV','pf_per_g':'PF','pts_per_g':'PTS'};
var statLists= [['age','g','fg_per_g','fga_per_g','fg_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','ast_per_g','pf_per_g','pts_per_g'],['age','g','fg_per_g','fga_per_g','fg_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','trb_per_g','ast_per_g','pf_per_g','pts_per_g'],['age','g','mp_per_g','fg_per_g','fga_per_g','fg_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','trb_per_g','ast_per_g','pf_per_g','pts_per_g'],['age','g','mp_per_g','fg_per_g','fga_per_g','fg_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','orb_per_g','drb_per_g','trb_per_g','ast_per_g','stl_per_g','blk_per_g','pf_per_g','pts_per_g'],['age','g','mp_per_g','fg_per_g','fga_per_g','fg_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','orb_per_g','drb_per_g','trb_per_g','ast_per_g','stl_per_g','blk_per_g','tov_per_g','pf_per_g','pts_per_g'],['age','g','gs','mp_per_g','fg_per_g','fga_per_g','fg_pct','fg3_per_g','fg3a_per_g','fg3_pct','fg2_per_g','fg2a_per_g','fg2_pct','efg_pct','ft_per_g','fta_per_g','ft_pct','orb_per_g','drb_per_g','trb_per_g','ast_per_g','stl_per_g','blk_per_g','tov_per_g','pf_per_g','pts_per_g']];
var yearToStatList= {1947:0,1948:0,1949:0,1950:0,1951:1,1952:2,1953:2,1954:2,1955:2,1956:2,1957:2,1958:2,1959:2,1960:2,1961:2,1962:2,1963:2,1964:2,1965:2,1966:2,1967:2,1968:2,1969:2,1970:2,1971:2,1972:2,1973:2,1974:3,1975:3,1976:3,1977:3,1978:4,1979:4,1980:5,1981:5,1982:5,1983:5,1984:5,1985:5,1986:5,1987:5,1988:5,1989:5,1990:5,1991:5,1992:5,1993:5,1994:5,1995:5,1996:5,1997:5,1998:5,1999:5,2000:5,2001:5,2002:5,2003:5,2004:5,2005:5,2006:5,2007:5,2008:5,2009:5,2010:5,2011:5,2012:5,2013:5,2014:5,2015:5};
var teamYears= {'MIL': ['1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'GSW': ['1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'MIN': ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'MIA': ['1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'ATL': ['1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'BOS': ['1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'DET': ['1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'NYK': ['1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'DEN': ['1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'DAL': ['1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'POR': ['1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'OKC': ['1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'TOR': ['1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'CHI': ['1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'SAS': ['1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'CHA': ['1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'UTA': ['1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'CLE': ['1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'HOU': ['1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'WAS': ['1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'LAL': ['1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'PHI': ['1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'PHO': ['1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'MEM': ['1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'LAC': ['1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'SAC': ['1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'ORL': ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'BRK': ['1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'IND': ['1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'], 'NOP': ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']};
var teams = ["ATL","BOS","BRK","CHA","CHI","CLE","DAL","DEN","DET","GSW","HOU","IND","LAC","LAL","MEM","MIA","MIL","MIN","NOP","NYK","OKC","ORL","PHI","PHO","POR","SAC","SAS","TOR","UTA","WAS"];

//Set dynamic dropdowns (e.g. options for 2nd dropdown change depending on selection in 1st dropdown)
window.onload = function () {
    var teamSel = document.getElementById("teamSel"),
        seasonSel = document.getElementById("seasonSel"),
        statSel = document.getElementById("statSel");
    for (var i=0; i<teams.length; i++) {
        teamSel.options[teamSel.options.length] = new Option(teams[i], teams[i]);
    }
    teamSel.onchange = function () {
        seasonSel.length = 1; // remove all options bar first
        statSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
		seasons= teamYears[this.value];
        for (var j=0; j<seasons.length; j++) {
            seasonSel.options[seasonSel.options.length] = new Option(yearToSeason(seasons[j]), seasons[j]);
        }
    }
    teamSel.onchange(); // reset in case page is reloaded
    seasonSel.onchange = function () {
        statSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done   
        var stats = statLists[yearToStatList[this.value]];
        for (var k = 0; k < stats.length; k++) {
            statSel.options[statSel.options.length] = new Option(statDisplays[stats[k]],stats[k]);
        }
    }
}


function setClothesline(chosenTeam,newData) {
    var clothesLine= d3.select("body")
                        .append("svg")
                        .attr("id","clothesLine")
                        .attr("x",100)
                        .attr("y",100)
                        .attr("width",1400)
                        .attr("height",600);
                        
    clothesLine.selectAll("svg")
                .data(newData)
                .enter()
                .append("svg")
                .each(function(d,i){
                    createJersey(d3.select(this),i*100 + 20,0,chosenTeam,d["name"],d["statValue"]);
                });
}


function setRowsInPlayerComp(chosenTeam,year,newData,stat,isNeighbor) {
	var groupTitle= isNeighbor ? "chosenNeighbor" : "chosenTeam";
	
	//Add title rect and text
	var pcTitleGroup= playerCompGroups[groupTitle]
	var pcTitle= createShapeTextGroup(pcTitleGroup,groupTitle+"Title","playerCompTitle",isNeighbor*(titleWidth+titlePad),0,titleWidth,titleHeight,"rect");
	pcTitle["rect"].attr("fill",colors[chosenTeam]);
	pcTitle["rect"].attr("stroke",colors[chosenTeam]);
	pcTitle["text"].text(chosenTeam+" "+yearToSeason(year));
	
	//Add playerComparison table headers
	var nh= createShapeTextGroup(pcTitleGroup,"nameHeader","playerCompHeader",isNeighbor*(titleWidth+titlePad),titleHeight,nameWidth,rectHeight,"rect");
	nh["text"].text("Name");
	var sh= createShapeTextGroup(pcTitleGroup,"statHeader","playerCompHeader",isNeighbor*(titleWidth+titlePad)+nameWidth,titleHeight,statWidth,rectHeight,"rect");
	sh["text"].text(statAbbrevs[stat]);
	
	//Reset rows of player comp column to contain the correct number of rows
	//And in the case of chosenTeam, populate the rows with the names of the
	//players corresponding to the chosen team
	var rows= playerCompGroups[groupTitle].selectAll('g.row')
								.data(newData);
	
	console.log("DATA", newData)
	
	//ADD A TRANSITION TO MAKE THIS EXIT/ENTER SMOOTH!
	rows.exit().remove();

	rows.enter().append("g")
		.attr("class","row")
	
	//Add name info
	rows.each(function(d,i){
		var r= createShapeTextGroup(d3.select(this),"nameCell","playerCompCell",isNeighbor*(titleWidth+titlePad),titleHeight+rectHeight+rectHeight*i,nameWidth,rectHeight,"rect",d["name"]);
		//r["rect"].attr("rx",4);
		//r["rect"].attr("ry",4);
	});
	
	//Add stat info
	rows.each(function(d,i){
		var r= createShapeTextGroup(d3.select(this),"statCell","playerCompCell",isNeighbor*(titleWidth+titlePad)+nameWidth,titleHeight+rectHeight+rectHeight*i,statWidth,rectHeight,"rect",d["statValue"]);
		//r["rect"].attr("rx",4);
		//r["rect"].attr("ry",4);
	});
}

function setNeighborGroup(ind,teams){
	var yrGroup= neighbors.select('g#yearGroup'+ind)
	
	var nbrs= yrGroup.selectAll("g.neighbor")
						.data(teams.items);
									
	//ADD A TRANSITION TO MAKE THIS EXIT/ENTER SMOOTH!
	nbrs.exit().remove();

	nbrs.enter().append("g")
		.attr("class","yearGroup")
	
	//Add team name and on-click behavior
	nbrs.each(function(d,i){
		var n= createShapeTextGroup(neighborGroups[ind],"neighborGroup"+i,"neighbor",(rectWidth+titlePad)*(i+1),(titleHeight+neighborYPad)*ind,rectWidth,titleHeight,"rect");
		n["rect"].attr("fill",colors[teams.items[i].team]);
		var yr= teams.items[i].year;
		n["text"].text(teams.items[i].team + " " + yearToSeason(yr));
		
		//Setting player comp region properly upon click
		n["group"].on("click",function(){
            setClothesline(teams.items[i].team,teams.items[i].players)
			//setRowsInPlayerComp(teams.items[i].team,yr,teams.items[i].players,teams.items[i].stat,true)
		});
	});
}

//Populates a column of the playerComparison region
//chosenTeam is a dict with "name","year","playerList",eventually "W-L record", etc.
//isNeighbor is True if the player is a neighbor
function setChosenTeamInPlayerComparison(chosenTeam,year,stat,isNeighbor) {
	d3.json("http://localhost:5000/playersOfTeam/?team="+chosenTeam+"&year="+year+"&stat="+stat,function(players) {
		setRowsInPlayerComp(chosenTeam,year,players["items"],stat,isNeighbor);
		if(!isNeighbor){
			var dummyOppData= Array.apply(null, new Array(players["items"].length)).map(String.prototype.valueOf,"");
			setRowsInPlayerComp("Click on a team","",dummyOppData,stat,!isNeighbor);
		}
			
	});
}


var decades= [2015,2005,1995,1985,1975];

function updateYearGroup(numGroup,teamName,year,stat) {
	console.log("NumGroup",numGroup,teamName,year,stat);
		d3.json("http://localhost:5000/knn/?team="+teamName+"&year="+year+"&year0="+(decades[numGroup]-9)+"&yearN="+decades[numGroup]+"&stat="+stat,function(teams) {
			setNeighborGroup(numGroup,teams);
		});
		
		console.log("Async DB call (should be) in progress");
}

function update(teamName,year,stat) {
	//Grab list of players for selected team
	
	//Update Player Comparison region with received chosenTeam info
	
	//Calculate teamGroups, and for each {"start","end"} dict, perform kNN API call
	
	//Update best and worst similarity scores
	
	//Reset radii to be scaled properly
	
	playerCompGroups["chosenTeam"].select("text")
						.text(teamName + " " + yearToSeason(year));
						
	for(var i=0; i<numYearGroups; i++) {
		updateYearGroup(i,teamName,year,stat);
	}
}