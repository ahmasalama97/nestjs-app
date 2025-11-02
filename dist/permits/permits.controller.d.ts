import { PermitsService } from './permits.service';
import { CreatePermitApplicationDto, UpdatePermitApplicationDto } from './dto/permit-application.dto';
import { PermitApplication, ApplicationStatus } from './permit-application.entity';
export declare class PermitsController {
    private readonly permitsService;
    constructor(permitsService: PermitsService);
    create(createPermitDto: CreatePermitApplicationDto): Promise<PermitApplication>;
    findAll(): Promise<PermitApplication[]>;
    findOne(id: string): Promise<PermitApplication>;
    update(id: string, updatePermitDto: UpdatePermitApplicationDto): Promise<PermitApplication>;
    updateStatus(id: string, status: ApplicationStatus): Promise<PermitApplication>;
    remove(id: string): Promise<void>;
}
