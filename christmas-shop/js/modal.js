import Menu from '../js/menuPars.js'

let menu = new Menu()
let modal = document.querySelector('.menu__modal')

function toggleModal(item, id) {
	if (modal.classList.contains('visible')) {
		document.body.style.overflowY = 'visible'
		modal.innerHTML = ''
		modal.classList.remove('visible')
		return
	}
	document.body.style.overflowY = 'hidden'
	modal.classList.add('visible')
	modal.append(item.insertHTMLModalWindow(id))
	modal.querySelector('.close-btn').addEventListener('click', toggleModal)
	modal.addEventListener('click', e => {
		if (e.target.matches('.menu__modal')) {
			toggleModal()
		}
	})
}

// toggleModal(menu, 0)

export default toggleModal

// function updateSnowflakes(superpowers) {
//   const updateSnowflake = (snowflakeContainer, value) => {
//       const snowflakes = snowflakeContainer.querySelectorAll('svg');
//       const numBright = Math.max(0, Math.min(5, Math.ceil((parseInt(value.replace('+', '')) / 100))));
//       const numPale = 5 - numBright;

//       snowflakes.forEach((snowflake, index) => {
//         if (index < numBright) {
//             snowflake.style.opacity = 1;
//         } else {
//             snowflake.style.opacity = 0.1;
//         }
//     });
// };
