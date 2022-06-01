new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    loop: true,

    grabCursor: true,

    speed: 3000,

    // autoHeight: true,

    initialSlide: 5,
    
    effect: 'flip',

    flipEffect: {
        slideShadows: true,
        limitRotation: true
        
    },
    
    autoplay: {
    delay: 3000,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: false,
    },
    
});