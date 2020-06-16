$(document).ready(function () {
    console.log("Inside the ready function.");

    // Variables

    $(".today-date").append(moment().format('dddd, MMM Do'));
var hourBlocks = [9, 10, 11, 12, 1, 2, 3, 4, 5]



    // Functions

    function createHourBlocks() {
        for(var i = 0; i < hourBlocks.length; i++) {
            var hourRow = $("#working-area").text("<div class='row newRow'></div>");
            $(".newRow").addClass("hour-row-" + hourBlocks[i]);
            $("#work-area").append
            



        }

        
    }
createHourBlocks();
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