import React from 'react';
import { getAll } from '../../services/carsService' ;
import { Link } from "react-router-dom";

const allData = getAll();

export const carsByBrand = props => {
  const brand =  props.match.params.brand;
  const arrCarsByBrand = allData.filter((item) => (brand === item.name));
  
  return (arrCarsByBrand.map((item, index) => (<Link key={index} to={`/brands/${brand}/${item.model}`}> {item.model} </Link>)));
}