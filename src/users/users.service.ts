import { Delete, Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    getAll() : Promise<User[]> {
        const users : Promise<User[]> = this.usersRepository.find();
        users.then((users) => {
            if (users) console.log(`${users.length} users are found`);
        });
        return users;
    }

    getOne(id:number) : Promise<User> | null {
        const user = this.usersRepository.findOne(id);
        user.then((user) => {
            if (user && user.id == id) console.log(`User #${id} is found`);
            else console.log(`User doesn't exist`);
        });
        return user;
    }

    create(createUserDto: CreateUserDto) : void {

        this.usersRepository
            .createQueryBuilder()
            .insert()
            .into(User)
            .values([ {firstName: createUserDto.firstName, lastName: createUserDto.lastName} ])
            .execute();

        console.log(`User #${createUserDto.firstName} is created`);
    }

    update(id: number, updateUserDto: UpdateUserDto) : void {

        const result: Promise<UpdateResult> = this
            .usersRepository
            .createQueryBuilder()
            .update(User)
            .set({firstName: updateUserDto.firstName, lastName: updateUserDto.lastName})
            .where("id = :id", {id: id})
            .execute();

        result.then((result) => {
            if (result.affected)
                console.log(`User #${id} is updated`);
            else
                console.log(`User update failed`);
        });
    }

    async delete(id:number) : Promise<void> {

        const result = await this
            .usersRepository
            .createQueryBuilder()
            .delete()
            .from(User)
            .where("id = :id", {id: id})
            .execute();

        if (result.affected)
            console.log(`User #${id} is deleted`);
        else
            console.log(`User doesn't exist`);
    }
}