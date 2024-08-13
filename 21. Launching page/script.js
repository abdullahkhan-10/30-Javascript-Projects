// when the countdown will stop?, we need to specify that date.
// the variable (launchDate) will store the launching date.
let launchDate = new Date("Oct 16, 2024 00:00:00").getTime();

let countApp = setInterval(() => {
  // the variable (now) will store the current date.
  let now = new Date().getTime();

  // The time difference between now and the launching date will be store in variable (distance)
  let distance = launchDate - now;

  // to  calculate the distance in term of (days, hours, minutes and seconds)
  let myDays = Math.floor(distance / (1000 * 60 * 60 * 24));
  let myHours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let myMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let mySeconds = Math.floor((distance % (1000 * 60)) / 1000);

  // To display these (days, hours, minutes and seconds) on our web application.
  document.getElementById("days").innerHTML = myDays;
  document.getElementById("hours").innerHTML = myHours;
  document.getElementById("minutes").innerHTML = myMinutes;
  document.getElementById("seconds").innerHTML = mySeconds;

  // When the countdown will end? what will be displayed?
  if (distance < 0) {
    clearInterval(countApp);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
