function check() {
	var ctr=0;
	var flag=0;
	ispisCijene();
	if(document.getElementById("radio_sunka_l").checked){ctr++;}
	if(document.getElementById("radio_sunka").checked){ctr++;}
	if(document.getElementById("radio_sunka_d").checked){ctr++;}
	if(document.getElementById("radio_rajcica").checked) {ctr++;}
	if(document.getElementById("radio_kulen_l").checked) {ctr++;}
	if(document.getElementById("radio_kulen").checked){ctr++;}
	if(document.getElementById("radio_kulen_d").checked){ctr++;}
	if(document.getElementById("radio_luk_l").checked){ctr++;}
	if(document.getElementById("radio_luk").checked){ctr++;}
	if(document.getElementById("radio_luk_d").checked){ctr++;}
	if(document.getElementById("radio_gljive_l").checked){ctr++;}
	if(document.getElementById("radio_gljive").checked){ctr++;}
	if(document.getElementById("radio_gljive_d").checked){ctr++;}
	if(document.getElementById("radio_sir_l").checked){ctr++;}
	if(document.getElementById("radio_sir").checked){ctr++;}
	if(document.getElementById("radio_sir_d").checked){ctr++;}
	if(document.getElementById("radio_kukuruz_l").checked){ctr++;}
	if(document.getElementById("radio_kukuruz").checked){ctr++;}
	if(document.getElementById("radio_kukuruz_d").checked){ctr++;}
	if(document.getElementById("radio_masline_l").checked){ctr++;}
	if(document.getElementById("radio_masline").checked){ctr++;}
	if(document.getElementById("radio_masline_d").checked){ctr++;}
	if(document.getElementById("radio_sir4_l").checked){ctr++;}
	if(document.getElementById("radio_sir4").checked){ctr++;}
	if(document.getElementById("radio_sir4_d").checked){ctr++;}
	if(document.getElementById("radio_tuna_l").checked){ctr++;}
	if(document.getElementById("radio_tuna").checked){ctr++;}
	if(document.getElementById("radio_tuna_d").checked){ctr++;}
	if(document.getElementById("radio_paprika_l").checked){ctr++;}
	if(document.getElementById("radio_paprika").checked){ctr++;}
	if(document.getElementById("radio_paprika_d").checked){ctr++;}
	// -------------------- insert new topping --------------------
	if(document.getElementById("radio_salata_l").checked){ctr++;}
	if(document.getElementById("radio_salata").checked){ctr++;}
	if(document.getElementById("radio_salata_d").checked){ctr++;}
	// ------------------------------------------------------------
	if (ctr<3)
	{
		alert("Odaberite najmanje 3 sastojka. \nBroj odabranih sastojaka: "+ctr);
		return false;
	}
	
	else{return true;}
}