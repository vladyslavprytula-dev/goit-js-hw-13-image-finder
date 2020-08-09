import galleryCard from '../templates/galleryCard.hbs';
const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);
function renderSearchResult(hits) {
  galleryRef.insertAdjacentHTML('beforeend', galleryCard(hits));
}
export default renderSearchResult;
