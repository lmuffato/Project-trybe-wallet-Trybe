// import { createStore/* , applyMiddleware */ } from 'redux';
// // import { composeWithDevTools } from 'redux-devtools-extension';
// // import thunk from 'redux-thunk';
// import rootReducer from '../reducers';

// const store = createStore(
//   rootReducer,
//   // composeWithDevTools(
//   //   applyMiddleware(thunk),
//   // ),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// export default store;
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk)));

export default store;
