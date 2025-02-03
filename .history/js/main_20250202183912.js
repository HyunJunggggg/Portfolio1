//Header 에 페이지 아래로 스크롤시 다크 스타일링 적용 
const header = document.querySelector(".header");

const headerHeight = header.offsetHeight;
/* 풀어서 하면
const headerRect = header.getBoundingClientRect();
console.log(headerRect);
const headerHeight = headerRect.height; */

document.addEventListener("scroll", () => {
    /* 스크롤 되는 y 자표가 headerHight 보다 크다면 다른스타일링!
    console.log (window.scrollY) - 크기 확인이 가능함. */
    if (window.scrollY > headerHeight) {
        header.classList.add("header--dark");
    } else {
        header.classList.remove("header--dark");
    }
});

// //  when scroll down the home section, opacity 

// const home = document.querySelector('.home__container');
// const homeHeight = home.offsetHeight;

// // logic을 위에 넣어도 가능은 하지만 , 너무 복잡하게 하는것보다 함수 하나 당 하나로 분리해두는게 좋음 (유지, 보수에 좋음 )
// document.addEventListener('scroll', ()=> {   
//     home.style.opacity = 1 - window.scrollY / homeHeight;
// });


document.addEventListener('DOMContentLoaded', () => {
    const home = document.querySelector('.home__container');
    if (!home) {
        console.error("Element .home__container not found!");
        return;
    }
    const homeHeight = home.offsetHeight;

    document.addEventListener('scroll', () => {
        const opacity = Math.max(0, 1 - window.scrollY / homeHeight);
        home.style.opacity = opacity;
    });
});


// Arrow up , when scroll down ( opacity) 
const arrowIcon = document.querySelector(".arrow-up");
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight/2) {
        arrowIcon.classList.add('')
    }
});