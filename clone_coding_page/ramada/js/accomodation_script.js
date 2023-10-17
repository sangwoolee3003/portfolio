// 하단 슬라이드
$(function(){
    $('.for_slick_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        centerMode: true,
        // centerPadding: '0px',
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        
        ]
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




// gnb라마다 동대문 호버 시 스크롤
$(document).on('mouseover', '.gnb_list1', function () {
    $('.dept1').slideDown(200);
});


$(document).on('mouseover', '.logotext, .gnb_list2, .gnb_list3, .gnb_list4, .gnb_list5, .gnb_list6, .mainimg, .content, .roomlist, .detailinfo', 
function () {
    $('.dept1').slideUp(200);
});



// gnb ACCMMODtion 호버 시 스크롤
$(document).on('mouseover', '.gnb_list2', function () {
    $('.dept2').slideDown(200);
});


$(document).on('mouseover', '.logotext, .gnb_list1, .gnb_list3, .gnb_list4, .gnb_list5, .gnb_list6, .mainimg, .content, .roomlist, .detailinfo', 
function () {
    $('.dept2').slideUp(200);
});





// gnb dining호버 시 스크롤
$(document).on('mouseover', '.gnb_list3', function () {
    $('.dept3').slideDown(200);
});


$(document).on('mouseover', '.logotext, .gnb_list1, .gnb_list2, .gnb_list4, .gnb_list5, .gnb_list6, .mainimg, .content, .roomlist, .detailinfo', 
function () {
    $('.dept3').slideUp(200);
});




// gnb banguet 호버 시 스크롤
$(document).on('mouseover', '.gnb_list4', function () {
    $('.dept4').slideDown(200);
});


$(document).on('mouseover', '.logotext, .gnb_list1, .gnb_list2, .gnb_list3, .gnb_list5, .gnb_list6, .mainimg, .content, .roomlist, .detailinfo', 
function () {
    $('.dept4').slideUp(200);
});




// gnb enents 호버 시 스크롤
$(document).on('mouseover', '.gnb_list5', function () {
    $('.dept5').slideDown(200);
});


$(document).on('mouseover', '.logotext, .gnb_list1, .gnb_list2, .gnb_list3, .gnb_list4, .gnb_list6, .mainimg, .content, .roomlist, .detailinfo', 
function () {
    $('.dept5').slideUp(200);
});


// gnb guest service 호버 시 스크롤
$(document).on('mouseover', '.gnb_list6', function () {
    $('.dept6').slideDown(200);
});


$(document).on('mouseover', '.logotext, .gnb_list1, .gnb_list2, .gnb_list3, .gnb_list4, .gnb_list5, .mainimg, .content, .roomlist, .detailinfo', 
function () {
    $('.dept6').slideUp(200);
});




// 메뉴 아이콘 open/close
// menuicon 메뉴 클릭시 메뉴리스트 나타나는 스크립트
$(function(){
    $(".menuopen").on("click",function(){
        $(".menuicon_list").addClass("on");
    });

// x랑 섹션부분 눌렀을 닫혀지는 스크립트
    $(".menuicon_list .close, section").on("click", function(){
        $(".menuicon_list").removeClass("on")

    });
});




