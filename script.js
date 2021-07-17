// global variables

var currentDateTime = moment();

// function to get the currrent date and write it to the HTML
displayCurrentDate = function () {
  document.getElementById("currentDay").innerHTML =
    currentDateTime.format("dddd, MMMM Do YYYY");
};

// get current hour in standard format.
//var currentHour = moment().format("LT");
// get current hour "split" so we can use that to compare w/ the HTML Hour text.
//var currentHourSplit = currentHour.split(":")[0];

// get hour string array from html class name "hour"
//var scheduleHourBlocks = document.getElementsByClassName("hour");
// create a for loop to get the "Hour" from the outerText DOM element
//so we can compare that with currentHourSplit to create our if/else.
// for (var i = 0; i < scheduleHourBlocks.length; i++) {
//   var scheduleHourBlocksSplit = scheduleHourBlocks[i].outerText.split(":")[0];
//   console.log(scheduleHourBlocksSplit);
//   if (currentHourSplit === scheduleHourBlocksSplit) {
//     console.log("This one Matches");
//     document
//       .getElementsByClassName("description")[0]
//       .classList.removeNamedItem("past");
//     document
//       .getElementsByClassName("description")[0]
//       .classList.removeNamedItem("future");
//     document
//       .getElementsByClassName("description")[0]
//       .classList.setNamedItem("present");
//   } else {
//     console.log("These do not match");
//   }
// }
// function to color code the rows based on what time it is.
updateRowColors = function () {
  // using the .each JQuery method to loop through each parent class time-block
  $(".time-block").each(function () {
    //using the this selector to grab each hour by the id attribute.
    var timeBlockHour = parseInt($(this).attr("data-id"));
    // using the hours method to get the exact hour in military time.
    var presentHour = moment().hours();
    console.log(timeBlockHour);
    console.log(presentHour);
    if (timeBlockHour === presentHour) {
      console.log("This Matches!");
    }
  });
};
//console.log(currentHour);
//console.log(scheduleHourBlocks);
//console.log(currentHourSplit);

//function calls.

displayCurrentDate();
updateRowColors();
