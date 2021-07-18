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
});

// Load Tasks from Local Storage.
loadTasks = function () {
  //console.log(savedTaskTextInput);
  var loadUserTasks = JSON.parse(localStorage.getItem("taskTextInput"));
  console.log(loadUserTasks);
  //Created Variables and linked them to the ElementID "taskText01, 02, 03, etc" and
  //matched them w/ the corresponding index for loadUserTasks.
  var storedTaskInputEl = document.getElementById("taskText01");
  storedTaskInputEl.textContent = loadUserTasks[0];
  var storedTaskInputEl = document.getElementById("taskText02");
  storedTaskInputEl.textContent = loadUserTasks[1];
  var storedTaskInputEl = document.getElementById("taskText03");
  storedTaskInputEl.textContent = loadUserTasks[2];
  var storedTaskInputEl = document.getElementById("taskText04");
  storedTaskInputEl.textContent = loadUserTasks[3];
  var storedTaskInputEl = document.getElementById("taskText05");
  storedTaskInputEl.textContent = loadUserTasks[4];
  var storedTaskInputEl = document.getElementById("taskText06");
  storedTaskInputEl.textContent = loadUserTasks[5];
  var storedTaskInputEl = document.getElementById("taskText07");
  storedTaskInputEl.textContent = loadUserTasks[6];
  var storedTaskInputEl = document.getElementById("taskText08");
  storedTaskInputEl.textContent = loadUserTasks[7];
  var storedTaskInputEl = document.getElementById("taskText09");
  storedTaskInputEl.textContent = loadUserTasks[8];
};

window.onload = function () {
  loadTasks();
};
