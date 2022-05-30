new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },

    speed: 1000,

    effect: 'flip',

    flipEffect: {
        slideShadows: true,
        limitRotation: true
    }

});