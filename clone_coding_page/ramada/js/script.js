// a클릭시 위로 튕기는 현상 막기
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// 스플리팅
$(function(){
    Splitting();
});

// 스크롤라
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 



// 이미지 슬라이드
$(function() {
	$( '.slider' ).bxSlider({
	auto: true, 
	speed: 2000,

});    
}); 



// 메뉴 아이콘 open/close
// gnb 메뉴 클릭시 메뉴리스트 나타나는 스크립트
$(function(){
    $("header .inner .menuopen").on("click",function(){
        $(".gnb").addClass("on");
    });

// x랑 섹션부분 눌렀을 닫혀지는 스크립트
    $(".gnb .close, section").on("click", function(){
        $(".gnb").removeClass("on")

    });
});




// 상단 슬라이드
$(function(){
    $('.slide').slick({
        infinite: true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        fade: true,


        // centerPadding: '0px',
    });

});



 //3.스플리팅애니메이션
$(function(){Splitting();});






$(window).on('scroll resize', function(){
    // 변수 선언
    var scrollTop = 0
    scrollTop = $(document).scrollTop();
    
    // bgColo함수 선언
    bgColor();
    
    // bgcolor 함수 아래처럼 만듬
    function bgColor(){
        if(scrollTop > 1880){
            $('body').addClass('on');
        } else{
            $('body').removeClass('on');
        }
        if(scrollTop > 4300){
            $('body').removeClass('on');
        }

    }

});
















