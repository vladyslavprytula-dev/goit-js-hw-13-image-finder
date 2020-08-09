import './styles.css';
import { searchFormSubmit, loadMore } from './js/functionForListeners.js';
const searchForm = document.querySelector('.js-search');
const loadMoreBtn = document.querySelector('.js-btn');

searchForm.addEventListener('submit', searchFormSubmit);

loadMoreBtn.addEventListener('click', loadMore);
