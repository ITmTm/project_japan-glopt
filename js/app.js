window.addEventListener("DOMContentLoaded", () => {

	const OpenModal = document.querySelectorAll("[data-modal]"),
		  closeModal = document.querySelector("[data-close]"),
		  modal = document.querySelector('.modal');

	OpenModal.forEach((item) => {
		item.addEventListener('click', () => {
			modal.showModal();
			document.body.style.overflow = 'hidden';
		})
	})

	closeModal.addEventListener('click', () => {
		modal.close();
	})

	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') === '') {
			modal.close();
			document.body.style.overflow = '';
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape') {
			modal.close();
			document.body.style.overflow = '';
		}
	});


	const burger = document.querySelector('.burger'),
		  menu = document.querySelector('.mobile-menu'),
	      menuItem = document.querySelectorAll('.menu-item');

	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			burger.classList.toggle('active');
			menu.classList.toggle('active');
		})
	})




	let swiper = new Swiper('.swiper', {
		slidesPerView: 1,
		direction: getDirection(),
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on: {
			resize: function () {
				swiper.changeDirection(getDirection());
			},
		},
	});

	function getDirection() {
		let windowWidth = window.innerWidth;
		let direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

		return direction;
	}
});
