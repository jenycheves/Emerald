import { Body, Controller, Delete, Query, Get, Param, Post, Put, ParseIntPipe, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidationPipe } from './validation.pipe';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAll(): Promise<User[]> {
        return this.usersService.getAll();
    }    

    @Get(':id')
    getOne(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<User> {
        return this.usersService.getOne(id);
    }

    @Post()
    //@UsePipes(new JoiValidationPipe(createUserSchema))
    create(
        @Body(new ValidationPipe()) createUserDto: CreateUserDto): void
    {
        this.usersService.create(createUserDto);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: string,
        @Body() updateUserDto: UpdateUserDto) : void
    {
        this.usersService.update(updateUserDto);
    }

    @Delete(':id')
    delete(
        @Param('id', ParseIntPipe) id: number) : void
    {
        this.usersService.delete(id);
    }
}
