let modal = document.querySelector('.menu__modal')

function toggleModal(item, id) {
	if (modal.classList.contains('visible')) {
		document.body.style.overflowY = 'visible'
		modal.innerHTML = ''
		modal.classList.remove('visible')
		return
	} else {
		document.body.style.overflowY = 'hidden'
		modal.classList.add('visible')
		modal.append(item.insertHTMLModalWindow(id))
		modal.querySelector('.close-btn').addEventListener('click', toggleModal)
		modal.addEventListener('click', e => {
			if (e.target.matches('.menu__modal.visible')) {
				toggleModal()
			}
		})
	}
}

export default toggleModal
