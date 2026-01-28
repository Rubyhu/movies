import { Movie } from '../entities/Movie';
import { IMovie } from '../db/MovieSchema';
import { MovieModel } from '../db';
import { SearchCondition } from '../entities/SearchCondition';
import { ISearchResult } from '../entities/CommonTypes';


export class MovieService {
    //添加电影
    public static async add(movie: Movie) : Promise<IMovie|string[]> {
        //类型转化
      movie=Movie.transform(movie);
      //数据校验
      const err=await movie.validateThis();
      if(err.length>0) {
          return err;
      }
      //添加到数据库
      return await MovieModel.create(movie);
    }
    //删除电影
    public static async delete(id: string) : Promise<void> {
         await MovieModel.deleteOne({_id: id});
    }
    //更新电影
    public static async edit(id: string, movie: Movie) : Promise<string[]> {
        //类型转化
        const movieObj=Movie.transform(movie);
        //数据校验
        const err=await movieObj.validateThis();
        if(err.length>0) {
            return err;
        }
        //更新数据库
         await MovieModel.updateOne({_id: id}, movie);
         return [];
    }
    public static async findById(id: string) : Promise<IMovie|null> {
        return await MovieModel.findOne({_id: id});
    }
    public static async find(condition:any) : Promise<ISearchResult<IMovie>> {
       //数据转化
        const conditionObj=SearchCondition.transform(condition);
       //数据校验
       const err=await conditionObj.validateThis();
       if(err.length>0) {
           return {
            data:[],
            count:0,
            Errors:err
           };
       }
       //查询
       const movies= await MovieModel.find({
          name:{$regex: new RegExp(conditionObj.key)},
       }).skip((conditionObj.page-1)*conditionObj.limit).limit(conditionObj.limit);
    const count=await MovieModel.find(
        {name:{$regex: new RegExp(conditionObj.key)}}
    ).countDocuments();
       return {
        data:movies,
        count:count,
        Errors:[]
       };
    }
}