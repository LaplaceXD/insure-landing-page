const hamburger = document.querySelector(".navbar__hamburger");
const dropDownMenu = document.querySelector(".navbar__items");
const navbar = document.querySelector(".navbar");
const header = document.getElementsByTagName("header");
const body = document.getElementsByTagName("body");
const vw = window.innerWidth;

let navBarOpen = false;

hamburger.addEventListener("click", navBarHandler);

async function navBarHandler() {
    if (!navBarOpen) {
        openNavBar();
        hamburger.removeEventListener("click", navBarHandler);
        await new Promise((resolve) => setTimeout(resolve, 250));
        hamburger.addEventListener("click", navBarHandler);
    } else {
        closeNavBar();
        hamburger.removeEventListener("click", navBarHandler);
        await new Promise((resolve) => setTimeout(resolve, 250));
        hamburger.addEventListener("click", navBarHandler);
    }

    navBarOpen = !navBarOpen;
}

async function openNavBar() {
    hamburger.setAttribute("src", "./images/icon-close.svg");
    body[0].setAttribute("class", "nav-active");
    header[0].appendChild(dropDownMenu);

    await new Promise((resolve) => setTimeout(resolve, 250));
    dropDownMenu.classList.add("active");
}

async function closeNavBar() {
    dropDownMenu.classList.remove("active");
    hamburger.setAttribute("src", "./images/icon-hamburger.svg");
    await new Promise((resolve) => setTimeout(resolve, 250));

    body[0].removeAttribute("class");
    navbar.appendChild(dropDownMenu);
}

window.addEventListener("resize", function () {
    if (vw >= 1280) {
        dropDownMenu.classList.remove("active");
        hamburger.setAttribute("src", "./images/icon-hamburger.svg");

        body[0].removeAttribute("class");
        navbar.appendChild(dropDownMenu);

        navBarOpen = false;
    }
});
