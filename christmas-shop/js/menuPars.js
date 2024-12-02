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
}

export default Menu
