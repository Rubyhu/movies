import React from 'react'
import {NavLink,Route,Routes,Outlet} from 'react-router-dom';
import Home from './movie/Home';
import MovieList from './movie/MovieList';
import AddMovie from './movie/AddMovie';
import EditMovie from './movie/EditMovie';
import { Flex, Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const _Layout: React.FC = () => {
    const headerStyle = {
        color: '#fff',
    };
  return (
    <div className="container">
    <Layout>
        <Header style={headerStyle}>
                <NavLink to="/">猫眼电影</NavLink>
        </Header>
      <Layout>
         <Sider> 
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><NavLink to="/movie">电影列表</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to="/movie/add">添加电影</NavLink></Menu.Item>
            </Menu>
         </Sider>
        <Content>
            <div className="main">
            <Routes>
                 <Route path="/" element={<Home />}  />
                 <Route path="/movie" element={<MovieList />} />
                 <Route path="/movie/add" element={<AddMovie />} />
                 <Route path="/movie/edit/:id" element={<EditMovie />} />
            </Routes>
            </div>
            </Content>
    
      </Layout>
    </Layout>
    </div>
 
    // <div>
    //     <header>
    //         <ul>
    //             <li><NavLink to="/">首页</NavLink></li>
    //             <li><NavLink to="/movie">电影列表</NavLink></li>
    //             <li><NavLink to="/movie/add">添加电影</NavLink></li>
    //             <li><NavLink to="/movie/edit/1">编辑电影</NavLink></li>
    //         </ul>
    //     </header>
    //     <div>
    //         <Routes>
    //             <Route path="/" element={<Home />}  />
    //             <Route path="/movie" element={<MovieList />} />
    //             <Route path="/movie/add" element={<AddMovie />} />
    //             <Route path="/movie/edit/:id" element={<EditMovie />} />
    //         </Routes>
    //     </div>
    // </div>
  )
}
export default _Layout