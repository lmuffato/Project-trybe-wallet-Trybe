import React from 'react';
import { Route } from 'react-router-dom';

import Login from './pages/Login';

function App() {
  return (
    <div>
      <h1>
        Hello, TrybeWallet!
      </h1>

      <Route path="/" exact component={ Login } />
    </div>
  );
}

export default App;
