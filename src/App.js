import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider>
      <div>Hello, TrybeWallet!</div>
    </Provider>
  );
}

export default App;
