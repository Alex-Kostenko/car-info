import React from 'react';
import { Route, Switch } from "react-router-dom";
import { brand } from './components/screens/brands';
import { carsByBrand } from './components/screens/carsByBrand';
import { selectCar } from './components/screens/selectCar';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={brand} />
      <Route exact path="/brands/:brand" component={carsByBrand} />
      <Route path="/brands/:brand/:carsByBrand" component={selectCar} />
    </Switch>
  )
}
