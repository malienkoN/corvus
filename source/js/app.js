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

    new Swiper('.intro-swiper', {
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

    //tabs
    $('.tabs__triggers-item').click(function (e) {
        e.preventDefault();

        $('.tabs__triggers-item').removeClass('tabs__triggers-item--active');
        $('.tabs__content-item').removeClass('tabs__content-item--active');

        $(this).addClass('tabs__triggers-item--active');
        $($(this).attr('href')).addClass('tabs__content-item--active');
    });

    $('.tabs__triggers-item:first').click();


    new Swiper('.tabs-swiper', {
        observer: true,
        // observeSlideChildren: true,
        observeParents: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            567: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 3,
            },
            991: {
                spaceBetween: 25,
            },
            1399: {
                slidesPerView: 4,
            },
            1499: {
                spaceBetween: 30,
            },
        },
    });
});