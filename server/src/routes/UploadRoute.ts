import express from 'express';
import multer from 'multer';
import path from 'path';    
import {MovieService} from '../services/MovieService';
import { ResponseHelper } from './ResponseHelper';
const router = express.Router();
const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../../uploads/upload'),//文件存储路径
    filename: function (req, file, cb) {
        //文件名
        const time=new Date().getTime() 
        //后缀名
        const extName= path.extname(file.originalname)
      cb(null,`${time}${extName}`)
    }
  })
  const allowedExtensions=['.jpg','.png','.gif','.bmp','.jiff'];
const upload = multer({ storage,limits:{
    fileSize:1024*1024,//文件最多1M

},fileFilter:(req,file,cb)=>{
    const extName= path.extname(file.originalname).toLowerCase();
    //只允许上传图片
    if(!allowedExtensions.includes(extName)){
        return cb(new Error('文件类型不支持'));
    }
    cb(null,true);
} }).single('imgfile');
//文件上传
router.post('/', async(req, res) => {
    upload(req,res,async(err)=>{
        if(err){
            ResponseHelper.sendError(err.message,res);
        }else {
            //上传成功，返回文件url
            const url=`/uploads/upload/${req.file?.filename}`
            ResponseHelper.sendData(url,res);
        }
       
    })
});


export default router;
