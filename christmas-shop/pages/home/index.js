import Burger from '../../js/burger.js'
import toggleModal from '../../js/modal.js'
import Slider from '../../js/slider.js'
import Timer from '../../js/timer.js'
import getItems from '../../utils/jsonToArr.js'

const burger = new Burger()
const slider = new Slider()
const items = getItems()

document.addEventListener('DOMContentLoaded', () => {
	burger.bindListeners()
	slider.bindListeners()
	setInterval(Timer, 1000)

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
