var $ = function (id) { return document.getElementById(id); }
 var calculate = function()
 {
 var floatmonthlypayment, intloanterm, floattotalcost;
     floatmonthlypayment = parseFloat ($("monthly_payment").value);
     intloanterm = parseInt ($("loan_length").value);
     floattotalcost = parseFloat (floatmonthlypayment + intloanterm);
     $("total_cost").value = floattotalcost;
 }
 window.onload = function () 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
}