import { Min } from 'class-validator';

export class CreateUserDto {
    @Min(2)
    id: string;
    firstName: string;
    lastName: string;
  }

