import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let fakeUsersService: Partial<UsersService> = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{ provide: UsersService, useValue: fakeUsersService }],
    }).compile();
  });

  it('should be defined', () => {
    expect(fakeUsersService).toBeDefined();
  });
});
