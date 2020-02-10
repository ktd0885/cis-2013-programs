var $ = function (id) { return document.getElementById(id); }
var calculate_click = function()
{
 var loanAmount = parseFloat ($("loanAmount").value);
 var loanTerm = parseInt ($("loanTerm").value);
 var interestRate = parseFloat ($("interestRate").value);
 if (isNaN(loanAmount) || isNaN(loanTerm) || isNaN(interestRate)) {
  alert ("Please enter numbers");
  return false;
 }
$("monthlyCost").value = "";

 var monthlyCost = (loanAmount*[(interestRate/12) / ((1-(1+(interestRate/12))^(loanTerm)))]);
 monthlyCost = parseFloat (monthlyCost.toFixed(2));
 //$("monthly_cost").value = floatmonthlycost;
 $("monthlyCost").value = "$" + monthlyCost.toFixed(2);
 return false;
 }
 window.onload = function () 
{
    $("loanTerm").value = "";
    $("monthlyCost").value = "";
    //$("calculate_click").onclick = calculate;
    $("loanAmount").focus();
    $("interestRate").value = "";
    $("fullName").value = "";
};

//[(floatloanamount*(floatinterestrate/12))*(1+floatinterestrate/12)^(intloanterm)]/[(1+floatinterestrate/12)^(intloanterm)]-1;
//[(floatinterestrate/12) / ((1-(1+(floatinterestrate/12))^(intloanterm)))]);