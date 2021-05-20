$(document).ready(function () {
    $('#tel-dropdown__trigger').click(function (event) {
        event.preventDefault();

        $(this).next('.modal-fade').toggleClass('show');
        $(this).find('.header__action-icon__dropdown').toggleClass('rotate');
        $('body').toggleClass('lock-mobile');
    });

    $('#fixed-nav__tel-popup').click(function (event) {
        event.preventDefault();

        $('.modal-fade--tel-for-fixed').toggleClass('show');
        $('body').toggleClass('lock-mobile');
    });

    $('#fixed-nav__cart-popup').click(function (event) {
        event.preventDefault();

        $('.modal-fade--cart-for-fixed').toggleClass('show');
        $('body').toggleClass('lock-mobile');
    });

    $('#fixed-nav__search-popup').click(function (event) {
        event.preventDefault();

        $('.header__form-popup-fade').toggleClass('show');
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

    $('#search-popup__trigger').click(function (event) {
        event.preventDefault();

        $('.header__form-popup-fade').toggleClass('show');
        $('body').toggleClass('lock-mobile');
    });

    $('.header__form-close').click(function (event) {
        event.preventDefault();

        $(this).parents('.header__form-popup-fade').removeClass('show');
        $('body').removeClass('lock-mobile');
    });

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

    //map 1
    const map = L.map('map')
        .setView({
            lat: 48.50446,
            lng: 34.61024,
        }, 15);

    L.tileLayer(
        'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
        {
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        },
    ).addTo(map);

    const mainPinIcon = L.icon({
        iconUrl: 'img/map-pin.png',
        iconSize: [30, 47],
        iconAnchor: [15, 47],
    });

    const mainPinMarker = L.marker(
        {
            lat: 48.50446,
            lng: 34.61024,
        },
        {
            icon: mainPinIcon,
        },
    );

    mainPinMarker.addTo(map);
    mainPinMarker.bindPopup("проспект Свободи,<br> 75, Кам'янське");


    //map 2
    const mapPopup = L.map('mapPopup')
        .setView({
            lat: 48.50446,
            lng: 34.61024,
        }, 15);

    L.tileLayer(
        'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
        {
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        },
    ).addTo(mapPopup);

    const mainPinIconPopup = L.icon({
        iconUrl: 'img/map-pin.png',
        iconSize: [30, 47],
        iconAnchor: [15, 47],
    });

    const mainPinMarkerPopup = L.marker(
        {
            lat: 48.50446,
            lng: 34.61024,
        },
        {
            icon: mainPinIconPopup,
        },
    );

    mainPinMarkerPopup.addTo(mapPopup);
    mainPinMarkerPopup.bindPopup("проспект Свободи,<br> 75, Кам'янське");



    $('.mapPopup-trigger').click(function (event) {
        event.preventDefault();

        $('.popup-fade').toggleClass('show');
        $('body').toggleClass('lock');
    });

    $('.popup-close').click( function (event) {
        event.preventDefault();

        $('.popup-fade').removeClass('show');
        $('body').removeClass('lock');
    }) ;

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').removeClass('show');
            $('body').removeClass('lock');
        }
    });

    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length === 0) {
            $(this).removeClass('show');
            $('body').removeClass('lock');
        }
    });

    //read-more
    $('#read-more').click(function (event) {
        event.preventDefault();

        $(this).parent().toggleClass('show-content');
        const replaceText = $(this).parent().hasClass('show-content') ? 'Приховати' : 'Читати далі';
        $(this).text(replaceText);
    });

    //map 3
    const mapAbout = L.map('mapAbout')
        .setView({
            lat: 48.50446,
            lng: 34.61024,
        }, 15);

    L.tileLayer(
        'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
        {
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        },
    ).addTo(mapAbout);

    const mainPinIconAbout = L.icon({
        iconUrl: 'img/map-pin.png',
        iconSize: [30, 47],
        iconAnchor: [15, 47],
    });

    const mainPinMarkerAbout = L.marker(
        {
            lat: 48.50446,
            lng: 34.61024,
        },
        {
            icon: mainPinIconAbout,
        },
    );

    mainPinMarkerAbout.addTo(mapAbout);
    mainPinMarkerAbout.bindPopup("проспект Свободи,<br> 75, Кам'янське");
});