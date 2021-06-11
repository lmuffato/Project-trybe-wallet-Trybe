import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default function Provider({ children }) {
  return (
    <ReduxProvider store={ store }>
      {children}
    </ReduxProvider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
