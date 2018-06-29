// NOTE: the app needs to be up and running on localhost:3000
// for this test suite to run
describe.skip('app', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000');
  });

  test('works fine', async () => {
    await expect(page).toMatch('Jest workshop');
  });
});
