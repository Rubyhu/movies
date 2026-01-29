import { IMovie } from '../../services/MovieService';
import { Reducer, Action } from 'redux';
import {ISearchCondition} from '../../services/CommonTypes';
import { MovieActions,SaveMoviesAction,SetConditionAction,SetLoadingAction,DeleteAction } from '../actions/MovieAction';
export type IMovieCondition=Required<ISearchCondition>;
//描述电影列表的状态类型
export interface IMovieState{
    data:IMovie[];//电影列表
    condition:IMovieCondition;//搜索条件
    total:number;//总记录数
    isLoading:boolean;//是否正在加载
    
}
const defaultState:IMovieState={
    data:[],
    condition:{
        page:1,
        limit:10,
        key:''
    },
    total:0,
    isLoading:false
    
}
type MovieReducer<A extends Action<string>>=Reducer<IMovieState,A>;
const saveMovie:MovieReducer<SaveMoviesAction>=function(state,action){
    return Object.assign({},state,{
        data:action.payload.movies,
        total:action.payload.total,
    })
}

const setCondition:MovieReducer<SetConditionAction>=function(state,action){
     return Object.assign({},state,{
        condition:{
            ...state?.condition,
            ...action.payload
        }
      
    })
}
const setLoading:MovieReducer<SetLoadingAction>=function(state,action){
    return Object.assign({},state,{
        isLoading:action.payload,
    })
}
const deleteMovie:MovieReducer<DeleteAction>=function(state,action){
     return Object.assign({},state,{
         data:state?.data?.filter(m=>m._id!==action.payload)||[],
        total:state?.total?state.total-1:0,
    })
}
export default function movieReducer(state:IMovieState=defaultState,action:MovieActions){
    switch(action.type){
        case 'movie_delete':
            deleteMovie(state,action)
            break;
        case 'movie_save':
            saveMovie(state,action);
            break;
        case 'movie_setCondition':
            setCondition(state,action);
          break
       case 'movie_setLoading':
        setLoading(state,action);
         break;
        default:
            return state;
    }
}
    
