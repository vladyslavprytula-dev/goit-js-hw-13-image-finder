import fetchImg from './apiService';
import renderSearchResult from './renderGallery';
import LoadMore from './loadMoreBtn';
const galleryRef = document.querySelector('.gallery');
const searchForm = document.querySelector('.js-search');
let page = 1;
let inputValue;
function searchFormSubmit(event) {
  event.preventDefault();
  LoadMore.show();
  LoadMore.disable();
  page = 1;
  galleryRef.innerHTML = ' ';
  inputValue = searchForm.firstElementChild.value;
  fetchImg(inputValue, page).then(({ hits }) => {
    renderSearchResult(hits);
    LoadMore.enable();
    page += 1;
  });
}
function loadMore() {
  LoadMore.disable();
  fetchImg(inputValue, page).then(({ hits }) => {
    renderSearchResult(hits);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    LoadMore.enable();
    page += 1;
  });
}
export { searchFormSubmit, loadMore };
