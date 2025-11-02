import { ApplicationStatus } from '../permit-application.entity';
export declare class CreatePermitApplicationDto {
    applicant_name: string;
    applicant_email: string;
    permit_type: string;
}
export declare class UpdatePermitApplicationDto {
    application_status: ApplicationStatus;
}
