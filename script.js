// global variables

var currentDateTime = moment();

getCurrentDateTime = function () {
  console.log(currentDateTime.format("llll"));
};

getCurrentDateTime();