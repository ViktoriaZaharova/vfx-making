$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeIn();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.playpause').click(function () {
    $('.video-wrapper').toggleClass('video-click');

    if($(".fullscreen-video").get(0).paused){
        $(".fullscreen-video").get(0).play();
        $(this).parents('.video-button').fadeOut();

    }else{
        $(".fullscreen-video").get(0).pause();

        $(this).parents('.video-button').fadeIn();
    }

});