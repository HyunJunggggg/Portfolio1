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
//     console.log(1 - window.scrollY / homeHeight);
    
//     home.style.opacity = 1 - window.scrollY / homeHeight;

// });


// const arrowIcon = document.querySelector(".arrow-up");
// const 


Your function might not be working due to a few potential issues:

Possible Issues:
home is null

If the .home__container element is not found in the DOM when document.querySelector('.home__container') runs, home will be null, and accessing home.offsetHeight will throw an error.
Solution: Ensure that the script runs after the DOM is fully loaded. You can wrap your code inside a DOMContentLoaded event:
js
복사
편집
document.addEventListener('DOMContentLoaded', () => {
    const home = document.querySelector('.home__container');
    if (!home) {
        console.error("Element .home__container not found!");
        return;
    }
    const homeHeight = home.offsetHeight;

    document.addEventListener('scroll', () => {
        home.style.opacity = 1 - window.scrollY / homeHeight;
    });
});
homeHeight is 0

If .home__container has no height (e.g., if it’s empty or its parent is display: none), homeHeight will be 0, leading to a division by zero.
Solution: Ensure that .home__container has a defined height. You can check:
js
복사
편집
console.log("homeHeight:", homeHeight);
Invalid opacity values

The computed opacity could be negative when window.scrollY is greater than homeHeight, which is not valid.
Solution: Use Math.max() to ensure the opacity stays within [0, 1]:
js
복사
편집
home.style.opacity = Math.max(0, 1 - window.scrollY / homeHeight);
Fixed Code:
js
복사
편집
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