const { Builder, Capabilities, By } = require("selenium-webdriver")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get("http://localhost:5500/movieList/index.html")
})
afterAll(async () => {
    await driver.quit()
})

test('check if button exists', async () => {
    await driver.findElement(By.id('addButton'))
})

test('can we send a value into add movie input', async () => {
    await driver.findElement(By.id('movieInput')).sendKeys('the hobbit')
})

test('if add button is clickable', async () => {
    await driver.findElement(By.id('addButton')).click()
})

test('is notification displayed when movies are edited', async () => {
    await driver.findElement(By.id("message"))
})

test('does form empty after adding in new movie?', async ()=> {
    await driver.findElement(By.id("movieInput")).clear()
})