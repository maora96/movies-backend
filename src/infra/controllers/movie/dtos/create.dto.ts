import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDTO {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  summary: string;

  @ApiProperty()
  @IsString()
  coverUrl: string;

  @ApiProperty()
  @IsString()
  director: string;

  @ApiProperty()
  @IsArray()
  genres: string[];

  @ApiProperty()
  @IsArray()
  actors: string[];
}
