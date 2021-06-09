import React from 'react';

import { Route } from 'react-router-dom';

import Login from './pages/Login';
import Wallet from './pages/Wallet';

const STOCK_ROUTES = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/wallet',
    component: Wallet,
  },
];

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
