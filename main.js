const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body 

if (burger && menu ) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('-active');
        menu.classList.toggle('-active');
        body.classList.toggle('-lock');
    })
}

const filter = document.querySelector('.filter');

if (filter) {
    const items = filter.querySelectorAll('.block-filter')

    items.forEach(item => {
        item.addEventListener('click', event => {
            item.querySelector('.block-filter-dropwodn').classList.toggle('--active');
            item.querySelector('.block-filter-icon').classList.toggle('--active');

            if (event.target.classList.contains('block-filter-item')) {
                item.querySelector('.block-filter-value').textContent = event.target.textContent;
            }
        })
    })
}


const popularSlider = new Swiper('.popular_slider', {
    spaceBetween: 20,
    slidesPerView: 2,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.popular_slider-next',
      prevEl: '.popular_slider-prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        }
    }
  });


  const reviewsSlider = new Swiper('.slider-reviews', {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: '.slider-reviews-next',
      prevEl: '.slider-reviews-prev',
    },
    breakpoints: {
    
    }
  });