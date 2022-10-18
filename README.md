# Widgets

In the widgets below, all of them are designed the same way, they both have a file with the widget Name as component a component and it will also contain a setWidget that is a js file that contains all the logic to build the widget. inside the widget component file we import the setWidget file and we use the useEffect to build the widget and it will only be rerendered again when the props inside the components change 

## ArcSvg

to call this widget we just need to import ArcSvg from the arcSvgComponent and call it like this

<ArcSvg rotateToPercentage={86}  

we can manage the width and height of this element normally from the css files calling 

.svg { width : ... , height : ....}

rotateToPercentage is a field that receives the percentage value so it can have a small animation to that value 

all the props are required

types: 
        width -> number
        height -> number
        rotateToPercentage -> number


## SparkLine

to call this widget we just need to import SparkLineSvg from the sparkLineComponent 

<SparkLineSvg strokeWidth={2} percentages={[70,30,60,...]}


the width and height of this element normally from the css files calling 

.graphic { width : ... , height : ....}

the strokeWidth is the size of line created by the percentages array 

percentages is the array of numbers that are going to build the widget 

all the props are required

types: 
        width -> number
        strokeWidth -> number
        percentages -> number[]


