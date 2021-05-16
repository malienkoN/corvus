$(document).ready(function () {
    $('#tel-dropdown__trigger').click(function (event) {
        event.preventDefault();

        $(this).next('.modal-fade').toggleClass('show');
        $(this).find('.header__action-icon__dropdown').toggleClass('rotate');
        $('body').toggleClass('lock-mobile');
    });

    $('#cart-dropdown__trigger').click(function (event) {
        event.preventDefault();

        $(this).next('.modal-fade').toggleClass('show');
        $('body').toggleClass('lock-mobile');
    });

    $('.modal-close').click(function (event) {
        event.preventDefault();

        $(this).parents('.modal-fade').removeClass('show');
        $('body').removeClass('lock-mobile');
    });

    // $(document).keydown(function(e) {
    //     if (e.keyCode === 27) {
    //         e.stopPropagation();
    //         $('.modal-fade').removeClass('show');
    //         $('body').removeClass('lock-mobile');
    //     }
    // });
    //
    // $('.modal-fade').click(function(e) {
    //     if ($(e.target).closest('.modal').length === 0) {
    //         $(this).removeClass('show');
    //         $('body').removeClass('lock-mobile');
    //     }
    // });

    $('.burger-mobile').click(function (event) {
        event.preventDefault();

        $('.header__bottom').fadeToggle();
        $(this).toggleClass('active');
    });

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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            768: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            992: {
                spaceBetween: 25,
                slidesPerView: 3,
            },
            1399: {
                slidesPerView: 4,
            },
            1499: {
                spaceBetween: 30,
                slidesPerView: 4,
            },
        },
    });

    //map
    const map = L.map('map')
        .setView({
            lat: 48.516773,
            lng: 34.606880,
        }, 15);

    L.tileLayer(
        'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
        {
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        },
    ).addTo(map);

    const mainPinIcon = L.icon({
        iconUrl: 'img/map-pin.png',
        iconSize: [33, 44],
        iconAnchor: [15.5, 44],
    });

    const mainPinMarker = L.marker(
        {
            lat: 48.5162880947064,
            lng: 34.603859782218941,
        },
        {
            icon: mainPinIcon,
        },
    );

    mainPinMarker.addTo(map);

    //read-more
    $('#read-more').click(function (event) {
        event.preventDefault();

        $(this).parent().toggleClass('show-content');
        const replaceText = $(this).parent().hasClass('show-content') ? 'Приховати' : 'Читати далі';
        $(this).text(replaceText);
    });
});