const timeout = 2500

describe(
  '/ (Home Page)',
  () => {
    let page

    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('http://localhost:3000')
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should load without error', async () => {
      const main = await page.$('#main')
      expect(main).not.toBeNull()
    })
  },
  timeout
)
