import React from 'react';
import { Route } from 'react-router';
import Login from './pages/Login';

function App() {
  return (
    <switch>
      <Route path="/"><Login /></Route>
    </switch>
  );
}

export default App;
