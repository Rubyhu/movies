
import {IAction} from "./ActionTypes";
import {IMovie, MovieService,} from "../../services/MovieService";
import {ISearchCondition} from "../../services/CommonTypes";
import {ThunkAction} from "redux-thunk";

export type SaveMoviesAction = IAction<'movie_save',{movies:IMovie[],total:number}>
 function saveMoviesAction(movies:IMovie[],total:number):SaveMoviesAction{
    return {
        type: "movie_save",
        payload: {
            movies,
            total
        }
    }
}
export type SetLoadingAction = IAction<'movie_setLoading',boolean>
function setLoadingAction(isLoading:boolean):SetLoadingAction{
    return {
        type: "movie_setLoading",
        payload: isLoading
        
    }
}
export type SetConditionAction = IAction<'movie_setCondition',ISearchCondition>
function setConditionAction(condition:ISearchCondition):SetConditionAction{
    return {
        type: "movie_setCondition",
        payload: condition
    }
}
export type DeleteAction = IAction<'movie_delete',string>
function deleteAction(id:string):DeleteAction{
    return {
        type: "movie_delete",
        payload: id
    }
}
export type MovieActions = SaveMoviesAction | SetLoadingAction | SetConditionAction | DeleteAction

//根据条件从服务器获取电影的数据
function fetchMovies(condition:ISearchCondition):ThunkAction<Promise<void>,any,any,any>{
    return async (dispatch,getState)=>{
        dispatch(setLoadingAction(true));
        dispatch(setConditionAction(condition));
        const curCondition = getState().movie.condition;
    const {data}= await MovieService.getMovies(curCondition)
    const total=data?.length||0;
        dispatch(saveMoviesAction(data||[],total));
        dispatch(setLoadingAction(false));
    }
}
//删除电影
function deleteMovies(id:string):ThunkAction<Promise<void>,any,any,any>{
    return async (dispatch)=>{
        dispatch(setLoadingAction(true));
        await MovieService.delete(id)
        dispatch(deleteAction(id));
        dispatch(setLoadingAction(false));
    }
}
export default {
    saveMoviesAction,
    setLoadingAction,
    setConditionAction,
    deleteAction,
    fetchMovies,
    deleteMovies
};