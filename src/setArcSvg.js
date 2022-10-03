import * as d3 from "d3";
import "./index.css";

const svgData = {
  strokeWidth: 20,
  scale: 1,
  transitionDuration: 1500,
};

export const setArcSvg = (width, height, percentageRotateValue) => {
  const arcStartPosX = width / 4;
  const arcEndPosX = arcStartPosX * 3;
  const arcPosY = height / 2;
  const arcBottomCircle = createArcLegs();

  
  d3.select(".svg").selectAll("*").remove();

  var svg = d3
    .select(".svg")
    .append("svg")
    .attr("class", "size")
    .attr("width", `${width}`)
    .attr("height", `${height}`)
    .attr("transform", `scale(${svgData.scale},${svgData.scale})`);

  setSvgArc(svg, arcStartPosX, arcEndPosX, arcPosY);
  setSvgArcLegs(svg, arcBottomCircle, arcStartPosX, arcPosY, "left");
  setSvgArcLegs(svg, arcBottomCircle, arcEndPosX, arcPosY, "right");
  setArrow(svg, percentageRotateValue, width, arcPosY);
  arcGradient(svg);
};

function setSvgArc(svg, arcStartPosX, arcEndPosX, arcPosY) {
  svg
    .append("path")
    .attr(
      "d",
      `M${arcStartPosX} ${arcPosY} A50 50 0 1 1 ${arcEndPosX} ${arcPosY}`
    )
    .attr("fill", "none")
    .attr("stroke-width", `${svgData.strokeWidth}`)
    .attr("class", "arc");
}

function createArcLegs() {
  return d3
    .arc()
    .outerRadius(svgData.strokeWidth * 0.5)
    .innerRadius(0)
    .startAngle(Math.PI / 2)
    .endAngle(-Math.PI / 2);
}

function setSvgArcLegs(svg, arc, posX, posY, elemClass) {
  svg
    .append("path")
    .attr("class", elemClass)
    .attr("d", arc)
    .attr("transform", `translate(${posX},${posY - 0.2}) rotate(180)`);
}

function createArrow(posX, posY, radius, width) {
  var path = d3.path();
  path.arc(width / 2, posY, radius, Math.PI / 2, (3 * Math.PI) / 2, true);
  path.moveTo(posX, posY);
  path.lineTo(width / 2, posY - radius);
  path.lineTo(width / 2, posY + radius);
  path.lineTo(posX, posY);
  return path;
}

function setArrow(svg, percentageRotateValue, width, arrowCenterY) {
  const arrowRotationX = width / 2;
  const arrowRotationY = arrowCenterY;
  svg
    .append("path")
    .attr("d", createArrow(width / 3.3, arrowCenterY, 3, width))
    .attr("transform", `rotate(0,${arrowRotationX},${arrowRotationY})`)
    .attr("class", "arrow")
    .transition()
    .duration(svgData.transitionDuration)
    .attrTween("transform", () => {
      var i = d3.interpolate(0, 1.8 * percentageRotateValue);
      return (t) => `rotate(${i(t)}, ${arrowRotationX}, ${arrowRotationY})`;
    });
}

function arcGradient(svg) {
  var svgDefs = svg.append("defs");

  var mainGradient = svgDefs
    .append("linearGradient")
    .attr("id", "mainGradient");

  mainGradient
    .append("stop")
    .attr("class", "gradient-color-left")
    .attr("offset", "0");

  mainGradient
    .append("stop")
    .attr("class", "gradient-color-midle")
    .attr("offset", "0.5");

  mainGradient
    .append("stop")
    .attr("class", "gradient-color-right")
    .attr("offset", "1");
}
