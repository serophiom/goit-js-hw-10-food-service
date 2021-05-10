import './sass/main.scss';
import foodCardTpl from './templates/food-cards.hbs';
import menu from './menu.json';
const Theme = {
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
      };
const foodSection = document.querySelector('.js-menu');
const checkBoxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body'); 
const foodCardsMarkup = createFoodCardsMarkup(menu);

foodSection.insertAdjacentHTML('beforeend', foodCardsMarkup);

checkedCurrentTheme ();

checkBoxRef.addEventListener('change', changeMainTheme);

function createFoodCardsMarkup(menu) {
    return foodCardTpl(menu
}

function changeMainTheme () {
    if (checkBoxRef.checked) {
        bodyRef.className = Theme.DARK;
        localStorage.setItem('current-theme', `${Theme.DARK}`);
        return;
    }
    bodyRef.className = Theme.LIGHT;
    localStorage.setItem('current-theme', `${Theme.LIGHT}`);
}

function checkedCurrentTheme () {
    const themeStorage = localStorage.getItem('current-theme');
    if (themeStorage === `${Theme.DARK}`) {
        bodyRef.className = Theme.DARK;
        checkBoxRef.checked = true;
    }
}