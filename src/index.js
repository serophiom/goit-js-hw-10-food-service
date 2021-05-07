import './sass/main.scss';
import foodCardTpl from './templates/food-cards.hbs';
import menu from './menu.json';
const foodSection = document.querySelector('.js-menu');

const foodCardsMarkup = createFoodCardsMarkup(menu);

foodSection.insertAdjacentHTML('beforeend', foodCardsMarkup);

function createFoodCardsMarkup(menu) {
    return foodCardTpl(menu);
}