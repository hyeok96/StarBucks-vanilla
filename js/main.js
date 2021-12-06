const searchEl = document.querySelector('.search');
const inputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  inputEl.focus()
});

inputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  inputEl.setAttribute('placeholder', '통합검색');
});

inputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  inputEl.setAttribute('placeholder', '');
});