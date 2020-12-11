import { IsString, Matches } from 'class-validator';

export class CreateUserDto {

    @IsString()
    @Matches(/^[A-Za-z]{1,20}$/)
    firstName: string;

    @IsString()
    @Matches(/^[A-Za-z]{1,20}$/)
    lastName: string;
  }

