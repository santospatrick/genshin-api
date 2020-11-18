const Env = use('Env')
const puppeteer = require('puppeteer')

const NATIONS = {
  Mondstadt: 1,
  Liyue: 2,
}

const GENDERS = {
  Male: 1,
  Female: 2,
}

function transformScrapedData(data) {
  return data.slice(1).map((item) => {
    const [rarity, iconUrl, name, element, weapon, sex, nation] = item

    return {
      rarity: parseInt(rarity),
      icon_url: iconUrl,
      name: name.trim(),
      element: element.trim(),
      weapon: weapon.trim(),
      sex: GENDERS[sex],
      nation: NATIONS[nation],
    }
  })
}

class FandomService {
  async scrapCharacters() {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox'],
    })
    const page = await browser.newPage()
    await page.goto(`${Env.get('FANDOM_BASE_URL')}/Characters`)

    const data = await page.evaluate(() => {
      const charactersTable = document
        .querySelector('#Playable_Characters')
        .closest('h2').nextSibling.nextSibling.nextSibling.nextSibling

      const rows = Array.from(charactersTable.querySelectorAll('tr'))
      return Array.from(rows, (row) => {
        const columns = row.querySelectorAll('td')
        return Array.from(columns, (column) => column.innerText)
      })
    })

    await browser.close()

    const transformed = transformScrapedData(data)

    return transformed
  }
}

module.exports = new FandomService()
