// 1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});



//service 슬라이드 부분
$(function(){

    // 슬라이드 효과 부분
    $('.slide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });


    // 슬라이드 번호 부분
    $('.slide').on('afterChange', function(event, slick, currentSlide){
        
        // 01, 02 처럼 나타내는 방법
        var slideNumber = currentSlide + 1;
        var slideNumberFormatted = ("0" + slideNumber).slice(-2);
        $(".current-num").text(slideNumberFormatted);


        //그냥 1,2 처럼 나타내는 방법
        //  $(".current-num").text(currentSlide + 1);
    });


});




// people 슬라이드 부분
$(function(){
    $('.slide2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay:true,
        // autoplaySpeed:3000,
        responsive: [
            {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            }
        ]

    });

});





// 사용시 class에 section이라고 통일해야 먹힘
$(function() {
    var page = $('#fullpage').fullpage({
        scrollBar: true,  //아래 스크롤 이벤트 사용하기 위해 써줌
    });
});




// 헤더 부분 스크롤 이벤트 
$(function(){

    let scrollFix = 0;
    scrollFix = $(document).scrollTop();
    fixHeader();
    
    // 스크롤과 윈도우창 조절시 이벤트 
    $(window).on('scroll resize', function(){
        scrollFix = $(document).scrollTop();
        fixHeader();
    
    })
    
    // 픽스 헤더 함수
    // 스크롤이 150이상이면 헤더에 on 클래스 붙러라
    function fixHeader(){
        if(scrollFix > 250){
            $('header').addClass('on');
        } else{
            $('header').removeClass('on')
        }
    }



    
});