import React from 'react';
import { getCarsByModel } from '../../services/carsService';

export const models = () => {
  return (getCarsByModel.map((item, index) => (<div key={index} > {item.model} </div>)) );
}