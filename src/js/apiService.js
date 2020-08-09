const apiKey = '17819543-d2e6569e2cda79c561de99aea';
const galleryRef = document.querySelector('.gallery');
function fetchImg(input, page) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${input}&page=${page}&per_page=12&key=${apiKey}`,
  ).then(response => response.json());
}

export default fetchImg;
