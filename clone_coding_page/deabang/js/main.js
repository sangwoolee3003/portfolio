$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});



// gnb 호버시
// 변수 index를 만들어줌
$(function(){

    $('.gnb > li > a').on('mouseenter focus', function(){
        var index = $('.gnb > li > a').index($(this));
        $('.gnb li ul.inner').removeClass('on');

        // eq는 인덱스 값을 가져오기 위해 씀
        $('.gnb li ul.inner:eq('+ index +')').addClass('on')
        $(this).addClass('on')
    });

    $('.gnb li ul.inner').on('mouseleave', function(){
    $('.gnb li ul.inner').removeClass('on');


    })


    $('header').on('mouseleave', function(){
        $('.gnb li ul.inner').removeClass('on');
    
    
        })
});











// fix header 
var scrollFix = 0;
scrollFix = $(document).scrollTop();
fixHeader();


$(window).on('scroll resize', function(){
    scrollFix = $(document).scrollTop();
    fixHeader();


})


function fixHeader(){
    if(scrollFix > 150 ) {
        $('header').addClass('on');
    } else{
        $('header').removeClass('on');
    }
}






// 비주얼 부분 슬라이드
// slick
$(function(){
    $('.visual .slide').slick({
        arrows:true,//화살표
        dots:true,//인디케이터
        autoplay:true, //자동재생
        fade:true,//페이드인효과
        autoplaySpeed:7000,//재생시간
        pauseOnHover:false, //호버시 멈추는 멈추는것을 해제
        pauseOnFocus:false
    });
    // 텍스트 이름 바꾸기
    $('.slick-prev').text("prev")


    // 두번째 슬라이드 (slide2)
    $('.slide2').slick({
        arrows:false,//화살표
        dots:true,//인디케이터
        autoplay:true, //자동재생
        infinite:true,
        slidesToShow:2,
        slidesToScroll:1,
        autoplaySpeed:6000,//재생시간
        pauseOnHover:true, //호버시 멈추는 멈추도록 설정함
        pauseOnFocus:true
    });
    $(".slide2 #slick-slide-control10").text("서울 마곡지구 업무용지");
    $(".slide2 #slick-slide-control11").text("서울 마곡지구 대방디엠시티2차");
    $(".slide2 #slick-slide-control12").text("화성 동탄1차 대방디엠시티 더 센텀");
    $(".slide2 #slick-slide-control13").text("광주 수완 대방노블랜드6차");
});



$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 




$(function(){
    Splitting();
});



// 스크롤 다운
$(function(){
    $('.scroll').on('click', function(){
        var scrollBtn = $('#scroll').offset().top; //#scroll가 끝나는 지점으로 스크롤 이동
        $('html, body').animate({scrollTop:(scrollBtn)},400);//400속도로 부드럽게 처리 해라

    });


});






// 비디오 부분
$(function(){
    $('.videobox .mask').on('click', function(){
        $(this).css({'display':'none'});
        $('.videobox iframe').css({'display':'block'});
    })
});

//마스크 클릭하면 자기는 디스플레이 넌 되고 비디오박스 아이프레인임 디스플레이 블럭이 되어라





