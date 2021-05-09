import './sass/main.scss';
import foodCardTpl from './templates/food-cards.hbs';
import menu from './menu.json';

const foodSection = document.querySelector('.js-menu');
const checkBoxRef = document.querySelector('#theme-switch-toggle');
console.log(checkBoxRef);
const bodyRef = document.querySelector('body');
const Theme = {
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
      };
localStorage.setItem('theme', JSON.stringify(Theme));
const themeStorage = localStorage.getItem('theme');
const parsedThemeStorage = JSON.parse(themeStorage);
console.log(parsedThemeStorage);

console.log(localStorage);
console.log(bodyRef);
console.log(checkBoxRef);

bodyRef.classList.add('light-theme');



const foodCardsMarkup = createFoodCardsMarkup(menu);

checkBoxRef.addEventListener('change', changeMainTheme)

function changeMainTheme () {
    // if (bodyRef.class === '') {
    //     bodyRef.class = '';
    //     bodyRef.classList.add = 'ligth-theme';
    // } 
    // bodyRef.classList.add('dark-theme');
    if (bodyRef.className === 'light-theme') {
        bodyRef.className = '';
        bodyRef.className = 'dark-theme';
        console.log(bodyRef.className);
    } 
    if (bodyRef.className === 'dark-theme') {
        bodyRef.className = '';
        bodyRef.className = 'light-theme';
        console.log(bodyRef.className);
    }
    // console.log(bodyRef);
}

foodSection.insertAdjacentHTML('beforeend', foodCardsMarkup);

function createFoodCardsMarkup(menu) {
    return foodCardTpl(menu);
}