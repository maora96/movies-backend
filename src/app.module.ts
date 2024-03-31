import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './infra/controllers/user/user.controller';
import { UserService } from './application/services/user/user.service';
import { MovieController } from './infra/controllers/movie/movie.controller';
import { MovieService } from './application/services/movie/movie.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './infra/database/schemas/User';
import { MovieSchema } from './infra/database/schemas/Movie';
import { TerminusModule } from '@nestjs/terminus';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: [UserSchema, MovieSchema],
      synchronize: true,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST.toString(),
      database: process.env.DB_DATABASE,
      port: Number(process.env.DB_PORT),
    }),
    TerminusModule,
    TypeOrmModule.forFeature([UserSchema, UserSchema]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AppController, UserController, MovieController],
  providers: [AppService, UserService, MovieService],
  exports: [TypeOrmModule],
})
export class AppModule {}
