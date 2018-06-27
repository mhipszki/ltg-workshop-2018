describe('app', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000');
  });

  test('works fine', async () => {
    await expect(page).toMatch('Jest workshop');
  });
});
