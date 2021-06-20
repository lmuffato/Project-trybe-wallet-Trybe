import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import reducer from '../reducers';
import rootReducers from '../reducers';

const store = createStore(
  rootReducers,
  // reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
