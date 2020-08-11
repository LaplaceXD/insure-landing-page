const hamburger = document.querySelector(".navbar__hamburger");
const dropDownMenu = document.querySelector(".navbar__items");

hamburger.addEventListener('click', function() {
    dropDownMenu.classList.add("active");
});