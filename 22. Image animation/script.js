let imageBox = document.querySelector(".img-box")
let imageWrap = document.querySelector(".wrap-img")
let originalImage = document.getElementById("original")
let spanLine = document.getElementById("line")


// 2
// To change only the width of (imageWrap) not its height.
originalImage.style.width = imageBox.offsetWidth + "px"


// 1
// To calculate space from the left side, and store in variable (leftSpace).
let leftSpace = imageBox.offsetLeft;

imageBox.onmousemove = function(e){
    // (e.pageX) will gave the x-axis position to the cursor.
    // we will subtract the left space of box from the space on which we are sliding our mouse (e.pageX).
    let boxWidth = (e.pageX - leftSpace) + "px"

    // Now we will set the value of (boxWidth) to (imageWrap), to dynamically change its width, when we move the cursor.
    imageWrap.style.width = boxWidth;

    // 3
    // To move the icon with mouse.
    spanLine.style.left = boxWidth;
}