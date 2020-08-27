import TestCrawler from './test_crawler';

(async () => {
    const crawler = new TestCrawler();
    await crawler.run();
})();