const menuWrapper = document.querySelector(".menu-wrapper");
const navbarToggler = document.querySelector(".navbar-toggler");
const closeBtn = document.querySelector(".close-btn");

navbarToggler.addEventListener("click", () => {
  menuWrapper.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  menuWrapper.classList.remove("show");
});
