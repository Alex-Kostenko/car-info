import React from 'react';
import { getAll } from '../../services/carsService';
import { CommentForm } from './commentsForm';
import { CommentsList } from './commentsList';
import { ListGroup, Image, Row, Col } from 'react-bootstrap';

const allData = getAll();

export const selectCar = props => {

  const style = [
    { height: '100px' },
    { height: '250px' },
    { width: '100%' },
    { display: 'flex', width: '100%'},
    { justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center', margin: '0',}
  ];

  const car = props.match.params.carsByBrand;
  const ID =  allData.findIndex((item) => item.model === car);

  return (
    <Col sm={12}>
      {allData.map((item, index) => <div key={index}> {car === item.model ? 
        <ListGroup>
          <ListGroup.Item style={style[3]}>
            <Row style={style[4]}>
              <Col sm={6}>
                <div> {item.name} </div>
                <div> <Image style={style[0]} src={require(`../../images/${item.img}`)} alt="brand" /> </div>
              </Col>
              <Col sm={6}>
                <div> {item.model} </div>
                <div> <Image style={style[1]} src={require(`../../images/${item.imgModel}`)} alt="model" /> </div>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>Потужність, к.с.: {item.power} </ListGroup.Item>
          <ListGroup.Item>Час розгону (0-100 км / ч), з: {item.time} </ListGroup.Item>
          <ListGroup.Item>Споряджена маса, кг: {item.weight} </ListGroup.Item>
          <ListGroup.Item>Тип палива: {item.engine} </ListGroup.Item>
          <ListGroup.Item>Об'єм двигуна, куб.см: {item.engineVolume} </ListGroup.Item>
          <ListGroup.Item>Колір: {item.color} </ListGroup.Item>
          <ListGroup.Item>Тип коробки передач: {item.transmission} </ListGroup.Item>
          <ListGroup.Item>Об'єм бензобаку, л:{item.fuelTank} </ListGroup.Item>
          <ListGroup.Item>Витрата палива (змішаний цикл), л. на 100 км: {item.fuelConsumption} </ListGroup.Item>
        </ListGroup> : ''}
      </div>)}

      <CommentForm id={ID} />
      <CommentsList id={ID} />
    </Col>
  );
}
