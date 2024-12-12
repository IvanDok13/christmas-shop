import Burger from '../../js/burger.js'
import randomItems from '../../js/getRandom.js'
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
	randomItems(items)
})
