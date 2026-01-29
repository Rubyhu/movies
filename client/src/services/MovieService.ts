import axios from 'axios';
import { IResponseData, IResponseError,ISearchCondition ,IResponsePageData} from './CommonTypes';
export interface IMovie{
    _id?: string;
    name:string;
    types: string[];
    areas: string[];
    timeLong: number;
    isHot: boolean;
    isComing: boolean;
   isClasic: boolean;
    description?: string;
    poster?: string;
}
//客户端端口
export class MovieService{
    //添加
    public static async add(movie:IMovie):Promise<IResponseData<IMovie>|IResponseError>{
      const {data}=await axios.post('/api/movies',movie);
      return data

    }
    //修改
    public static async edit(movie:IMovie):Promise<IResponseData<IMovie>|IResponseError>{
      const {data}=await axios.put(`/api/movies/${movie._id}`,movie);
      return data
    }
    //删除
    public static async delete(movieId:string):Promise<IResponseData<IMovie>|IResponseError>{
      const {data}=await axios.delete(`/api/movies/${movieId}`);
      return data
    }
    //根据id查询
    public static async getMovieById(movieId:string):Promise<IResponseData<IMovie>|IResponseError>{
      const {data}=await axios.get(`/api/movies/${movieId}`);
      return data
    }
    public static async getMovies(condition:ISearchCondition):Promise<IResponsePageData<IMovie>|IResponseError>{
      const {data}=await axios.get(`/api/movies`,{params:condition});
      return {
        err:"",
        data:data.movies,
        total:data.total
      }
    }

}