function checkFinalForm()
{
if(document.getElementById("cartQuantity").innerHTML<="0")
	{
		alert("No items in the cart");
		return false;
	}

else
	{
		if(document.getElementById("FirstName").value===null ||document.getElementById("FirstName").value==="") {alert("Please, make sure to fill out the form."); return false;}
		else if(document.getElementById("LastName").value===null ||document.getElementById("LastName").value==="") {alert("Please, make sure to fill out the form."); return false;}
		else if(document.getElementById("DeliveryAddress").value===null ||document.getElementById("DeliveryAddress").value==="") {alert("Please, make sure to fill out the form."); return false;}		
		else if(document.getElementById("PhoneNumber").value===null ||document.getElementById("PhoneNumber").value==="") {alert("Please, make sure to fill out the form."); return false;}
		else {alert("Your order has been submitted!"); return true;}
	}
}
