
function yearToSeason(number) {
	if(number=="") { return ""; }
	var yr1 = (number-1)%100 + '';
	while (yr1.length < 2) {
		yr1 = '0' + yr1;
	}
	var yr2 = number%100 + '';
	while (yr2.length < 2) {
		yr2 = '0' + yr2;
	}
	return "'"+yr1+"-'"+yr2;
}

var firstSeason= 1947;

function getYearGroups(currYear,numGroups,window) {
	groups= [];
	end= currYear;
	start= Math.max(firstSeason,currYear-(window-1));
	for(var i=0; i<numGroups-1 && start >= firstSeason; i++) {
		groups.push({"start":start,"end":end});
		end= start-1;
		start= end-(window-1);
	}
	if(end+1 != firstSeason){
		groups.push({"start":firstSeason,"end":end});
	}
	
	return groups;
}

/*  TEST FOR getYearGroups METHOD
numYearGroups=5
yearWindow= 10
console.log(getYearGroups(2015,numYearGroups,yearWindow));
console.log(getYearGroups(1984,numYearGroups,yearWindow));
console.log(getYearGroups(1958,numYearGroups,yearWindow));
console.log(getYearGroups(1949,numYearGroups,yearWindow));
console.log(getYearGroups(1948,numYearGroups,yearWindow));
console.log(getYearGroups(1947,numYearGroups,yearWindow));*/