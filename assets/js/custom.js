$(function(){

    var slide1 = new Swiper(".slide1 .swiper", {
        pagination: {
            el: ".fraction",
            type: "fraction",
            },
            navigation: {
            nextEl: ".next",
            prevEl: ".prev",
            },
            loop:true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
    });
    
    var slide2 = new Swiper(".slide2 .swiper", {
        pagination: {
            el: ".fraction",
            type: "fraction",
            },
            navigation: {
            nextEl: ".next",
            prevEl: ".prev",
            },
            loop:true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
    });
    



    $('.sc-visual .title').click(function(e){
        e.preventDefault();

        $(this).parent().addClass('active').siblings().removeClass('active');
    })


    $('.slide1 .autoplay').click(function(){

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            slide1.autoplay.start();  
        } else {
            $(this).addClass('active');
            slide1.autoplay.stop();        
        }
    })

    $('.slide2 .autoplay').click(function(){

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            slide2.autoplay.start();  
        } else {
            $(this).addClass('active');
            slide2.autoplay.stop();        
        }
    })



    /**
     * @언어선택
     * 
     * @val
     * @window
     * @open
     * @camelCase
     */
    $('#langBtn').click(function(){
        url=$('#selectLang').val();
        console.log(url);
        window.open(url);
    })
    
/**
 * @연관사이트
 * 
 * 
 * 
 * 
 * 
 */
    $('.btn-related').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('active')) {
            $('.sub-area').stop().slideUp();
            $('.btn-related').removeClass('active');

        } else {
            $('.sub-area').stop().slideUp();
            $(this).siblings('.sub-area').stop().slideDown();

            $('.btn-related').removeClass('active');
            $(this).addClass('active');
            
        }
    })

/**
 * 
 * @3개씩 나오는 슬라이드
 * 
 * 
 * 
 * 
 */


var bannerSlide = new Swiper(".slide-ad", {
    slidesPerView:3,
    spaceBetween:43,
    pagination: {
    el: ".fraction",
    type: "fraction",
    },
    navigation: {
    nextEl: ".next",
    prevEl: ".prev",
    },
    loop:true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

$('.sc-banner3 .autoplay').click(function(){

    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        bannerSlide.autoplay.start();  
    } else {
        $(this).addClass('active');
        bannerSlide.autoplay.stop();        
    }
})
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
$(window).scroll(function(){
    curr=$(this).scrollTop();

    if (curr > 0) {
        $('.btn-top').addClass('active');
    } else {
        $('.btn-top').removeClass('active');
    }
})
$('.btn-top').click(function(e){
    e.preventDefault();
    window.scrollTo({top:0,behavior:'smooth'})
})

    
   


    $('.btn-office').click(function(e){
        e.preventDefault();
        if ($(this).hasClass('on')) {
            $('.btn-office').removeClass('on')
            $('.office-list').stop().slideUp();

        } else {
            $('.btn-office').removeClass('on')
            $(this).addClass('on')

            $('.office-list').stop().slideUp();
            $(this).siblings('ul').stop().slideDown();
        }
    })

    $('.sns-item').mouseover(function(e){
        e.preventDefault();
            $(this).addClass('active').siblings().removeClass('active')
    })
    $('.sns-item').mouseout(function(e){
        e.preventDefault();
            $(this).removeClass('active')
    })
    
})
