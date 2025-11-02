import { Repository } from 'typeorm';
import { PermitApplication, ApplicationStatus } from './permit-application.entity';
import { CreatePermitApplicationDto, UpdatePermitApplicationDto } from './dto/permit-application.dto';
export declare class PermitsService {
    private permitRepository;
    constructor(permitRepository: Repository<PermitApplication>);
    create(createPermitDto: CreatePermitApplicationDto): Promise<PermitApplication>;
    findAll(): Promise<PermitApplication[]>;
    findOne(id: number): Promise<PermitApplication>;
    update(id: number, updatePermitDto: UpdatePermitApplicationDto): Promise<PermitApplication>;
    updateStatus(id: number, status: ApplicationStatus): Promise<PermitApplication>;
    remove(id: number): Promise<void>;
}
