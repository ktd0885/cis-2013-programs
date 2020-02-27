function $(id)
{
	return document.getElementById(id);
} //function call

function calculate_click ()
{
 var intOptions, floatFirstInput, floatSecondInput, floatBase, floatExponent, floatOutput, nextInput, total=0, numInputs=0;
 $("result_box").value = floatOutput;
	for(;;){
			if(intOptions==7) break;
			intOptions=parseInt(prompt("Please choose a selection from the menu below: \n1. Add \n2. Subtract \n3. Multiply \n4. Divide \n5. Exponent \n6. Mean \n7. Quit"));
			for (;intOptions<1 || intOptions>7 || isNaN(intOptions);) 
					intOptions=parseInt(prompt("Error. \nPlease choose an option from the menu below!"));
	
	if (intOptions==1) {
		{
					floatFirstInput=parseFloat(prompt("Please enter your first input"));
		}//then checks isNaN
								for (;isNaN(floatFirstInput);)
											floatFirstInput=parseFloat(prompt("Error. \nPlease enter a valid number!"));
					floatSecondInput=parseFloat(prompt("Please enter your second output"));
								for (;isNaN(floatSecondInput);)
											floatSecondInput=parseFloat(prompt("Error. \nPlease enter a valid number!"));
		floatOutput=floatFirstInput+floatSecondInput;
		$("result_box").value = floatOutput;
}//sum displayed in box


	if (intOptions==2) {
		{
				floatFirstInput=parseFloat(prompt("Please enter your first input"));
		}//then check isNaN
							for (;isNaN(floatFirstInput);)
										floatFirstInput=parseFloat(prompt("Error. \nPlease enter a valid number!"));
				floatSecondInput=parseFloat(prompt("Please enter your second output"));
							for (;isNaN(floatSecondInput);)
										floatSecondInput=parseFloat(prompt("Error. \nPlease enter a valid number!"));
		floatOutput=floatFirstInput-floatSecondInput;
		$("result_box").value = floatOutput;
}//difference displayed in box


 if (intOptions==3) {
		{
				floatFirstInput=parseFloat(prompt("Please enter your first input"));
		}//then checks isNaN
						for (;isNaN(floatFirstInput);)
								floatFirstInput=parseFloat(prompt("Error. \nPlease enter a valid number!"));
				floatSecondInput=parseFloat(prompt("Please enter your second output"));
						for (;isNaN(floatSecondInput);)
								floatSecondInput=parseFloat(prompt("Error. \nPlease enter a valid number!"));
		floatOutput=floatFirstInput*floatSecondInput;	
		$("result_box").value = floatOutput;
}//product displayed in box


	if (intOptions==4) {
		{
				floatFirstInput=parseFloat(prompt("Please enter your first input"));
		}//then checks isNaN
						for (;isNaN(floatFirstInput);)
								floatFirstInput=parseFloat(prompt("Error. \nPlease enter a valid number!"));
				floatSecondInput=parseFloat(prompt("Please enter your second output"));
						for (;isNaN(floatSecondInput);)
								floatSecondInput=parseFloat(prompt("Error. \nPlease enter a valid number!"));
		floatOutput=floatFirstInput/floatSecondInput;
		$("result_box").value = floatOutput;
}//division displayed in box

	if (intOptions==5) {
		{
				floatFirstInput=parseFloat(prompt("Please enter your base number"));
		}//then checks isNaN
						for (;isNaN(floatFirstInput);)
								floatFirstInput=parseFloat(prompt("Error. \nPlease enter a valid number!"));
				floatSecondInput=parseFloat(prompt("Please enter your exponential value"));
						for (;isNaN(floatSecondInput);)
								floatSecondInput=parseFloat(prompt("Error. \nPlease enter a valid number!"));
	floatOutput=Math.pow(floatFirstInput,floatSecondInput);
	$("result_box").value = floatOutput;
}//answer displayed in box

	if (intOptions==6) {
				for (;;){
								nextInput=prompt("Enter a series of numbers or *** to quit");
								if (nextInput=="***") break;
								nextInput=parseFloat(nextInput);
								if (!isNaN(nextInput)) {
												total+= (nextInput);
												numInputs++;}
				}//conditions continue			 
	
												if(numInputs>0)
															{
																	floatOutput=total/numInputs;
															}//runs calculation
												if (numInputs==0)
															{
																	alert("Mean is not relevant!");
															}//pop up box 
	$("result_box").value = floatOutput;
	}//mean displayed in result box

	if (intOptions==7 || intOptions=="") {
					txt = "User has quit";
	}//display menu disappears
	}//infinite loop ends
	}//function ends
	
	window.onload = function()
		{
				$("result_box").value="";
		}; // clears out results when refreshed