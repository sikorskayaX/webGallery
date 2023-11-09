const sliderMain = new Swiper('.slider_main', {
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