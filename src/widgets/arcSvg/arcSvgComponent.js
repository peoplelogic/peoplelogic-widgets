import React,{useEffect} from 'react';
import {setArcSvg} from './setArcSvg';
import * as d3 from "d3";

const ArcSvg = ({rotateToPercentage}) =>{

  
  useEffect(() => {
        window.addEventListener('resize', resizeArcSvg(rotateToPercentage))
       
    return window.removeEventListener('resize', resizeArcSvg(rotateToPercentage))
  }, [rotateToPercentage]);

  const resizeArcSvg = (rotateToPercentage) => {

    var element = d3.select('.svg').node();
    var width = element.getBoundingClientRect().width;
    var height = element.getBoundingClientRect().height;

    setArcSvg(width,height,rotateToPercentage)
    return
  }
  

    return (
      <div className='svg'>
      </div>
    )

}
export default ArcSvg