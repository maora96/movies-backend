import { ApiProperty } from '@nestjs/swagger';

export class FiltersDTO {
  @ApiProperty()
  genres?: string[];

  @ApiProperty()
  director?: string;

  @ApiProperty()
  title?: string;

  @ApiProperty()
  actors?: string[];
}
