const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch(`headless: "new"`);
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({ path: 'sachin.png' });
  await browser.close();
})();
