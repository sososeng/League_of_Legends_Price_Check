import React from 'react';

import ITEMS from '../ITEMS';

const ResultStatement = ({answer,itemname}) =>{

  return(
    <div>
      <h1>{answer}</h1>
      <h3>{itemname}</h3>
    </div>
  )
}

export default ResultStatement;
