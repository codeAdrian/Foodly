var izracunataCijena = 0;
var bazna_cijena=0;
var broj_kom=1;
var velicina_pizze=1;

// ZASTAVICE
var flag_rajcica =0; var flag_pljeskavica=0;
var flag_vege =0;var flag_sir=0;
var flag_jaje =0;var flag_krastavci=0;
var flag_luk =0;

// ----------------insert new topping
var flag_salata=0;
//-----------------------------------

// CIJENE
// ----------------insert new topping
var rajcica=2, pljeskavica=3;
var sir=2, vege=3;
var jaje=2.5, krastavci=2.50;
var luk=1.5, salata=2.5;
//-----------------------------------

setTimeout(function() {
  var checkboxes = new Array(); 
  checkboxes = document.getElementsByTagName('input');
  for (var i=0; i<checkboxes.length; i++){
    if ((checkboxes[i].type == 'checkbox' || checkboxes[i].type == 'radio')){
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
	ispisCijene();
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
    		if($(this).attr("value")=="rajcica")
            {
            if($(this).is(':checked')){
    		$(".rajcica_slike").show();  
    		if (flag_rajcica==0){izracunataCijena+=rajcica; flag_rajcica=1;}}
			else
    		{
    		$(".rajcica_slike").hide();
    		if (flag_rajcica==1){izracunataCijena-=rajcica; flag_rajcica=0;}
    		}}
    		
    		
    		else if($(this).attr("value")=="pljeskavica")
            {
            if($(this).is(':checked')){
    		$(".pljeskavica_slike").show();  
    		if (flag_pljeskavica==0){izracunataCijena+=pljeskavica; flag_pljeskavica=1;}}
			else
    		{
    		$(".pljeskavica_slike").hide();
    		if (flag_pljeskavica==1){izracunataCijena-=pljeskavica; flag_pljeskavica=0;}
    		}}
    		
    		else if($(this).attr("value")=="sir")
            {
            if($(this).is(':checked')){
    		$(".sir_slike").show();  
    		if (flag_sir==0){izracunataCijena+=sir; flag_sir=1;}}
			else
    		{
    		$(".sir_slike").hide();
    		if (flag_sir==1){izracunataCijena-=sir; flag_sir=0;}
    		}}

    		
    		else if($(this).attr("value")=="jaje")
            {
            if($(this).is(':checked')){
    		$(".jaje_slike").show();  
    		if (flag_jaje==0){izracunataCijena+=jaje; flag_jaje=1;}}
			else
    		{
    		$(".jaje_slike").hide();
    		if (flag_jaje==1){izracunataCijena-=jaje; flag_jaje=0;}
    		}}

    		else if($(this).attr("value")=="krastavci")
            {
            if($(this).is(':checked')){
    		$(".krastavci_slike").show();  
    		if (flag_krastavci==0){izracunataCijena+=krastavci; flag_krastavci=1;}}
			else
    		{
    		$(".krastavci_slike").hide();
    		if (flag_krastavci==1){izracunataCijena-=krastavci; flag_krastavci=0;}
    		}}

    		else if($(this).attr("value")=="salata")
            {
            if($(this).is(':checked')){
    		$(".salata_slike").show();  
    		if (flag_salata==0){izracunataCijena+=salata; flag_salata=1;}}
			else
    		{
    		$(".salata_slike").hide();
    		if (flag_salata==1){izracunataCijena-=salata; flag_salata=0;}
    		}}
    		
    		else if($(this).attr("value")=="luk")
            {
            if($(this).is(':checked')){
    		$(".luk_slike").show();  
    		if (flag_luk==0){izracunataCijena+=luk; flag_luk=1;}}
			else
    		{
    		$(".luk_slike").hide();
    		if (flag_luk==1){izracunataCijena-=luk; flag_luk=0;}
    		}}


    		else if($(this).attr("value")=="vege")
            {
            if($(this).is(':checked')){
    		$(".vege_slike").show();  
    		if (flag_vege==0){izracunataCijena+=vege; flag_vege=1;}}
			else
    		{
    		$(".vege_slike").hide();
    		if (flag_vege==1){izracunataCijena-=vege; flag_vege=0;}
    		}}


    		ispisCijene();
});
});

     
function clickBuy(item, itemCode, price, qty,size) {
	if(typeof(Storage) !== "undefined") {
	if (localStorage.foodly_itemsCart) {localStorage.foodly_itemsCart=Number(localStorage.foodly_itemsCart)+qty;}
	else {localStorage.foodly_itemsCart=qty;}
	 
// ----- NEW ITEM IN CART
 	if (localStorage.getItem("foodly_itemNo01") === null) {localStorage.foodly_itemNo01=item; localStorage.foodly_itemCodeNo01=itemCode; localStorage.foodly_itemQuantityNo01=qty; localStorage.foodly_itemPriceNo01=price; alert("Hamburger added to the cart! This window will now close."); localStorage.foodly_itemSizeNo01=size; window.close();}
 	else if (localStorage.getItem("foodly_itemNo02") === null) {localStorage.foodly_itemNo02=item; localStorage.foodly_itemCodeNo02=itemCode; localStorage.foodly_itemQuantityNo02=qty;localStorage.foodly_itemPriceNo02=price; alert("Hamburger added to the cart! This window will now close."); localStorage.foodly_itemSizeNo02=size; window.close();}
	else if (localStorage.getItem("foodly_itemNo03") === null) {localStorage.foodly_itemNo03=item; localStorage.foodly_itemCodeNo03=itemCode; localStorage.foodly_itemQuantityNo03=qty;localStorage.foodly_itemPriceNo03=price; alert("Hamburger added to the cart! This window will now close."); localStorage.foodly_itemSizeNo03=size; window.close();}
	else if (localStorage.getItem("foodly_itemNo04") === null) {localStorage.foodly_itemNo04=item; localStorage.foodly_itemCodeNo04=itemCode; localStorage.foodly_itemQuantityNo04=qty;localStorage.foodly_itemPriceNo04=price; alert("Hamburger added to the cart! This window will now close."); localStorage.foodly_itemSizeNo04=size; window.close();}
 	else if (localStorage.getItem("foodly_itemNo05") === null) {localStorage.foodly_itemNo05=item; localStorage.foodly_itemCodeNo05=itemCode; localStorage.foodly_itemQuantityNo05=qty;localStorage.foodly_itemPriceNo05=price; alert("Hamburger added to the cart! This window will now close."); localStorage.foodly_itemSizeNo05=size; window.close();}
	else if (localStorage.getItem("foodly_itemNo06") === null) {localStorage.foodly_itemNo06=item; localStorage.foodly_itemCodeNo06=itemCode; localStorage.foodly_itemQuantityNo06=qty;localStorage.foodly_itemPriceNo06=price; alert("Hamburger added to the cart! This window will now close."); localStorage.foodly_itemSizeNo06=size; window.close();}
 	else if (localStorage.getItem("foodly_itemNo07") === null) {localStorage.foodly_itemNo07=item; localStorage.foodly_itemCodeNo07=itemCode; localStorage.foodly_itemQuantityNo07=qty;localStorage.foodly_itemPriceNo07=price; alert("Hamburger added to the cart! This window will now close."); localStorage.foodly_itemSizeNo07=size; window.close();}
	else if (localStorage.getItem("foodly_itemNo08") === null) {localStorage.foodly_itemNo08=item; localStorage.foodly_itemCodeNo08=itemCode; localStorage.foodly_itemQuantityNo08=qty;localStorage.foodly_itemPriceNo08=price; alert("Hamburger added to the cart! This window will now close."); localStorage.foodly_itemSizeNo08=size; window.close();}
 	else if (localStorage.getItem("foodly_itemNo09") === null) {localStorage.foodly_itemNo09=item; localStorage.foodly_itemCodeNo09=itemCode; localStorage.foodly_itemQuantityNo09=qty;localStorage.foodly_itemPriceNo09=price; alert("Hamburger added to the cart! This window will now close."); localStorage.foodly_itemSizeNo09=size; window.close();}
	else if (localStorage.getItem("foodly_itemNo10") === null) {localStorage.foodly_itemNo10=item; localStorage.foodly_itemCodeNo10=itemCode; localStorage.foodly_itemQuantityNo10=qty;localStorage.foodly_itemPriceNo10=price; alert("Hamburger added to the cart! This window will now close."); localStorage.foodly_itemSizeNo10=size;window.close();}

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
var itemID = '950';
	
	if(document.getElementById("cbx_rajcica").checked) {itemID+= '3';}
	else {itemID+='0';}
	
	if(document.getElementById("cbx_pljeskavica").checked) {itemID+= '3';}
	else {itemID+='0';}

	if(document.getElementById("cbx_vege").checked) {itemID+= '3';}
	else {itemID+='0';}

	if(document.getElementById("cbx_sir").checked) {itemID+= '3';}
	else {itemID+='0';}

	if(document.getElementById("cbx_salata").checked) {itemID+= '3';}
	else {itemID+='0';}

	if(document.getElementById("cbx_jaje").checked) {itemID+= '3';}
	else {itemID+='0';}

	if(document.getElementById("cbx_krastavci").checked) {itemID+= '3';}
	else {itemID+='0';}

	if(document.getElementById("cbx_luk").checked) {itemID+= '3';}
	else {itemID+='0';}

	clickBuy("Custom Hamburger",itemID,	ispisCijene(),broj_kom,localStorage.foodly_itemSize);
	location.reload();
}