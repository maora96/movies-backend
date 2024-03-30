import { IsOptional, IsString } from 'class-validator';

export class EditUserDTO {
  @IsString({ message: 'title must be a string.' })
  @IsOptional()
  name?: string;

  @IsString({ message: 'description must be a string.' })
  @IsOptional()
  email?: string;
}
