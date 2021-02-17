//MixitUp plugin

var mixer = mixitup('.grid-portfolio-container');

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('hero', 'assets/particles.json', function() {
    console.log('callback - hero config loaded');
  });

// Scrollify 
$(function() {
  $.scrollify({
    section : ".example-classname",
    updateHash: false,
    setHeights: false,
  });
});;
 

//Menu oper

function openMenu() {
  document.getElementById("nav-bar").style.height= "100vh";
}


// Menu close

function closeMenu() {
  document.getElementById("nav-bar").style.height="0"
}

// Smooth scroll

$(function(){
  $('.menu_items a, .scroll-down a').on('click', function(){
    $('html, body').animate({
      scrollTop: $($.attr(this,'href')).offset().top
    }, 1000);
    return false;
  });
});
