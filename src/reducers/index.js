import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';
import apiReducer from './api';

const rootReducer = combineReducers({ userReducer, walletReducer, apiReducer });

export default rootReducer;
