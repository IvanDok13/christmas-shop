import Burger from '../../js/burger.js'

const burger = new Burger()

document.addEventListener('DOMContentLoaded', () => {
	burger.bindListeners()
})

function removeBurger() {
	const display = window.innerWidth
	if (display > 768) {
		burger.clickLink()
	}
}

window.addEventListener('resize', removeBurger)
