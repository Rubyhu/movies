import  {combineReducers} from 'redux';
import movieReducer ,{IMovieState} from './MovieReduver';
export interface IRootState {
    movie:IMovieState;
    //add other states here
}
  const rootReducer=combineReducers({
    movie:movieReducer,
})
export default rootReducer;