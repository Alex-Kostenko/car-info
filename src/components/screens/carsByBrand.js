import React from 'react';
import { getAll } from '../../services/carsService' ;

const allData = getAll();

export const carsByBrand = props => {
  const brand =  props.match.params.brand;
  const arrCarsByBrand = allData.filter((item) => (brand === item.name));
  return (arrCarsByBrand.map((item, index) => (<div key={index} > {item.model} </div>)));
}