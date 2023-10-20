import { z } from 'zod';

const MovieSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50),
    description: z.string().nullish(),
    duration: z.number().positive({message: "Number must be greater than 0"}),
    price: z.number().positive().int(),
});

export const MovieCreateSchema = MovieSchema.omit({ id: true });
export const MovieUpdateSchema = MovieCreateSchema.partial();