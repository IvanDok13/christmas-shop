const BurgerClasses = {
	navMenu: 'active',
	burgerBtn: 'active',
	body: 'lock',
}

class Burger {
	constructor() {
		this.burgerBtn = document.querySelector('.burger')
		this.navMenu = document.querySelector('.header__nav')
		this.NavLinks = document.querySelector('.header__link')
		this.body = document.querySelector('body')
	}

	toggleBurger() {
		this.navMenu.classList.toggle(BurgerClasses.navMenu)
		this.navMenu.classList.toggle('action-large')
		this.burgerBtn.classList.toggle(BurgerClasses.burgerBtn)
		this.body.classList.toggle(BurgerClasses.body)
	}

	clickLink() {
		this.navMenu.classList.remove(BurgerClasses.navMenu)
		this.navMenu.classList.remove('action-large')
		this.burgerBtn.classList.remove(BurgerClasses.burgerBtn)
		this.body.classList.remove(BurgerClasses.body)
	}

	bindListeners() {
		const context = this

		this.burgerBtn.addEventListener('click', () => this.toggleBurger())

		window.addEventListener('keydown', e => {
			if (
				e.key === 'Escape' &&
				context.navMenu.classList.contains(BurgerClasses.navMenu)
			) {
				context.toggleBurger()
			}
		})

		document.addEventListener('click', e => {
			if (
				context.navMenu.classList.contains(BurgerClasses.navMenu) &&
				!context.burgerBtn.contains(e.target)
			)
				context.toggleBurger()
		})

		this.NavLinks.addEventListener('click', e =>
			this.handleClick(e, this.NavLinks)
		)
	}
}

export default Burger
