import React from 'react';
import { getAll } from '../../services/carsService';
import { CommentForm } from './commentsForm';
import { CommentsList } from './commentsList';

const allData = getAll();

export const selectCar = props => {
  const car = props.match.params.carsByBrand;
  const ID =  allData.findIndex((item) => item.model === car);

  return (
    <div>
      {allData.map((item, index) => <div key={index}> {car === item.model ? 
        <div>
          <div> {item.name} </div>
          <div> <img src={require(`../../images/${item.img}`)} alt="brand" /> </div>
          <div> {item.model} </div>
          <div> <img src={require(`../../images/${item.imgModel}`)} alt="model" /> </div>
          <div>Потужність, к.с.: {item.power} </div>
          <div>Час розгону (0-100 км / ч), з: {item.time} </div>
          <div>Споряджена маса, кг: {item.weight} </div>
          <div>Тип палива: {item.engine} </div>
          <div>Об'єм двигуна, куб.см: {item.engineVolume} </div>
          <div>Колір: {item.color} </div>
          <div>Тип коробки передач: {item.transmission} </div>
          <div>Об'єм бензобаку, л:{item.fuelTank} </div>
          <div>Витрата палива (змішаний цикл), л. на 100 км: {item.fuelConsumption} </div>
        </div> : ''}
      </div>)}

      <CommentForm id={ID} />
      <CommentsList id={ID} />
    </div>
  );
}
