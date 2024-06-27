let smSearchBtn = document.getElementById("sm-search-btn");
let smSearchBtnClose = document.getElementById("sm-search-btn-close");
let smSearch = document.getElementById("sm-search");
let sideMenuLinks = document.querySelectorAll(".side-menu-link");
let sideMenuSubLinkCloseBtns = document.querySelectorAll(".side-menu-sub-link-close-btn");
let smSideMenu = document.getElementById("sm-side-menu");
let smSideMenuClose = document.getElementById("sm-side-menu-close");

smSearchBtn.addEventListener("click", function () {
    smSearch.classList.add("opacity-100");
    smSearch.classList.remove("-z-20");
    smSearch.classList.add("z-20");
});

smSearchBtnClose.addEventListener("click", function () {
    smSearch.classList.remove("opacity-100");
    smSearch.classList.add("-z-20");
    smSearch.classList.remove("z-20");
});

smSideMenu.addEventListener("click", function () {
    document.getElementById("side-menu").classList.add("w-screen");
});

smSideMenuClose.addEventListener("click", function () {
    document.getElementById("side-menu").classList.remove("w-screen");
});

sideMenuLinks.forEach((sideMenuLink) => {
    sideMenuLink.addEventListener("click", function () {
        sideMenuLink.querySelector(".side-menu-sub-link").classList.add("opacity-100");
        sideMenuLink.querySelector(".side-menu-sub-link").classList.remove("-z-10");
        sideMenuLink.querySelector(".side-menu-sub-link").classList.add("p-5");
    });
});

sideMenuSubLinkCloseBtns.forEach((sideMenuSubLinkCloseBtn) => {
    sideMenuSubLinkCloseBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        sideMenuSubLinkCloseBtn.parentElement.classList.remove("opacity-100");
        sideMenuSubLinkCloseBtn.parentElement.classList.add("-z-10");
        sideMenuSubLinkCloseBtn.parentElement.classList.remove("p-5");
    });
});

const swiper = new Swiper(".swiper", {
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("fixed", window.scrollY > 120);
    header.classList.toggle("z-50", window.scrollY > 120);
    header.classList.toggle("inset-x-0", window.scrollY > 120);
    header.classList.toggle("top-0", window.scrollY > 120);
    header.classList.toggle("py-2", window.scrollY > 120);
    header.classList.toggle("relative", window.scrollY < 30);
});

// var trendingswiper = new Swiper('.trending.swiper', {
//     slidesPerView: 4,
//     loop: true,
//     direction: getDirection(),
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     on: {
//         resize: function () {
//             swiper.changeDirection(getDirection());
//         },
//     },
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//     },
// });

// function getDirection() {
//     var windowWidth = window.innerWidth;
//     var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

//     return direction;
// }
