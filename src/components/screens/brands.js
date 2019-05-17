import React from 'react';
import { getBrands } from '../../services/carsService';
import { Link } from "react-router-dom";

const brandsData = getBrands();

export const brand = () => {
  return brandsData.map((item, index) => (
    <Link key={index} to={`/brands/${item}`}> {item} </Link>
  ))
}
