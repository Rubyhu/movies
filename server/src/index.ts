import 'reflect-metadata';
import{MovieModel} from './db';
import express from 'express';
import movieRouter from './routes/MovieRoute';
import uploadRouter from './routes/UploadRoute';

import { Movie } from './entities/Movie';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
const app = express();
const PORT = 3000;
app.use("/uploads",express.static("public/upload"))
app.use(express.json());//配置中间件，用于解析请求体中的JSON数据
app.use('/api/movies',movieRouter);
//文件上传
app.use('/api/upload',uploadRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




