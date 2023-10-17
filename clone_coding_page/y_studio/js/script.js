// a를 클릭했을때 위로 튕기는 이벤트 제거
// on은 a의 속성에 #이 된거 클릭할때 다음과 같은 함수(function)을 불러와라 그 함수는 preventDefault 함수! 이 함수는 이벤트를 작동하지 못하게 하는 메서드/ 요기서 e는 변수 값으로 아무거나 줘도 상관없지만 함수 앞에 동일한 문자인 e를 적어줘야함! 만약 변수를 a로 적었다면 함수도 a로 기재!
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// gnb 메뉴 클릭시 나타나기 스크립트랑 엑스랑 섹션 눌렀을때 닫아지는 스크립트
// gnb 메뉴 클릭시 메뉴리스트 나타나는 스크립트
$(function(){
    $(".innerheader .menuopen").on("click",function(){
        $(".gnb").addClass("on");
    });

// x랑 섹션부분 눌렀을 닫혀지는 스크립트
    $(".gnb .close, section").on("click", function(){
        $(".gnb").removeClass("on")

    });
});


/* 쉬프트 + 알트 + A 는 열어줄 주석
1, 제이쿼리는 가장먼저 $(function(){});로 감싸줘야함
2. $("선택자")로 대상을 선택한다
3, .on("이벤트명", function(){}); -> on그룹 이벤트 메소드로 이벤트를 작성 하고 함수를 호출한다
4, 다시 $("선택자")로 대상을 선택한 후 (동작을 할 수 있는)메소드를 적어준다
*/



// slick 슬러이더 효과
$(function(){
    $('.visual .slide').slick({
       arrows: true,  //화살표
       dots: false, //인디케이트 해제
        fade: true,//페이드효과
       autoplay:true, //자동재생
       autoplaySpeed: 4000, //재생시간
        pauseOnHover: false,
        pauseOnFocus: false   
});
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
    if(scrollFix > 150){
        $('header').addClass('on');
    } else{
        $('header').removeClass('on')
    }
}




// 스크롤라
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 


// 상단으로 부드럽게 이동
// gotop을 클릭할때 펑션(다음 함수) 를 가져와라 
$(function() {            
    $('.gotop').on('click', function() {
        let top = $('body').offset().top;
        // 얘는 변수를 만들어 준거
        //offset() 함수는 원하는 선택자의 위치값을 top , left 형식을 반환하여 줍니다.
        $('html, body').animate( { scrollTop : (top) }, 2000 ); 
        // 애는 불러오는 함수
    });     
});  




