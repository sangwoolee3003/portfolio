
// 스크롤 기본 세팅
(() => {

    let yOffset = 0; //window.pageYOffset 대신 쓸 변수
    let prevScrollHeight = 0; //현재 스크롤 위치 (yoffset)보디 이전에 위치한 스크롤 섹션들의 스크롤 높이의 합
    let currentScene = 0; //현재 활성화된 (눈앞에 보고있는) 씬 부분(번호)(scroll-section)




    const sceneInfo = [
        {
            // scroll-section-0
            type:'sticky', //애니메이션이 있어서 타입은 sticky로 정함
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight로 세팅(디바이스의 브라우저 마다 높이가 달라서 픽스로 안씀)
            scrollHeight:0,
            objs: {
                container: document.querySelector('#scroll-section-0') //ogjs는 속성을 만들어서 안에 container라는 객체를 만들어서 해당 객체에 scroll-section 가져와 담기
            }
        },
        {
            //scroll-section-1
            type:'nomal', //애니메이션이 없어서 nomal로 정함
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight로 세팅(디바이스의 브라우저 마다 높이가 달라서 픽스로 안씀)
            scrollHeight:0,
            objs: {
                container: document.querySelector('#scroll-section-1')
            }
        },
        {
            // scroll-section-2
            type:'sticky', //애니메이션이 있어서 타입은 sticky로 정함
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight로 세팅(디바이스의 브라우저 마다 높이가 달라서 픽스로 안씀)
            scrollHeight:0,
            objs: {
                container: document.querySelector('#scroll-section-2')
            }
        },
        {
            // scroll-section-3
            type:'sticky', //애니메이션이 있어서 타입은 sticky로 정함
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight로 세팅(디바이스의 브라우저 마다 높이가 달라서 픽스로 안씀)
            scrollHeight:0,
            objs: {
                container: document.querySelector('#scroll-section-3')
            }
        },
    ];



    function setLayout(){
        // 각 scroll-section의 높이 세팅을 위해 함수 만듬
        for (let i = 0; i < sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight; //seceneInfo의 scrollHeight의 높이는 hightNum인 5에 브라우저의 높이를 곱함 
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight }px`; //본격적으로 위에 container: document.querySelector('#scroll-section-1')에 담은 섹션들에 높이를 위에 정의한  scrollHeight 함수로 세팅해서 스크롭 높이 높혀줍니다
        }

        // console.log(sceneInfo);//개발자 도구 콘솔창에 제대로 실행 되어 있는지 보기 위해 적음 제대로 실행이 되어 있다면 높이가 늘어나있음
    }



    function scrollLoop() {
        prevScrollHeight = 0;
        for (let i = 0; i < currentScene; i++){
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }
        
        if (yOffset > prevScrollHeight + sceneInfo [currentScene].scrollHeight) {
            currentScene++;
        }

        if (yOffset < prevScrollHeight){
            if (currentScene === 0) reture ;
            currentScene--;
        }

        console.log(currentScene); 

    }




    window.addEventListener('resize', setLayout); //윈도우 창이 창이 리사이즈 될때  setLayout으로 높이 바껴라
    window.addEventListener('scroll', () =>{
        yOffset = window.pageYOffset //스크롤이 일어날때 yoffset을 pageoffset값으로 갱신해라 결국 둘이 값이 같음
        scrollLoop();

    }); 

    setLayout();//위에 setLayout 선언한 함수를 실행하기 위해 기재 지우면 다 실행 안됨


})();