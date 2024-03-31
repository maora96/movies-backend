import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDTO {
  @IsString()
  title: string;

  @IsString()
  summary: string;

  @IsString()
  coverUrl: string;

  @IsString()
  director: string;

  @IsArray()
  genres: string[];

  @IsArray()
  actors: string[];
}
