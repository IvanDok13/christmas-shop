import itemsFromJson from '../../data/items.json' with { type: 'json' }
import Burger from '../../js/burger.js'
import Menu from '../../js/menuPars.js'
import toggleModal from '../../js/modal.js'
import Slider from '../../js/slider.js'
import Timer from '../../js/timer.js'

const burger = new Burger()
const slider = new Slider()
const menu = new Menu()

document.addEventListener('DOMContentLoaded', () => {
	burger.bindListeners()
	slider.bindListeners()
	setInterval(Timer, 1000)

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
	let itemsList = document.querySelector('.best__menu')

	function randomItems(arr) {
		itemsList.innerHTML = ''
		let item
		for (let i = 0; i < 4; i += 1) {
			let cardsNum = Math.floor(Math.random() * 36)
			item = arr[cardsNum].insertHTML(i)
			itemsList.append(item)
			item.addEventListener('click', () => toggleModal(items[i], i))
		}
	}

	randomItems(items)
})
