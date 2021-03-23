import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { OlxModule } from './olx/olx.module';
import { CroneModule } from './crone/crone.module';
import "reflect-metadata";

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), OlxModule, CroneModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
