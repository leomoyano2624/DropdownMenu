const iconMenu = document.querySelector(".striped-menu")
const menuDesplegable = document.querySelector(".container-nav")
const iconClosed = document.querySelector(".button-closed")
const iconArrowUp = document.querySelector(".icon-arrow-up")
const titleMenu = document.querySelector(".subtitle")
const titleMenuTwo = document.querySelector(".subtitle2")
const listMenu = document.querySelector(".list-menu")
const listMenuTwo = document.querySelector(".list-menu-two")


iconClosed.addEventListener("click", closedMenu)
iconMenu.addEventListener("click", openMenu)
titleMenu.addEventListener("click", toggleSubMenu)
titleMenuTwo.addEventListener("click", toggleSubMenuTwo)



function closedMenu() {
  menuDesplegable.classList.add("inactive")
}
function openMenu() {
  menuDesplegable.classList.remove("inactive")
}
function toggleSubMenu() {
  listMenu.classList.toggle("inactive")
}
function toggleSubMenuTwo() {
  listMenuTwo.classList.toggle("inactive")
}
