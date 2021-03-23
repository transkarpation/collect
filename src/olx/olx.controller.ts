import { Controller, Get } from '@nestjs/common';
import { OlxService } from './olx.service';

@Controller('olx')
export class OlxController {
    constructor(private olxService: OlxService) {}

    @Get()
    getAllItems() {
        
    }
}
