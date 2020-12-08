import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

/*
export interface UserIn {
    id:string;
    firstName:string;
    lastName?:string;
    isActive?:boolean;
};
*/

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    getAll() : Promise<User[]> {
        return this.usersRepository.find();
    }

    create(createUserDto: CreateUserDto) : void {
        
        const user:User = {id : parseInt(createUserDto.id),
                            firstName: createUserDto.firstName,
                            lastName:createUserDto.lastName,
                            isActive:true
                            };

        this.usersRepository.insert(user);
        console.log(`User #${createUserDto.id} is created`);
    }

    update(updateUserDto: UpdateUserDto) : void {
        
        const user:User = {id : parseInt(updateUserDto.id),
                            firstName: updateUserDto.firstName,
                            lastName:updateUserDto.lastName,
                            isActive:true
                            };

        this.usersRepository.update(user.id, user);
        console.log(`User #${updateUserDto.id} is updated`);
    }


    async delete(id:string) : Promise<void> {
        await this.usersRepository.delete(id);
        console.log(`User #${id} is deleted`);
    }
}