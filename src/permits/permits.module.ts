import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermitsService } from './permits.service';
import { PermitsController } from './permits.controller';
import { PermitApplication } from './permit-application.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PermitApplication])],
    controllers: [PermitsController],
    providers: [PermitsService],
})
export class PermitsModule { }