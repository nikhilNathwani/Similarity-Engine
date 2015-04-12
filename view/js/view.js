
//Populates a column of the playerComparison region
//chosenTeam is a dict with "name","year","playerList",eventually "W-L record", etc.
//isNeighbor is True if the 
function setChosenTeamInPlayerComparison(chosenTeam,stat,isNeighbor) {
	//Set playerComp title rects
	
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
		d3.json("http://localhost:5000/knn/?team="+teamName+"&year="+year+"&year0="+(yrGroups[0]-9)+"&yearN="+yrGroups[0]+"&stat="+stat,function(teams) {
			console.log(teams)
			for(var j=0;j<neighborsPerGroup;i++) {
				console.log("OTHER TEAMS",i,j,otherTeams[i]);
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