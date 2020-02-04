var $ = function(id) {
	return document.getElementById(id);
};

var validateSalesForm = function() {
	var subtotal = $("subtotal").value;
	var taxRate = $("taxRate").value;
    var shippingCharges = $("shippingCharges").value;
    var salesTax = $("salesTax").value;
    var total = $("total").value;

	$("email_address1_error").firstChild.nodeValue = "";
	$("email_address2_error").firstChild.nodeValue = "";
	$("first_name_error").firstChild.nodeValue = "";

	if (emailAddress1 !== emailAddress2) {
		$("email_address2_error").firstChild.nodeValue = "This entry must equal first entry.";
		return false;
	}

	return true;

};

window.onload = function() {
	$("email_address1").focus();
};
