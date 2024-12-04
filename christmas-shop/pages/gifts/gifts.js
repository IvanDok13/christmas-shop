import Burger from '../../js/burger.js'
import displayItems from '../../js/displayMenu.js'
import { filterItems } from '../../js/switchItems.js'
import topBtn from '../../js/topBtn.js'
import { TABS } from '../../utils/const.js'

const burger = new Burger()

document.addEventListener('DOMContentLoaded', () => {
	burger.bindListeners()
	topBtn
	for (let i = 0; i < TABS.length; i += 1) {
		TABS[i].addEventListener('click', () =>
			filterItems(TABS[i].dataset.tab, displayItems)
		)
	}

	displayItems('all')
})
