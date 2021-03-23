import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import got from 'got';
import { OlxService } from 'src/olx/olx.service';

@Injectable()
export class CroneService {
    constructor(private olxService: OlxService) { }

    getPageContent = async (url) => {
        const resp = await got(url)
        const $ = cheerio.load(resp.body)
        const userURL = $('.offer-user__actions a').attr('href')
        const title = $('.offer-titlebox h1').text().trim()
        const price = $('.pricelabel__value.not-arranged').text().trim()
        const description = $('.descriptioncontent__headline ~ div').text().trim()
        const offerId = $('.offer-bottombar__items').children().last().find('strong').text();
        const result = await this.olxService.create({ userURL, title, price, description, offerId })
        console.log(result?.id)
    }

    async main() {
        try {
            const resp = await got('https://www.olx.ua/list/')
            const $ = cheerio.load(resp.body)

            const els = $('td.offer')
            let hrefs = []
            for (let i = 0; i < els.length; i++) {
                const href = $('.title-cell a', els[i]).attr('href');
                hrefs.push(href)
            }

            hrefs.forEach(url => {
                this.getPageContent(url)
            })

        } catch (e) {
            console.log('got error')
        }
    }
}
