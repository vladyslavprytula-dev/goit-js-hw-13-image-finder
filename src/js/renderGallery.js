import galleryCard from '../templates/galleryCard.hbs';
const galleryRef = document.querySelector('.gallery');
function renderSearchResult(hits) {
  galleryRef.insertAdjacentHTML('beforeend', galleryCard(hits));
}
export default renderSearchResult;
