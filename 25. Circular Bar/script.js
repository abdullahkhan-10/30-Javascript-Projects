let myNumber = document.getElementById("number")
let counter = 0;

setInterval(() => {
    // if else statement to stop the counter at 65%
    if (counter == 65) {
        clearInterval()
    }else{
        // increase the counter by one untill it reach 65%, and add it the div which has id number.
        counter += 1
        myNumber.innerHTML = counter + "%"

    }
}, 30);