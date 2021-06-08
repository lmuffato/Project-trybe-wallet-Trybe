import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={ () => <Login /> } />
      </Switch>
    </Router>
  );
}

export default App;
