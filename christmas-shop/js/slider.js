const SliderConst = {
	numberOfSlide: 3,
	minSwipeWidth: 50,
}

class Slider {
	constructor() {
		this.sliderBtnL = document.querySelector('.arrow-left')
		this.sliderBtnR = document.querySelector('.arrow-right')
		this.sliderWrapper = document.querySelector('.become__wrapper')
		this.slider = document.querySelector('.become__slider')
		this.sliderItems = document.querySelectorAll('.slider__item')
		this.currentSlide = 0
		this.offset
		this.numberOfClicks
	}

	generateConst() {
		if (window.innerWidth < 769) {
			this.numberOfClicks = 6
		}
		if (window.innerWidth > 768) {
			this.numberOfClicks = 3
		}
		this.offset = Math.floor(
			(this.slider.offsetWidth - this.sliderWrapper.offsetWidth) /
				this.numberOfClicks
		)
	}

	move() {
		if (this.currentSlide > 0 || this.currentSlide < this.numberOfClicks) {
			this.sliderBtnL.removeAttribute('disabled')
			this.sliderBtnR.removeAttribute('disabled')
		}
		if (this.currentSlide === this.numberOfClicks) {
			this.sliderBtnR.setAttribute('disabled', 'disabled')
		}
		if (this.currentSlide === 0) {
			this.sliderBtnL.setAttribute('disabled', 'disabled')
		}
		this.slider.style.transform = `translateX(-${this.currentSlide * this.offset}px)`
	}

	restartSlider() {
		this.generateConst()
		this.currentSlide = 0
		this.move()
	}

	bindListeners() {
		const context = this
		document.addEventListener('DOMContentLoaded', () => context.generateConst())
		window.addEventListener('resize', () => context.restartSlider())

		this.sliderBtnR.addEventListener('click', () => {
			context.currentSlide += 1
			context.generateConst()
			context.move()
		})
		this.sliderBtnL.addEventListener('click', () => {
			context.currentSlide -= 1
			context.generateConst()
			context.move()
		})
		console.log(context.currentSlide)
	}
}

export default Slider
