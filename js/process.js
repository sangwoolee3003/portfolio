
// 1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


// 스플리팅
$(function(){ Splitting();});


 // 스크롤라
$(function() {
    $('.animate').scrolla({
        mobile: true, //모바일버전시 활성화
        once: false //스크롤시 딱 한번만 하고싶을땐 true
    });    
}); 



// menu open/close 부분
$(function(){
    $('.menubox a').on('click', function(){
        $('.menu_open').addClass('on');
    })
    $('.menu_open .menuwrap .close a').on('click', function(){
        $('header .menu_open.on').removeClass('on');
    })


});





// top버튼 클릭시 상단 이동
$(function() {            
    $('.gotop').on('click', function() {
        let gotop = $('body').offset().top;
        // offset().top은 <body> 요소의 상위 요소로부터의 상단 위치를 가져오는 것입니다.
        $('html, body').animate( { scrollTop : (gotop) }, 1000 ); 

    });     
});  



// 헤더 메뉴바 숨기기 효과
$(function(){
    const headerInner = gsap.from("header .inner", { 
        yPercent: -200,
        paused: true,
        duration: 0.2
    }).progress(1);
    
    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
            self.direction === -1 ? headerInner.play() : headerInner.reverse()
        }
    });


});






// 배경색 변경 부분
$(function(){

    gsap.timeline({
        scrollTrigger: {
            trigger:'.ia',
            start: '0% 90%', 
            end: '0% 40%',
            scrub:1,
            // markers:true,
            // pin:true //화면 고정 역할
            // pinSpacing: false
        }



    })
    .to('.wrap', { backgroundColor: '#F1EFEF', ease: 'none', duration: 1 }, 0)
    .to('.ia .inner .textbox h2.title', { color: '#000000', ease: 'none', duration: 1 }, 0)
    .to('.reference .inner .textbox h2.title', { color: '#000000', ease: 'none', duration: 1 }, 0)




    gsap.timeline({
        scrollTrigger: {
            trigger:'.idea',
            start: '0% 90%', 
            end: '0% 80%',
            scrub:1,
            // markers:true,
                // pin:true //화면 고정 역할
                // pinSpacing: false
            }
    
    
    
        })
        .to('.wrap', { backgroundColor: '#040D12', ease: 'none', duration: 1 }, 0)



});




