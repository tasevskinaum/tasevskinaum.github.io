const navbar = document.querySelector("nav");
const footer = document.querySelector("footer");
const header = document.querySelector(".hire-page-header");
const form_container = document.querySelector(".form-container");
const type_std_labels = document.querySelector(".type-std-labels");

window.onload = function () {
    onload_form_container_height();
}

window.addEventListener("resize", () => {
    set_form_container_height();
})


function onload_form_container_height() {
    set_form_container_height();
}

function set_form_container_height() {
    var navbar_height = navbar.offsetHeight;
    var header_height = header.offsetHeight;
    var footer_height = footer.offsetHeight;
    var type_std_labels_height = type_std_labels.offsetHeight;
    var view_height = window.innerHeight;

    var form_height = (view_height)
        - (parseInt(navbar_height)
            + parseInt(header_height)
            + parseInt(footer_height))
        + parseInt(type_std_labels_height);

    form_container.style.minHeight = (form_height + "px");
}

