let displayTime = document.getElementById("time")

let [seconds, minutes, hours] = [0,0,0];
let timer = null;

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;

        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h +":"+ m +":"+ s;
}

// this funtion will run the stopwatch function after every second, and add value in timer variable.
function watchStart(){
    
    timer = setInterval(stopWatch, 1000)

    // if(timer !== null){
    //     clearInterval(timer);
    // }
}

// this function will stopt the watch
function watchStop(){
    clearInterval(timer);
}

// this function will reset the stopwatch.
function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}