const inputBox = document.getElementById("input-box");
const showResult = document.getElementById("results-container")

function addTask(){
    if (inputBox.value === "") {
        alert("You must write something!")
    }else{
        let myLi = document.createElement("li")         // create li element
        myLi.innerHTML = inputBox.value
        showResult.appendChild(myLi)

        let mySpan = document.createElement("span")    // create span element
        mySpan.innerHTML = "\u00d7"
        myLi.appendChild(mySpan)
    }
    inputBox.value = ""
    saveData();
}

showResult.addEventListener("click", (e) =>{               // event listener on result-container
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")               // toggle the class of li
        saveData();
    }else if(e.target.tagName === "SPAN"){                 // remove parent element of span which is li.
        e.target.parentElement.remove()
        saveData();
    }
})

function saveData(){
    localStorage.setItem("myData", showResult.innerHTML)  // mean save data in the innerHTML OF showResult which is (li).
}
function showTask(){
    showResult.innerHTML = localStorage.getItem("myData")
}
showTask();
