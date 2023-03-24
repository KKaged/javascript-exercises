const leapYears = function (year) {
  if (year % 4) {
    console.log("True");
  } else if (year % 4 && year % 400) {
    console.log("True");
  } else {
    console.log("False");
  }
};

// Do not edit below this line
module.exports = leapYears;
