$(document).ready(function () {
    console.log("Inside the ready function.");
    // var currentDate = moment().format('dddd, MMM Do');
    // console.log(currentDate);
    $(".today-date").append(moment().format('dddd, MMM Do'));
    var daystart = 8;
    var hourBlock = daystart;
    var dayHours = 9;

    for (var i = 0; i < dayHours; i++) {
        hourBlock++;
        if (hourBlock > 12) {
            hourBlock = hourBlock - 12;
            
        }
        console.log(hourBlock);
    }

    // Build hour rows dynamically one for each our from 9am to 6pm
        // Hour Div
        // Text Area Div
        // Save Button Div
    //  
    // 


    $("#working-area").append("<div class='row hour-row'></div>");
    $(".hour-row").append("<div class='col-sm-1'><p>9am</p></div>");
    $(".hour-row").append("<div class='col-sm-6'><p>event box</p>");
    $(".hour-row").append("<div class='col-sm-1'><p>Save</p>");











})