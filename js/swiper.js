const reviews = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 70,
    centeredSlides: true,
    slidesPerGroup: 1,
    breakpoints:{
        480:{
            slidesPerView: "auto",
            spaceBetween: 60,
            centeredSlides: true,
            slidesPerGroup: 1,
        },
        768:{
            slidesPerView: 2,
            loop: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }
        },
        992:{
            slidesPerView: 2,
            spaceBetween: 60,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }
        },
        1200:{
            slidesPerView: 3,
            spaceBetween: 60,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }
        }
    }
});
