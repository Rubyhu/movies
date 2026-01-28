import mongoose from 'mongoose';
import  MovieModel  from './MovieSchema';
// 连接数据库'
const MONGO_URI = 'mongodb://localhost:27017/moviedb';
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  export {MovieModel}
