import React from 'react'
import MovieTable, { IMovieTableEvent } from '../../components/MovieTable'
import {connect} from 'react-redux'
 import {Dispatch} from "react"
// import { IMovieAction } from '../../redux/actions/MovieAction'
import MovieActions from '../../redux/actions/MovieAction'

import { IRootState } from '../../redux/reducers/RootReducer'
import { IMovieState } from '../../redux/reducers/MovieReducer'

function mapStateToProps(state:IRootState):IMovieState{
    return state.movie
}

function mapDispatchToProps(dispatch:Dispatch<any>):IMovieTableEvent{
    return {
        onLoad:()=>dispatch(MovieActions.fetchMovies({
            page:1,
            limit:10,
            key:""
        })),
    }
}
const MovieContainer=connect(mapStateToProps,mapDispatchToProps)(MovieTable)
export default class MovieList extends React.Component{
    render(){
        return (
            <div>
                <MovieContainer />
            </div>
        )
    }
}
