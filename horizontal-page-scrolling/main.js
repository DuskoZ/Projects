$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let dh = $(document).height();
    let wh = $(window).height();

    value = (scroll / (dh - wh)) * 100;

    $('#container').css('left', -value * 3 + '%');
})