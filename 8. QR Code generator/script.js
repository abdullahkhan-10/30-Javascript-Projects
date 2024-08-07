const imageBox = document.getElementById("imgBox");
const qrCodeImage = document.getElementById("qr-img")
const userInput = document.getElementById("input-text")




function generateCode(){
    if(userInput.value.length > 0){      // mean if user type anythng, apply if statement     
        qrCodeImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userInput.value;

        imageBox.classList.add("show-img")
    }else{
        userInput.classList.add("error")          // if user does not enter anything then apply else statement, on error class we have added animation
        setTimeout( () =>{
            userInput.classList.remove("error")   // it mean after one second remove the animation

        }, 1000)
    }
   
}