import { v4 as uuid } from 'uuid';

export class Movie {
  id: string;
  title: string;
  summary: string;
  coverUrl: string;
  rating: number;
  numberOfRatings: number;
  director: string;
  genres: string[];
  actors: string[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;

  constructor(
    title: string,
    summary: string,
    coverUrl: string,
    director: string,
    genres: string[],
    actors: string[],
  ) {
    this.id = uuid();
    this.title = title;
    this.summary = summary;
    this.coverUrl = coverUrl;
    this.director = director;
    this.genres = genres;
    this.actors = actors;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.deletedAt = null;
    this.numberOfRatings = 0;
    this.rating = 0;
  }

  vote(rating: number) {
    this.numberOfRatings += 1;
    const sum = Number(this.rating) + Number(rating);
    this.rating = Number((sum / Number(this.numberOfRatings)).toFixed(1));
  }
}
