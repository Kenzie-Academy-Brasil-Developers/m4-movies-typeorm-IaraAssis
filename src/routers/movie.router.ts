import { Router } from "express";
import { createMovieController, deleteMovieController, readMovieController, updateMovieController } from "../controllers/movie.controller";
import { pagination } from "../middlewares/pagination.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { MovieCreateSchema, MovieUpdateSchema } from "../schemas/movie.schema";
import { verifyIdExists } from "../middlewares/verifyIdExists";
import { verifyNameExists } from "../middlewares/verifyName";

export const movieRouter: Router = Router();

movieRouter.post("/", validateBody(MovieCreateSchema), verifyNameExists, createMovieController);
movieRouter.get("/", pagination, readMovieController);

movieRouter.use("/:id", verifyIdExists, verifyNameExists)
movieRouter.patch("/:id", validateBody(MovieUpdateSchema), updateMovieController);
movieRouter.delete("/:id", deleteMovieController);