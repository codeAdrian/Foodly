function check() {
	var ctr=0;
	var flag=0;
	ispisCijene();
	if(document.getElementById("cbx_pljeskavica").checked){ctr++;}
	if(document.getElementById("cbx_vege").checked){ctr++;}
	if(document.getElementById("cbx_jaje").checked){ctr++;}
	if(document.getElementById("cbx_krastavci").checked){ctr++;}
	if(document.getElementById("cbx_luk").checked){ctr++;}
	if(document.getElementById("cbx_rajcica").checked){ctr++;}
	if(document.getElementById("cbx_salata").checked){ctr++;}
	if(document.getElementById("cbx_sir").checked){ctr++;}
		if (ctr<2)
	{
		alert("Odaberite najmanje 2 sastojka. \nBroj odabranih sastojaka: "+ctr);
		return false;
	}
	
	else{return true;}
}