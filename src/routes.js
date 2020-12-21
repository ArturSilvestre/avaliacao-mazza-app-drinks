import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Drinks from './Pages/Drinks';
import DrinkDetail from './Pages/DrinkDetail';
import Favorite from './Pages/Favorites';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/drinks" exact component={Drinks} />
      <Route path="/favorite" exact component={Favorite} />
      <Route path="/drinks/:id" exact component={DrinkDetail} />
    </Switch>
  )
}