import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import {User} from './users.service';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAllUser(): User[] {
        return this.usersService.getUsers();
    }

    @Post()
    createUser(): string {
        this.usersService.createUser();
        return 'Created';
    }
}
