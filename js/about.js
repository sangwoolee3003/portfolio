// 1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
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







    // 스크롤라
    $(function() {
        $('.animate').scrolla({
            mobile: true, //모바일버전시 활성화
            once: false //스크롤시 딱 한번만 하고싶을땐 true
        });
    }); 
    



// 스플리팅
$(function(){ Splitting();});



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




// profile  middle 박스 text의 낱글자 opcity 부분
$(function(){

        gsap.timeline({
            scrollTrigger: {
                trigger: '.profile .inner .middlebox p .char',
                start: '0% 80%',
                end: '0% 20%',
                scrub: 1,
                // markers: true,
            }
            })
    
            .from('.profile .inner .middlebox p .char', {
                opacity: 0.3,
                stagger: 0.1, //stagger: 요소들 사이의 애니메이션 지연 시간을 설정합니다. 값이 0.3인 경우 요소들이 0.3초 간격으로 애니메이션을 시작
                duration: 1
            })
            .to('.profile .inner .middlebox p .char', {
                opacity: 1,
                ease: 'power1.inOut',
                duration: 3           
            })

});






$(function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger:'.keyword .topbox',
            start: '50% 50%', 
            end: '100% 0%',
            scrub:1,
            // markers:true,
            // pin:true //화면 고정 역할
            // pinSpacing: false
        }

    })


    .fromTo('.keyword .videobox video', {'clip-path': 'polygon(35% 0%, 35% 100%, 65% 100%, 65% 0%'}, {'clip-path': 'polygon(10% 0%, 10% 100%, 90% 100%, 90% 0%', ease:'none', duration:1},0)

});




// keyword의 videobox pin  고정
$(function(){
    gsap.registerPlugin(ScrollTrigger);



    gsap.timeline ({  
        scrollTrigger: {
            trigger: '.keyword .videobox', 
            start: '0% 0%',   
            end: '1200%', 
            pin: true,
            pinSpacing:false,
            scrub: 2,   
            // markers: true  
        }
    });


});






// keyword의 video박스 서서히 사라지는 효과
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline ({  
        scrollTrigger: {
            trigger: '.keyword .keyword_box', 
            start: '80% 100%',   
            end: '100% 0%', 
            scrub: 2,   
            // markers: true  
        }
    })

    .to('.keyword .videobox', {opacity:'0', ease:'none', duration:5},0)


});



// life 텍스트 부분 움직이는 효과
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('#life_text').forEach(life_text =>{

        gsap.to(life_text, {
            yPercent: -100,
            ease: "none",
            duration: 0.5,
            scrollTrigger: {
                trigger: life_text,
                start: "top bottom", 
                end: "bottom top",
                scrub: 1,
                // markers: true,

            },  
    })
})
});






// .skill .inner .left p의 낱글자 opacity 효과
$(function(){
    gsap.timeline({
        scrollTrigger: {
            trigger: '.skill .inner .left p',
            start: '0% 100%',
            end: '0% 0%',
            scrub: 1,
            // markers: true,
        }
        })

        .from('.skill .inner .left p .char', {
            opacity: 0.3,
            stagger: 0.1, //stagger: 요소들 사이의 애니메이션 지연 시간을 설정합니다. 값이 0.3인 경우 요소들이 0.3초 간격으로 애니메이션을 시작
            duration: 1
        })
        .to('.skill .inner .left p .char', {
            opacity: 1,
            ease: 'power1.inOut',
            duration: 3           
        })


});









// skill slick 부분
    $(function(){
            $('.right.mobile_mode ul.slide').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay:true,
                autoplaySpeed:3000,
    
                responsive: [
                    {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                    },
                    {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                        }
                ]
            });
        
        });