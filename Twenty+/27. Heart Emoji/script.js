let image = document.querySelector(".container")
let heartIcon = document.querySelector(".my-heart")

// add double click event listner on image icon.
image.addEventListener("dblclick", (e) =>{
    // 1
    heartIcon.classList.add("active")
    
    // remove active class after one second.
    setTimeout(() => {
        heartIcon.classList.remove("active")
    }, 1000);

    // 2
    // console.log(e);
    // The event double click has many properties and positions, Here we need to calculate the x and y position of the double click event.
    let xValue = e.clientX - e.target.offsetLeft;
    let yValue = e.clientY - e.target.offsetTop;

    // display the heart.
    // set the position of the heart element using the x and y values, when ever we double click on the picture the red heart will popup. because we are injecting the top and left position dynamically. 
    heartIcon.style.left = `${xValue}px`
    heartIcon.style.top = `${yValue}px`
    
})