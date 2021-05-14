$(window).on('scroll', function(){
    var head = $('.h-wrap').height();
    var top = $(window).scrollTop();

    if (800 < top) {
        $('.h-wrap').addClass('change-color');
        $('.h-right ul li a').addClass('change-font-color');
        $('.h-left a').addClass('change-font-color');
        $('.trigger span').addClass('change-span-color');

    } else {
        $('.h-wrap').removeClass('change-color');
        $('.h-right ul li a').removeClass('change-font-color');
        $('.h-left a').removeClass('change-font-color');
        $('.trigger span').removeClass('change-span-color');
    }
});
$(function(){
    // 設定
    var $interval = 5000; // 切り替わりの間隔（ミリ秒）
    var $fade_speed = 5000; // フェード処理の早さ（ミリ秒）
    $(".img-wrap img").hide().css({"position":"absolute","top":0,"left":0});
    $(".img-wrap img:first").addClass("active").show();
    setInterval(function(){
    var $active = $(".img-wrap img.active");
    var $next = $active.next("img").length?$active.next("img"):$(".img-wrap img:first");
    $active.fadeOut($fade_speed).removeClass("active");
    $next.fadeIn(3000).addClass("active");
    },$interval);
});

$(function(){
    $('a[href^="#"]').click(function() {
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, 1000, 'swing');
        return false;
    });
});

$(function(){
    var pagetop = $('#page_top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 1000);
        return false;
    });
});

$(function(){
    ScrollReveal().reveal('.i-items, .p-title, .p-item2, .p-item4, .concept img, .view-more, .c-texts, .s-texts', {
        duration: 4000,
        origin: 'bottom',
        distance: '50px',
        reset: false
    });
    ScrollReveal().reveal('.p-item1,.p-item3, .service img, .cp-text, .cp-img, .b-item,.blog h2, .blog .view-link', {
        duration: 4000,
        origin: 'bottom',
        distance: '50px',
        reset: false
    });
});

$(function(){
    $('.menu-trigger').on('click',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('nav').removeClass('open');
            $('.overlay').removeClass('open');
        } else {
            $(this).addClass('active');
            $('nav').addClass('open');
            $('.overlay').addClass('open');
        }
    });
    $('.overlay').on('click',function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $('.menu-trigger').removeClass('active');
            $('nav').removeClass('open');
        }
    });
    $('header nav ul li a').on('click', function(){
        if($('.overlay').hasClass('open')){
            $(this).removeClass('open');
            $('.menu-trigger').removeClass('active');
            $('nav').removeClass('open');
        }
    });
});