import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    // applyMiddleware(thunk),
  ),
);

// store.subscribe(() => console.log(store.getState()));

export default store;
