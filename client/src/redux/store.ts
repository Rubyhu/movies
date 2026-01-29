import { createStore ,applyMiddleware} from 'redux';
import  rootReducer, { IRootState }  from './reducers/RootReducer';
import logger from 'redux-logger';
import thunk,{ThunkMiddleware} from 'redux-thunk';
const initialState = {};
export const store = createStore(rootReducer, initialState, applyMiddleware(thunk as any,logger)); //,applyMiddleware(thunk)
