const hamburger = document.querySelector(".navbar__hamburger");
const dropDownMenu = document.querySelector(".navbar__items");
const navbar = document.querySelector(".navbar");
const header = document.getElementsByTagName("header");
const body = document.getElementsByTagName("body");

let navBarOpen = false;

hamburger.addEventListener("click", async function () {
    if (!navBarOpen) {
        hamburger.setAttribute("src", "./images/icon-close.svg");
        body[0].setAttribute("class", "nav-active");
        header[0].appendChild(dropDownMenu);

        await new Promise((resolve) => setTimeout(resolve, 250));
        dropDownMenu.classList.add("active");
    } else {
        dropDownMenu.classList.remove("active");
        hamburger.setAttribute("src", "./images/icon-hamburger.svg");
        await new Promise((resolve) => setTimeout(resolve, 250));

        body[0].removeAttribute("class");
        navbar.appendChild(dropDownMenu);
    }

    navBarOpen = !navBarOpen;
});
