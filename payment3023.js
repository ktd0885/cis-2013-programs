var $ = function (id) { return document.getElementById(id); }
var calculate = function()
{
 var floatloanamount, floatinterestrate, intloanterm, floatmonthlycost;
 floatloanamount = parseFloat ($("loan_amount").value);
 intloanterm = parseInt ($("loan_time").value);
 floatinterestrate = parseFloat ($("interestRate").value);
 floatmonthlycost = parseFloat (floatloanamount*floatinterestrate/12(1+floatinterestrate/12)intloanterm(1+floatinterestrate/12)intloanterm−1);
 $("monthly_cost").value = floatmonthlycost;
 }
 window.onload = function () 
{
    $("loan_time").value = "";
    $("monthly_cost").value = "";
    $("calc").onclick = calculate;
    $("loan_amount").focus();
};