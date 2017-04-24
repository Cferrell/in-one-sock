$(document).ready(function(){


//test the jquery with a mouseover
  //  $("p").mouseover(function(){
  //      $("p").css("background-color", "yellow");
//    });
//    $("p").mouseout(function(){
  //      $("p").css("background-color", "lightgray");
  //  });
//end of test

//logo animation
$("#logo").mouseenter(function(){
  $("#logo").animate({left: '100px'});
});
$("#logo").mouseleave(function(){
  $("#logo").animate({left: '0px'});
});



//cogs animation
var shoe = document.getElementById('cogs-one');
var shoes = document.getElementById('cogs-two');
var shoeCoeff = -0.65;
var shoesCoeff = 1.15;
window.addEventListener('scroll', function() {
  var pageYOffset = window.pageYOffset || document.documentElement.scrollTop;  var shoeY = pageYOffset * shoeCoeff;  var shoesY = pageYOffset * shoesCoeff;  shoe.style.transform = 'translateY('+shoeY+'px)';  shoe.style.WebkitTransform = 'translateY('+shoeY+'px)';  shoe.style.msTransform = 'translateY('+shoeY+'px)';  shoes.style.transform = 'translateY('+shoesY+'px)';  shoes.style.WebkitTransform = 'translateY('+shoesY+'px)';  shoes.style.msTransform = 'translateY('+shoesY+'px)';});


});
