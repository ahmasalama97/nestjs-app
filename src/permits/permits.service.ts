import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PermitApplication, ApplicationStatus } from './permit-application.entity';
import { CreatePermitApplicationDto, UpdatePermitApplicationDto } from './dto/permit-application.dto';

@Injectable()
export class PermitsService {
    constructor(
        @InjectRepository(PermitApplication)
        private permitRepository: Repository<PermitApplication>,
    ) { }

    create(createPermitDto: CreatePermitApplicationDto): Promise<PermitApplication> {
        const permit = this.permitRepository.create(createPermitDto);
        return this.permitRepository.save(permit);
    }

    findAll(): Promise<PermitApplication[]> {
        return this.permitRepository.find();
    }

    findOne(id: number): Promise<PermitApplication> {
        return this.permitRepository.findOneBy({ id });
    }

    async update(id: number, updatePermitDto: UpdatePermitApplicationDto): Promise<PermitApplication> {
        await this.permitRepository.update(id, updatePermitDto);
        return this.findOne(id);
    }

    async updateStatus(id: number, status: ApplicationStatus): Promise<PermitApplication> {
        const permit = await this.findOne(id);
        if (!permit) {
            throw new Error('Permit application not found');
        }

        permit.application_status = status;
        return this.permitRepository.save(permit);
    }

    async remove(id: number): Promise<void> {
        await this.permitRepository.delete(id);
    }
}