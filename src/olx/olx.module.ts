import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OlxController } from './olx.controller';
import { OlxRepository } from './olx.repository';
import { OlxService } from './olx.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OlxRepository])
  ],
  controllers: [OlxController],
  providers: [OlxService]
})
export class OlxModule {}
