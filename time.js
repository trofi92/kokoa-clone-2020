const getCurrentTimeDate = () => {
  let currentTimeDate = new Date()

  var weekday = new Array(7)
  weekday[0] = "일"
  weekday[1] = "월"
  weekday[2] = "화"
  weekday[3] = "수"
  weekday[4] = "목"
  weekday[5] = "금"
  weekday[6] = "토"

  var month = new Array()
  month[0] = "1월"
  month[1] = "2월"
  month[2] = "3월"
  month[3] = "4월"
  month[4] = "5월"
  month[5] = "6월"
  month[6] = "7월"
  month[7] = "8월"
  month[8] = "9월"
  month[9] = "10월"
  month[10] = "11월"
  month[11] = "12월"

  var hours = currentTimeDate.getHours()

  var minutes = currentTimeDate.getMinutes()
  minutes = minutes < 10 ? "0" + minutes : minutes

  var AMPM = hours >= 12 ? "PM" : "AM"

  if (hours === 12) {
    hours = 12
  } else {
    hours = hours % 12
  }

  var currentTime = `${hours}:${minutes}${AMPM}`
  var currentDay = weekday[currentTimeDate.getDay()]

  var currentDate = currentTimeDate.getDate()
  var currentMonth = month[currentTimeDate.getMonth()]
  var CurrentYear = currentTimeDate.getFullYear()

  var fullDate = `${CurrentYear} ${currentMonth} ${currentDate}`

  document.getElementById("time").innerHTML = currentTime
  document.getElementById("day").innerHTML = currentDay
  document.getElementById("date").innerHTML = fullDate

  setTimeout(getCurrentTimeDate, 500)
}
getCurrentTimeDate()
