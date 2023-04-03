function seeMore() {

    document.getElementById("seeAll").style.display = "none";
    document.getElementById("seeLess").style.display = "flex";
  
    document.getElementById("seeMore").style.display = "flex";
  
  }
  function seeLess() {
    document.getElementById("seeAll").style.display = "flex";
    document.getElementById("seeLess").style.display = "none";
  
    document.getElementById("seeMore").style.display = "none";
  }

$(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay:true,
autoplaySpeed:4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:'.slider-btn2 .prev2',
nextArrow:'.slider-btn2 .next2',
  });