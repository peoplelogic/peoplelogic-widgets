import React,{useEffect} from 'react';
import {setSparkLine} from './setSparkLine';

const SparkLineSvg = ({strokeWidth,percentages}) =>{

  useEffect(() => {
    window.addEventListener('resize', setSparkLine(strokeWidth,percentages))
    return window.removeEventListener('resize', setSparkLine(strokeWidth,percentages))
  }, [percentages,strokeWidth]);
  

    return (
        <div className="graphic">
      </div>
    )

}
export default SparkLineSvg