import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      Hello, TrybeWallet!
      <Route exact path="/" component={ Login } />
    </div>
  );
}

export default App;
