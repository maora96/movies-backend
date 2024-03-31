import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { UserRoles } from 'src/domain/model/User/User';

export class SignUpDTO {
  @IsString()
  @IsNotEmpty({ message: "email can't be empty" })
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty({ message: "password can't be empty" })
  @ApiProperty()
  password: string;

  @IsString()
  @IsNotEmpty({ message: "name can't be empty" })
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty({ message: "role can't be empty" })
  @ApiProperty()
  role: UserRoles;
}
