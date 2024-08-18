let inputBox = document.querySelector(".input-box")
let mySearch = document.querySelector(".search")
let closeIcon = document.querySelector(".close-icon")

// console.log(inputBox, mySearch, closeIcon);

mySearch.addEventListener("click", () =>{
    inputBox.classList.add("open")
})

closeIcon.addEventListener("click", () =>{
    inputBox.classList.remove("open")
})
