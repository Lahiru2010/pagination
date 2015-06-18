/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

dataCount = 300; /* Number of data rows */
pageSize = 10; /* rows per page */
marginValue = 4; /* how many numbers should show in pagination */
firstPageText = "First"; /* First or >> */
lastPageText = "Last"; /* Last or << */



$(function () {
    currentValue = 1; /* current page number */
    buttonCount = parseInt(dataCount / pageSize);
    drawPginate(currentValue, buttonCount);

    $('#paginate').on('click', '.page-button', function () {
        currentValue = parseInt($(this).val());
        setCurrent(currentValue);

        drawPginate(currentValue, buttonCount);
    });
    $('#paginate').on('click', '.page-button-first', function () {
        currentValue = 1;
        setCurrent(currentValue);
        drawPginate(currentValue, buttonCount);
    });
    $('#paginate').on('click', '.page-button-last', function () {
        currentValue = parseInt(buttonCount);
        setCurrent(currentValue);
        drawPginate(currentValue, buttonCount);
    });

    $('#paginate').on('click', '.page-button-pre', function () {
        currentValue = parseInt(currentValue) - 1;
        if (currentValue < 1)
            currentValue = 1

        setCurrent(currentValue);
        drawPginate(currentValue, buttonCount);
    });

    $('#paginate').on('click', '.page-button-next', function () {
        currentValue = parseInt(currentValue) + 1;
        if (currentValue >= buttonCount)
            currentValue = buttonCount;

        setCurrent(currentValue);
        drawPginate(currentValue, buttonCount);
    });
});

drawPginate = function (currentValue, buttonCount) {

    var buttonArray = [];
    for (i = 0; i < buttonCount; i++) {
        buttonArray.push(i);
    }

    var buttonArrayDisplay = [];
    // var allCount = currentValue + (marginValue - 1);
    clearPaginate();
    $('#paginate').append("<input type='button' class='page-button-first' value='" + firstPageText + "'>  ");
    $('#paginate').append("<input type='button' class='page-button-pre' value='Prev'>  ");


    // if (currentValue > buttonCount - marginValue) {
    $('#paginate').append(" <input type='button' class='page-button' value='...' disabled >  ");

        for (var i = currentValue - 2; i <= parseInt(currentValue)+2; i++) {
            buttonArrayDisplay.push(i);
            if (i < 1) {
                i = 1;
            }
            if((parseInt(currentValue)+2)>=buttonArray.length){
                continue;
            }

            $('#paginate').append("<input type='button' class='page-button' value='" + i + "'>  ");
        }
    
    displayArray(buttonArrayDisplay);
    $('#paginate').append(" <input type='button' class='page-button' value='...' disabled >  ");

    $('#paginate').append("<input type='button' class='page-button-next' value='Next'>  ");
    $('#paginate').append("<input type='button' class='page-button-last' value='" + lastPageText + "'>");


    getInputsByValue(currentValue);
};

clearPaginate = function () {
    $('#paginate').empty();
};

setCurrent = function (currentValue) {
    $('#currentVal').html(currentValue);
};

getInputsByValue = function (value)
{
    $("#paginate :input[value='" + value + "']").addClass('current');
};

displayArray = function (array) {
    console.log("\n\n\n\n\n\n");
    for (var i = 0; i < array.length; i++) {
        console.log("Array " + array[i]);
    }
};
