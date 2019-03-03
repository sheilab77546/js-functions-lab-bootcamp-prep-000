// write your code below!
function happyHolidays() {
  return ('Happy holidays!')
}

var name = "you"

var holiday = "Mother's Day"

var days = 20

function happyHolidaysTo(name) {
  return console.log("Happy holidays, ${name}!")
}

happyHolidaysTo(name)

function happyHolidaysTo(holiday, name) {
  return console.log("Happy ${holiday}, ${name}!")
}



function holidayCountdown(days, holiday) {
  return console.log("It\'s ${days} until ${holiday}!")
}
