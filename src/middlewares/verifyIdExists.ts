import { NextFunction, Request, Response } from "express";
import { Movie } from "../entities";
import { movieRepo } from "../repositories";
import AppError from "../errors/AppError.error";

export const verifyIdExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const foundMovies: Movie | null = await movieRepo.findOneBy(
        {
            id: Number(req.params.id),
        }
    );

    if (!foundMovies) throw new AppError("Movie not found", 404)


    res.locals = { ...res.locals, foundMovies };

    return next();
}
