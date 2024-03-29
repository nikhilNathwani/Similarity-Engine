
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


function createShapeTextGroup(parent,groupID,className,x,y,w,h,shape,txt) {
	//only create stuff if the group doesn't exist
	if(parent.select("g#"+groupID)=="") {
		//create group
		var grp= parent.append("g")
						.attr("id",groupID);
		if(className!=null) {
			grp.attr("class",className);			
		}
		//handle rect OR circle creation
		var xLoc= shape == "rect" ? "x" : "cx";
		var yLoc= shape == "rect" ? "y" : "cy";
		var width= shape == "rect" ? "width" : "rx";
		var height= shape == "rect" ? "height" : "ry";
		
		//add shape
		grp.append(shape)
			.attr("id",groupID+"_"+shape)
			.attr(xLoc,x)
			.attr(yLoc,y)
			.attr(width,function(){
				return shape == "rect" ? w : w/2; //rx corresps. to 1/2 the width
			})
			.attr(height,function(){
				return shape == "rect" ? h : h/2;
			});
			
		//add text
		grp.append("text")
			.attr("id",groupID+"_text")
			.attr(xLoc,x+w/2)
			.attr(yLoc,y+h/2)
			.attr("text-anchor","middle")
			.attr("dominant-baseline","central")
			.text(txt);
	}
	var grp= parent.select("g#"+groupID);
	grp.select("text").text(txt);
	var obj={"text":grp.select("text")};
	obj[shape]= grp.select(shape); //this is the only way to have a variable object key
	obj["group"]= grp;
	return obj;
}