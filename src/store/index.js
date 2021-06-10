import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rooReducer from '../reducers';

const store = createStore(
  rooReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
