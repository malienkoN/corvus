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
});