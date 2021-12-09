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

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index+1)* .7,
    opacity: 1,
  })
});

new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.notice .promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".promotion .swiper-button-next",
    prevEl: ".promotion .swiper-button-prev",
  },
});

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  } else {
    promotionEl.classList.remove('hide')
  }
});