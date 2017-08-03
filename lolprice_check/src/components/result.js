import React from 'react';

import {ITEMS} from '../ITEMS';

const ResultStatement = ({answer,itemID}) =>{

  var images="";
  var tempst = "";

  if(itemID !== "none"){
    tempst = "item/" + ITEMS.data[itemID].image.full;
    images = <img src = {tempst} alt="" />;

  }
  return(
    <div>
      <h5>{answer}</h5>
      {images}
    </div>
  )
}

export default ResultStatement;
