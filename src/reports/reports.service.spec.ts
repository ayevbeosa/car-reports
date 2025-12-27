import { Test, TestingModule } from '@nestjs/testing';
import { ReportsService } from './reports.service';
import { Repository } from 'typeorm';

describe('ReportsService', () => {
  let fakeReportsService: Partial<ReportsService> = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{ provide: ReportsService, useValue: fakeReportsService }],
    }).compile();
  });

  it('should be defined', () => {
    expect(fakeReportsService).toBeDefined();
  });
});
