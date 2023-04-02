const Env = use('Env')
const puppeteer = require('puppeteer')

function transformScrapedData(data) {
  return data.map((item) => {
    const [iconUrl, rarity, name, element, weapon, nation, sex] = item

    return {
      rarity: parseInt(rarity.replace(/\D/g, '')),
      icon_url: iconUrl,
      name: name.trim(),
      element: element.trim(),
      weapon: weapon.trim(),
      sex: sex.trim(),
      nation: nation.trim(),
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
    await page.goto(`${Env.get('FANDOM_BASE_URL')}/Character`)

    const data = await page.evaluate(() => {
      const charactersTable = document
        .querySelector('#Playable_Characters')
        .closest('h2').nextSibling.nextSibling.nextSibling.nextSibling
        .nextSibling.nextSibling

      const rows = Array.from(charactersTable.querySelectorAll('tr')).slice(1)

      return Array.from(rows, (row) => {
        const columns = row.querySelectorAll('td')
        const imageURL = columns[0].querySelector('img').dataset.src
        const rarity = columns[2].querySelector('img').title
        return [
          imageURL,
          rarity,
          ...Array.from(columns, (column) => column.innerText).filter(
            (item) => item
          ),
        ]
      })
    })

    await browser.close()

    const transformed = transformScrapedData(data)
    console.log(
      '🚀 ~ file: FandomService.js:58 ~ FandomService ~ scrapCharacters ~ transformed:',
      transformed
    )

    return transformed
  }
}

module.exports = new FandomService()
