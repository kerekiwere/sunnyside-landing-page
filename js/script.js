/* =============== Parallax Effect =============== */
$(document).ready(function() {
  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    $('.header').css('background-position', 'center bottom ' + (scrollPosition * -0.25) + 'px');
  });
});

/* =============== Hamburger Button =============== */

$('#hamburger').click(function(){
  $('.header__menu').toggleClass('active');
})