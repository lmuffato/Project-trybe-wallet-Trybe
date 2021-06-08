import React from 'react';
import './bootstrap/css/bootstrap.min.css';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Route exact path="/" component={ Login } />
  );
}

export default App;
