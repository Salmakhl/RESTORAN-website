var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints :{
      0: {
        slidesPerView:1 ,
      },
      520: {
        slidesPerView:2 ,
      },
      950: {
        slidesPerView:3 ,
      }
    }
  });