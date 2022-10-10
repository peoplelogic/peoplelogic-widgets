import React,{useEffect} from 'react';
import {setArcSvg} from './setArcSvg';

const ArcSvg = ({width,height,rotateToPercentage}) =>{

  useEffect(() => {
    setArcSvg(width,height,rotateToPercentage);
  }, [width,height,rotateToPercentage]);
  

    return (
      <div className='svg'>
      </div>
    )

}
export default ArcSvg