// global variables

var currentDate = moment();

// function to get the currentdatetime
getCurrentDate = function () {
  document.getElementById("currentDay").innerHTML =
    currentDate.format("dddd, MMMM Do YYYY");
};

getCurrentDate();
