// global variables

var currentDateTime = moment();

// function to get the currrent date and write it to the HTML
displayCurrentDate = function () {
  document.getElementById("currentDay").innerHTML =
    currentDateTime.format("dddd, MMMM Do YYYY");
};

displayCurrentDate();

// get current hour in standard format.
var currentHour = moment().format("LT");
// get current hour "split" so we can use that to compare w/ the HTML Hour text.
var currentHourSplit = currentHour.split(":")[0];

// get hour string array from html class name "hour"
var scheduleHourBlocks = document.getElementsByClassName("hour");
// create a for loop to get the "Hour" from the outerText DOM element
//so we can compare that with currentHourSplit to create our if/else.
for (var i = 0; i < scheduleHourBlocks.length; i++) {
  var scheduleHourBlocksSplit = scheduleHourBlocks[i].outerText.split(":")[0];
  console.log(scheduleHourBlocksSplit);
}
// function to color code the rows based on what time it is.
updateRowColors = function () {
  //console.log(currentHour);
  //console.log(scheduleHourBlocks);
  console.log(currentHourSplit);
};

updateRowColors();
