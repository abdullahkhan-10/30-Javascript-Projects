// 1.
let speech = new SpeechSynthesisUtterance();
let button = document.querySelector("button");
let textArea = document.querySelector("textarea");

// 2. 
let myVoices = []
let voiceSelect = document.querySelector("select");

// 1.convert text to default voice.
button.addEventListener("click", ()=>{
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech)
})

// 2. to set other voices in select option
window.speechSynthesis.onvoiceschanged = () =>{
    // The getVoices method will provide all the voices available on the device, and store them in array (myVoices), which we initially declare empty.
    myVoices = window.speechSynthesis.getVoices();

    // so by defaul it will speeak the voice that is available on device.
    speech.voice = myVoices[0]

    // to display each voice in dropdown
    myVoices.forEach( (voiceObj, i) =>{
        voiceSelect.options[i] = new Option(voiceObj.name, i)
    })
}

// 3. to add change event on select, mean that when we change the accent from dropdown, the voice will be spoken on that accent.
voiceSelect.addEventListener("change", ()=>{
    speech.voice = myVoices[voiceSelect.value]
})
