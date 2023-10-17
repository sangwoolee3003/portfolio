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