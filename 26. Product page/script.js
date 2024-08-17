let productImage = document.getElementById("productImg")
let button = document.getElementsByClassName("btn")

button[0].onclick = function(){
    productImage.src = "image1.png"

    // when another button is clicked remove the active class from existing button.
    for (const element of button) {
        element.classList.remove("active")
    }

    // when the button is clicked add the active class
    element.classList.add("active")

}

button[1].onclick = function(){
    productImage.src = "image2.png"

    for (const element of button) {
        element.classList.remove("active")
    }

    element.classList.add("active")

}

button[2].onclick = function(){
    productImage.src = "image3.png"

    for (const element of button) {
        element.classList.remove("active")
    }

    element.classList.add("active")

}