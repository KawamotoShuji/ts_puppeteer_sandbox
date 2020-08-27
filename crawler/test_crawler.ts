import { Browser } from 'puppeteer';
import { Page } from 'puppeteer';
import { BaseCrawler } from './base_crawler';

export default class TestCrawler extends BaseCrawler {
    protected async crawl(_: Browser, page: Page) {
        await page
            .goto('https://www.uluru.biz/')
            .then(() => page.waitFor(1000));
    }
}