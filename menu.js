const iconMenu = document.querySelector(".striped-menu");
const menuDesplegable = document.querySelector(".container-nav");
const iconClosed = document.querySelector(".button-closed");
const iconArrowDown = document.querySelector("#down");
const iconArrowTwo = document.querySelector("#downTwo");

const titleMenu = document.querySelector(".subtitle1");
const titleMenuTwo = document.querySelector(".subtitle2");

const listMenu = document.querySelector(".list-menu");
const listMenuTwo = document.querySelector(".list-menu-two");

const listMenuDesktop = document.querySelector(".list-menu-desktop");

const listMenuTwoDesktop = document.querySelector(".list-menu-two-desktop");
const containerArrow2 = document.querySelector(".container-arrow2");
const containerArrow = document.querySelector(".container-arrow");
const arrowDownDesktop = document.querySelector("#down-desktop");
const arrowDownDesktopTwo = document.querySelector("#down-desktop2");

iconClosed.addEventListener("click", closedMenu);
iconMenu.addEventListener("click", openMenu);

titleMenu.addEventListener("click", toggleSubMenu);
titleMenu.addEventListener("click", toggleArrowUp);

titleMenuTwo.addEventListener("click", toggleSubMenuTwo);
titleMenuTwo.addEventListener("click", toggleArrowUpTwo);

iconArrowDown.addEventListener("click", toggleArrowUp);
iconArrowTwo.addEventListener("click", toggleArrowUpTwo);
listMenuDesktop.addEventListener("click", toggleSubMenu);

containerArrow.addEventListener("click", toggleSubMenu4);
containerArrow.addEventListener("click", toggleArrowUp);
containerArrow2.addEventListener("click", toggleSubMenu3);
containerArrow2.addEventListener("click", toggleArrowUp);

listMenuTwo.addEventListener("click", toggleSubMenuTwo);
listMenuTwoDesktop.addEventListener("click", toggleSubMenuTwo);

containerArrow.addEventListener("click", toggleArrowUpDesktop);
arrowDownDesktop.addEventListener("click", toggleArrowUpDesktop);

function closedMenu() {
  menuDesplegable.classList.add("inactive");
}

function openMenu() {
  menuDesplegable.classList.remove("inactive");
}

function toggleSubMenu4() {
  listMenuDesktop.classList.toggle("inactive");
}
function toggleSubMenu3() {
  listMenuTwoDesktop.classList.toggle("inactive");
  listMenu.classList.toggle("inactive");
}
function toggleSubMenu() {
  listMenu.classList.toggle("inactive");
  listMenuDesktop.classList.toggle("inactive");
  //listMenuTwoDesktop.classList.toggle("inactive");
}
function toggleSubMenuTwo() {
  listMenuTwo.classList.toggle("inactive");
  /* listMenuTwoDesktop.classList.toggle("inactive"); */
}
let arrowDown = "down";
let arrowDownDesktopValidator = "down";
function toggleArrowUp() {
  let arrow = iconArrowDown;
  if (arrowDown == "down") {
    arrow.src = "./images/icon-arrow-up.svg";
    arrowDown = "up";
  } else {
    arrow.src = "./images/icon-arrow-down.svg";
    arrowDown = "down";
  }
}
function toggleArrowUpDesktop() {
  if (arrowDownDesktopValidator == "down") {
    arrowDownDesktop.src = "./images/icon-arrow-up.svg";
    arrowDownDesktopValidator = "up";
  } else if (arrowDownDesktopValidator == "up") {
    arrowDownDesktop.src = "./images/icon-arrow-down.svg";
    arrowDownDesktopValidator = "down";
  }
}

function toggleArrowUpTwo() {
  let arrow = iconArrowTwo;
  if (arrowDown == "down") {
    arrow.src = "./images/icon-arrow-up.svg";
    arrowDown = "up";
  } else {
    arrow.src = "./images/icon-arrow-down.svg";
    arrowDown = "down";
  }
}
