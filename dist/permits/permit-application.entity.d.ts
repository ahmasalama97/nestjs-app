export declare enum ApplicationStatus {
    PENDING = "Pending",
    APPROVED = "Approved",
    REJECTED = "Rejected"
}
export declare class PermitApplication {
    id: number;
    applicant_name: string;
    applicant_email: string;
    permit_type: string;
    application_status: ApplicationStatus;
    submitted_at: Date;
}
