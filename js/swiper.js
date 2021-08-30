var swiper = new Swiper(".catalogue", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
  
  var swiper = new Swiper(".hotsale", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
  }});
  var swiper = new Swiper(".news", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576:{
        slidesPerView:1,
        spacebetween:10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
  }});
// HAM TIM KIEM
  $('#search').keyup( function(){
    let value=$('#search').val().toLowerCase();
    //alert(value);
    console.log($('.products #cart').length);
    $('.products>div').filter(function(){
        
        let result = $(this).text().toLowerCase().indexOf(value)>-1;
        console.log('result',result);
        $(this).toggle(result);
    })
});