

$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});



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




// viusal 부분 li 부분
$(function(){
    gsap.to(".visual .inner ul li",  {
        duration: 1,
        scale: 0.8, 
        yoyo: true,  
        repeat: -1,  //무한대
        ease: "power1.inOut",
        stagger: {
            amount: 1, 
            grid: "auto",
            to:"right",
            from: "center"
        }
    });
});








// simplyScroll
$(function(){
    $(".marquee").simplyScroll({
        speed:4,
        pauseOnHover:false,
        pauseOnTouch: false

    });

});


// .Publishing .titlebox 고정
$(function(){
    gsap.registerPlugin(ScrollTrigger);


    gsap.timeline ({  
        scrollTrigger: {
            trigger: '.Publishing .titlebox', 
            start: '0% 0%',   
            end: '1000%', 
            pin: true,
            pinSpacing:false,
            scrub: 2,   
            // markers: true
        }
    })

});



// .Publishing .titlebox 서서히 사라지기
$(function(){
    gsap.registerPlugin(ScrollTrigger);

        gsap.timeline({
            scrollTrigger: {
                trigger:'.Publishing .inner',
                start: '100% 50%', 
                end: '100% 50%',
                scrub:1,
                // markers:true
    
    }})
            .to('.Publishing .titlebox', {opacity:'0', ease:'none', duration:5},0)
});









// .Publishing .inner ul.list 랜덤으로 올라가기
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    
        gsap.timeline({
            scrollTrigger: {
                trigger:'.Publishing .inner ul.list',
                start: '0% 100%', 
                end: '100% 100%',
                scrub:1,
                // markers:true

            }
        })


            .to('.Publishing .inner ul.list li:nth-child(1)', { yPercent:'-200', x: 'random(-50%, 50%)',   ease: 'power1.out',duration: 1 }, 0)
            .to('.Publishing .inner ul.list li:nth-child(2)', { yPercent:'-200', x: 'random(-50%, 50%)', ease: 'none', duration: 1.2}, 0)
            .to('.Publishing .inner ul.list li:nth-child(3)', { yPercent:'-200', x: 'random(-50%, 50%)',  ease: 'none', duration: 1.4 }, 0)
            .to('.Publishing .inner ul.list li:nth-child(4)', { yPercent:'-200',  x: 'random(-50%, 50%)',  ease: 'none', duration: 1.6 }, 0)
            .to('.Publishing .inner ul.list li:nth-child(5)', { yPercent:'-200',  x: 'random(-50%, 50%)', ease: 'none', duration: 1.8 }, 0)
            .to('.Publishing .inner ul.list li:nth-child(6)', { yPercent:'-200', x: 'random(-50%, 50%)',  ease: 'none', duration: 2 }, 0)
            .to('.Publishing .inner ul.list li:nth-child(7)', { yPercent:'-200',  x: 'random(-50%, 50%)',  ease: 'none', duration: 2.2 }, 0)
            .to('.Publishing .inner ul.list li:nth-child(8)', { yPercent:'-200', x: 'random(-50%, 50%)',  ease: 'none', duration: 2.4 }, 0)
            .to('.Publishing .inner ul.list li:nth-child(9)', { yPercent:'-200', x: 'random(-50%, 50%)',  ease: 'none', duration: 2.6 }, 0)
            .to('.Publishing .inner ul.list li:nth-child(10)', { yPercent:'-200', x: 'random(-50%, 50%)',  ease: 'none', duration: 2.6 }, 0)

});






// .ncs .inner .listbox 오른쪽에서 왼쪽으로 나타나기
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: ({
            trigger:'.ncs .inner .titlebox',
            start: '0% 30%', 
            end: '0% 30%',
            scrub:1,
            // markers:true
        })
    })

    .fromTo('.ncs .inner .listbox',{'xPercent':'300'},{'xPercent':'0',ease:'none', duration:1},0)

});




// ncs edu 리스트 화살표 클릭시 상세내용 보이는 부분
    $(function(){
        $('.ncs .inner .edu .edu_list .list_box p:last-child a').on('click',function(){
            var index = $('.ncs .inner .edu .edu_list .list_box p:last-child a').index($(this));
    

    // toggleClass는 해당 클래스를 클릭시 on이 자동으로 생성 되고 다시누른면 제거 됨
            $('.ncs .inner .edu .edu_list div.text:eq('+ index +')').toggleClass('on');
            $('.ncs .inner .edu .edu_list .list_box p:last-child a img:nth-child(1):eq('+ index +')').toggleClass('on');
            $('.ncs .inner .edu .edu_list .list_box p:last-child a img:nth-child(2):eq('+ index +')').toggleClass('on');
    
        });
        
    });



    