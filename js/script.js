window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener('load', function(){
  new Glider(document.querySelector('.carousel__list'), {
      slidesToShow: 2,
      slidesToScroll: 1,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: '.carousel__previuos',
        next: '.carousel__next'
      }
    });
});