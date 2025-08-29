import { TABS } from '../utils/const.js'

export function filterItems(filter, func) {
	for (let i = 0; i < TABS.length; i += 1) {
		if (TABS[i].dataset.tab == filter) {
			TABS[i].classList.add('active-mod')
		} else {
			TABS[i].classList.remove('active-mod')
		}
	}
	func(filter)
}
