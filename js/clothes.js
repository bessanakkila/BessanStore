// init Isotope
var $grid = $('.collection-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  /********************************** */
  /*let span = document.querySelector(".up");
  window.onscroll = function () {
     if (this.scrollY >= 1000) {
       span.classList.add("show");
     } else {
       span.classList.remove("show");
     }
  };*/
  let span =document.querySelector(".up");
  window.onscroll = function() {
    if (window.scrollY >= 1000) {
      button.style.display="block";
    }else{
      button.style.display="none";
  
    }
  };
  
  span.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  /******************** */