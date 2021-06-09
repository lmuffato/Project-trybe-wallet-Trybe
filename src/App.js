import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <>
      Hello, TrybeWallet!
      <br />
      <Route path="/">
        <Login />
      </Route>
    </>
  );
}

export default App;
