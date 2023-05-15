document
    .querySelector("#marketing-filter")
    .addEventListener("change", filterMarketingCards);

document
    .querySelector("#coding-filter")
    .addEventListener("change", filterCodingCards);

document
    .querySelector("#design-filter")
    .addEventListener("change", filterDesignCards);

function filterMarketingCards() {
    hideAllCards();

    if (document.querySelector("#marketing-filter").checked) {
        removeShow();
        document.querySelector(".marketing-filter").classList.add("show");
        document.querySelector("#coding-filter").checked = false;
        document.querySelector("#design-filter").checked = false;
        var cards = document.querySelectorAll(".card-marketing");
        cards.forEach((card) => {
            card.style.display = "block";
        });
    }
    else {
        showAllCards();
        removeShow();
    }
}

function filterCodingCards() {
    hideAllCards();

    if (document.querySelector("#coding-filter").checked) {
        removeShow();
        document.querySelector(".coding-filter").classList.add("show");
        document.querySelector("#marketing-filter").checked = false;
        document.querySelector("#design-filter").checked = false;
        var cards = document.querySelectorAll(".card-coding");
        cards.forEach((card) => {
            card.style.display = "block";
        });
    }
    else {
        showAllCards();
        removeShow();
    }
}

function filterDesignCards() {
    hideAllCards();

    if (document.querySelector("#design-filter").checked) {
        removeShow();
        document.querySelector(".design-filter").classList.add("show");
        document.querySelector("#marketing-filter").checked = false;
        document.querySelector("#coding-filter").checked = false;
        var cards = document.querySelectorAll(".card-design");
        cards.forEach((card) => {
            card.style.display = "block";
        });
    }
    else {
        showAllCards();
        removeShow();
    }
}

function hideAllCards() {
    var allCards = document.querySelectorAll(".card");

    allCards.forEach((card) => {
        card.style.display = "none";
    });
}

function showAllCards() {
    var allCards = document.querySelectorAll(".card");

    allCards.forEach((card) => {
        card.style.display = "block";
    });
}

function removeShow() {
    document.querySelector(".marketing-filter").classList.remove("show");
    document.querySelector(".coding-filter").classList.remove("show");
    document.querySelector(".design-filter").classList.remove("show");
}