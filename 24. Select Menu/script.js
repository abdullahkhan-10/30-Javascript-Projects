let selectField = document.getElementById("select-field")
let selectText = document.getElementById("text")
let allOptions = document.getElementsByClassName("options")
let myList = document.getElementById("list")
let arrowIcon = document.getElementById("arrow-icon")

// 1
// (options) is an array, so we need to loop through it and get each its element.
for (const element of allOptions) {
    // When we click on any li element, it will be displayed in the p tag which has id (text).
    element.onclick = function(){
        selectText.innerHTML = this.textContent

        // To hide the ul element after selecting an li element.
        myList.classList.toggle("hide")

        // To bring arrow back in its own position once element is selected.
        arrowIcon.classList.toggle("rotate")
        
    }
}

// 2
// when we click on the select field, it will display and hide the ul element.
selectField.onclick = function(){
    myList.classList.toggle("hide")

    // 3
    // To rotate the arrow icon, when click on the text field.
    arrowIcon.classList.toggle("rotate")
}