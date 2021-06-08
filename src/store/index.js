import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

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
