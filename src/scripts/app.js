$('.banner-slider').slick({
    dots: true,
    prevArrow:false,
    nextArrow:false
});

$('.work__img').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow:`<button type='button' class='slick-prev pull-left'><img src="./src/img/work/arrow-left.png"></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><img src="./src/img/work/arrow-right.png"></button>`,
  });