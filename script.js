// global variables

var currentDateTime = moment();

// function to get the currrent date and write it to the HTML
displayCurrentDate = function () {
  document.getElementById("currentDay").innerHTML =
    currentDateTime.format("dddd, MMMM Do YYYY");
};

// function to color code the rows based on what time it is.
updateRowColors = function () {
  // using the .each JQuery method to loop through each parent class time-block
  $(".time-block").each(function () {
    //using the this selector to grab each hour by the id attribute.
    var timeBlockHour = parseInt($(this).attr("data-id"));
    // using the hours method to get the exact hour in military time.
    var presentHour = moment().hours();

    if (timeBlockHour == presentHour) {
      $(this).addClass("present");
    } else if (timeBlockHour < presentHour) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future");
    }
  });
};

//function calls.

displayCurrentDate();
updateRowColors();
var taskTextInput = [];
// Trying to figure out how to get all the tasks to be console logged separately.
$("button").click(function () {
  console.log("you clicked a button");
  var taskTextInput = [
    $("#taskText01").val(),
    $("#taskText02").val(),
    $("#taskText03").val(),
    $("#taskText04").val(),
    $("#taskText05").val(),
    $("#taskText06").val(),
    $("#taskText07").val(),
    $("#taskText08").val(),
    $("#taskText09").val(),
  ];

  localStorage.setItem("taskTextInput", JSON.stringify(taskTextInput));
  // loop over the taskTextInput array and push items to the local storage.
  // then I neeed to figure out how to get the items from the local storage and push them back to the
  // page in the proper spot.

  console.log(taskTextInput);
});

// Load Tasks from Local Storage.
loadTasks = function () {
  var savedTaskTextInput = localStorage.getItem("taskTextInput");

  console.log(savedTaskTextInput);
};

loadTasks();
