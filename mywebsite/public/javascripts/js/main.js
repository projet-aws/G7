$('document').ready(function () {
    $(window).on("scroll", function() {
     if($(window).scrollTop() > 80) {
         $(".navigation-menu").addClass("nav-active");
     } else {
   $(".navigation-menu").removeClass("nav-active");
     }
   }); 
   $('.burger-menu').on('click', function(){
     $('.user-nav').addClass('user-nav-active');
     $('.overlay').addClass('overlay-active');
   });
   $('.user-nav .fa-times').on('click', function() {
     $('.user-nav').removeClass('user-nav-active');
     $('.overlay').removeClass('overlay-active');
   });
   $('.nav-cart').on('click', function(){
     $('.cart-container').addClass('cart-open');
     $('.overlay').addClass('overlay-active');
   });
   $('.cart-close-botton').on('click', function() {
     $('.cart-container').removeClass('cart-open');
     $('.overlay').removeClass('overlay-active');
   });
   $('.user-drop-down').on('click', function() {
     $('.user-container').toggleClass('dropdown-active')
   });
   $('.search-input').on('click', function() {
     $('.search-box').addClass('search-active');
   });

  $('#shop-dropdown').on('click', function () {                               // Shop Drop-down
    $('#shop-dropdown .dropdown').toggleClass('dropdown-active');
    $('#shop-dropdown .fa-plus').toggleClass('dropdown-active2');
  });


  $("header .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: true,
    singleItem:true,
  });
  

  $(".product-card .owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: true,
    singleItem:true,
  });

  /* tool tips */
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  /* end tool tips*/
  $('.lock-icn').on('click', function() {
    $('.lock-icn').css("border-color", "#FF4545");
    $('.fa-lock').addClass('icn-active');

  })
  $('.mail-icn').on('click', function() {
    $('.fa-envelope').addClass('icn-active');
    $('.mail-icn').css("border-color", "#FF4545");
  })
  $('.product-thumbnail .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoWidth:false,
    nav:true,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})
$('.owl-carousel a').on('click', function(e){
  e.preventDefault();
  $('.imgBox img').attr("src", $(this).attr("href"));
})
$("#myModal").appendTo("body");


$('#myButton').click(function() {
    
    $('#myModal').modal();
    
});
/*load card */
/*Store  filter button */
$('.store-filter-btn').on('click', function () {
  $('.store-filter-category').toggleClass('store-filter-category-active');
  $('.store-filter-btn').toggleClass('store-filter-btn-active');
})
$('#storeTabs a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show');
})

$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})

  $('.banner-filter a').click(function() {
      $('.banner-filter a').removeClass("btn-active");
      $(this).addClass("btn-active");
  });
  /*Magnific pop-up */
  $('.image-link').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
  
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it
  
      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
  
      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  
  });

});