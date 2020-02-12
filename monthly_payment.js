function $(id)
{
	return document.getElementById(id);
}

function calcPMT()
{
	var fullName = $("full_name").value;
	var loanAmount = $("loan_amount").value;
    var loanMonths = $("loan_months").value;
    var interestRate = $("interest_rate").value;
    var monthlyCost = $("monthly_cost").value;
    interestRate = (interestRate/12)/100;
    monthlyCost = loanAmount*(interestRate/(1-((1+interestRate)**-loanMonths)));
    $("monthly_cost").value ="$" + monthlyCost.toFixed(2);
    return false;
    //alert("Value of loan mount is "+ loanAmount);
	//alert("Value of loan months is "+ loanMonths);
}

window.onload = function()
{
    $("full_name").focus();
    $("calculatePaymentForm").onsubmit = calcPMT;
    $("loan_amount").value;
    $("loan_months").value;
    $("interest_rate").value;
    $("monthly_cost").value;
};