
// 1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});



// svg길이 찾기
// svgani의 클래스에 path 길이를 구하라
$(function(){
    $('.svgani').find('path').each(function(i, path){
        var length = path.getTotalLength();
        // alert(length);
    })
});



// 스크롤라
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false, //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 



// 스크롤 위치에 따른 배경색 변경
// var뒤에 scrolltop은 네임 지정이고 그 뒤에 .scrolltop은 원래 함수 "따라서 밑에 if는 네임 지정한 scrolltop을 적어야함"
$(window).on('scroll resize', function(){
    var scrollTop = $(document).scrollTop();
    bgColor();
    
    function bgColor(){
        if(scrollTop > 1400){
            $('body').addClass('on');
        } else{
            $('body').removeClass('on');
        }
        if(scrollTop > 2700){
            $('body').removeClass('on');
        }

    }

});



// 메뉴 icon open/close 스크립트
$(function(){
    $('.menuopen button.open').on('click', function(){
        $('.menuopen .menuwrap').addClass('on');
    })
    $('.menuopen .menuwrap .close,.menuopen .menuwrap .close.en').on('click', function(){
        $('.menuopen .menuwrap').removeClass('on');
    })



});




// gnb 마우스 호버시 밑줄 (span.bar)
$(function(){
    $('.gnb li a').on('mouseenter focus', function(){
        let bar = $(this).position().left;
        let widNum = $(this).width();
        $('span.bar').css({'left': bar + 'px', 'width': widNum + 'px','opacity':'1'});

    })
    $('.gnb li a').on('mouseleave', function(){
        $('span.bar').css({'left': 0, 'width': 0,'opacity':'0'});

    })


});