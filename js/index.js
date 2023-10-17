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




// simplyScroll
$(function(){
    $(".marquee").simplyScroll({
        speed:4,
        pauseOnHover:false,
        pauseOnTouch: false

    });

});



// 헤더 메뉴바 숨기기 효과
$(function(){
    const headerInner = gsap.from("header .inner", { 
        yPercent: -200,
        paused: true,
        duration: 0.2
    }).progress(1); //.progress(1)는 트리고 활성화 됨을 나타냄(없으면 처음에 메뉴바 나타나지 않음)
    
    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
            self.direction === -1 ? headerInner.play() : headerInner.reverse()
        }
    });
    //onUpdate 콜백 함수는 스크롤 트리거의 업데이트가 발생할 때마다 실행됩니다. self.direction === -1은 스크롤 방향이 위로 이동하는 경우를 의미하며, headerInner.play()를 호출하여 애니메이션을 재생시킵니다. 반대로, self.direction === 1은 스크롤 방향이 아래로 이동하는 경우를 의미하며, headerInner.reverse()를 호출하여 애니메이션을 역재생시킵니다.


});




//visual title / video 부분
$(function(){


    gsap.registerPlugin(ScrollTrigger);


        gsap.timeline({
            scrollTrigger: {
                trigger:'.visual',
                start: '100% 100%', 
                end: '100% 0%',
                scrub:1,
                // markers:true,
                pin:true //화면 고정 역할
                // pinSpacing: false,
            }
    
        })
        .fromTo('.visual .text .a', {x:'-20%','scale':'1',  'opacity':'1'},{x:'-300%', 'scale':'5', 'opacity':'0.3',  ease:'none', duration:5},0)
        .fromTo('.visual .text .b', {'scale':'1', 'opacity':'1'},{'scale':'7', 'opacity':'0.3', ease:'none', duration:5},0)
        .fromTo('.visual .text .c', {x:'0%', 'scale':'1', 'opacity':'1'},{x:'-200%', 'scale':'5', 'opacity':'0.3', ease:'none', duration:5},0)
        .fromTo('div.svgAni', {x:'0%', 'scale':'1', 'opacity':'1'},{x:'600%','scale':'5', 'opacity':'0.3', ease:'none', duration:5},0)

        .fromTo('.videowrap video', {'clip-path': 'circle(0%)'}, {'clip-path': 'circle(100%)', ease:'none', duration:10},5)
        .to('.video_inner .txt', {opacity:'1', ease:'none', duration: 10},7)

});





// me_2 하단 텍스트 부분
$(function(){

    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger:'.me_2 .inner .bottombox',
            start: '0% 100%', 
            end: '90% 0%',
            scrub:1,
            // markers:true
            // pin:true //화면 고정 역할
            // pinSpacing: false
        }

    })

    .to('.me_2 .inner .bottombox p:nth-child(1)',{x:'-50%',ease:'none', duration:1},0)
    .to('.me_2 .inner .bottombox p:nth-child(2)',{x:'50%',ease:'none', duration:1},0)
    .to('.me_2 .inner .bottombox p:nth-child(3)',{x:'-50%',ease:'none', duration:1},0)

});




// works 타이틀 부분
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger:'.works .maintxt',
            start: '0% 95%', 
            end: '0% 20%',
            scrub:1,
            // markers:true
            // pin:true //화면 고정 역할
            // pinSpacing: false
        }

    })

    .fromTo('.works .inner .maintxt .title1', {x:'-100%'},{x:'-6%', ease:'none', duration:3},0)
    .fromTo('.works .inner .maintxt .title2', {x:'100%'},{x:'3%', ease:'none', duration:3},0)


});











// works list 가로 스크롤 부분
$(function(){
    gsap.registerPlugin(ScrollTrigger);



//01. 가로스크롤
    let list = gsap.utils.toArray('.works .inner ul li'); //.work ul li를 배열로 만들어서 변수 list한테 저장한다라는 뜻
    let scrollTween = gsap.to(list, {
        xPercent: -100 * (list.length - 1), //원래 리스트의 갯수보다 1을 빼서 길이를 구한 후에 가로로 이동
        ease: 'none',
        scrollTrigger: {
            trigger: '.works ',
            pin: true,
            scrub:1,
            start: '50% 55%',
            end:'200%',
            // markers: true
        }
    })

}); 










 // .ncs_list 부분
$(function(){
    gsap.registerPlugin(ScrollTrigger);


            gsap.timeline({
                scrollTrigger: {
                    trigger:'.ncs_list',
                    start: '-20% 100%', 
                    end: '-10% 30%',
                    scrub:1,
                    // markers:true
                    // pin:true //화면 고정 역할
                    // pinSpacing: false
                }
        
            })
    
            .fromTo('.ncs_list li:nth-child(1) div.box',{x:'-300%',opacity:'0'},{x:'0', opacity:'1', ease:'none', duration:1},0)
            .fromTo('.ncs_list li:nth-child(2) div.box',{x:'-300%',opacity:'0'},{x:'0', opacity:'1', ease:'none', duration:1},1)
            .fromTo('.ncs_list li:nth-child(3) div.box',{x:'-300%',opacity:'0'},{x:'0', opacity:'1', ease:'none', duration:1},2)
    

});




// nsc 낱글자 부분
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: '.ncs .inner ul.ncs_edu',
            start: '0% 70%',
            end: '0% 10%',
            scrub: 1,
            // markers: true
        }
        })


        
        .from('.ncs .inner ul.ncs_edu li .char', {
            opacity: 0.1,
            stagger: 0.2, //stagger: 요소들 사이의 애니메이션 지연 시간을 설정합니다. 값이 0.3인 경우 요소들이 0.3초 간격으로 애니메이션을 시작
            duration: 1
        })
        .to('.ncs .inner ul.ncs_edu li .char', {
            opacity: 1,
            ease: 'power1.inOut',
            duration: 3           
        })

});











// skill hover 부분
$(function(){

    $('.skill .inner ul.skill_word li').on('mouseenter focus', function(){
        var index = $('.skill .inner ul.skill_word li').index($(this));

        $('.skill .inner .circlebox .circle').removeClass('on');
        $('.skill .inner .circlebox div.percent').removeClass('on');
        $('.skill .inner ul.skill_word li').removeClass('on');
        // eq는 같은 값의 인덱스를 가져오기 위해 씀
        $('.skill .inner .circlebox .circle:eq('+ index +')').addClass('on')
        $('.skill .inner .circlebox div.percent:eq('+ index +')').addClass('on')
        $('.skill .inner ul.skill_word li:eq('+ index +')').addClass('on')



    });


});






// circle 카운팅 부분
var count = {var : 0};

$(function () {
    $("#html_count_hover").hover(function() {
        $({ count: count.var }).animate({ count: 90 }, {
            duration: 1000,
            step: function() {
                $("#html_number").text(Math.floor(this.count) + "%");
            },
            complete: function() {
                $("#html_number").text(this.count + "%");
            }
        });
    });

    $("#javascript_count_hover").hover(function() {
        $({ count: count.var }).animate({ count: 60 }, {
            duration: 1000,
            step: function() {
                $("#javascript_number").text(Math.floor(this.count) + "%");
            },
            complete: function() {
                $("#javascript_number").text(this.count + "%");
            }
        });
    });

    $("#css_count_hover").hover(function() {
        $({ count: count.var }).animate({ count: 90 }, {
            duration: 1000,
            step: function() {
                $("#css_number").text(Math.floor(this.count) + "%");
            },
            complete: function() {
                $("#css_number").text(this.count + "%");
            }
        });
    });

    $("#css_count_hover").hover(function() {
        $({ count: count.var }).animate({ count: 90 }, {
            duration: 1000,
            step: function() {
                $("#css_number").text(Math.floor(this.count) + "%");
            },
            complete: function() {
                $("#css_number").text(this.count + "%");
            }
        });
    });

    $("#jquery_count_hover").hover(function() {
        $({ count: count.var }).animate({ count: 70 }, {
            duration: 1000,
            step: function() {
                $("#jquery_number").text(Math.floor(this.count) + "%");
            },
            complete: function() {
                $("#jquery_number").text(this.count + "%");
            }
        });
    });

    $("#photoshop_count_hover").hover(function() {
        $({ count: count.var }).animate({ count: 50 }, {
            duration: 1000,
            step: function() {
                $("#photoshop_number").text(Math.floor(this.count) + "%");
            },
            complete: function() {
                $("#photoshop_number").text(this.count + "%");
            }
        });
    });


    $("#illustrator_count_hover").hover(function() {
        $({ count: count.var }).animate({ count: 50 }, {
            duration: 1000,
            step: function() {
                $("#illustrator_number").text(Math.floor(this.count) + "%");
            },
            complete: function() {
                $("#illustrator_number").text(this.count + "%");
            }
        });
    });


    $("#powerpoint_count_hover").hover(function() {
        $({ count: count.var }).animate({ count: 90 }, {
            duration: 1000,
            step: function() {
                $("#powerpoint_number").text(Math.floor(this.count) + "%");
            },
            complete: function() {
                $("#powerpoint_number").text(this.count + "%");
            }
        });
    });


    $("#word_count_hover").hover(function() {
        $({ count: count.var }).animate({ count: 90 }, {
            duration: 1000,
            step: function() {
                $("#word_number").text(Math.floor(this.count) + "%");
            },
            complete: function() {
                $("#word_number").text(this.count + "%");
            }
        });
    });


    $("#excel_count_hover").hover(function() {
        $({ count: count.var }).animate({ count: 90 }, {
            duration: 1000,
            step: function() {
                $("#excel_number").text(Math.floor(this.count) + "%");
            },
            complete: function() {
                $("#excel_number").text(this.count + "%");
            }
        });
    });


    $("#figma_count_hover").hover(function() {
        $({ count: count.var }).animate({ count: 80 }, {
            duration: 1000,
            step: function() {
                $("#figma_number").text(Math.floor(this.count) + "%");
            },
            complete: function() {
                $("#figma_number").text(this.count + "%");
            }
        });
    });

});




