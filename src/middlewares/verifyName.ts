import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError.error";
import { Movie } from "../entities";
import { movieRepo } from "../repositories";


export const verifyNameExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    if (!req.body.name){
        return next();
    }
    const foundMovie: Movie | null = await movieRepo.findOneBy(
        {
            name: req.body.name
        }
        );

    if(foundMovie) {
        throw new AppError("Movie already exists.", 409);
    }
    
    res.locals.foundMovie = foundMovie;
    
    return next();
}

