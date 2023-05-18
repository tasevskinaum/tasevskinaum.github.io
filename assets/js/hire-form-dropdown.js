const options = document.querySelectorAll(".option");
const type_std_button = document.querySelector("#type-std-btn");
const choose_std_type = document.querySelector(".choose-std-type");

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

function toggleHiden() {
    type_std_labels.classList.toggle("show");
}

function set_selected_type(e) {
    const label_element = document.querySelector(`label[for="${e.target.id}"]`).innerText;
    choose_std_type.innerText = label_element;
    toggleHiden();
}