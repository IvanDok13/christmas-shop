import itemsFromJson from '../data/items.json' with { type: 'json' }
import Menu from './menuPars.js'

let itemsList = document.querySelector('.best__menu')
let items = []

for (let i = 0; i < itemsFromJson.length; i += 1) {
	items.push(
		new Menu(
			itemsFromJson[i]['name'],
			itemsFromJson[i]['description'],
			itemsFromJson[i]['img'],
			itemsFromJson[i]['superpowers'],
			itemsFromJson[i]['category'].toLowerCase()
		)
	)
}

function displayItems(filter) {
	itemsList.innerHTML = ''
	let item
	for (let i = 0; i < items.length; i += 1) {
		if (items[i].category === filter) {
			item = items[i].insertHTML(i)
			itemsList.append(item)
		} else if (filter === 'all') {
			item = items[i].insertHTML(i)
			itemsList.append(item)
		}
	}
}

export default displayItems
