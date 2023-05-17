const navbar = document.querySelector("nav");
const header = document.querySelector(".hire-page-header");
const form_container = document.querySelector(".form-container");
const footer = document.querySelector("footer");
const type_std_button = document.querySelector("#type-std-btn");
const type_std_labels = document.querySelector(".type-std-labels");
const choose_std_type = document.querySelector(".choose-std-type");
const options = document.querySelectorAll(".option");

window.onload = function () {
    onload_form_container_height();
}

window.addEventListener("resize", () => {
    set_form_container_height();
})

type_std_button.addEventListener('click', function (e) {
    e.preventDefault();
    toggleHiden();
    onload_form_container_height();
})

options.forEach(function (option) {
    option.addEventListener('click', function (e) {
        set_selected_type(e);
        onload_form_container_height();
    })
})

function onload_form_container_height() {
    set_form_container_height();
}

function set_form_container_height() {

    if (window.innerHeight < 768 && window.innerWidth >= 768) {
        header.style.padding = "3rem 3rem"
    }
    else if (window.innerWidth <= 768) {
        header.style.padding = "1.875rem 0rem"
    }
    else {
        header.style.padding = "5.625rem 0rem"
    }

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

function toggleHiden() {
    type_std_labels.classList.toggle("show");
}

function set_selected_type(e) {
    const label_element = document.querySelector(`label[for="${e.target.id}"]`).innerText;
    choose_std_type.innerText = label_element;
    toggleHiden();
}