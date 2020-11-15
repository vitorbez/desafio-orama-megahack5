const menu = document.querySelector('.menu');
const btnMenuOpen = document.querySelector('.btnMenu_open');
const btnMenuClose = document.querySelector('.btnMenu_close');

const darkContainer = document.querySelector('main');

btnMenuOpen.addEventListener('click', function() {
    menu.classList.add('menu_open');
    darkContainer.classList.add('dark');
})


darkContainer.addEventListener('click', function() {
    menu.classList.remove('menu_open');
    darkContainer.classList.remove('dark'); 
})
