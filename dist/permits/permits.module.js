"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermitsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const permits_service_1 = require("./permits.service");
const permits_controller_1 = require("./permits.controller");
const permit_application_entity_1 = require("./permit-application.entity");
let PermitsModule = class PermitsModule {
};
exports.PermitsModule = PermitsModule;
exports.PermitsModule = PermitsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([permit_application_entity_1.PermitApplication])],
        controllers: [permits_controller_1.PermitsController],
        providers: [permits_service_1.PermitsService],
    })
], PermitsModule);
//# sourceMappingURL=permits.module.js.map