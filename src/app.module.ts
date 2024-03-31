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
import { AuthService } from './application/services/auth/auth.service';
import { AuthController } from './infra/controllers/auth/auth.controller';

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
    TypeOrmModule.forFeature([UserSchema, MovieSchema]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AppController, UserController, MovieController, AuthController],
  providers: [AppService, UserService, MovieService, AuthService],
  exports: [TypeOrmModule],
})
export class AppModule {}
