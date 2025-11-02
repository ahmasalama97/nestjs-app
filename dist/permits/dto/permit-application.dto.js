"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePermitApplicationDto = exports.CreatePermitApplicationDto = void 0;
const class_validator_1 = require("class-validator");
const permit_application_entity_1 = require("../permit-application.entity");
class CreatePermitApplicationDto {
}
exports.CreatePermitApplicationDto = CreatePermitApplicationDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePermitApplicationDto.prototype, "applicant_name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreatePermitApplicationDto.prototype, "applicant_email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePermitApplicationDto.prototype, "permit_type", void 0);
class UpdatePermitApplicationDto {
}
exports.UpdatePermitApplicationDto = UpdatePermitApplicationDto;
__decorate([
    (0, class_validator_1.IsEnum)(permit_application_entity_1.ApplicationStatus),
    __metadata("design:type", String)
], UpdatePermitApplicationDto.prototype, "application_status", void 0);
//# sourceMappingURL=permit-application.dto.js.map