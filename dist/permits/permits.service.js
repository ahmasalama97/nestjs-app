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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermitsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const permit_application_entity_1 = require("./permit-application.entity");
let PermitsService = class PermitsService {
    constructor(permitRepository) {
        this.permitRepository = permitRepository;
    }
    create(createPermitDto) {
        const permit = this.permitRepository.create(createPermitDto);
        return this.permitRepository.save(permit);
    }
    findAll() {
        return this.permitRepository.find();
    }
    findOne(id) {
        return this.permitRepository.findOneBy({ id });
    }
    async update(id, updatePermitDto) {
        await this.permitRepository.update(id, updatePermitDto);
        return this.findOne(id);
    }
    async updateStatus(id, status) {
        const permit = await this.findOne(id);
        if (!permit) {
            throw new Error('Permit application not found');
        }
        permit.application_status = status;
        return this.permitRepository.save(permit);
    }
    async remove(id) {
        await this.permitRepository.delete(id);
    }
};
exports.PermitsService = PermitsService;
exports.PermitsService = PermitsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(permit_application_entity_1.PermitApplication)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PermitsService);
//# sourceMappingURL=permits.service.js.map