import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  const mockRepository = jest.fn(() => ({
    metadata: {
      columns: [],
      relations: [],
    },
  }));

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, {provide: getRepositoryToken(User), useClass: mockRepository},]
    }).compile();

    usersService = moduleRef.get<UsersService>(UsersService);
    usersController = moduleRef.get<UsersController>(UsersController);
  });

  describe('getAll', () => {
    it('users getAll return array of users', async () => {

      const result: User[] = [ {id:1, firstName: "Evgeniy", lastName: "Kogan", "isActive": true } ];
      
      jest.spyOn(usersService, 'getAll').mockImplementation(() => { 
        console.log('Mocked function worked' + JSON.stringify(result));
        return Promise.resolve(result);
      });
      
      await expect(usersController.getAll()).resolves.toBe(result);
    });
  });
});
