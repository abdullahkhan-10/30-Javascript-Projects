
let myToastBox = document.getElementById("toastBox")

let successMesg = ' <i class="fa-solid fa-circle-check"></i> Successfully Submitted'
let errorMesg = ' <i class="fa-solid fa-circle-xmark"></i> Please fix the error'
let invalidMesg = ' <i class="fa-solid fa-circle-exclamation"></i> Invalid Input, check again'

function showToast(mesg){
    let myToast = document.createElement("div")
    myToast.classList.add("toast")
    myToast.innerHTML = mesg;

    myToastBox.appendChild(myToast);

    if(mesg.includes("error")){
        myToast.classList.add("error")    // add error class
    }
    if(mesg.includes("Invalid")){
        myToast.classList.add("invalid")   // add invalid class
    }

    setTimeout( ()=>{
        myToast.remove()
    }, 6000)
}