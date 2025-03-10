AOS.init();
const navBtn = document.querySelector(".nav__btn")
const navmobile = document.querySelector(".nav-mobile")


let navOpen = false;
navBtn.addEventListener("click", function () {
    if (!navOpen) {
        navBtn.classList.add("nav__btn--open")
        navmobile.classList.remove("nav-mobile--open")
        navOpen = true
    } else {
        navBtn.classList.remove("nav__btn--open")
        navmobile.classList.add("nav-mobile--open")
        navOpen = false
    }
})
