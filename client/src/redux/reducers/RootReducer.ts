import  {combineReducers} from 'redux';
import movieReducer ,{IMovieState} from './MovieReducer';
export interface IRootState {
    movie:IMovieState;
    //add other states here
}
  const rootReducer=combineReducers({
    movie:movieReducer,
})
export default rootReducer;