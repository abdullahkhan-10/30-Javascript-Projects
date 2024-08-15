let myPassword = document.getElementById("password"); // to access input field
let myMessage = document.getElementById("message"); // to access whole p tag
let passStrength = document.getElementById("strength"); // to access span tag inside p tag.

// The (addEventListener) will execute the arrow function each time when we enter value to input filed.
myPassword.addEventListener("input", () => {
  //1.  if the length become greater than zero, mean when we put anything in inputfield, show the text inside p tage.
  if (myPassword.value.length > 0) {
    myMessage.style.display = "block";
  } else {
    myMessage.style.display = "none";
  }

  // 2. checke the strength of password.
  if (myPassword.value.length < 4) {
    passStrength.innerHTML = "weak"; // update span tag
    myPassword.style.borderColor = "red"; // update input field
    myMessage.style.color = "red"; // update p tag
  } else if (myPassword.value.length > 4 && myPassword.value.length < 8) {
    passStrength.innerHTML = "medium";
    myPassword.style.borderColor = "yellow";
    myMessage.style.color = "yellow";
  } else if (myPassword.value.length >= 8) {
    passStrength.innerHTML = "strong";
    myPassword.style.borderColor = "#26d730";
    myMessage.style.color = "#26d730";
  }
});
