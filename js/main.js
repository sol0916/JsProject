//스와이퍼
document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const imgCount = 17; // 이미지의 총 갯수

    for (let i = 1; i <= imgCount; i++) {
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');

        const img = document.createElement('img');
        img.src = `img/${i}.jpeg`;
        swiperSlide.appendChild(img);

        swiperWrapper.appendChild(swiperSlide);
    }

    const swiper = new Swiper('.mySwiper', {
        loop: true,
        autoplay: {
            delay: 1000,
        },
        slidesPerView: 4,
        spaceBetween: 30,
        /* pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }, */
    });
});
