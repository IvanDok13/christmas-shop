import getItems from '../utils/jsonToArr.js'
import toggleModal from './modal.js'

let itemsList = document.querySelector('.best__menu')
let items = getItems()

function displayItems(filter) {
	itemsList.innerHTML = ''
	let item
	for (let i = 0; i < items.length; i += 1) {
		if (items[i].category === filter) {
			item = items[i].insertHTML(i)
			itemsList.append(item)
			item.addEventListener('click', () => toggleModal(items[i], i))
		} else if (filter === 'all') {
			let cardsNum = Math.floor(Math.random() * 36)
			item = items[cardsNum].insertHTML(i)
			itemsList.append(item)
			item.addEventListener('click', () => toggleModal(items[i], i))
		}
	}
}

export default displayItems
