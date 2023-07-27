// DOM 요소 선택
const header = document.querySelector('.header');
const logo = document.querySelector('.header_logo_image'); // 로고 이미지
const hamburger = document.querySelector('.sitemap'); // 햄버거 메뉴
const smiLI = document.getElementsByClassName('sub'); // ul>li>ul.sub
const headerGnb = document.querySelector('.menu'); // gnb
const smbg = document.querySelector('.sub-menu-bg'); // 서브메뉴 뒷배경
const subMenu = document.getElementsByClassName('sub-menu'); // 서브메뉴 호버 노랑효과

// 플래그 변수 초기화
let isDesktop = true; // width 1280 이상인지 여부
let isMouseOver = false; // 마우스가 메뉴 영역에 있는지 여부

// 서브메뉴 높이 설정 함수
const setSubMenuHeight = () => {
    smbg.style.height = '220px';
    Array.from(smiLI).forEach((item, index) => {
        subMenu[Math.floor(index/2)].style.height = '200px';
        item.style.height = '200px';
    });
}

// 서브메뉴 높이 초기화 함수
const resetSubMenuHeight = () => {
    smbg.style.height = '0';
    Array.from(smiLI).forEach((item, index) => {
        subMenu[Math.floor(index/2)].style.height = '0';
        item.style.height = '0';
    });
}

// 스크롤 상태 및 마우스 오버 상태에 따른 헤더 스타일 변경 함수
const handleScroll = () => {
    const scrollPosition = document.documentElement.scrollTop || window.pageYOffset;

    if (scrollPosition > 0 || isMouseOver) {
        header.classList.add('scrolled');
        logo.src = "images/logos/dongbang_color_logo.png";
        hamburger.classList.add('black');
    } else {
        header.classList.remove('scrolled');
        logo.src = "images/logos/dongbang_white_logo.png";
        hamburger.classList.remove('black');
    }
}

// 마우스 오버 이벤트 리스너: 마우스가 영역에 들어갈 때 행동
headerGnb.addEventListener('mouseover', (event) => {
    isMouseOver = true;
    if (isDesktop) setSubMenuHeight();
    handleScroll();
});

// 마우스 아웃 이벤트 리스너: 마우스가 영역에서 벗어날 때 행동
headerGnb.addEventListener('mouseout', (event) => {
    isMouseOver = false;
    if (isDesktop && !headerGnb.contains(event.relatedTarget)) resetSubMenuHeight();
    handleScroll();
});

// 스크롤 이벤트 리스너
window.addEventListener('scroll', handleScroll);
handleScroll(); // 페이지 로드 시에도 checkScroll 함수를 실행

// 창 크기 변경 이벤트 리스너: 창의 크기가 변경될 때 및 마우스가 올라가 있을 때.
window.addEventListener('resize', () => {
    isDesktop = window.innerWidth >= 1280;
    isDesktop && isMouseOver ? setSubMenuHeight() : resetSubMenuHeight();
});
