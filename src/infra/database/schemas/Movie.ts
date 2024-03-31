import { Movie } from 'src/domain/model/Movie/Movie';
import { EntitySchema } from 'typeorm';

export const MovieSchema = new EntitySchema<Movie>({
  tableName: 'movies',
  name: Movie.name,
  target: Movie,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    title: {
      type: String,
    },
    summary: {
      type: String,
    },
    coverUrl: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    numberOfRatings: {
      type: Number,
      default: 0,
    },
    director: {
      type: String,
    },
    genres: {
      array: true,
      type: String,
    },
    actors: {
      array: true,
      type: String,
    },
    createdAt: {
      type: 'timestamp',
      createDate: true,
    },
    updatedAt: {
      type: 'timestamp',
      updateDate: true,
    },
    deletedAt: {
      type: 'timestamp',
      deleteDate: true,
    },
  },
});
