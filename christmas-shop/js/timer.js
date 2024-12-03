const days = document.getElementById('days')
const hrs = document.getElementById('hrs')
const min = document.getElementById('min')
const sec = document.getElementById('sec')

const today = new Date()
const currentYear = today.getFullYear()
const newYearTime = Date.parse(`${currentYear}-12-31T24:00:00Z`)

function Timer() {
	const today = Date.now()
	const int = newYearTime - today

	const d = Math.floor(int / 1000 / 60 / 60 / 24)
	const h = Math.floor((int / 1000 / 60 / 60) % 24)
	const m = Math.floor((int / 1000 / 60) % 60)
	const s = Math.floor((int / 1000) % 60)

	days.innerHTML = d
	hrs.innerHTML = h
	min.innerHTML = m
	sec.innerHTML = s
}

export default Timer
