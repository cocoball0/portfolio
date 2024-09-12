// text.js
// span 요소 노드 가져오기
// function(){} : 즉시 실행(조금 더 최적화된 코드를 실행할 수 있다.)
const spanEl = document.querySelector("main h2 span");
// 화면에 표시할 문장 배열
const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Disgner', 'UX Designer', 'Back-End Developer'];
// 배열의 인덱스 초깃값
let index = 0;
// 화면에 표시핢 문자 배열에서 텍스트 하나를 가져올 뒤 배열로만들기
let currentTxt = txtArr[index].split("");

function writeTxt() {
    spanEl.textContent += currentTxt.shift();
    if (currentTxt.length != 0) {
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
        // setTimeout 중요하니까 공부하기
    } else {
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }

}

function deleteTxt() {
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if (currentTxt.length !== 0) {
        setTimeout(deleteTxt, Math.floor(Math.random() * 100))
    } else {
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
    }
}

writeTxt();
// End text.js

// scroll.js
const headerEl = document.querySelector("header");
// window.addEventListener('scroll',function(){
//     const browerScrolly = window.pageYOffset;
//     if(browerScrolly > 0){
//         headerEl.classList.add("active");
//     }else{
//         headerEl.classList.remove("active");
//     }
// });

// End scroll.js

// 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제
window.addEventListener('scroll',function(){
    this.requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
    let browerScrolly = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browerScrolly > 0){
        headerEl .classList.add("active");
    }else{
        headerEl.classList.remove("active");
    }
}

// moveBy.js
// 애니메이션 스크롤 이동
const animationMove =function(selcetor){
    // 1.selcetor 매개변로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selcetor);
    // 2. 현재브라우저의 스크롤정보(y값)
    const browserScrolly = window.pageYOffset;
    // 3. 이동할 대상의 위치(y값)
    const targetScrolly = targetEl.getBoundingClientRect().top + browserScrolly;
    // 4. 스크롤이동
    window.scrollTo({top:targetScrolly,behavior:'smooth'});
};

//스크롤 읻벤트 연결하기
const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener("click",function(e){
        const target = this.dataset.target;
        animationMove(target);
    });
}

// End move.js
