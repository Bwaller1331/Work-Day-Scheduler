// Displays current Day
var todaysDate = moment().format('dddd, MMM Do YYYY');
var curTime = moment().format('LT');
$('#currentDay').html(todaysDate); 
$('#currentTime').html(curTime);

// Save Button Event Listener
$(document).ready(function(){
    //Get Values
$(".save-Btn").on("click", function(){
    var text = $(this).siblings('.description').text;
    var time = $(this).parent().attr("id");
//Save values to local storage
    localStorage.setItem(text, time);

})
function colorCode(){
    var currentTime = moment().hour();

    $('.time-block').each(function(){
        var timeSlot = parseInt($(this).attr('id').split('hour')[1]);
        
        if (timeSlot === currentTime){
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }

        else if (timeSlot < currentTime){
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
//pull from local storage
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour8 .description').val(localStorage.getItem('hour9'));
$('#hour8 .description').val(localStorage.getItem('hour10'));
$('#hour8 .description').val(localStorage.getItem('hour11'));
$('#hour8 .description').val(localStorage.getItem('hour12'));
$('#hour8 .description').val(localStorage.getItem('hour13'));
$('#hour8 .description').val(localStorage.getItem('hour14'));
$('#hour8 .description').val(localStorage.getItem('hour15'));
$('#hour8 .description').val(localStorage.getItem('hour16'));
$('#hour8 .description').val(localStorage.getItem('hour17'));
// Call function for color coding the time slot
colorCode();
})