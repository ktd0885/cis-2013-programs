var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts;

    floatHwPts = parseFloat($("hw_pts").value);


};

window.onload = function () 
{
    $("final_grade").value = stringFinalGrade; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(id) = hw_pts; //puts the cursor on the first DOM text input box
       
