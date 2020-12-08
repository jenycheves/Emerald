import { Injectable } from '@nestjs/common';

export interface User {
    id:string;
    firstName:string;
    lastName?:string;
};

@Injectable()
export class UsersService {

  getUsers(): User[] {
    return [{id:'1', firstName:'2'}, {id:'3', firstName:'4'}];
  }

  createUser() : void {
    // Create user
  }
}