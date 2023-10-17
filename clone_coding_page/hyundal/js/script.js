$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});



// 픽스 헤더 부분
// 변수 종류 let, const, var 있음
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









$(function(){
    $('.slide').slick({
        infinite: true,
        arrows:true,
        autoplay:true,
        autoplaySpeed:2000,
        fade: false,


        // centerPadding: '0px',
    });

});

$(function(){
    $('.slide2').slick({
        infinite: true,
        arrows:true,
        // autoplay:true,
        autoplaySpeed:5000,
        fade: false,
        slidesToShow: 6,
        slidesToScroll: 6,


        // centerPadding: '0px',
    });

});




$(function(){
    $('.slide3').slick({
        infinite: true,
        arrows:false,
        // autoplay:true,
        autoplaySpeed:5000,
        fade: false,
        slidesToShow: 2,
        slidesToScroll: 2,


        // centerPadding: '0px',
    });

});



$(function(){
    $('.slide4').slick({
        infinite: true,
        arrows:false,
        // autoplay:true,
        autoplaySpeed:5000,
        fade: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,


        // centerPadding: '0px',
    });

});


// news 리스트 클릭시 ul 정보 바뀌는거

//박스 a를 클릭하면 아래 함수를 불러와! 근데 변수를 줄꺼야 그 변수는 박스 a에 클릭한 자긴에게 인덱스 번호를 부여 할 거야. 이제 아래와 같이 진행을 할껀데  박스 a를 클릭하면 기존에 ul에 on 붙은거는 제거를 할거고 다른 ul에 on을 붙일 건데 다른 ul은 변수를 선언한 인덱스를 부여한 번호와 같은 번호를 가진 ul에게 on을 붙일 거야

$(function(){

    $('.news .inner .middlebox .box a').on('click', function(){
        var index = $('.news .inner .middlebox .box a').index($(this));

        $('.news .inner ul').removeClass('on');
        // eq는 인덱스 값을 가져오기 위해 씀
        $('.news .inner ul:eq('+ index +')').addClass('on')



    });


});


// new클릭시 div리스트 색 바뀌는거
$(function(){
    $('.news .inner .middlebox .box a').on('click',function(){
        var index = $('.news .inner .middlebox .box a').index($(this));

        $('.news .inner .middlebox .box').removeClass('on');

        $('.news .inner .middlebox .box:eq('+ index +')').addClass('on');

    });



});