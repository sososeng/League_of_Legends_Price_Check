import React from 'react';
import {ITEMS} from '../ITEMS';
import './result.css';

const ResultStatement = ({answer,itemID}) =>{

  var images="";
  var tempst;
  var itemBuildTo;
  var itemBuidToDiv=[];
  var itemBuildFrom= [];

  //if items existed show the image of that item
  if(itemID !== "none"){
    tempst = {
      backgroundImage: 'url(item/' + ITEMS.data[itemID].image.full+')'
    };
    images = <div className = "itemOne" style={tempst}></div>;

    itemBuildTo = ITEMS.data[itemID].into;

    //building divs for items that can be build to
    if(itemBuildTo !== undefined){
      for(let i = 0 ;i<itemBuildTo.length; i ++){
        let temstyle ={
              backgroundImage: 'url(item/' + ITEMS.data[itemBuildTo[i]].image.full+')',
              display: 'inline-flex'
            };

        let temp = <div className = "itemOne" style={temstyle} key = {itemBuildTo[i]}></div>;
        itemBuidToDiv.push(temp);


      }
    }

    

  }
  return(
    <div>
      <h5>{answer}</h5>
      {itemBuidToDiv}
      {images}
    </div>
  )
}

export default ResultStatement;
