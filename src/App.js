import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Wallet from './pages/Wallet';

const STOCK_ROUTES = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/carteira',
    component: Wallet,
  },
];

function App() {
  return (
    <div>
      <Switch>
        {
          STOCK_ROUTES.map((route, index) => (
            <Route
              key={ index }
              path={ `${route.path}` }
              component={ route.component }
              exact
            />
          ))
        }
      </Switch>
    </div>
  );
}

export default App;
