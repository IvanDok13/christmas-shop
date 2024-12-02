import Burger from '../../js/burger.js'
import displayItems from '../../js/displayMenu.js'
import Menu from '../../js/menuPars.js'
import topBtn from '../../js/topBtn.js'

const burger = new Burger()
const menu = new Menu()

document.addEventListener('DOMContentLoaded', () => {
	burger.bindListeners()
	topBtn
	menu.insertHTML()
	displayItems('For Health')
})

function removeBurger() {
	const display = window.innerWidth
	if (display > 768) {
		burger.clickLink()
	}
}

window.addEventListener('resize', removeBurger)
