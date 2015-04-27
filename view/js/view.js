


/* CONSIDER CONDENSING THESE TO REDUCE PAGE LOAD TIME. E.G. FOR STATLISTS, ONLY STORE THE STATS TO BE OMITTED FOR EACH SEASON*/ 
var statDisplays= {'age':'Age','g':'Games played','gs':'Games started','mp_per_g':'Minutes per game','fg_per_g':'Field goals per game','fga_per_g':'FG attempts per game','fg_pct':'Field goal percentage','fg3_per_g':'3-pt field goals per game','fg3a_per_g':'3-pt FG attempts per game','fg3_pct':'3-pt field goal percentage','fg2_per_g':'2-pt field goals per game','fg2a_per_g':'2-pt FG attempts per game','fg2_pct':'2-pt field goal percentage','ft_per_g':'Free throws per game','fta_per_g':'FT attempts per game','ft_pct':'Free throw percentage','orb_per_g':'Offensive rebounds per game','drb_per_g':'Defensive rebounds per game','trb_per_g':'Total rebounds per game','ast_per_g':'Assists per game','stl_per_g':'Steals per game','blk_per_g':'Blocks per game','tov_per_g':'Turnovers per game','pf_per_g':'Personal fouls per game','pts_per_g':'Points per game'};
var statAbbrevs= {'age':'Age','g':'G','gs':'GS','mp_per_g':'MP','fg_per_g':'FG','fga_per_g':'FGA','fg_pct':'FG%','fg3_per_g':'3P','fg3a_per_g':'3PA','fg3_pct':'3P%','fg2_per_g':'2P','fg2a_per_g':'2PA','fg2_pct':'2P%','ft_per_g':'FT','fta_per_g':'FTA','ft_pct':'FT%','orb_per_g':'ORB','drb_per_g':'DRB','trb_per_g':'TRB','ast_per_g':'AST','stl_per_g':'STL','blk_per_g':'BLK','tov_per_g':'TOV','pf_per_g':'PF','pts_per_g':'PTS'};
var statLists= [['age','g','fg_per_g','fga_per_g','fg_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','ast_per_g','pf_per_g','pts_per_g'],['age','g','fg_per_g','fga_per_g','fg_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','trb_per_g','ast_per_g','pf_per_g','pts_per_g'],['age','g','mp_per_g','fg_per_g','fga_per_g','fg_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','trb_per_g','ast_per_g','pf_per_g','pts_per_g'],['age','g','mp_per_g','fg_per_g','fga_per_g','fg_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','orb_per_g','drb_per_g','trb_per_g','ast_per_g','stl_per_g','blk_per_g','pf_per_g','pts_per_g'],['age','g','mp_per_g','fg_per_g','fga_per_g','fg_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','orb_per_g','drb_per_g','trb_per_g','ast_per_g','stl_per_g','blk_per_g','tov_per_g','pf_per_g','pts_per_g'],['age','g','gs','mp_per_g','fg_per_g','fga_per_g','fg_pct','fg3_per_g','fg3a_per_g','fg3_pct','fg2_per_g','fg2a_per_g','fg2_pct','ft_per_g','fta_per_g','ft_pct','orb_per_g','drb_per_g','trb_per_g','ast_per_g','stl_per_g','blk_per_g','tov_per_g','pf_per_g','pts_per_g']];
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


function resetRowsInPlayerComp(chosenTeam,year,newData,isNeighbor,stat) {
	var groupTitle= isNeighbor ? "chosenNeighbor" : "chosenTeam";
	
	//If there's no title in the player comp region yet, create the associated group
	var titleGroup= playerCompGroups[groupTitle].selectAll('g.'+groupTitle+"Title")
								.data([chosenTeam]);						
	titleGroup.exit().remove();
	titleGroup.enter().append("g")
		.attr("class",groupTitle+"Title")
		
	//If there's no title rect or text, create it
	//In any case, set properties of title rect and text
	if(titleGroup.select("rect") == "") {
		titleGroup.append("rect")
					.attr("id","titleRect")
					.attr("width",titleWidth)
					.attr("height",titleHeight)
					.attr("x",isNeighbor*(titleWidth+titlePad))
					.attr("y",0)
		//Add row header rects
		titleGroup.append("rect")
					.attr("id","rowHeaderNameRect")
					.attr("width",nameWidth)
					.attr("height",rectHeight)
					.attr("x",isNeighbor*(titleWidth+titlePad))
					.attr("y",titleHeight)
					.attr("fill","white")
					.attr("stroke","#999999")
		titleGroup.append("rect")
					.attr("id","rowHeaderStatRect")
					.attr("width",statWidth)
					.attr("height",rectHeight)
					.attr("x",isNeighbor*(titleWidth+titlePad)+nameWidth)
					.attr("y",titleHeight)
					.attr("fill","white")
					.attr("stroke","#999999")
	}
	if(titleGroup.select("text") == "") {
		titleGroup.append("text")
					.attr("id","titleText")
					.attr("x",titleWidth/2 + isNeighbor*(titleWidth+titlePad))
					.attr("y",titleHeight/2)
					.attr("fill","white")
					.attr("font-size",16)
					.attr("text-anchor","middle")
					.attr("dominant-baseline","central")
		//Add row header text
		titleGroup.append("text")
					.attr("id","rowHeaderNameText")
					.attr("width",nameWidth)
					.attr("height",rectHeight)
					.attr("x",isNeighbor*(titleWidth+titlePad)+nameWidth/2)
					.attr("y",titleHeight+rectHeight/2)
					.attr("text-anchor","middle")
					.attr("dominant-baseline","central")
					.text("Name")
		titleGroup.append("text")
					.attr("id","rowHeaderStatText")
					.attr("width",statWidth)
					.attr("height",rectHeight)
					.attr("x",isNeighbor*(titleWidth+titlePad)+nameWidth+statWidth/2)
					.attr("y",titleHeight+rectHeight/2)
					.attr("text-anchor","middle")
					.attr("dominant-baseline","central")
					.text(statAbbrevs[stat])
	}
	titleGroup.select("#titleRect").attr("fill",function(d){return colors[d];});
	titleGroup.select("#titleRect").attr("stroke",function(d){return colors[d];});
	titleGroup.select("#titleText").text(function(d){return d + " " + yearToSeason(year);});
	
	
	//Reset rows of player comp column to contain the correct number of rows
	//And in the case of chosenTeam, populate the rows with the names of the
	//players corresponding to the chosen team
	var rows= playerCompGroups[groupTitle].selectAll('g.row')
								.data(newData);
									
	//ADD A TRANSITION TO MAKE THIS EXIT/ENTER SMOOTH!
	rows.exit().remove();

	rows.enter().append("g")
		.attr("class","row")
	
	//Add name info
	rows.each(function(d,i){
		createShapeTextGroup(d3.select(this),"nameCell","playerCompCell",isNeighbor*(titleWidth+titlePad),titleHeight+rectHeight+rectHeight*i,nameWidth,rectHeight,"rect");
		d3.select(this).select("text#nameCell_text").text(function(d){return d["name"];});
	});
	
	//Add stat info
	rows.each(function(d,i){
		createShapeTextGroup(d3.select(this),"statCell","playerCompCell",isNeighbor*(titleWidth+titlePad)+nameWidth,titleHeight+rectHeight+rectHeight*i,statWidth,rectHeight,"rect");
		d3.select(this).select("text#statCell_text").text(function(d){return d["statValue"];});
	});
}

//Populates a column of the playerComparison region
//chosenTeam is a dict with "name","year","playerList",eventually "W-L record", etc.
//isNeighbor is True if the player is a neighbor
function setChosenTeamInPlayerComparison(chosenTeam,year,stat,isNeighbor) {

	d3.json("http://localhost:5000/playersOfTeam/?team="+chosenTeam+"&year="+year+"&stat="+stat,function(players) {
		resetRowsInPlayerComp(chosenTeam,year,players["items"],isNeighbor,stat);
		if(!isNeighbor){
			var dummyOppData= Array.apply(null, new Array(players["items"].length)).map(String.prototype.valueOf,"");
			resetRowsInPlayerComp("Click on a team","",dummyOppData,true,stat);
		}
			
	});
	
	//Set name/stat_name title row
	
	//Populate list of players (with up to 15 players)
	
	//Remove extraneous cells at bottom (if num players was <15)
	
	return;
}

var bestSimilarityScore;
var worstSimilarityScore;
var maxRadius;
var minRadius;
var radiusScale; //d3 scale from minRadius to maxRadius

//Resets the size of all radii when a new teamGroup is added
function resetRadii() {
	//for each group number containing circles, re-scale existing radii
	//using radiusScale. 
	return;
}

var yrGroups= [2015,2005,1995,1985,1975];

function updateYearGroup(numGroup,teamName,year,stat) {
	console.log("NumGroup",numGroup,teamName,year,stat);
		d3.json("http://localhost:5000/knn/?team="+teamName+"&year="+year+"&year0="+(yrGroups[numGroup]-9)+"&yearN="+yrGroups[numGroup]+"&stat="+stat,function(teams) {
			console.log(teams)
			for(var j=0;j<neighborsPerGroup;j++) {
				console.log("OTHER TEAMS",j,otherTeams[j]);
				d3.select(otherTeams[numGroup][j]).select("rect")
										.attr("fill",colors[teams.items[j].team]);
				yr= teams.items[j].year;
				d3.select(otherTeams[numGroup][j]).select("text")
							.text(teams.items[j].team + " " + yearToSeason(yr));
				
			}	
			console.log("chunbi");
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