import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApplicationStatus } from '../permit-application.entity';

export class CreatePermitApplicationDto {
    @IsNotEmpty()
    @IsString()
    applicant_name: string;

    @IsNotEmpty()
    @IsEmail()
    applicant_email: string;

    @IsNotEmpty()
    @IsString()
    permit_type: string;
}

export class UpdatePermitApplicationDto {
    @IsEnum(ApplicationStatus)
    application_status: ApplicationStatus;
}