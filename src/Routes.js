import React from 'react';
import { Route, Switch } from "react-router-dom";
import { brand } from './components/screens/brands'
import { carsByBrand } from './components/screens/carsByBrand'
import { all } from './components/screens/all'

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={brand} />
      <Route path="/all" component={all} />
      <Route path="/brands/:brand" component={carsByBrand} />
    </Switch>
  )
}