var css_1 = {
  'color':'white',
  'background':'blue',
  'border':'yellow',
}

title_big = $('h1')
title_big.css(css_1)


$('h1').click(function(){
  $(this).text("Indisponível")
})

var input_1 = $('input').eq(0)

input_1.keypress(function(event){
  console.log(event);
  if (event.witch > 5) {
    $('label').eq(0).toggleClass('css_1');
  }
})
