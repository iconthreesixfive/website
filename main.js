// General Swiper initialization
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// Hero banner swiper
new Swiper('.hero-swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
  },
});

// Product carousels
const productSwipers = document.querySelectorAll('.product-swiper');
productSwipers.forEach(swiperEl => {
  new Swiper(swiperEl, {
    slidesPerView: 1.2,
    spaceBetween: 15,
    navigation: {
      nextEl: swiperEl.querySelector('.swiper-button-next'),
      prevEl: swiperEl.querySelector('.swiper-button-prev'),
    },
    breakpoints: {
      640: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-menu');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('active');
    });
  }
});
