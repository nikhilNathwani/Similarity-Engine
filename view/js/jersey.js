function createJersey(jerseySVG,x,y,name,number) {
    //SVG in which the jersey lives
    jerseySVG.attr("id","outer")
	            .attr("x",x)
	            .attr("y",y)
	            .attr("width",200)
	            .attr("height",300)

    //Scale everything to the desired amount
    var g= jerseySVG.append("g")
                    .attr("transform","scale(1.0)");

    //Drawing the jersey outline           
    var jerseyShape= g.append("g")
                        .attr("id","jerseyShape")
                        .append("path")
                        .attr("id","outline")
                        .attr("fill","green")
                        .attr("transform","translate(-40,0)")
                        .attr("opacity","0.35")
                        .attr("stroke","#000000")
                        .attr("stroke-width","1.5")
                        .attr("d","M116.462,113.911V39.01c0,0-18.493-5.977-15.317-30.633c0,0-8.033-2.616-8.78-3.363S91.617,9.311,79.29,9.124h-1.305C65.656,9.311,65.656,4.268,64.909,5.015s-8.778,3.363-8.778,3.363C59.305,33.034,40.813,39.01,40.813,39.01v74.901C40.813,113.911,74.434,126.427,116.462,113.911z");
    scaledText(g,"name",name,24,-40,35,0.9,0.2)
    scaledText(g,"number",number,64,-40,70,0.9,0.3)
}

function scaledText(parentGroup,id,value,fontSize,xTrans,yTrans,widthScale,heightScale) {
    //SVG containing the text (and the viewport for it)            
    var svgInner= parentGroup.append("svg")
                          .attr("class","inner")
                          .attr("id",id+"SVG");

    //Player name
    svgInner.append("text")
            .attr("class",id)
            .attr("id",value)
            .attr("x",0)
            .attr("y",0)
            .attr("font-family","sans-serif")
            .attr("font-size",fontSize)
            .attr("text-anchor","left")
            .attr("dominant-baseline","hanging")
            .text(value);
    
    var tBox= document.getElementById(value).getBBox()
    var oBox= document.getElementById("outline").getBBox()

    //Set text's SVG to be exactly the size of the text's bounding box
    svgInner.attr("width", function() {
        console.log("Text box: w=",tBox.width,"h=",tBox.height,"x=",tBox.x,"y=",tBox.y)
        return tBox.width * widthScale;
    })
    svgInner.attr("height", function() {
        var tBox= document.getElementById(value).getBBox()
        return tBox.height;
    })
    
    //Place SVG (i.e. the text() right where I want it on the jersey
    svgInner.attr("x", function() {
        console.log("Jersey box: w=",oBox.width,"h=",oBox.height,"x=",oBox.x,"y=",oBox.y)
        var oX= oBox.x + xTrans;
        var oW= oBox.width * widthScale;
        var nW= d3.select(this).attr("width")
        return oX - (nW-oW)/2 + oBox.width*((1-widthScale)/2);
    })
   
    svgInner.attr("y", function() {
        var oBox= document.getElementById("outline").getBBox()
        var oY= oBox.y + yTrans;
        var oH= oBox.height * heightScale;
        var nH= d3.select(this).attr("height")
        console.log(oY - (nH-oH)/2)
        return oY - (nH-oH)/2;
    })
    
    svgInner.attr("viewBox", function() {
        var tBox= document.getElementById(value).getBBox()
        var ttw= tBox.width
        var tth= tBox.height

        var w= document.getElementById("outline").getBBox().width*widthScale;
        var h= document.getElementById("outline").getBBox().height*heightScale;
        
        var vW= (ttw*ttw)/w;
        var vH= (tth*tth)/h;

        var vX= (ttw-vW)/2;
        var vY= (tth-vH)/2;

        return vX + " " + vY + " " + vW + " " + vH;
    })
    
    svgInner.attr("preserveAspectRatio","xMidYMid meet")
}

function createJersey2(jerseySVG,x,y,name,number) {
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
									console.log(tRect,d3.select(this).text());
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