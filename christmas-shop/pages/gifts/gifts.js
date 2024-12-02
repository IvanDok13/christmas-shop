import Burger from '../../js/burger.js'
import topBtn from '../../js/topBtn.js'

const burger = new Burger()
document.addEventListener('DOMContentLoaded', () => {
	burger.bindListeners()
	topBtn.bindListeners
})

function removeBurger() {
	const display = window.innerWidth
	if (display > 768) {
		burger.clickLink()
	}
}

window.addEventListener('resize', removeBurger)
