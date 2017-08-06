import React from 'react';
import {ITEMS} from '../ITEMS';
import './result.css';

const ResultStatement = ({answer,itemID}) =>{

  var itemBuildTo;
  var itemBuidToDiv=[];
  var itemBuildFrom={};
  var itemBuildFromDivOne=[];
  var itemBuildFromDivTwo=[];
  var itemBuildFromDivThree=[];
  //if items existed show the image of that item
  if(itemID !== "none"){
    itemBuildTo = ITEMS.data[itemID].into;

    //building divs for items that can be build to
    if(itemBuildTo !== undefined){
      for(let i = 0 ;i<itemBuildTo.length; i ++){
        let temstyle ={
              backgroundImage: 'url(item/' + ITEMS.data[itemBuildTo[i]].image.full+')'
            };

        let temp = <div className ="outerItem" key = {itemBuildTo[i]}>
                      <div className = "item" style={temstyle} >
                      </div>
                  </div>;
        itemBuidToDiv.push(temp);


      }

    }
    //building required items list recursively
    build(1,itemBuildFrom, itemID);

    //building required items hierarchy
    for(let key in itemBuildFrom){
      if(key === "1"){
        itemBuildFromDivOne.push(itemBuildFrom[key]);
      }else if( key <=Number(4) && key>Number(1)){
        itemBuildFromDivTwo.push(itemBuildFrom[key]);
      }else{
        itemBuildFromDivThree.push(itemBuildFrom[key]);
      }
    }


  }
  return(
    <div>
      <h5>{answer}</h5>
      {itemBuidToDiv}
      <br/>
      <div className = "out">
        {itemBuildFromDivOne}
      </div>

      <div className = "out">
        {itemBuildFromDivTwo}
      </div>
      <div className = "out">
        {itemBuildFromDivThree}
      </div>
    </div>
  )
}

//recusive function for building required items list
function build(index,items,itemID){
  var myindex = index;
  //exit condition
  if(itemID === undefined){
    return;
  }
  let temstyle ={
    backgroundImage: 'url(item/' + ITEMS.data[itemID].image.full+')'
  };

  let temp   = <div className = "outer" key = {itemID+index}>
                <div className = "inner">
                  <div className = "item" style={temstyle} >
                  </div>
                  <p>{ITEMS.data[itemID].gold.total}</p>
                </div>
              </div>;


  items[index] = temp;


  if(ITEMS.data[itemID].from !==undefined){
    var buildfrom = ITEMS.data[itemID].from;
    for(let i =0 ;i<buildfrom.length ; i++){

      if(items[(index *3)-1]  === undefined){ // x * 3 -1 = first child
        myindex = (index * 3) -1;
        build(myindex,items,buildfrom[i]);

      }else if(items[index *3] === undefined){// x * 3 = second child
        myindex = (index * 3);
        build(myindex,items,buildfrom[i]);

      }else if (items[index *3 + 1] === undefined && i ===2 ) { // x * 3 + 1 = third child
        myindex = (index * 3) +1;
        build(myindex,items,buildfrom[i]);

      }else{
        myindex = (index * 3) +2;
      }
    }
  }

}

export default ResultStatement;
