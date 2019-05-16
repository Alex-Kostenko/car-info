import React from 'react';
import { getAll } from '../../services/carsService';

const allData = getAll();

export const all = () => {  
  console.log(allData);
  
  return (
    <>
      {allData.map((item, index) => (
        <div key={index}>  {JSON.stringify(item)} </div>
      ))}
    </>
  )
}
