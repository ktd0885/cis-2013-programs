var $ = function (id) { return document.getElementById(id); }
var calculate = function ()
{
 var floatsubtotal, inttaxrate, floatshippingcharges, floatsalestax, floattotalamount;
 floatsubtotal = parseFloat ($("subtotal").value);
 inttaxrate = parseInt ($("tax_rate").value);
 floatshippingcharges = parseFloat ($("shipping_charges").value);
 floatsalestax = parseFloat (floatsubtotal * inttaxrate);
 floattotalamount = parseFloat (floatsubtotal + floatsalestax + floatshippingcharges);
 $("total_cost").value = floattotalamount;
 }
 window.onload = function () 
{
    $("tax_rate").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("subtotal").focus();
};