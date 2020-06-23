const timeout = 2500
const URL = 'http://localhost:3000'

const getElementInnerText = async (page, selector) =>
  page.evaluate((element) => element.innerText, await page.$(selector))

const getResult = async (page) => {
  await page.waitFor(500)
  return getElementInnerText(page, '#result')
}

const getButtonByChar = async (page, char) => (await page.$x(`//button[text()='${char}']`))[0]
const clickButton = async (page, char) => (await getButtonByChar(page, char)).click()
const clickButtonReset = async (page) => clickButton(page, 'C')

describe(
  '/ (Calculator)',
  () => {
    let page = null

    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto(URL, { waitUntil: 'networkidle2' })
      await page.target().createCDPSession()
    })

    afterAll(async () => {
      await page.close()
    })

    it('1) page load', async () => {
      const main = await page.$('#main')
      expect(main).not.toBeNull()
    })

    it('2) type `12*3+4-(12/6)`', async () => {
      page.keyboard.type('12*3+4-(12/6)')
      const result = await getResult(page)
      expect(result).toBe('38')
    })

    it('3) type `*89/2.3-5.654654`', async () => {
      page.keyboard.type('*89/2.3-5.654654')
      const result = await getResult(page)
      expect(result).toBe('-43.045958347826094')
    })

    it('4) type `fdgertrew`', async () => {
      page.keyboard.type('fdgertrew')
      const result = await getResult(page)
      expect(result).toBe('-43.045958347826094')
    })

    it('5) click `C` type `12*3+4-(12/6)`', async () => {
      await clickButtonReset(page)
      await page.focus('input')

      page.keyboard.type('12*3+4-(12/6)')
      const result = await getResult(page)
      expect(result).toBe('38')
    })

    it('6) type ` 543 . 543 + 4`', async () => {
      page.keyboard.type(' 543 . 543 + 4`')
      const result = await getResult(page)
      expect(result).toBe('')
    })

    it('7) click `C315+221/34`', async () => {
      await clickButtonReset(page)

      await clickButton(page, '3')
      await clickButton(page, '1')
      await clickButton(page, '5')
      await clickButton(page, '+')
      await clickButton(page, '2')
      await clickButton(page, '2')
      await clickButton(page, '1')
      await clickButton(page, '/')
      await clickButton(page, '3')
      await clickButton(page, '4')

      const result = await getResult(page)
      expect(result).toBe('321.5')
    })

    it('8) click `-15*4`', async () => {
      await clickButton(page, '-')
      await clickButton(page, '1')
      await clickButton(page, '5')
      await clickButton(page, '*')
      await clickButton(page, '4')
      await clickButton(page, '.')
      await clickButton(page, '6')

      const result = await getResult(page)
      expect(result).toBe('252.5')
    })
  },
  timeout
)
