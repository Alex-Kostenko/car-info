import React from 'react';
import { getBrands } from '../../services/carsService';

const brandsData = getBrands();

export const brand = () => {
  return brandsData.map((item, index) => (
    <div key={index} > {item} </div>
  ))
}
