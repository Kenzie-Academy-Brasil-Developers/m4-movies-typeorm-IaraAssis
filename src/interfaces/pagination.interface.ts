import { MovieRead } from "./movie.interface"

export type Pagination = {
    prevPage: string | null
    nextPage: string | null
    count: number
    data: MovieRead
}

export type PaginationParams = {
    page: number
    perPage: number
    order: string
    sort: string
    prevPage: string | null
    nextPage: string | null
}