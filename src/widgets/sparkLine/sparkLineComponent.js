import React,{useEffect} from 'react';
import {setSparkLine} from './setSparkLine';

const SparkLineSvg = ({width,strokeWidth,percentages}) =>{

  useEffect(() => {
    setSparkLine(width,strokeWidth,percentages);
  }, [width,percentages,strokeWidth]);
  

    return (
        <div className="graphic">
      </div>
    )

}
export default SparkLineSvg