import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateOlxDto } from './dto/create-olx.dto';
import { Olx } from './olx.entity';
import { OlxService } from './olx.service';

@Controller('olx')
export class OlxController {
    constructor(private olxService: OlxService) {}

    @Get()
    getAllItems() {
        return this.olxService.getAll()
    }

    @Get('/:id')
    getById(@Param('id') id: number) {
        return this.olxService.getById(id)
    }

    @Post()
    async createOlx(@Body() createOlxDto: CreateOlxDto): Promise<Olx> {
        return this.olxService.create(createOlxDto)
    }
}
