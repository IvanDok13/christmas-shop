const offset = 300
const topBtn = document.querySelector('.arrow-top')
const getTop = () => window.scrollY || document.documentElement.scrollTop

topBtn.addEventListener('click', () => {
	window.scroll({
		top: 0,
		behavior: 'smooth',
	})
})

window.addEventListener('scroll', () => {
	if (getTop() > offset) {
		topBtn.classList.add('visible')
	} else {
		topBtn.classList.remove('visible')
	}
})

export default topBtn
