let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("back-btn");
let nextBtn = document.getElementById("next-btn");

// 1. images will be sliding on the mouse wheel, on laptop slide two finger up and down to slide the images.
scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;

  // to make image sliding smooth.
  scrollContainer.style.scrollBehavior = "auto";
});

// 2. to slide image through red icons.
nextBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += 900; // because gallery width is 900px.

  // to make image slide smooth
  scrollContainer.style.scrollBehavior = "smooth";
});

backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 900;
  scrollContainer.style.scrollBehavior = "smooth";
});
