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

const badgeEl = document.querySelector('header .badges')

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY)
  if (window.scrollY > 500) {
    // 배너 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none',
    });
  } else {
    // 배너 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block',
    });
  };
}, 300));
// _.throttle()