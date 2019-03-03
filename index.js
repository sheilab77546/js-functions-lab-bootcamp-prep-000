// write your code below!


var name = "you"

var holiday = "Mother's Day"

var days = 20

function happyHolidays() {
  return ("Happy holidays!")
}

function happyHolidaysTo(name) {
  console.log("Happy holidays, ${name}!")
}

happyHolidaysTo("you");

function happyHolidaysTo(holiday, name) {
  console.log(`Happy ${holiday}, ${name}!`)
}

happyHolidaysTo("Mother\'s Day", "you");

function holidayCountdown(days, holiday) {
  console.log("It\'s ${days} until ${holiday}!")
}

holidayCountdown(20, "Mother\'s Day");
