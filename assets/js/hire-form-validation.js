const hire_std_form = document.querySelector(".hire-std-form");
const full_name_input = document.getElementById("full-name");
const company_name_input = document.getElementById("company-name");
const company_email_input = document.getElementById("company-email");
const company_phone_input = document.getElementById("company-phone");
const type_std_input = document.getElementById("type-std-btn");
const student_type_options = document.querySelectorAll(".option");

hire_std_form.addEventListener('submit', (e) => {
    full_name_validate(e);
    company_name_validate(e);
    company_email_validate(e);
    company_phone_validate(e);
    student_type_validate(e);
})

full_name_input.addEventListener('input', (full_name_validate));
company_name_input.addEventListener('input', (company_name_validate))
company_email_input.addEventListener('input', (company_email_validate));
company_phone_input.addEventListener('input', (company_phone_validate));

function full_name_validate(e) {
    var full_name_value = full_name_input.value.trim();

    if (full_name_value === '') {
        set_error_msg(full_name_input, "Полето е задолжително");
        e.preventDefault();

    }
    else if (!is_full_name(full_name_value)) {
        set_error_msg(full_name_input, "Внесете валидно име и презиме");
        e.preventDefault();

    }
    else {
        set_correct_msg(full_name_input);
    }
}

function company_name_validate(e) {
    var company_name_value = company_name_input.value.trim();

    if (company_name_value === '') {
        set_error_msg(company_name_input, "Полето е задолжително");
        e.preventDefault();

    }
    else if (!is_company_name(company_name_value) || company_name_value.length < 3) {
        set_error_msg(company_name_input, "Полето треба да содржи само букви и минимум 3 карактери");
        e.preventDefault();

    }
    else {
        set_correct_msg(company_name_input);
    }
}

function company_email_validate(e) {
    var company_email_value = company_email_input.value.trim();

    if (company_email_value === '') {
        set_error_msg(company_email_input, "Полето е задолжително");
        e.preventDefault();

    }
    else if (!is_email(company_email_value)) {
        set_error_msg(company_email_input, "Невалидна имејл адреса.");
        e.preventDefault();
    }
    else {
        set_correct_msg(company_email_input);
    }
}

function company_phone_validate(e) {
    var company_phone_value = company_phone_input.value.trim();

    if (company_phone_value === '') {
        set_error_msg(company_phone_input, "Полето е задолжително");
        e.preventDefault();
    }
    else if (!is_phone_number(company_phone_value)) {
        set_error_msg(company_phone_input, "Невалиден телефонски број.");
        e.preventDefault();
    }
    else {
        set_correct_msg(company_phone_input);
    }

}

function student_type_validate(e) {
    if (!valid_student_type()) {
        set_error_msg(type_std_input, "Полето е задолжително");
        e.preventDefault();
    }
    else {
        set_correct_msg(type_std_input);
    }
}


function set_error_msg(input, message) {
    var form_group = input.parentElement;
    var validate_msg = form_group.querySelector(".validate-msg");

    validate_msg.innerText = message;
    validate_msg.style.color = "#d90127";
    input.style.borderColor = "#d90127";
    input.classList.add("invalid");
    input.classList.remove("valid");
}

function set_correct_msg(input) {
    var form_group = input.parentElement;
    var validate_msg = form_group.querySelector(".validate-msg");

    validate_msg.innerText = "";
    input.style.borderColor = "#3bb37d";
    input.classList.add("valid");
    input.classList.remove("invalid");
}

function is_full_name(full_name) {
    return /^([a-zA-Z]{3})+(([',. -][a-zA-Z]{3})?[a-zA-Z]*)*$/g
        .test(full_name);
}

function is_company_name(company_name) {
    return /^[a-zA-Z\s]+$/.test(company_name);
}

function is_email(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function is_phone_number(phone_number) {
    return /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{3}$/.test(phone_number);
}

function valid_student_type() {
    var checked = false;

    student_type_options.forEach(option => {
        if (option.checked) {
            checked = true;
            return;
        }
    })
    return checked;
}