new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },

    speed: 800,

    effect: 'flip',

    flipEffect: {
        slideShadows: true,
        limitRotation: true
    }

});