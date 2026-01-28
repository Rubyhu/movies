import mongoose from 'mongoose';
import { Movie } from '../entities/Movie';

export interface IMovie extends Movie, mongoose.Document {}

const movieSchema = new mongoose.Schema<IMovie>({
    name: String,
    types: [String],
    areas: [String],
    timeLong: Number,
    isHot: Boolean,
    isComing: Boolean,
    isClasic: Boolean,
    description: String,
    poster: String
}, {
    versionKey: false
});

export default  mongoose.model<IMovie>('Movie', movieSchema);
