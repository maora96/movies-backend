import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDTO {
  @IsString()
  @IsOptional()
  @ApiProperty()
  email: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  name: string;
}
