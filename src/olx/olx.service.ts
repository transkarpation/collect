import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOlxDto } from './dto/create-olx.dto';
import { Olx } from './olx.entity';
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

    async getAll(): Promise<Olx[]> {
        return await this.olxRepository.find()
    }

    async create(createOlxDto: CreateOlxDto): Promise<Olx|null> {
        const {userURL, title, price, description, offerId} = createOlxDto
        const olx = new Olx()

        olx.title = title;
        olx.price = price;
        olx.description = description;
        olx.offerId = offerId;

        try {
            const result =  await olx.save() 
            return result
        } catch(e) {
            if(e.code == 23505) {
                console.log('duplicate key error')
            }
            return null
        } 
    }
}
