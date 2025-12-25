import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './report.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dtos/create-report.dto';
import { User } from '../users/user.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report) private repository: Repository<Report>,
  ) {}

  create(reportDto: CreateReportDto, user: User) {
    const report = this.repository.create(reportDto);
    report.user = user;
    return this.repository.save(report);
  }

  async changeApproval(id: string, approved: boolean) {
    const report = await this.repository.findOne({
      where: { id: parseInt(id) },
    });

    if (!report) {
      throw new NotFoundException('report not found');
    }

    report.approved = approved;
    return this.repository.save(report);
  }
}
