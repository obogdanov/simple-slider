var leftButton = document.getElementById('left'),
	rightButton = document.getElementById('right'),
	slides = document.getElementsByClassName('slide');
	leftButton.addEventListener('click', prevSlide, false);
	rightButton.addEventListener('click', nextSlide, false);
	console.log(slides);

	function nextSlide() {
		for (var i = 0; i < slides.length - 1; i++) {
			if (slides[i].classList.contains('active') && (i < slides.length - 1)) {
				n = i
				slides[n].classList.remove('active')
				slides[n].classList.add('prev')
				slides[n + 1].classList.remove('next')
				slides[n + 1].classList.add('active')
				break
			}
		}
	}
	function prevSlide() {
		for (var i = 0; i <= slides.length - 1; i++) {
			if (slides[i].classList.contains('active') && (i > 0) ) {
				n = i
				slides[n].classList.remove('active')
				slides[n].classList.add('next')
				slides[n - 1].classList.remove('prev')
				slides[n - 1].classList.add('active')
				break
			}
		}
	}