let myList = document.getElementsByClassName("list")
let rightBox = document.getElementById("right")
let leftBox = document.getElementById("left")

// for loop is used to access each list item, and store in variable (element).
for (const element of myList) {
    element.addEventListener("dragstart", (e) =>{
        // we will store the element in varaible (selected), which we have actually selected to drag.
        let selected = e.target;

        // 1
        // to prevent default behavior of rightBox when drag over the element.
        rightBox.addEventListener("dragover", (e) =>{
            e.preventDefault()
        })

        // To drop the element in right box from left box
        rightBox.addEventListener("drop", (e) =>{
            // put/add the selected element in the right box.
            rightBox.appendChild(selected)

            // To clear the selection and drag the other elements.
            selected = null;
        })

        // 2
        leftBox.addEventListener("dragover", (e) =>{
            e.preventDefault()
        })

        // To drop the element back in left box from right box.
        leftBox.addEventListener("drop", (e) =>{
            leftBox.appendChild(selected)
            selected = null;
        })
    })
}