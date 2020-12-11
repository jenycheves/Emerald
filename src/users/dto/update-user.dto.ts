import { IsString, IsInt, Min, Max } from 'class-validator';

export class UpdateUserDto {
    @IsInt()
    @Min(1)
    @Max(100)
    id: number;
    @IsString()
    firstName: string;
    @IsString()
    lastName: string;
  }

