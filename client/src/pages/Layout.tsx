import React from 'react'
import {NavLink,Route,Routes,Outlet} from 'react-router-dom';
import Home from './movie/Home';
import MovieList from './movie/MovieList';
import AddMovie from './movie/AddMovie';
import EditMovie from './movie/EditMovie';

const Layout: React.FC = () => {
  return (
    <div>
        <header>
            <ul>
                <li><NavLink to="/">首页</NavLink></li>
                <li><NavLink to="/movie">电影列表</NavLink></li>
                <li><NavLink to="/movie/add">添加电影</NavLink></li>
                <li><NavLink to="/movie/edit/1">编辑电影</NavLink></li>
            </ul>
        </header>
        <div>
            <Routes>
                <Route path="/" element={<Home />}  />
                <Route path="/movie" element={<MovieList />} />
                <Route path="/movie/add" element={<AddMovie />} />
                <Route path="/movie/edit/:id" element={<EditMovie />} />
            </Routes>
        </div>
    </div>
  )
}
export default Layout