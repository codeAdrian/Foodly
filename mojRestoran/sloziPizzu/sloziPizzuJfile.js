var izracunataCijena = 0;
var bazna_cijena=0;
var broj_kom=1;
var velicina_pizze=1;

// ZASTAVICE
var flag_kulen_c =0, flag_kulen_p = 0;
var flag_sir_c =0, flag_sir_p = 0;
var flag_sir4_c =0, flag_sir4_p = 0;
var flag_sunka_c =0, flag_sunka_p = 0;
var flag_luk_c =0, flag_luk_p = 0;
var flag_gljive_c =0, flag_gljive_p = 0;
var flag_masline_c =0, flag_masline_p = 0;
var flag_kukuruz_c =0, flag_kukuruz_p = 0;
var flag_rajcica =0, flag_sir_rub=0;
var flag_tuna_c =0, flag_tuna_p = 0;
var flag_paprika_c =0, flag_paprika_p = 0;
// ----------------insert new topping
var flag_salata_c=0, flag_salata_p=0;
//-----------------------------------

// CIJENE
var kulen_c=10, kulen_p=5;
var sir_c=7, sir_p=3.5;
var sir4_c=12, sir4_p=6;
var sunka_c=9, sunka_p=4.5;
var luk_c=7, luk_p=3.5;
var gljive_c=8, gljive_p=4;
var masline_c=7, masline_p=3.5;
var kukuruz_c=6, kukuruz_p=3;
var rajcica=8, sir_rub=8;
var tuna_c=7, tuna_p=3.5;
var paprika_c=5, paprika_p=2.5;
// ----------------insert new topping
var salata_c =6, salata_p=3;
//-----------------------------------

setTimeout(function() {
  var checkboxes = new Array(); 
  checkboxes = document.getElementsByTagName('input');
  for (var i=0; i<checkboxes.length; i++){
    if ((checkboxes[i].type == 'checkbox' || checkboxes[i].type == 'radio')&& checkboxes[i].name != 'cbx_peceno'){
      checkboxes[i].checked = false;}}
      ctr=0;
      $("#introScreen").fadeToggle("slow");
      $("#glavnaTablica").fadeToggle("slow");
}, 3200);

function ispisCijene()
{
$('input[name="zaPlatiti"]').val(((bazna_cijena+izracunataCijena*velicina_pizze)*broj_kom).toFixed(2)+" kn");
return ((bazna_cijena+izracunataCijena*velicina_pizze)*broj_kom).toFixed(2);
}

$(window).scroll(function(){
  $(".pomicni_dio").stop().animate({"marginTop": ($(window).scrollTop()) + "px"}, "normal");
  $(".pomicni_dio2").stop().animate({"marginTop": ($(window).scrollTop()) + "px"}, "normal" );
});

$(document).ready(function(){
$('#velicina_pizze_select').on('change', function (e) {
    var odabrano = this.value;	
    if(odabrano=="small") {velicina_pizze=0.7; bazna_cijena=0;}
	else if(odabrano=="medium") {velicina_pizze=1; bazna_cijena=0;}
	else if(odabrano=="large") {velicina_pizze=1.2; bazna_cijena=0;}
	else if(odabrano=="jumbo") {velicina_pizze=1.5; bazna_cijena=0;}
	ispisCijene();
});


  $("#b_tijesto").click(function(){
    $("#tijesto").fadeToggle(0);
  });
    
   $("#b_prilozi").click(function(){
    $("#prilozi").fadeToggle(0);
  });

  $("#inkr").click(function(){
  if(broj_kom<50) broj_kom++;
  $('input[name="broj_pizza"]').val(broj_kom);
  ispisCijene();
  });
  
  $("#dekr").click(function(){
  if(broj_kom>1)broj_kom--;
  $('input[name="broj_pizza"]').val(broj_kom);
  ispisCijene();
  });

});

 $(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).attr("value")=="kulen")
            {
            if($(this).is(':checked')){
    		$(".kulen_grupa").show();  
    		$("#radio_kulen").click();}
			else
			{
			$(".kulen_grupa").hide(); 
			$(".kulen_slike").hide();
    		$('input[name="kulen"]').prop('checked', false);
    		if (flag_kulen_c==1){izracunataCijena-=kulen_c; flag_kulen_c=0;}
    		if (flag_kulen_p==1){izracunataCijena-=kulen_p; flag_kulen_p=0;}
    		}}
    		
    		else if($(this).attr("value")=="sunka")
            {
            if($(this).is(':checked'))
    		{$(".sunka_grupa").show();  
    		$("#radio_sunka").click();}
			else
    		{$(".sunka_grupa").hide();  
    		$(".sunka_slike").hide();
    		$('input[name="sunka"]').prop('checked', false);
    		if (flag_sunka_c==1){izracunataCijena-=sunka_c; flag_sunka_c=0;}
    		if (flag_sunka_p==1){izracunataCijena-=sunka_p; flag_sunka_p=0;}
    		}}
    		
    		else if($(this).attr("value")=="rajcica")
            {
            if($(this).is(':checked')){
    		$(".rajcica_slike").show();  
    		if (flag_rajcica==0){izracunataCijena+=rajcica; flag_rajcica=1;}}
			else
    		{
    		$(".rajcica_slike").hide();
    		if (flag_rajcica==1){izracunataCijena-=rajcica; flag_rajcica=0;}
    		}}
    		
    		else if($(this).attr("value")=="rub")
            {
            if($(this).is(':checked'))
    		{if (flag_sir_rub==0){izracunataCijena+=sir_rub; flag_sir_rub=1;}}
			else
    		{
    		if (flag_sir_rub==1){izracunataCijena-=sir_rub; flag_sir_rub=0;}}
    		}
    		
    		else if($(this).attr("value")=="luk")
            {
            if($(this).is(':checked')){
    		$(".luk_grupa").show();  
    		$("#radio_luk").click();}
			else
    		{$(".luk_grupa").hide();  
    		$(".luk_slike").hide();
    		$('input[name="luk"]').prop('checked', false);
    		if (flag_luk_c==1){izracunataCijena-=luk_c; flag_luk_c=0;}
    		if (flag_luk_p==1){izracunataCijena-=luk_p; flag_luk_p=0;}
    		}}

    		else if($(this).attr("value")=="gljive")
            {
            if($(this).is(':checked')){
    		$(".gljive_grupa").show(); 
    		$("#radio_gljive").click();} 
			else
    		{$(".gljive_grupa").hide();  
    		$(".gljive_slike").hide();
    		$('input[name="gljive"]').prop('checked', false);
    		if (flag_gljive_c==1){izracunataCijena-=gljive_c; flag_gljive_c=0;}
    		if (flag_gljive_p==1){izracunataCijena-=gljive_p; flag_gljive_p=0;}
    		}}

    		else if($(this).attr("value")=="sir")
            {
            if($(this).is(':checked')){
    		$(".sir_grupa").show();
    		$("#radio_sir").click();}
			else
    		{$(".sir_grupa").hide();  
    		$(".sir_slike").hide();
    		$('input[name="sir"]').prop('checked', false);
    		if (flag_sir_c==1){izracunataCijena-=sir_c; flag_sir_c=0;}
    		if (flag_sir_p==1){izracunataCijena-=sir_p; flag_sir_p=0;}
    		}}
    		
    		else if($(this).attr("value")=="sir4")
            {
            if($(this).is(':checked')){
    		$(".sir4_grupa").show();  
    		$("#radio_sir4").click();}
			else
    		{$(".sir4_grupa").hide();  
    		$(".sir4_slike").hide();
    		$('input[name="sir4"]').prop('checked', false);
    		if (flag_sir4_c==1){izracunataCijena-=sir4_c; flag_sir4_c=0;}
    		if (flag_sir4_p==1){izracunataCijena-=sir4_p; flag_sir4_p=0;}
    		}}

    		
    		else if($(this).attr("value")=="masline")
            {
            if($(this).is(':checked')){
    		$(".masline_grupa").show();
    		$("#radio_masline").click();}  
			else
    		{$(".masline_grupa").hide();  
    		$(".masline_slike").hide();
    		$('input[name="masline"]').prop('checked', false);
    		if (flag_masline_c==1){izracunataCijena-=masline_c; flag_masline_c=0;}
    		if (flag_masline_p==1){izracunataCijena-=masline_p; flag_masline_p=0;}
    		}}

    		else if($(this).attr("value")=="kukuruz")
            {
            if($(this).is(':checked')){
    		$(".kukuruz_grupa").show();
    		$("#radio_kukuruz").click();}  
			else
    		{$(".kukuruz_grupa").hide();  
    		$(".kukuruz_slike").hide();
    		$('input[name="kukuruz"]').prop('checked', false);
    		if (flag_kukuruz_c==1){izracunataCijena-=kukuruz_c; flag_kukuruz_c=0;}
    		if (flag_kukuruz_p==1){izracunataCijena-=kukuruz_p; flag_kukuruz_p=0;}
    		}}
    		
    		else if($(this).attr("value")=="tuna")
            {
            if($(this).is(':checked')){
    		$(".tuna_grupa").show();  
    		$("#radio_tuna").click();}
			else
    		{$(".tuna_grupa").hide();  
    		$(".tuna_slike").hide();
    		$('input[name="tuna"]').prop('checked', false);
    		if (flag_tuna_c==1){izracunataCijena-=tuna_c; flag_tuna_c=0;}
    		if (flag_tuna_p==1){izracunataCijena-=tuna_p; flag_tuna_p=0;}
    		}}
    		
    		else if($(this).attr("value")=="paprika")
            {
            if($(this).is(':checked')){
    		$(".paprika_grupa").show();
    		$("#radio_paprika").click();}
			else
    		{$(".paprika_grupa").hide();  
    		$(".paprika_slike").hide();
    		$('input[name="paprika"]').prop('checked', false);
    		if (flag_paprika_c==1){izracunataCijena-=paprika_c; flag_paprika_c=0;}
    		if (flag_paprika_p==1){izracunataCijena-=paprika_p; flag_paprika_p=0;}
    		}}


    		
    		// ----------- Insert new topping ----------- 
    		else if($(this).attr("value")=="salata")
            {
            if($(this).is(':checked')){
    		$(".salata_grupa").show(); 
    		$("#radio_salata").click();} 
			else
    		{$(".salata_grupa").hide();  
    		$(".salata_slike").hide();
    		$('input[name="salata"]').prop('checked', false);
    		if (flag_salata_c==1){izracunataCijena-=salata_c; flag_salata_c=0;}
    		if (flag_salata_p==1){izracunataCijena-=salata_p; flag_salata_p=0;}
    		}}
			// -------------------------------------------

    		ispisCijene();
        });
    });

 $(document).ready(function(){
        $('input[type="radio"]').click(function(){
            if($(this).attr("value")=="kulen_l"){
                $(".kulen_slike").hide();
                $(".kulen_l").show();
                if (flag_kulen_p=="0")
                {if (flag_kulen_c=="1"){izracunataCijena-=kulen_c; flag_kulen_c=0;}
                izracunataCijena+=kulen_p; 
                flag_kulen_p=1;}
            }
            
           else if($(this).attr("value")=="kulen"){
                $(".kulen_slike").hide();
                $(".kulen").show();          
                if (flag_kulen_c==0)
                {if (flag_kulen_p==1){izracunataCijena-=kulen_p; flag_kulen_p=0;}
                izracunataCijena+=kulen_c; 
                flag_kulen_c=1;}
                }
                
          else if($(this).attr("value")=="kulen_d"){
                $(".kulen_slike").hide();
                $(".kulen_d").show();
                if (flag_kulen_p==0)
                {if (flag_kulen_c==1){izracunataCijena-=kulen_c; flag_kulen_c=0;}
                izracunataCijena+=kulen_p; 
                flag_kulen_p=1;}
            }
            
           else if($(this).attr("value")=="sunka_l"){
                $(".sunka_slike").hide();
                $(".sunka_l").show();
                if (flag_sunka_p=="0")
                {if (flag_sunka_c=="1"){izracunataCijena-=sunka_c; flag_sunka_c=0;}
                izracunataCijena+=sunka_p; 
                flag_sunka_p=1;}

            }
            else if($(this).attr("value")=="sunka"){
                $(".sunka_slike").hide();
                $(".sunka").show();
                 if (flag_sunka_c==0)
                {if (flag_sunka_p==1){izracunataCijena-=sunka_p; flag_sunka_p=0;}
                izracunataCijena+=sunka_c; 
                flag_sunka_c=1;}

            }
            else if($(this).attr("value")=="sunka_d"){
                $(".sunka_slike").hide();
                $(".sunka_d").show();
                if (flag_sunka_p=="0")
                {if (flag_sunka_c=="1"){izracunataCijena-=sunka_c; flag_sunka_c=0;}
                izracunataCijena+=sunka_p; 
                flag_sunka_p=1;}
            }
   
           else if($(this).attr("value")=="luk_l"){
                $(".luk_slike").hide();
                $(".luk_l").show();
                if (flag_luk_p=="0")
                {if (flag_luk_c=="1"){izracunataCijena-=luk_c; flag_luk_c=0;}
                izracunataCijena+=luk_p; 
                flag_luk_p=1;}
            }
            
            else if($(this).attr("value")=="luk"){
                $(".luk_slike").hide();
                $(".luk").show();
               	if (flag_luk_c==0)
                {if (flag_luk_p==1){izracunataCijena-=luk_p; flag_luk_p=0;}
                izracunataCijena+=luk_c; 
                flag_luk_c=1;}

            }
            else if($(this).attr("value")=="luk_d"){
                $(".luk_slike").hide();
                $(".luk_d").show();
                 if (flag_luk_p=="0")
                {if (flag_luk_c=="1"){izracunataCijena-=luk_c; flag_luk_c=0;}
                izracunataCijena+=luk_p; 
                flag_luk_p=1;}
            }
            
            else if($(this).attr("value")=="masline_l"){
                $(".masline_slike").hide();
                $(".masline_l").show();
                if (flag_masline_p=="0")
                {if (flag_masline_c=="1"){izracunataCijena-=masline_c; flag_masline_c=0;}
                izracunataCijena+=masline_p; 
                flag_masline_p=1;}

            }
            else if($(this).attr("value")=="masline"){
                $(".masline_slike").hide();
                $(".masline").show();
                 if (flag_masline_c==0)
                {if (flag_masline_p==1){izracunataCijena-=masline_p; flag_masline_p=0;}
                izracunataCijena+=masline_c; 
                flag_masline_c=1;}
            }
            
            else if($(this).attr("value")=="masline_d"){
                $(".masline_slike").hide();
                $(".masline_d").show();
                if (flag_masline_p=="0")
                {if (flag_masline_c=="1"){izracunataCijena-=masline_c; flag_masline_c=0;}
                izracunataCijena+=masline_p; 
                flag_masline_p=1;}
            }

            
           else if($(this).attr("value")=="gljive_l"){
                $(".gljive_slike").hide();
                $(".gljive_l").show();
                 if (flag_gljive_p=="0")
                 {if (flag_gljive_c=="1"){izracunataCijena-=gljive_c; flag_gljive_c=0;}
                izracunataCijena+=gljive_p; 
                flag_gljive_p=1;}
            }
            
            else if($(this).attr("value")=="gljive"){
                $(".gljive_slike").hide();
                $(".gljive").show();
                if (flag_gljive_c==0)
                {if (flag_gljive_p==1){izracunataCijena-=gljive_p; flag_gljive_p=0;}
                izracunataCijena+=gljive_c; 
                flag_gljive_c=1;}

            }
            else if($(this).attr("value")=="gljive_d"){
                $(".gljive_slike").hide();
                $(".gljive_d").show();
                if (flag_gljive_p=="0")
                 {if (flag_gljive_c=="1"){izracunataCijena-=gljive_c; flag_gljive_c=0;}
                izracunataCijena+=gljive_p; 
                flag_gljive_p=1;}
            }
            
           	else if($(this).attr("value")=="sir_l"){
                $(".sir_slike").hide();
                $(".sir_l").show();
                if (flag_sir_p=="0")
                 {if (flag_sir_c=="1"){izracunataCijena-=sir_c; flag_sir_c=0;}
                izracunataCijena+=sir_p; 
                flag_sir_p=1;}

            }
            else if($(this).attr("value")=="sir"){
                $(".sir_slike").hide();
                $(".sir").show();
                 if (flag_sir_c==0)
                {if (flag_sir_p==1){izracunataCijena-=sir_p; flag_sir_p=0;}
                izracunataCijena+=sir_c; 
                flag_sir_c=1;}
            }
            
            else if($(this).attr("value")=="sir_d"){
                $(".sir_slike").hide();
                $(".sir_d").show();
                 if (flag_sir_p=="0")
                 {if (flag_sir_c=="1"){izracunataCijena-=sir_c; flag_sir_c=0;}
                izracunataCijena+=sir_p; flag_sir_p=1;}
            }
            
              else if($(this).attr("value")=="sir4_l"){
                $(".sir4_slike").hide();
                $(".sir4_l").show();
                if (flag_sir4_p=="0")
                 {if (flag_sir4_c=="1"){izracunataCijena-=sir4_c; flag_sir4_c=0;}
                izracunataCijena+=sir4_p; 
                flag_sir4_p=1;}

            }
            else if($(this).attr("value")=="sir4"){
                $(".sir4_slike").hide();
                $(".sir4").show();
                 if (flag_sir4_c==0)
                {if (flag_sir4_p==1){izracunataCijena-=sir4_p; flag_sir4_p=0;}
                izracunataCijena+=sir4_c; 
                flag_sir4_c=1;}
            }
            
            else if($(this).attr("value")=="sir4_d"){
                $(".sir4_slike").hide();
                $(".sir4_d").show();
                 if (flag_sir4_p=="0")
                 {if (flag_sir4_c=="1"){izracunataCijena-=sir4_c; flag_sir4_c=0;}
                izracunataCijena+=sir4_p; 
                flag_sir4_p=1;}
            }
            
          	else if($(this).attr("value")=="kukuruz_l"){
                $(".kukuruz_slike").hide();
                $(".kukuruz_l").show();
                 if (flag_kukuruz_p=="0")
                 {if (flag_kukuruz_c=="1"){izracunataCijena-=kukuruz_c; flag_kukuruz_c=0;}
                izracunataCijena+=kukuruz_p; 
                flag_kukuruz_p=1;}
            }
            
            else if($(this).attr("value")=="kukuruz"){
                $(".kukuruz_slike").hide();
                $(".kukuruz").show();
                if (flag_kukuruz_c==0)
                {if (flag_kukuruz_p==1){izracunataCijena-=kukuruz_p; flag_kukuruz_p=0;}
                izracunataCijena+=kukuruz_c; 
                flag_kukuruz_c=1;}

            }
           else if($(this).attr("value")=="kukuruz_d"){
                $(".kukuruz_slike").hide();
                $(".kukuruz_d").show();
                  if (flag_kukuruz_p=="0")
                 {if (flag_kukuruz_c=="1"){izracunataCijena-=kukuruz_c; flag_kukuruz_c=0;}
                izracunataCijena+=kukuruz_p; 
                flag_kukuruz_p=1;}
            }
            
           
                else if($(this).attr("value")=="tuna_l"){
                $(".tuna_slike").hide();
                $(".tuna_l").show();
                 if (flag_tuna_p=="0")
                 {if (flag_tuna_c=="1"){izracunataCijena-=tuna_c; flag_tuna_c=0;}
                izracunataCijena+=tuna_p; 
                flag_tuna_p=1;}
            }
            
            else if($(this).attr("value")=="tuna"){
                $(".tuna_slike").hide();
                $(".tuna").show();
                if (flag_tuna_c==0)
                {if (flag_tuna_p==1){izracunataCijena-=tuna_p; flag_tuna_p=0;}
                izracunataCijena+=tuna_c; 
                flag_tuna_c=1;}

            }
           else if($(this).attr("value")=="tuna_d"){
                $(".tuna_slike").hide();
                $(".tuna_d").show();
                  if (flag_tuna_p=="0")
                 {if (flag_tuna_c=="1"){izracunataCijena-=tuna_c; flag_tuna_c=0;}
                izracunataCijena+=tuna_p; 
                flag_tuna_p=1;}
            }
            
             else if($(this).attr("value")=="paprika_l"){
                $(".paprika_slike").hide();
                $(".paprika_l").show();
                 if (flag_paprika_p=="0")
                 {if (flag_paprika_c=="1"){izracunataCijena-=paprika_c; flag_paprika_c=0;}
                izracunataCijena+=paprika_p; 
                flag_paprika_p=1;}
            }
            
            else if($(this).attr("value")=="paprika"){
                $(".paprika_slike").hide();
                $(".paprika").show();
                if (flag_paprika_c==0)
                {if (flag_paprika_p==1){izracunataCijena-=paprika_p; flag_paprika_p=0;}
                izracunataCijena+=paprika_c; 
                flag_paprika_c=1;}

            }
           else if($(this).attr("value")=="paprika_d"){
                $(".paprika_slike").hide();
                $(".paprika_d").show();
                  if (flag_paprika_p=="0")
                 {if (flag_paprika_c=="1"){izracunataCijena-=paprika_c; flag_paprika_c=0;}
                izracunataCijena+=paprika_p; 
                flag_paprika_p=1;}
            }

		// ------------------ Insert new topping -------------------
           else if($(this).attr("value")=="salata_l"){
                $(".salata_slike").hide();
                $(".salata_l").show();
                 if (flag_salata_p=="0")
                 {if (flag_salata_c=="1"){izracunataCijena-=salata_c; flag_salata_c=0;}
                izracunataCijena+=salata_p; 
                flag_salata_p=1;}
            }
            
            else if($(this).attr("value")=="salata"){
                $(".salata_slike").hide();
                $(".salata").show();
                if (flag_salata_c==0)
                {if (flag_salata_p==1){izracunataCijena-=salata_p; flag_salata_p=0;}
                izracunataCijena+=salata_c; 
                flag_salata_c=1;}

            }
           else if($(this).attr("value")=="salata_d"){
                $(".salata_slike").hide();
                $(".salata_d").show();
                  if (flag_salata_p=="0")
                 {if (flag_salata_c=="1"){izracunataCijena-=salata_c; flag_salata_c=0;}
                izracunataCijena+=salata_p; 
                flag_salata_p=1;}
            }
            // -------------------------------------------------------
            
          ispisCijene();

        });
    });
    
function clickBuy(item, itemCode, price, qty,size) {
	if(typeof(Storage) !== "undefined") {
	if (localStorage.foodly_itemsCart) {localStorage.foodly_itemsCart=Number(localStorage.foodly_itemsCart)+qty;}
	else {localStorage.foodly_itemsCart=qty;}
	 
// ----- NEW ITEM IN CART
 	if (localStorage.getItem("foodly_itemNo01") === null) {localStorage.foodly_itemNo01=item; localStorage.foodly_itemCodeNo01=itemCode; localStorage.foodly_itemQuantityNo01=qty; localStorage.foodly_itemPriceNo01=price; alert("Pizza added to the cart! This window will now close."); localStorage.foodly_itemSizeNo01=size; window.close();}
 	else if (localStorage.getItem("foodly_itemNo02") === null) {localStorage.foodly_itemNo02=item; localStorage.foodly_itemCodeNo02=itemCode; localStorage.foodly_itemQuantityNo02=qty;localStorage.foodly_itemPriceNo02=price; alert("Pizza added to the cart! This window will now close."); localStorage.foodly_itemSizeNo02=size; window.close();}
	else if (localStorage.getItem("foodly_itemNo03") === null) {localStorage.foodly_itemNo03=item; localStorage.foodly_itemCodeNo03=itemCode; localStorage.foodly_itemQuantityNo03=qty;localStorage.foodly_itemPriceNo03=price; alert("Pizza added to the cart! This window will now close."); localStorage.foodly_itemSizeNo03=size; window.close();}
	else if (localStorage.getItem("foodly_itemNo04") === null) {localStorage.foodly_itemNo04=item; localStorage.foodly_itemCodeNo04=itemCode; localStorage.foodly_itemQuantityNo04=qty;localStorage.foodly_itemPriceNo04=price; alert("Pizza added to the cart! This window will now close."); localStorage.foodly_itemSizeNo04=size; window.close();}
 	else if (localStorage.getItem("foodly_itemNo05") === null) {localStorage.foodly_itemNo05=item; localStorage.foodly_itemCodeNo05=itemCode; localStorage.foodly_itemQuantityNo05=qty;localStorage.foodly_itemPriceNo05=price; alert("Pizza added to the cart! This window will now close."); localStorage.foodly_itemSizeNo05=size; window.close();}
	else if (localStorage.getItem("foodly_itemNo06") === null) {localStorage.foodly_itemNo06=item; localStorage.foodly_itemCodeNo06=itemCode; localStorage.foodly_itemQuantityNo06=qty;localStorage.foodly_itemPriceNo06=price; alert("Pizza added to the cart! This window will now close."); localStorage.foodly_itemSizeNo06=size; window.close();}
 	else if (localStorage.getItem("foodly_itemNo07") === null) {localStorage.foodly_itemNo07=item; localStorage.foodly_itemCodeNo07=itemCode; localStorage.foodly_itemQuantityNo07=qty;localStorage.foodly_itemPriceNo07=price; alert("Pizza added to the cart! This window will now close."); localStorage.foodly_itemSizeNo07=size; window.close();}
	else if (localStorage.getItem("foodly_itemNo08") === null) {localStorage.foodly_itemNo08=item; localStorage.foodly_itemCodeNo08=itemCode; localStorage.foodly_itemQuantityNo08=qty;localStorage.foodly_itemPriceNo08=price; alert("Pizza added to the cart! This window will now close."); localStorage.foodly_itemSizeNo08=size; window.close();}
 	else if (localStorage.getItem("foodly_itemNo09") === null) {localStorage.foodly_itemNo09=item; localStorage.foodly_itemCodeNo09=itemCode; localStorage.foodly_itemQuantityNo09=qty;localStorage.foodly_itemPriceNo09=price; alert("Pizza added to the cart! This window will now close."); localStorage.foodly_itemSizeNo09=size; window.close();}
	else if (localStorage.getItem("foodly_itemNo10") === null) {localStorage.foodly_itemNo10=item; localStorage.foodly_itemCodeNo10=itemCode; localStorage.foodly_itemQuantityNo10=qty;localStorage.foodly_itemPriceNo10=price; alert("Pizza added to the cart! This window will now close."); localStorage.foodly_itemSizeNo10=size;window.close();}

// ----- MAXIMUM REACHED	
 	else {
 	localStorage.foodly_itemsCart=Number(localStorage.foodly_itemsCart)-1;
 	alert("You can order max 10 different products at the time!")
 	};
 	
// ----- CALCULATE PRICE
localStorage.foodly_finalPrice = Number(localStorage.foodly_itemQuantityNo01*localStorage.foodly_itemPriceNo01+localStorage.foodly_itemQuantityNo02*localStorage.foodly_itemPriceNo02+localStorage.foodly_itemQuantityNo03*localStorage.foodly_itemPriceNo03+localStorage.foodly_itemQuantityNo04*localStorage.foodly_itemPriceNo04+localStorage.foodly_itemQuantityNo05*localStorage.foodly_itemPriceNo05+localStorage.foodly_itemQuantityNo06*localStorage.foodly_itemPriceNo06+localStorage.foodly_itemQuantityNo07*localStorage.foodly_itemPriceNo07+localStorage.foodly_itemQuantityNo08*localStorage.foodly_itemPriceNo08+localStorage.foodly_itemQuantityNo09*localStorage.foodly_itemPriceNo09+localStorage.foodly_itemQuantityNo10*localStorage.foodly_itemPriceNo10);
}
else { alert("Your browser does not support web storage. Please make sure to use the recommended browser!")}
}

function addItemClicked()
{
var itemID = '999';

	if(document.getElementById("radio_sunka_l").checked){itemID+= '1';}
	else if(document.getElementById("radio_sunka").checked){itemID+='3';}
	else if(document.getElementById("radio_sunka_d").checked){itemID+='2';}
	else {itemID+= '0';}
	
	if(document.getElementById("radio_rajcica").checked) {itemID+= '3';}
	else {itemID+='0';}
	
	if(document.getElementById("radio_kulen_l").checked) {itemID+= '1';}
	else if(document.getElementById("radio_kulen").checked){itemID+= '3';}
	else if(document.getElementById("radio_kulen_d").checked){itemID+= '2';}
	else {itemID+= '0';}
		
	if(document.getElementById("radio_luk_l").checked){itemID+= '1';}
	else if(document.getElementById("radio_luk").checked){itemID+= '3';}
	else if(document.getElementById("radio_luk_d").checked){itemID+= '2';}
	else {itemID+= '0';}
	
	if(document.getElementById("radio_gljive_l").checked){itemID+= '1';}
	else if(document.getElementById("radio_gljive").checked){itemID+= '3';}
	else if(document.getElementById("radio_gljive_d").checked){itemID+= '2';}
	else {itemID+= '0';}
	
	if(document.getElementById("radio_sir_l").checked){itemID+= '1';}
	else if(document.getElementById("radio_sir").checked){itemID+= '3';}
	else if(document.getElementById("radio_sir_d").checked){itemID+= '2';}
	else {itemID+= '0';}
	
	if(document.getElementById("radio_kukuruz_l").checked){itemID+= '1';}
	else if(document.getElementById("radio_kukuruz").checked){itemID+= '3';}
	else if(document.getElementById("radio_kukuruz_d").checked){itemID+= '2';}
	else {itemID+= '0';}
	
	if(document.getElementById("radio_masline_l").checked){itemID+= '1';}
	else if(document.getElementById("radio_masline").checked){itemID+= '3';}
	else if(document.getElementById("radio_masline_d").checked){itemID+= '2';}
	else {itemID+= '0';}
	
	if(document.getElementById("cbx_korica_t").checked) {itemID+= '1';}
	else {itemID+='0';}
	
	if(document.getElementById("cbx_rub").checked) {itemID+= '1';}
	else {itemID+='0';}
	
	if(document.getElementById("cbx_peceno_vise").checked){itemID+= '2';}
	else if(document.getElementById("cbx_peceno_normalno").checked){itemID+='0';}
	else {itemID+='1';}
	
	if(document.getElementById("radio_sir4_l").checked){itemID+= '1';}
	else if (document.getElementById("radio_sir4").checked){itemID+= '3';}
	else if(document.getElementById("radio_sir4_d").checked){itemID+= '2';}
	else {itemID+= '0';}
	
	if(document.getElementById("radio_tuna_l").checked){itemID+= '1';}
	else if(document.getElementById("radio_tuna").checked){itemID+= '3';}
	else if(document.getElementById("radio_tuna_d").checked){itemID+= '2';}
	else {itemID+= '0';}
	
	if(document.getElementById("radio_paprika_l").checked){itemID+= '1';}
	else if(document.getElementById("radio_paprika").checked){itemID+= '3';}
	else if(document.getElementById("radio_paprika_d").checked){itemID+= '2';}
	else {itemID+= '0';}
	// -------------------- insert new topping --------------------
	if(document.getElementById("radio_salata_l").checked){itemID+= '1';}
	else if(document.getElementById("radio_salata").checked){itemID+= '3';}
	else if(document.getElementById("radio_salata_d").checked){itemID+= '2';}
	else {itemID+= '0';}
	// ------------------------------------------------------------

	
	clickBuy("Custom Pizza",itemID,	ispisCijene(),broj_kom,localStorage.foodly_itemSize);
	location.reload();
}