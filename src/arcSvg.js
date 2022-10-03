import React,{useEffect} from 'react';
import {setArcSvg} from './setArcSvg';

const ArcSvg = ({rotateToPercentage}) =>{

  useEffect(() => {
    setArcSvg(300,400,rotateToPercentage);
  }, [rotateToPercentage]);
  

    return (
      <div className='svg'>
      </div>
    )

}
export default ArcSvg