$('.banner-slider').slick({
    dots: true,
    prevArrow:false,
    nextArrow:false,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.work__img').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow:`<button type='button' class='slick-prev pull-left'><img src="./src/img/work/arrow-left.png"></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><img src="./src/img/work/arrow-right.png"></button>`,
  });

  const classToogle = document.querySelector(".menu__toggle");
  const classMenu = document.querySelector(".menu");
  const classShow = "show";
  const classOpen = "open";
  const classSubnav = document.querySelector(".subnav");
  classToogle.addEventListener("click", function(){
    classMenu.classList.toggle(classShow);
    classToogle.classList.toggle(classOpen);
  });

  window.addEventListener('click', function(e){
    if (!classMenu.contains(e.target) && !e.target.matches(".menu__toggle")){
        classMenu.classList.remove(classShow);
        classToogle.classList.remove(classOpen);
    }
  });

  const menuItems = document.querySelectorAll(".menu-link");
  for (var i = 0; i < menuItems.length;i++){
    const menuItem = menuItems[i];
    menuItem.onclick = function(event){
      const isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
      if(isParentMenu){
        event.preventDefault();
      }else {
        classToogle.classList.remove(classOpen);
        classMenu.classList.remove(classShow);
        
      }
    }
  }
