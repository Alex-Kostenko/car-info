import React from 'react';
import * as carsService from '../services/carsService';


export const getMark = () => {
  const carsData = carsService.getAll();
  return (
    <div>
      {carsData.map((item, index) => <div key={index}> {item.name} </div>)}
    </div>
  )
};

export const getModel = () => {
  const carsData = carsService.getAll();
  return (
    <div>
      {carsData.map((item, index) => (
        <div key={index}> 
          <div>{item.model}</div> 
          <div>{item.img}</div> 
        </div>) )}
    </div>
  );
};