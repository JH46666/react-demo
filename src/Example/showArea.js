import React, {useContext} from 'react';
import {ColorContext} from './color'

function ShowArea(){
  let {color} = useContext(ColorContext);
  return(
    
    <div style={{color: color}}>
      字体颜色{color}
    </div>
  )
}

export default ShowArea;