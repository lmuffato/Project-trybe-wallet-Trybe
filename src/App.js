import React from 'react';
import { Route } from 'react-router';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Route exact to="/" component={ Login } />
    </div>
  );
}

export default App;
