$(document) .ready(function() { 


  for (i = 0; i < 100; i++) { 
    $("body").append( "<div class='element'></div>" );
  }
  
  //mouse interaction
  $('.element').mouseover(function(){
    $(this).css('background-color','black');
  });
  $('.element').mouseout(function(){
    $(this).css('background-color','#ff3151');
  });
});