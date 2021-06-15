import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <Switch>
      <Route path="/" component={ Home } />
      <Route path="/login" component={ Login } />
      <Route component={ NotFound } />
    </Switch>
  );
}

export default App;
