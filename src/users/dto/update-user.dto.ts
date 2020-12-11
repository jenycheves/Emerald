import { IsString, IsInt, Matches } from 'class-validator';

export class UpdateUserDto {
    @IsInt()
    @Matches(/^[1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]$/) // validate range 1-9999
    id: number;

    @IsString()
    @Matches(/^[A-Za-z]{1,20}$/)
    firstName: string;

    @IsString()
    @Matches(/^[A-Za-z]{1,20}$/)
    lastName: string;
  }

