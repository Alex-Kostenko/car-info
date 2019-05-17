import React from 'react';
import { getAll } from '../../services/carsService';

const allData = getAll();

export const selectCar = props => {
  const car = props.match.params.carsByBrand;
  console.log(car);
  
  return (0);
}