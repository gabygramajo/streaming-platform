const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
const navbar = document.querySelector('#navbar');
const navbarSectionsContainer = document.querySelector(".navbar-sections-container");
const inputSearch = document.querySelector('#input-search');
const categoryList = document.querySelectorAll('.category-name');
const navbarIcons  = document.querySelectorAll('.navbar-icon');
const categoryIcon  = document.querySelector('.categories-icon');
const userContainerInfo = document.querySelector('.user-container-info');
const categoriesContainer = document.querySelector("#category-list-container");
const categories = document.querySelector(".category-list");
const arrowCategoriesIcon = document.querySelector(".arrow-categories-icon");
const categoryLinks = document.querySelectorAll(".category__link");


toggleNavbarMenu()

hamburgerMenuIcon.addEventListener('click', toggleNavbarMenu);
navbarIcons.forEach(icon => toggleSelectIcon(icon));
categoryLinks.forEach( link => link.addEventListener('click', toggleNavbarMenu));
categoryIcon.addEventListener('click', collapseCategoryList);
categoriesContainer.addEventListener('click', collapseCategories);


function toggleNavbarMenu() {
  navbar.classList.toggle('inactive-navbar');
  navbarSectionsContainer.classList.toggle('inactive-navbar-sections');
  inputSearch.classList.toggle('inactive');
  userContainerInfo.classList.toggle('inactive');
  categoryList.forEach( category => category.classList.toggle('inactive'));
  arrowCategoriesIcon.classList.toggle('inactive');
}


function toggleSelectIcon(icon) {
  icon.addEventListener('click', (el) => {
    const isSerchIcon = el.currentTarget.classList.contains('search-icon');
    if(isSerchIcon) {
      deselectIcon()
      searchIconActive()
      return
    }


    const isSelected = icon.classList.contains('selected-category'); 
    if(!isSelected) {
      deselectIcon()

      icon.classList.toggle('selected-category')
    }
  })
}

function deselectIcon() {
  navbarIcons.forEach( icon => {
    const isSelected = icon.classList.contains('selected-category');

    if(isSelected){
      icon.classList.toggle('selected-category');
      return
    }

  });
}
function searchIconActive() {
  const isNavbarInactive = navbar.classList.contains('inactive-navbar');
  if (isNavbarInactive) {
    toggleNavbarMenu();
    inputSearch.value = '';
    inputSearch.focus();
  }
}

function collapseCategoryList () {
  const isNavbarInactive = navbar.classList.contains('inactive-navbar');
  if (isNavbarInactive) {
    toggleNavbarMenu();
  }
}

function collapseCategories() {
  categories.classList.toggle('inactive');
  arrowCategoriesIcon.classList.toggle('rotate90');
}
