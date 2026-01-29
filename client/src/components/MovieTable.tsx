import React from 'react';
import {IMovieState} from '../redux/reducers/MovieReducer'
import {ColumnProps} from 'antd/lib/table'
import {IMovie} from '../services/MovieService'
import {Table} from 'antd'
export interface IMovieTableEvent {
    onLoad:()=>void
}
export default class MovieTable extends React.Component<IMovieState&IMovieTableEvent> {
// 组件挂载完成后的生命周期方法
    componentDidMount(){
        if(this.props.onLoad){
        this.props.onLoad()
        }
    }
  private getColumns():ColumnProps<IMovie>[]{
    return [
      {
        title: '电影名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '电影类型',
        dataIndex: 'types',
        key: 'types',
      },
      {
        title: '电影地区',
        dataIndex: 'areas',
        key: 'areas',
      },
      {
        title: '电影上映时间',
        dataIndex: 'releaseDate',
        key: 'releaseDate',
      },
    ]
  }
  render() {
    return (
      <Table columns={this.getColumns()} dataSource={this.props.data} />  // 返回一个简单的div，显示MovieTable文本
    )
  }
}

