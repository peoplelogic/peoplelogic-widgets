import React,{useEffect} from 'react';
import {setSparkLine} from './setSparkLine';

const SparkLineSvg = ({width,height,strokeWidth,percentages}) =>{

  useEffect(() => {
    setSparkLine(width,height,strokeWidth,percentages);
  }, []);
  

    return (
        <div className="graphic">
      </div>
    )

}
export default SparkLineSvg