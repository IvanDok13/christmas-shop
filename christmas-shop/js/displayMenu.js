import itemsFromJson from '../data/items.json' with { type: 'json' }
import Menu from './menuPars.js'

let items = []
let itemsList = document.querySelector('.best__menu')

function displayItems(filter) {
	itemsList.innerHTML = ''
	for (let i = 0; i < items.length; i += 1) {
		if (items[i].category === filter) {
			let item = items[i].insertHTML(i)

			itemsList.append(item)
		}
	}
}

for (let i = 0; i < itemsFromJson.length; i += 1) {
	items.push(
		new Menu(
			itemsFromJson[i]['name'],
			itemsFromJson[i]['description'],
			itemsFromJson[i]['img'],
			itemsFromJson[i]['superpowers'],
			itemsFromJson[i]['category']
		)
	)
}

export default displayItems
