import * as d3 from "d3";
import "../../index.css";

export const setSparkLine = (width,strokeWidth,percentages)=>{

  var numOfPoints = percentages.length;
  if (!numOfPoints || !percentages ) return

d3.select(".graphic").selectAll("*").remove();

var graphicSvg = d3
  .select(".graphic")
  .append("svg")
  .attr("class", "graphicSvg")
  .attr("width", `${width}`)
  .attr("height", `auto`)

  
  var points = [];

  percentages.map((p,i)=> points.push({xpoint: (width/numOfPoints*0.5)*i*2, ypoint: (100-p) }))


var defs = graphicSvg.append("defs");

setCurveGradient(defs);
setFillMaskGradient(defs);
setFillBackgroundGradient(defs,points);
setBackgroundBlur(defs)

setMask(defs,points);
setSvg(graphicSvg,points,strokeWidth)

}

const setCurveGradient = (defs) =>{
  var gradient = defs
  .append("linearGradient")
  .attr("id", "svgGradient")
  .attr("x1", "50%")
  .attr("x2", "50%")
  .attr("y1", "0%")
  .attr("y2", "100%");


  gradientGenerator(gradient,"0%","#00acc2",1)
  gradientGenerator(gradient,"10%","#00acc2",1)
  gradientGenerator(gradient,"60%","#ffc093",1)
  gradientGenerator(gradient,"100%","#fb7375",1)
}

const setFillMaskGradient = (defs) => {
  
  var maskGradient = defs
  .append("linearGradient")
  .attr("id", "fillMaskGradient")
  .attr("x1", "50%")
  .attr("x2", "50%")
  .attr("y1", "0%")
  .attr("y2", "100%");

  gradientGenerator(maskGradient,"0%","white",0.15)
  gradientGenerator(maskGradient,"30%","white",0.15)
  gradientGenerator(maskGradient,"100%","white",0)
}

const setSvg = (graphicSvg,points,strokeWidth) => {
  graphicSvg.append("path")
 .datum(points)
 .attr("d", GenLine(points))
 .attr("stroke", "url(#svgGradient)")
 .attr("stroke-width", `${strokeWidth*6.67}`)
 .attr("fill", "none")
 .attr("filter", "url(#blur)")
 .attr("mask", "url(#mask)")

   graphicSvg
  .append("path")
  .attr("d", Gen(points))
  .attr("class", "graphicSvg")
  .attr("fill", "none")
  .attr("mask", "url(#mask)")

    graphicSvg
  .append("path")
  .attr("d", GenLine(points))
  .attr("class", "lineSvg")
  .attr("stroke-width",`${strokeWidth}`)
  .attr("fill", "none")
}

const setMask = (defs,points) => {
  let mask = defs
 .append("mask")
 .attr('id', 'mask')


 mask.append("path")
 .attr("d", Gen(points))
 .attr("stroke","black")
 .attr("class", "a")
 .attr("fill", "url(#fillMaskGradient)")
}


var GenLine = d3
.line()
.x((p) => p.xpoint)
.y((p) => p.ypoint+10)
.curve(d3.curveCardinal)

var Gen = d3
  .area()
  .x((p) => p.xpoint)
  .y0(140)
  .y1((p) => p.ypoint+10)
  .curve(d3.curveCardinal)

const setFillBackgroundGradient = (defs,points) => {
  var gradient = defs
  .append("linearGradient")
  .attr("id", "svgFillGradient")
  .attr("x1", "0%")
  .attr("x2", "100%")
  .attr("y1", "50%")
  .attr("y2", "50%");

  gradientGenerator(gradient,"0%",getcolor(points[0].ypoint),1)

  for (let index = 0; index < points.length -1; index++) {
    let currentPoint = points[index].ypoint
    let nextPoint = points[index+1].ypoint
    if((currentPoint < 50 && nextPoint < 50 ) || (currentPoint > 50 && nextPoint > 50)){
        gradientGenerator(gradient,`${100/points.length *(index+1) }%` ,getcolor(currentPoint),1)
    }
  }

  gradientGenerator(gradient,"100%",getcolor(points[points.length-1].ypoint),1)
}

const getcolor = (value) => {
  return value > 50 ?   '#ffc093' : '#00acc2';
} 


const setBackgroundBlur = (defs) => {
  defs
        .append("filter")
        .attr('id', 'blur')
        .attr("x", "0")
        .attr("y", "0")
        .append("feGaussianBlur")
        .attr("in", "SourceGraphic")
        .attr("stdDeviation", 20);
}


const gradientGenerator = (gradient,offset,color,opacity) => {
  gradient
  .append("stop")
  .attr("class", "start")
  .attr("offset", `${offset}`)
  .attr("stop-color", `${color}`)
  .attr("stop-opacity",`${opacity}`)
}