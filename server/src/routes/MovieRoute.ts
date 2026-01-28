import express from 'express';
import {MovieService} from '../services/MovieService';
import { ResponseHelper } from './ResponseHelper';
import { SearchCondition } from '../entities/SearchCondition';
const router = express.Router();
//localhost:3000/api/movies/XXXX  params
//localhost:3000/api/movies?id=XXXX query 
//查询单个电影
router.get('/:id', async(req, res) => {
    try{
          const id = req.params.id;
          const movie = await MovieService.findById(id);
          ResponseHelper.sendData(movie,res);
    }catch(e){
        ResponseHelper.sendError('',res);
    }


});
//查询多个电影
router.get('/', async(req, res) => {
    const movie = await MovieService.find(req.query)
    ResponseHelper.sendData(movie,res);
    
});
//添加电影
router.post('/', async(req, res) => {
 const result=await MovieService.add(req.body)
 if(Array.isArray(result)){ 
    ResponseHelper.sendError(result,res);

 }else{
     ResponseHelper.sendData(result,res);
 }

});
//修改电影
router.put('/:id', async(req, res) => {
    try{
        const result=await MovieService.edit(req.params.id,req.body)
        if(result.length>0){ ResponseHelper.sendError(result,res);
      }else{
          ResponseHelper.sendData(true,res);
     }
    }catch(e){
        ResponseHelper.sendError('id错误',res);
    }

});
//删除电影
router.delete('/:id', async(req, res) => {
 try{
    const id = req.params.id;
    await MovieService.delete(id);
    ResponseHelper.sendData(true,res);
 }catch(e){
    ResponseHelper.sendError('id错误',res);
 }
});

export default router;
