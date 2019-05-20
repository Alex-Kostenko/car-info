import React from 'react';
import { getAll } from '../../services/carsService' ;
import { Link } from "react-router-dom";
import { ListGroup, Col, Image } from 'react-bootstrap';

const allData = getAll();
const style = [
  { height: '195px' },
  { display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '30px',
    textAlign: 'center',
  },
  { width: '100%', },
]

export const carsByBrand = props => {

  const brand =  props.match.params.brand;
  const arrCarsByBrand = allData.filter((item) => (brand === item.name));

  return (arrCarsByBrand.map((item, index) => (
    <Col sm={6} key={index}> 
      <Link style={style[1]} to={`/brands/${brand}/${item.model}`}>
        <ListGroup style={style[2]} > 
          <ListGroup.Item> <h4>{item.model} </h4> </ListGroup.Item>
          <ListGroup.Item> <Image style={style[0]} src={require(`../../images/${item.imgModel}`)} alt="model" /> </ListGroup.Item>
        </ListGroup>
      </Link>
    </Col> )));
}
