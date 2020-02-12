// get today's date using Date objects
const today = new Date()

let lastmonth = ''

// add one since getMonth returns 0-11 for Jan-Dec
const thisMonth = today.getMonth() + 1

let year = today.getFullYear()

// if this month is 1 (January)
// take one year off from this year
// set last month as 12 (December)
if (thisMonth === 1) {
  year = year - 1
  lastmonth = 12
}

// if this month is less than 10
// add 0 in front of the digit e.g. 09, 04
if (thisMonth < 10) {
  lastmonth = '0' + (thisMonth - 1)
}

// take 1 away from year to get last year
const lastyear = year - 1

// this format matches the date param format
const date = year + '-' + lastmonth

module.exports = {
  date,
  lastyear
}
