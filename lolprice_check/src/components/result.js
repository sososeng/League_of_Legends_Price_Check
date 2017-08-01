import React from 'react';

const ResultStatement = ({answer}) =>{
  return(
    <div>
      <h1>{answer.theResult}</h1>
    </div>
  )
}

export default ResultStatement;
