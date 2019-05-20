import React from 'react';
import { getBrands } from '../../services/carsService';
import { Link } from "react-router-dom";
import { Col, Image }  from 'react-bootstrap';

const brandsData = getBrands();

const style = [
  { height: '100px' },
  { display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '30px',
  },
]

export const brand = () => {
  return brandsData.map(({name, img}, index) => (
    <Col key={index} sm={4}>
      <hr />
      <Link to={`/${name}`}> 
        <div style={style[1]}>
          <h4>{name}</h4>
          <Image style={style[0]} src={require(`../../images/${img}`)} alt="brand" /> 
        </div>
      </Link>
      <hr />
    </Col>
  ))
}
