$(document).ready(function () {
    $('#tel-dropdown__trigger').click(function (event) {
        event.preventDefault();

        $('.tel-dropdown').fadeToggle();
        $('.header__action-icon__dropdown').toggleClass('rotate');
    })

    $('.burger-mobile').click(function (event) {
        event.preventDefault();

        $('.header__bottom').fadeToggle();
        $(this).toggleClass('active');
    })

    const swiper = new Swiper('.swiper-container', {
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});