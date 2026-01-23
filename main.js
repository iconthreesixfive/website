// main.js or in your script tag
document.querySelectorAll('.swiper').forEach(function(swiperEl) {
  // Skip Product 1, 2, 3, 4, 5, 6 color variant swipers - they have their own initialization in index.html
  if (swiperEl.classList.contains('product-image-swiper-1-blue') ||
      swiperEl.classList.contains('product-image-swiper-1-red') ||
      swiperEl.classList.contains('product-image-swiper-2-red') ||
      swiperEl.classList.contains('product-image-swiper-2-blackwhite') ||
      swiperEl.classList.contains('product-image-swiper-3-pink') ||
      swiperEl.classList.contains('product-image-swiper-3-white') ||
      swiperEl.classList.contains('product-image-swiper-3-black') ||
      swiperEl.classList.contains('product-image-swiper-4-grey') ||
      swiperEl.classList.contains('product-image-swiper-4-black') ||
      swiperEl.classList.contains('product-image-swiper-5-original') ||
      swiperEl.classList.contains('product-image-swiper-5-black') ||
      swiperEl.classList.contains('product-image-swiper-6-original') ||
      swiperEl.classList.contains('product-image-swiper-6-black')) {
    return;
  }
  new Swiper(swiperEl, {
    loop: true,
    navigation: {
      nextEl: swiperEl.querySelector('.swiper-button-next'),
      prevEl: swiperEl.querySelector('.swiper-button-prev'),
    },
    pagination: {
      el: swiperEl.querySelector('.swiper-pagination'),
      clickable: true,
    },
  });
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

// Responsive Navigation
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Mobile dropdown toggles
  const mobileGearButton = document.getElementById('mobile-gear-button');
  const mobileGearMenu = document.getElementById('mobile-gear-menu');
  const mobileAccessoriesButton = document.getElementById('mobile-accessories-button');
  const mobileAccessoriesMenu = document.getElementById('mobile-accessories-menu');

  // Gear dropdown
  if (mobileGearButton && mobileGearMenu) {
    mobileGearButton.addEventListener('click', function() {
      mobileGearMenu.classList.toggle('hidden');
      const svg = mobileGearButton.querySelector('svg');
      svg.classList.toggle('rotate-180');
    });
  }

  // Accessories dropdown
  if (mobileAccessoriesButton && mobileAccessoriesMenu) {
    mobileAccessoriesButton.addEventListener('click', function() {
      mobileAccessoriesMenu.classList.toggle('hidden');
      const svg = mobileAccessoriesButton.querySelector('svg');
      svg.classList.toggle('rotate-180');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (mobileMenu && !mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
});