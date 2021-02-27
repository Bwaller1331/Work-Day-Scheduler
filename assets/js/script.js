// Displays current Day
var todaysDate = moment().format('dddd, MMM Do YYYY');
var curTime = moment().format('LT');
$('#currentDay').html(todaysDate); 
$('#currentTime').html(curTime);