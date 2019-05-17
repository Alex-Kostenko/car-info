import React from 'react';
// import { getCarsByModel } from '../../services/carsService';
import { getAll } from '../../services/carsService' ;

const allData = getAll();

export const carsByBrand = props => {
  console.log(JSON.stringify(allData));
  return props.match.params.brand;
}