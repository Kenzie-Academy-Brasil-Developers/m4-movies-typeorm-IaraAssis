import {  Repository } from "typeorm";
import { Movie } from "../entities";
import { MovieCreateSchema } from "../schemas/movie.schema";
import { z } from "zod";


export type MovieCreate = z.infer<typeof MovieCreateSchema>;
export type MovieRead = Array<Movie>;
export type MovieUpdate = Partial<Movie>;

export type MovieRepo = Repository<Movie>

