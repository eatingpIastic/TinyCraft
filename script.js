$(document).ready(function(){
  // Scroll to features
  $('.explore').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.features-section').offset().top
    }, 800);
  });

  // Fade-in features on scroll
  $(window).on('scroll', function(){
    $('.feature-desc').each(function(){
      if($(this).offset().top < $(window).scrollTop() + $(window).height() - 100){
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });
});
