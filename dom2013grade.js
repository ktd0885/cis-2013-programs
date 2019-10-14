var $ = function (id) 
{
    return document.getElementById(id);
}

var calculate_click = function () 
{
    var floatHwPts, floatMidtermPts, floatFinalPts;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidtermPts = parseFloat ($("Midterm_Pts").value);
    floatFinalPts = parseFloat ($("Final_Pts").value);
}

window.onload = function () 
{
    $("final_grade").value = stringFinalGrade; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(id) = ""; //puts the cursor on the first DOM text input box
    $("Midterm_Pts").value = "";
    $("Final_Pts").value = "";
};      


 