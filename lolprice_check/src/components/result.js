import React from 'react';
import {ITEMS} from '../ITEMS';
import './result.css';

const ResultStatement = ({answer,itemID}) =>{

  var images="";
  var tempst;

  if(itemID !== "none"){
    tempst = {
      backgroundImage: 'url(item/' + ITEMS.data[itemID].image.full+')'
    };
    images = <div className = "itemOne" style={tempst}></div>;
  }
  return(
    <div>
      <h5>{answer}</h5>
      {images}
    </div>
  )
}

export default ResultStatement;
