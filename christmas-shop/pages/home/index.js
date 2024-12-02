import Burger from '../../js/burger.js'
import Slider from '../../js/slider.js'
import Timer from '../../js/timer.js'

const burger = new Burger()
const slider = new Slider()

document.addEventListener('DOMContentLoaded', () => {
	burger.bindListeners()
	slider.bindListeners()
	setInterval(Timer, 1000)
})

function removeBurger() {
	const display = window.innerWidth
	if (display > 768) {
		burger.clickLink()
	}
}

window.addEventListener('resize', removeBurger)
