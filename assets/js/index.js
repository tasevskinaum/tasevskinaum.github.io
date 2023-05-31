const body = document.querySelector("body");
const header = document.querySelector("header");
const navbar = document.querySelector("nav.navbar");
const navbar_toggler = document.querySelector(".navbar-toggler");
const menu_wrapper = document.querySelector(".navbar .menu-wrapper");

window.onload = function () {
    set_menu_wrapper_top_position();
    set_body_top_position();
    set_header_height();
}

window.addEventListener("resize", () => {
    set_menu_wrapper_top_position();
    set_body_top_position();
    set_header_height();
})

navbar_toggler.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menu_wrapper.classList.toggle("active");
    navbar_toggler.classList.toggle("active");
})

function set_menu_wrapper_top_position() {
    menu_wrapper.style.top = navbar.offsetHeight + "px";
}

function set_body_top_position() {
    body.style.paddingTop = navbar.offsetHeight + "px";
}

function set_header_height() {
    header.style.height = window.innerHeight - navbar.offsetHeight + "px";
}