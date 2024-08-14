const scriptURL = "https://script.google.com/macros/s/AKfycbyt_c-DFdvaXPOXbToOPf9UZ0eds5ZlxJ6_hrPSxTuimIQo26n0SRG0PRNGLB2UI3m7jA/exec";

const form = document.forms["submit-to-google-sheet"];

const message = document.getElementById("msg");

// we are sending data to the above url, which is google sheet url. when we click on submit button the data from (form) will be send to google sheet.
// so in response here we are not getting data but we are sending data from frontend to database/google sheet.
form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      message.innerHTML = "Thank You For Subscribing!";
      // after 3 second remove the text.
      setTimeout(() => {
        message.innerHTML = "";
      }, 5000);

      // also empty the input field as well after sending an email.
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
