import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import wallet from './reducers/wallet';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={ Login } />
        <Route path="/carteira" component={ wallet } />
      </Switch>
    </div>
  );
}

export default App;
