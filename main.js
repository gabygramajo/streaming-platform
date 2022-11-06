const desktopLayouts = document.querySelectorAll(".desktop-layout");
const itemsNavbarContainers = document.querySelectorAll(".items-navbar-container");
const categoryNames = document.querySelectorAll(".category-name");
const inputSearch = document.querySelector("#input-search");
const userContainerInfo = document.querySelector(".user-container-info");
const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");


inputSearch.classList.add('inactive');
userContainerInfo.classList.add('inactive');
categoryNames.forEach( categoryName => categoryName.classList.add('inactive') );

hamburgerMenuIcon.addEventListener('click', toggleNavbar);

function toggleNavbar() {
  inputSearch.classList.toggle('inactive');
  userContainerInfo.classList.toggle('inactive');

  classListToggle(itemsNavbarContainers, 'inactive-mobile');
  classListToggle(desktopLayouts, 'desktop-layout');
  classListToggle(categoryNames, 'inactive');
}
function classListToggle( nodeList, className) {
  nodeList.forEach( 
    node => node.classList.toggle(className) 
    );
}