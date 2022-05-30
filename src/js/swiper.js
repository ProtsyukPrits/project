new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,

    grabCursor: true,

    speed: 1200,

    autoHeight: true,
    
    effect: 'flip',

    flipEffect: {
        slideShadows: true,
        limitRotation: true
        
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: false,
    },
    
});