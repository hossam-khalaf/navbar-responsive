const toggleBtn = document.querySelector('.toggle-btn')
const nav = document.querySelector('.navbar-links')

toggleBtn.addEventListener('click', () => {
	nav.classList.toggle('active')
})
