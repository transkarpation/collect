import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OlxRepository } from './olx.repository';

@Injectable()
export class OlxService {

    constructor(
        @InjectRepository(OlxRepository) 
        private olxRepository: OlxRepository,
    ) {}

    async getById(id: number) {
        const found = await this.olxRepository.findOne(id)

        if (!found) {
            throw new NotFoundException(`Item with  id ${id} not found`)
        }

        return found
    }
}
