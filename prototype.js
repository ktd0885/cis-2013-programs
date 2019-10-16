var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts, floatMidPts, floatFinPts, intGradeOption, floatTotalPts;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts = parseFloat ($("mid_pts").value);
    floatFinPts = parseFloat ($("fin_pts").value);
    intGradeOption = parseInt ($("grade_option).value);
   floatTotalPts = parseFloat (floatHwPts + floatMidPts + floatFinPts);
    $("final_grade").value) = floatTotalPts;

(intGradeOption===1)
{
    if (floatTotalPts >= 80)
    {
      stringFinalGrade = "Pass";
    }
       else
       {
        stringFinalGrade ="Fail";
       
} $("final_grade").value = stringFinalGrade;

window.onload = function () 
{
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
    $("mid_pts").value = "";
    $("fin_pts").value = "";
};
