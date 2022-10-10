import React,{useEffect} from 'react';
import {setSparkLine} from './setSparkLine';

const SparkLineSvg = ({width,strokeWidth,percentages}) =>{

  useEffect(() => {
    setSparkLine(width,strokeWidth,percentages);
  }, []);
  

    return (
        <div className="graphic">
      </div>
    )

}
export default SparkLineSvg