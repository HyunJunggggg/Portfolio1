//Header 에 페이지 아래로 스크롤시 다크 스타일링 적용 
const header = document.querySelector(".header");

const headerHeight = header.getBoundingClientRect().height;
// 풀어서 하면
// const headerRect = header.getBoundingClientRect();
// console.log(headerRect);
// const headerHeight = headerRect.height;

document.addEventListener("scroll", () => {
    // 스크롤 되는 y 자표가 headerHight 보다 크다면 다른스타일링!
    // console.log (window.scrollY) - 크기 확인이 가능함.
    if (window.scrollY > headerHeight) {
        header.classList.add("header--dark");
    } else {
        header.classList.remove("header--dark");
    }
});
