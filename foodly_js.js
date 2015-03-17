 $(document).ready(function(){
  
 // ---------------------------------------- CROATIA ----------------------------------------
        $('input[id="country_croatia"]').click(function(){
        $(".city_restaurants").hide();
        $(".group_country").hide();
        $("#city_group_croatia").show(); 
        $('#city_group_croatia').find("input:radio:checked").prop('checked',false);
        });
        
        $('input[id="city_osijek"]').click(function(){
        $(".city_restaurants").hide();
        $("#group_osijek").show(); 
        });
        
        $('input[id="city_zagreb"]').click(function(){
        $(".city_restaurants").hide();
        $("#group_zagreb").show(); 
        });
 // ---------------------------------------- END CROATIA ----------------------------------------
     

 // ---------------------------------------- COUNTRY 2 ----------------------------------------
        $('input[id="country_country2"]').click(function(){
        $(".city_restaurants").hide();
        $(".group_country").hide();
        $("#city_group_country2").show(); 
        $('#city_group_country2').find("input:radio:checked").prop('checked',false);
        });
        
        $('input[id="city_city1"]').click(function(){
        $(".city_restaurants").hide();
        $("#group_city1").show(); 
        });
        
        $('input[id="city_city2"]').click(function(){
        $(".city_restaurants").hide();
        $("#group_city2").show(); 
        });
 // ---------------------------------------- END COUNTRY 2 ----------------------------------------
 
 $('input[id="country_croatia"]').trigger("click");
 //$('input[id="city_osijek"]').trigger("click");
           
});


 // ---------------------------------------- DOCUMENT EFFECTS ----------------------------------------


$(document).ready(
    function(){
        $("#helpMeOrder").click(function () {
            $(".description").toggle("fast");
            $("#helpMeOrder span").toggle("fast");
        });
        
           $("#three_columns_1").click(function () {
            $(".plan_description_group").hide();
            $("#plan_description_1").show();
        });
        
             $("#three_columns_2").click(function () {
            $(".plan_description_group").hide();
            $("#plan_description_2").show();
        });

           $("#three_columns_3").click(function () {
            $(".plan_description_group").hide();
            $("#plan_description_3").show();
        });


  });