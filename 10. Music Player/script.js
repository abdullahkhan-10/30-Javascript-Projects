let progressBar = document.getElementById("progress")
let mySong = document.getElementById("song")
let controlIcon = document.getElementById("ctrlIcon")

mySong.onloadedmetadata = function(){
    progressBar.max = mySong.duration;
    progressBar.value = mySong.currentTime;
}

function playPause(){
    if(controlIcon.classList.contains("fa-pause")){
        mySong.pause()                                 // if song is pause, then add play class to change play icon
        controlIcon.classList.remove("fa-pause")
        controlIcon.classList.add("fa-play")          // mean remove pause class and add play class
    }else{
        mySong.play()
        controlIcon.classList.add("fa-pause")
        controlIcon.classList.remove("fa-play")     // mean if have played the audio and want to stop, will add pause class and remove play class.
    }
}

if(mySong.play()){
    setInterval( () =>{
        progressBar.value = mySong.currentTime;       // to make the progress bar dynamic.
    }, 500)
}

// when ever we click on progress bar the song will start from there.
progressBar.onchange = function(){
    mySong.play()
    mySong.currentTime = progressBar.value
    controlIcon.classList.add("fa-pause")
    controlIcon.classList.remove("fa-play") 
}