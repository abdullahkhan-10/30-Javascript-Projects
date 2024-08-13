let toggleIcon = document.getElementById("icon");

function toggleTheme() {
  // when we click on icon apply this class to body, also check from the inspect option.
  document.body.classList.toggle("dark-theme");

  // when the body contain the above class , change the src of icon into sun.png.
  if (document.body.classList.contains("dark-theme")) {
    toggleIcon.src = "assets/sun.png";
  } else {
    toggleIcon.src = "assets/moon.png";
  }
}
