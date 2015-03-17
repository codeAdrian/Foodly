$(window).scroll(function(){
  $(".pomicni_dio").stop().animate({"marginTop": -118 + ($(window).scrollTop()) + "px"}, "normal");
});

function productHover(product)
{
$(product).children(".product_card_description").toggle();
$(product).children("div").children("img").toggle();
}

