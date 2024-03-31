import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ClientGuard } from '../auth/client.guard';
import { MovieService } from 'src/application/services/movie/movie.service';
import { CreateMovieDTO } from './dtos/create.dto';
import { AdminGuard } from '../auth/admin.guard';
import { FiltersDTO } from './dtos/filters.dto';
import { VoteDTO } from './dtos/vote.dto';

@Controller('/v1/movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @UseGuards(AdminGuard)
  @Post('create')
  async signUp(@Body() body: CreateMovieDTO) {
    const content = await this.movieService.create(
      body.title,
      body.summary,
      body.coverUrl,
      body.director,
      body.genres,
      body.actors,
    );

    return content;
  }

  @UseGuards(ClientGuard)
  @Post('/list')
  async list(@Body() queries: FiltersDTO) {
    const content = await this.movieService.findAll(queries);

    return content;
  }

  @UseGuards(ClientGuard)
  @Get('/:id')
  async getOne(@Param('id') id: string) {
    const content = await this.movieService.findOne(id);

    return content;
  }

  @UseGuards(ClientGuard)
  @Post('/:id/vote')
  async vote(@Param('id') id: string, @Body() body: VoteDTO) {
    const content = await this.movieService.vote(id, body.rating);

    return content;
  }
}
