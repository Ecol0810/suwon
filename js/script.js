$(function () {

    //검색창
    $('.Hbtn > .search').on('click', function () {
        $('.Hbtn > .language').removeClass('active');
        $('.searchWrap').toggleClass('active');
    });
    $('.searchWrap .closeBtn').click(function () {
        $('.searchWrap').removeClass('active');
    });

    //언어
    $('.Hbtn > .language').click(function () {
        $('.language .wrap').toggleClass('active');
    });

    //gnbBtn
    $('.Hbtn > .gnb-btn').click(function () {
        $('.gnbWrap').addClass('active');
    });
    $('.menu-top .close').click(function () {
        $('.gnbWrap').removeClass('active');
    });


    //mobileGNB

    $('.Mmenu>li>a').click(function () {
        $(this).next('div').toggleClass('active');
    });

    $('.depth3>li>a').click(function () {
        $(this).next('ul').toggleClass('active');
    });






















    // 슬라이더
    var $mainSlider = $('.main-slider .slider');
    var $sec2Slider = $('.sec2-slider .slider');
    var $sec4Slider = $('.sec4-slider .slider');
    var $sec5Slider = $('.sec5-slider .slider');

    //메인 슬라이더
    $mainSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
        fade: true,
        arrows: true,
        prevArrow: '.main-slider .btn-wrap .prev',
        nextArrow: '.main-slider .btn-wrap .next'
    });

    $('.main-slider .page .max').text($mainSlider.slick('getSlick').slideCount);

    $mainSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.main-slider .page .current').text(nextSlide + 1);
    });

    //전시실 슬라이드
    $sec2Slider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
        adaptiveHeight: true,
        prevArrow: '.section4 .btn-wrap .prev',
        nextArrow: '.section4 .btn-wrap .next',
        infinite: true,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3
                }

            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }

            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }

            }
        ]
    });

    //소장품 슬라이드
    $sec4Slider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
        adaptiveHeight: true,
        prevArrow: '.section4 .btn-wrap .prev',
        nextArrow: '.section4 .btn-wrap .next',
        infinite: true,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3
                }

            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }

            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }

            }
        ]
    });

    //학술 슬라이드
    $sec5Slider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
        adaptiveHeight: true,
        prevArrow: '.section5 .btn-wrap .prev',
        nextArrow: '.section5 .btn-wrap .next',
        infinite: true,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3
                }

            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }

            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }

            }
        ]
    });

    var $stopButtons = $('.btn-wrap .stop');
    $stopButtons.on('click', function () {
        var sliderChk = $(this).closest('article').find('.slider').length > 0 ? 'slick' : 'swiper';

        if ($(this).hasClass('play')) {
            $(this).removeClass('play');
            $(this).attr('title', '정지');
            $(this).text('정지');

            if (sliderChk == 'slick') {
                $(this).closest('article').find('.slider').slick('slickPlay');
            } else if (sliderChk == 'swiper') {
                $sec2Swiper.autoplay.start();
            }
        } else {
            $(this).addClass('play');
            $(this).attr('title', '재생');
            $(this).text('재생');

            if (sliderChk == 'slick') {
                $(this).closest('article').find('.slider').slick('slickPause');
            } else if (sliderChk == 'swiper') {
                $sec2Swiper.autoplay.stop();
            }
        }
        return false;
    });

    //sns tab
    var $allBtns = $('.section7 .tab a');
    var $allBtn = $('.section7 .tab .all');
    var $youtubeBtn = $('.section7 .tab .youtube');
    var $instaBtn = $('.section7 .tab .insta');
    var $blogBtn = $('.section7 .tab .blog');

    var $allItm = $('.sec7-item a');
    var $youtubeItm = $('.sec7-item .youtube');
    var $instaItm = $('.sec7-item .insta');
    var $blogItm = $('.sec7-item .blog');


    $allBtn.on('click', function () {
        $allBtns.removeClass('active');
        $allBtn.addClass('active');
        $allItm.removeClass('active').addClass('active');
    });
    $youtubeBtn.on('click', function () {
        $allBtns.removeClass('active');
        $youtubeBtn.addClass('active');
        $allItm.removeClass('active');
        $youtubeItm.addClass('active');
    });
    $instaBtn.on('click', function () {
        $allBtns.removeClass('active');
        $instaBtn.addClass('active');
        $allItm.removeClass('active');
        $instaItm.addClass('active');
    });
    $blogBtn.on('click', function () {
        $allBtns.removeClass('active');
        $blogBtn.addClass('active');
        $allItm.removeClass('active');
        $blogItm.addClass('active');
    });


    // 탭메뉴
    let tabBtn = $('.sub-tab > div');
    let tabCont = $('.TCon > .tab-content');

    tabCont.hide().eq(0).show();

    tabBtn.click(function () {
        const index = $(this).index(); 

        $(this).addClass("active").siblings().removeClass("active");   
        tabCont.eq(index).show().siblings().hide(); 
    });

    // 탭메뉴
    let tabBtn1 = $('.sub-tab > div');
    let tabCont1 = $('.TaCon > form');

    tabCont1.hide().eq(0).show();

    tabBtn1.click(function () {
        const index = $(this).index(); 

        $(this).addClass("active").siblings().removeClass("active");   
        tabCont1.eq(index).show().siblings().hide(); 
    });












});
