const myDate = document.getElementById("date")
const myDay = document.getElementById("days")
const myMonth = document.getElementById("month")
const myYear = document.getElementById("year")

// 1
// To create date object
const today = new Date();
// console.log(today);

// 2.
// To get the days and months in string formate, not in number.
const weekDays = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const allMonths = ["January", "February", "March", "April", "May", "June","July","August", "September", "October", "November", "December"]


// add the date, day, month and year to each element in DOM.
myDate.innerHTML = today.getDate()

// (today.getday()) gave us days in number which start from zero, and we pass it to array, so it will act as the index number. and this index numer will gave the value on particular index.
// for example if (today.getDay()) gave 3, so we are assigning the value on third index of array to the innerHTML which will be (Wednesday). 
myDay.innerHTML = weekDays[today.getDay()];

// will do the same for months as well..
myMonth.innerHTML = allMonths[today.getMonth()]
myYear.innerHTML = today.getFullYear()


