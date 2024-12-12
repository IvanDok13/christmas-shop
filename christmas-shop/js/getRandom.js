import toggleModal from './modal.js'

let itemsList = document.querySelector('.best__menu')

function randomItems(arr) {
	itemsList.innerHTML = ''
	let item
	for (let i = 0; i < 4; i += 1) {
		let cardsNum = Math.floor(Math.random() * 36)
		item = arr[cardsNum].insertHTML(i)
		itemsList.append(item)
		item.addEventListener('click', () => toggleModal(arr[i], i))
	}
}

export default randomItems
