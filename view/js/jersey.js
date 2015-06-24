
function createJersey(jerseySVG,x,y,name,number) {
	jerseySVG.attr("x",x)
			.attr("y",y)
			.attr("width",200)
			.attr("height",300);
					
	var jerseyGroup= jerseySVG.append("g")
							.attr("id","fullJersey")
							.attr("transform","scale(1)");
						
	var jerseyShape= jerseyGroup.append("g")
							.attr("id","jerseyShape")
							.append("path")
							.attr("id","outline")
							.attr("fill","blue")
							.attr("transform","translate(-40,0)")
							.attr("opacity","0.35")
							.attr("clip-path","url(#SVGID_6_)")
							.attr("fill","none")
							.attr("stroke","#000000")
							.attr("stroke-width","1.5")
							.attr("d","M116.462,113.911V39.01c0,0-18.493-5.977-15.317-30.633c0,0-8.033-2.616-8.78-3.363S91.617,9.311,79.29,9.124h-1.305C65.656,9.311,65.656,4.268,64.909,5.015s-8.778,3.363-8.778,3.363C59.305,33.034,40.813,39.01,40.813,39.01v74.901C40.813,113.911,74.434,126.427,116.462,113.911z");
					
	var jerseyContent= jerseyGroup.append("g")
							.attr("id","jerseyContent");
							
	var jerseyName= jerseyContent.append("svg")
								.append("text")
								.attr("id","name")
								.attr("font-family","Verdana")
								.attr("text-anchor","middle")
								.attr("dominant-baseline","central")
								.text(name)
								.attr("transform",function(){
									var pathNode = document.getElementById("outline");
									var pRect= pathNode.getBBox();
									var textNode = document.getElementById("name");
									var tRect= textNode.getBBox();
									console.log(pRect);
									var widthRatio= pRect.width/tRect.width;
									var heightRatio= (pRect.height/6)/tRect.height;
									var textScale= Math.min(widthRatio,heightRatio);
									console.log("NAME --  W:",widthRatio,"H:",heightRatio)
									return "translate(" + (1+pRect.width/2) + " " + (1+pRect.height/2) + ")scale("+textScale+")";
								});
							
	var jerseyNumber= jerseyContent.append("svg")
								.append("text")
								.attr("id","number")
								.attr("font-family","Verdana")
								.attr("text-anchor","middle")
								.attr("dominant-baseline","central")
								.text(number)
								.attr("transform",function() {
									var pathNode = document.getElementById("outline");
									var pRect= pathNode.getBBox();
									var textNode = document.getElementById("number");
									var tRect= textNode.getBBox();
									var nameNode = document.getElementById("name");
									var nRect= textNode.getBBox();
									console.log(pRect);
									var widthRatio= pRect.width/tRect.width;
									var heightRatio= (pRect.height/5)/tRect.height;
									var textScale= Math.min(widthRatio,heightRatio);
									console.log("NUMBER --  W:",widthRatio,"H:",heightRatio)
									return "translate(" + (1+/*pRect.x +*/ pRect.width/2) + " " + (0) + ")scale("+textScale+")";
								});
}