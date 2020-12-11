import { IsString, IsInt, Matches, Min, Max } from 'class-validator';

export class UpdateUserDto {
    @IsString()
    @Matches(/^[A-Za-z]{1,20}$/)
    firstName: string;

    @IsString()
    @Matches(/^[A-Za-z]{1,20}$/)
    lastName: string;
  }