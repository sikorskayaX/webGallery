﻿const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSledes: true,
    parallax: true,
    mousewheel:true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        }, 
        680:{
            slidesPerView: 3.5,
            spaceBetween: 60
        }

    }

})

const sliderBg = new Swiper('.slider_bg', {
    centeredSledes: true,
    parallax: true,
    mousewheel:true,
    spaceBetween: 60,
    slidesPerView: 3.5
})

sliderMain.controller.control = sliderBg

document.querySelectorAll('.slider__item').forEach(item => {
	item.addEventListener('click', event => {
		item.classList.toggle('opened')
	})
})