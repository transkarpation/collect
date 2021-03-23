import { Module } from '@nestjs/common';
import {schedule} from 'node-cron';
import got from 'got';
import {JSDOM} from 'jsdom';
import { CroneService } from './crone.service';

@Module({
  providers: [CroneService]
})
export class CroneModule {
    constructor() {
        console.log('Crone Module init')
        this.crone()
    }

    private async crone() {
        console.log('crone')
        schedule('* * * * *', async () => {

        });
    }
}
