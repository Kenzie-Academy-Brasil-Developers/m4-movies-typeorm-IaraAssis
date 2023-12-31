import { AppDataSource } from './data-source';
import { Movie } from './entities';
import { MovieRepo } from './interfaces/movie.interface';


export const movieRepo: MovieRepo = AppDataSource.getRepository(Movie);