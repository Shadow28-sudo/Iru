let ball = document.querySelector("#ball");

ball.addEventListener("click", changeTheme);

let isBallOnLeftSide = true;

function changeTheme(event) {
  if (isBallOnLeftSide) {
    ball.style.left = "40px";
    document.body.classList.add("dark-theme"); // Add a CSS class
  } else {
    ball.style.left = "5px";
    document.body.classList.remove("dark-theme"); // Remove the CSS class
  }
  isBallOnLeftSide = !isBallOnLeftSide; // Toggle the flag
}

function onpageshow() {
  const heet = document.querySelector('.heet');
  heet.style.display = 'flex';
}

function onpagehide() {
  const heet = document.querySelector('.heet');
  heet.style.display = 'none';
}
