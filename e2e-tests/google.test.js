const devices = require('puppeteer/DeviceDescriptors');

describe.skip('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google');
  });

  it('should look great!', async () => {
    await page.screenshot({ path: 'google.png' });
  });

  it('should look great on iphone 6', async () => {
    await page.emulate(devices['iPhone 6']);
    await page.screenshot({ path: 'google-iphone-6.png' });
  });
});

describe('Google search', () => {
  test(
    'returns search results from google.com',
    async () => {
      await page.goto('https://google.com');
      // type into search box.
      await page.type('#lst-ib', 'puppeteer');
      await page.screenshot({ path: 'google-search-typed.png' });
      // press Enter to trigger search
      await page.keyboard.press('Enter');
      await page.screenshot({ path: 'google-search-hit-enter.png' });

      // wait until the search results page renders
      await page.waitForNavigation();
      await page.screenshot({ path: 'google-search-results.png' });

      // extract the results from the page.
      const links = await page.evaluate(resultsSelector => {
        const headings = Array.from(document.querySelectorAll(resultsSelector));
        return headings.map(anchor => anchor.textContent);
      }, 'h3');

      expect(links.length).toEqual(11);
    },
    // set timeout to 10 seconds for the test case to pass
    10000
  );

  test(
    'returns search results from developers.google.com/web/',
    async () => {
      await page.goto('https://developers.google.com/web/');

      // Type into search box.
      await page.type('#searchbox input', 'Headless Chrome');

      // Wait for suggest overlay to appear and click "show all results".
      const allResults = '.devsite-suggest-all-results';
      await page.waitForSelector(allResults);
      await page.click(allResults);

      // Wait for the results page to load and display the results.
      const results = '.gsc-results .gsc-thumbnail-inside a.gs-title';
      await page.waitForSelector(results);

      // Extract the results from the page.
      const links = await page.evaluate(results => {
        const anchors = Array.from(document.querySelectorAll(results));
        return anchors.map(anchor => {
          const title = anchor.textContent.split('|')[0].trim();
          return `${title} - ${anchor.href}`;
        });
      }, results);

      await page.screenshot({ path: 'google-dev-search-headless-chrome.png' });

      expect(links.length).toBe(10);
    },
    // set timeout to 15 seconds for the test case to pass
    15000
  );
});
