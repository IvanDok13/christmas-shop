import itemsFromJson from '../data/items.json' with { type: 'json' }
import Menu from '../js/menuPars.js'

function getItems() {
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
	return items
}

export default getItems
