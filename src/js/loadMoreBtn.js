const buttonRef = document.querySelector('.js-btn');
const labelRef = document.querySelector('.label');
const spinner = document.querySelector('.js-spinner');
const loadMore = {
  enable() {
    buttonRef.disabled = false;
    labelRef.textContent = 'Load more';
    spinner.classList.add('is-hidden');
  },
  disable() {
    buttonRef.disabled = true;
    labelRef.textContent = 'Loading...';
    buttonRef.classList.remove('is-hidden');
    spinner.classList.remove('is-hidden');
  },
  show() {
    buttonRef.classList.remove('is-hidden');
  },
};
export default loadMore;
