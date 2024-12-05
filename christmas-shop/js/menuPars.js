import { elementHTML } from '../utils/const.js'

class Menu {
	constructor(name, description, img, superpowers, category) {
		this.img = img
		this.name = name
		this.description = description
		this.superpowers = superpowers
		this.category = category
	}

	insertHTML() {
		return new DOMParser().parseFromString(
			`  
  <div class="best__menu-item"  >
    <div class="menu-img">
      <img
       src="${this.img}"
       alt="${this.category}"
      >
    </div>
    <div class="best__menu-desc">
      <h4 class="header4">
      ${this.category}
      </h4>
      <h3 class="header3">
       ${this.name}
      </h3>
    </div>
  </div>`,
			'text/html'
		).body.firstChild
	}

	insertHTMLModalWindow(id) {
		return new DOMParser().parseFromString(
			`
    <div class="modal-window" data-id="${id}">
    <svg class="close-btn" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M30 10L10 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M10 10L30 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
    <div class="modal-window__img">
      <img src="${this.img}" alt="${this.category}" />
    </div>
    <div class="modal-window__description">
      <h4 class="header4">${this.category}</h4>
      <h3 class="header3">${this.name}</h3>
      <p class="paragraph">${this.description}</p>
      <div class="description__super">
        <h4 class="header4">Adds superpowers to:</h4>
        <div class="super__rating">
          <div class="super__power live">
            <p class="paragraph">live</p>
            <p class="paragraph">${this.superpowers['live']}</p>
            <div class="snowflakes-container">
              ${elementHTML.repeat(5)}
            </div>
          </div>

          <div class="super__power create">
            <p class="paragraph">create</p>
            <p class="paragraph">${this.superpowers['create']}</p>
            <div class="snowflakes-container">
              ${elementHTML.repeat(5)}
            </div>
          </div>

          <div class="super__power love">
            <p class="paragraph">love</p>
            <p class="paragraph">${this.superpowers['love']}</p>
            <div class="snowflakes-container">
              ${elementHTML.repeat(5)}
            </div>
          </div>

          <div class="super__power dream">
            <p class="paragraph">dream</p>
            <p class="paragraph">${this.superpowers['dream']}</p>
            <div class="snowflakes-container">
              ${elementHTML.repeat(5)}
            </div>
          </div>
      </div>
    </div>
  </div>`,
			'text/html'
		).body.firstChild
	}
}

export default Menu
