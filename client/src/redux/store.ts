import { createStore ,applyMiddleware} from 'redux';
import  rootReducer from './reducers/RootReducer';
import logger from 'redux-logger';
import {thunk} from 'redux-thunk';
const initialState = {};
export const store = createStore(rootReducer, initialState, applyMiddleware(thunk as any,logger)); //,applyMiddleware(thunk)
