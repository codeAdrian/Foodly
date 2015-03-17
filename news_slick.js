        $(document).ready(function(){
            $('.news_slick').slick({
              dots:true,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 7000,
            });
            
            $('#main_left').click(function () {
            $('#main_center').html('<img src="./news/customer_01.png"></img>&nbsp&nbsp&nbsp&nbsp<img src="./news/customer_02.png"><br/><br/></img><img src="./news/customer_03.png">&nbsp&nbsp&nbsp&nbsp</img><img src="./news/customer_04.png"><br/><br/></img><img src="./news/customer_05.png">&nbsp&nbsp&nbsp&nbsp</img><img src="./news/customer_06.png"></img>');
            $('#main_left').css("background-color","#730000");
            $('#main_right').css("background-color","#874300");
            });
            
            $('#main_right').click(function () {
            $('#main_center').html('<img src="./news/owner_01.png"></img>&nbsp&nbsp&nbsp&nbsp<img src="./news/owner_02.png"><br/><br/></img><img src="./news/owner_03.png">&nbsp&nbsp&nbsp&nbsp</img><img src="./news/customer_03.png"><br/><br/></img><img src="./news/customer_06.png"></img>');
            $('#main_left').css("background-color","#874300");
            $('#main_right').css("background-color","#730000");
            });

        });
