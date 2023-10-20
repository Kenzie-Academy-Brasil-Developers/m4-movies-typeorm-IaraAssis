
import { Pagination, PaginationParams } from './../interfaces/pagination.interface';
import { Movie } from "../entities";
import { movieRepo } from '../repositories';
import { MovieCreate, MovieUpdate } from '../interfaces/movie.interface';

export const createMovieService = async(data: MovieCreate): Promise<Movie> => {

    const movie: Movie = await movieRepo.save(data); 
    return await movieRepo.save(movie);

}

export const readMovieService = async ({nextPage, page, perPage, prevPage, sort, order}: PaginationParams): Promise<Pagination> => {

    const [ movies, count ] = await movieRepo.findAndCount({
        order: {[sort]: order},
        skip: page,
        take: perPage,
    });
    
    return {
        prevPage: page <= 1 ? null : prevPage,
        nextPage: count - page <= perPage ? null : nextPage,
        count,
        data: movies,
    }
}


export const updateMovieService = async (movie: Movie, data: MovieUpdate): Promise<Movie> => {
    return await movieRepo.save({...movie, ...data})
}

export const deleteMovieService = async (movie: Movie): Promise<void> => {
    await movieRepo.remove(movie);
}



