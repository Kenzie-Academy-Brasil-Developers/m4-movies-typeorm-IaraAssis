import { pagination } from './../middlewares/pagination.middleware';
import { Request, Response } from "express";
import { Movie } from "../entities";
import { createMovieService, deleteMovieService, readMovieService, updateMovieService } from "../services/movie.service";
import { AppDataSource } from "../data-source";
import { MovieCreateSchema } from '../schemas/movie.schema';
import { Pagination } from '../interfaces/pagination.interface';

export const createMovieController = async (req: Request, res: Response): Promise<Response> => {
    
    const movie: Movie = await createMovieService(req.body);

    return res.status(201).json(movie);
}


export const readMovieController = async (req: Request, res: Response): Promise<Response> => {

    const movies: Pagination = await readMovieService(res.locals.pagination);

    return res.status(200).json(movies);

};


export const updateMovieController = async (req: Request, res: Response): Promise<Response> => {
    const {foundMovies} = res.locals
    
    const movies: Movie = await updateMovieService(foundMovies, req.body);
    return res.status(200).json(movies);
}


export const deleteMovieController = async (req: Request, res: Response): Promise<Response> => {
    await deleteMovieService(res.locals.foundMovies);
    return res.status(204).json();
}