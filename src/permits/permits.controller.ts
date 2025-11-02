import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermitsService } from './permits.service';
import { CreatePermitApplicationDto, UpdatePermitApplicationDto } from './dto/permit-application.dto';
import { PermitApplication, ApplicationStatus } from './permit-application.entity';

@Controller('permits')
export class PermitsController {
    constructor(private readonly permitsService: PermitsService) { }

    @Post()
    create(@Body() createPermitDto: CreatePermitApplicationDto): Promise<PermitApplication> {
        return this.permitsService.create(createPermitDto);
    }

    @Get()
    findAll(): Promise<PermitApplication[]> {
        return this.permitsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<PermitApplication> {
        return this.permitsService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updatePermitDto: UpdatePermitApplicationDto,
    ): Promise<PermitApplication> {
        return this.permitsService.update(+id, updatePermitDto);
    }

    @Patch(':id/status')
    async updateStatus(
        @Param('id') id: string,
        @Body('status') status: ApplicationStatus,
    ): Promise<PermitApplication> {
        return this.permitsService.updateStatus(+id, status);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.permitsService.remove(+id);
    }
}