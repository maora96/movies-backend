import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/domain/model/Movie/Movie';
import { ArrayContains, ILike, In, Repository } from 'typeorm';
import { Filters } from './dtos';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  async create(
    title: string,
    summary: string,
    coverUrl: string,
    director: string,
    genres: string[],
    actors: string[],
  ) {
    const movie = new Movie(title, summary, coverUrl, director, genres, actors);

    return this.movieRepository.save(movie);
  }

  async findAll(filters: Filters) {
    const movies = await this.movieRepository.find({
      where: {
        ...(filters?.title && { title: ILike(`%${filters?.title}%`) }),
        ...(filters?.director && {
          director: ILike(`%${filters?.director}%`),
        }),
        ...(filters?.genres && {
          genres: ArrayContains(filters.genres),
        }),
        ...(filters?.actors && {
          actors: ArrayContains(filters.actors),
        }),
      },
    });

    return movies;
  }

  async findOne(id: string): Promise<Movie> {
    const movie = await this.movieRepository.findOne({ where: { id } });

    if (!movie) {
      throw new NotFoundException('Movie not found.');
    }
    return movie;
  }

  async vote(id: string, rating: number): Promise<Movie> {
    const movie = await this.movieRepository.findOne({ where: { id } });

    if (!movie) {
      throw new NotFoundException('Movie not found.');
    }

    movie.vote(rating);

    return this.movieRepository.save(movie);
  }
}
