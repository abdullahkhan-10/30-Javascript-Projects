let nameError = document.getElementById("name-error")      // we get access the span element of DOM.
let phoneError = document.getElementById("phone-error")
let emailError = document.getElementById("email-error")
let messageError = document.getElementById("message-error")
let submitError = document.getElementById("submit-error")

// for name input 
function validateName(){
     // we access the value of input element on DOM, and store in variable (name)
    let name = document.getElementById("contact-name").value;  

    if (name.length == 0) {
        nameError.innerHTML = "Name is required"
        return false;                         // return false mean dont't send the value
    }
    if (name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)) {
        nameError.innerHTML = "Write full name"
        return false;
    }

    // if the above two condition are not match, then show this.
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

// for phone input 
function validatePhone(){
    let phone = document.getElementById("contact-phone").value;  

    if (phone.length == 0) {
        phoneError.innerHTML = "Phone No is required"
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = "Number should be 10 digits"
        return false
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Number must be digit"
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

// for email input 
function validateEmail(){
    let email = document.getElementById("contact-email").value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required"
        return false;
    }

    if (email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-]/)) {
        email.innerHTML = "Email Invalid"
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

// for message text area
function validateMessage(){
    let message = document.getElementById("contact-message").value
    let required = 30;
    let left = required - message.length;

    // Run the code if the value of left is greater than zero, if it become zero stop the running code inside curly braces, and run the code outside curly braces.
    if (left > 0) {
        messageError.innerHTML = left + " More characters required"
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;

}

// for submit button 
function validateForm(){
    // if any of these condition is false, run the code
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        // we want to hide the error after 3 seconds.
        submitError.style.display = "block"
        submitError.innerHTML  = "Please fix error to submit"

        setTimeout(() => {
            submitError.style.display = "none"
        }, 3000);

        return false;
    }
}