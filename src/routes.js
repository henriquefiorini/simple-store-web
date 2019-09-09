import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Cart } from './pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}

export default Routes;
