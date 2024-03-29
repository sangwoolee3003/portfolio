// 1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});




//슬라이드 걸기
$(function(){
    $('.visual .slide').slick({
        arrows: false, //화살표 사용안함
        dots: true, //닷츠
        autoplay: true, //자동재생
        fade: true, //페이드인 효과 
        autoplaySpeed:5000, //재생시간 5초
        pauseOnHover:false,//마우스 오버시 슬라이드 멈춤 해제
        pauseOnFocus:false //포커스시 슬라이드 멈춤 해제

    });
});




// 스크롤라
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 





// $(function(){
//     $('header .open').on('click', function(){
//         $('body').css({'overflow':'hidden'})
//         $('header .bg').css({'display':'block'})
//         $('header nav').addclass('on')
//     })
//     $('header .close,header .bg').on('click', function(){
//         $('body').css({'overflow':'auto'})
//         $('header .bg').css({'display':'none'})
//         $('header nav').removeClass('on')

//     })


// })

$(function(){
    $('header .open').on('click', function(){
        $('body').css({'overflow':'hidden'})
        $('header .bg').css({'display':'block'})
        $('header nav').addClass('on');
    });

    $('header .close, header .bg').on('click', function(){
        $('body').css({'overflow':'auto'})
        $('header .bg').css({'display':'none'})
        $('header nav').removeClass('on');
    })
});