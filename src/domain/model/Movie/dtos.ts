import { IsNumber, IsOptional, IsString } from 'class-validator';

export class EditMovieDTO {
  @IsString({ message: 'title must be a string.' })
  @IsOptional()
  title?: string;

  @IsString({ message: 'description must be a string.' })
  @IsOptional()
  summary?: string;

  @IsString({ message: 'description must be a string.' })
  @IsOptional()
  coverUrl?: string;

  @IsNumber()
  @IsOptional()
  rating?: number;
}
