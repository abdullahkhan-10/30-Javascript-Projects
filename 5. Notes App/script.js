const notesContainer = document.querySelector(".notes-container")
const myButton = document.querySelector(".btn")
let myNotes = document.querySelectorAll(".text")


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("saveData")
}
showNotes();

function updateStorage(){
    localStorage.setItem("saveData", notesContainer.innerHTML)
}

myButton.addEventListener("click", ()=>{
    let myText = document.createElement("p")
    let myImg = document.createElement("img")
    myText.className = 'text';
    myText.setAttribute("contenteditable", "true")
    myImg.src = "images/delete.png";

    // to show th elements on document
    notesContainer.appendChild(myText).appendChild(myImg);
    updateStorage()
})

notesContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        updateStorage()                  // to store remove data
    }
    else if(e.target.tagName === "p"){
        let myNotes = document.querySelectorAll(".text")
        myNotes.forEach( (nt) =>{             // to store each text data
            nt.onkeyup = function(){
                updateStorage()
            }
        })
    }
})




