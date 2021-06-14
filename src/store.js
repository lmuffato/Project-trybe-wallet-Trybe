import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// store.dispatch(login('gustavohl98@gmail.com'));

export default store;
