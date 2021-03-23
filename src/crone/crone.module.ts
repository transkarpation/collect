import { Module } from '@nestjs/common';
import {schedule} from 'node-cron';
import got from 'got';
import {JSDOM} from 'jsdom';
import { CroneService } from './crone.service';
import { OlxModule } from 'src/olx/olx.module';

@Module({
    imports: [OlxModule],
    providers: [CroneService]
})
export class CroneModule {
    constructor(private croneService: CroneService) {
        console.log('Crone Module init')
        this.crone()
    }

    private async crone() {
        console.log('crone')
        schedule('* * * * *', async () => {
            await this.croneService.main()
        });
    }
}
