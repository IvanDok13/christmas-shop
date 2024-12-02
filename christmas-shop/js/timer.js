const days = document.getElementById('days')
const hrs = document.getElementById('hrs')
const min = document.getElementById('min')
const sec = document.getElementById('sec')

const currentDate = new Date().getFullYear()

const newYearTime = new Date(`January 01 ${currentDate + 1} 00:00:00`)

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
