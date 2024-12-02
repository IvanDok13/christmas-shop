import Burger from '../../js/burger.js'
import Slider from '../../js/slider.js'

const burger = new Burger()
const slider = new Slider()

document.addEventListener('DOMContentLoaded', () => {
	burger.bindListeners()
	slider.bindListeners()
})

function removeBurger() {
	const display = window.innerWidth
	if (display > 768) {
		burger.clickLink()
	}
}

window.addEventListener('resize', removeBurger)
