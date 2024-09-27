var ball = document.querySelector("#ball");

ball.addEventListener("click", changeTheme);

var leftside = true;

function changeTheme() {
  if (leftside == true) {
    ball.style.left = "40px";
    document.querySelector("body").style.backgroundColor = "#111111";
    ball.style.backgroundColor = "#111111";
    document.querySelector(".mode").style.backgroundColor = "#ffffff";
    document.querySelector(".links").style.color = "#fff";document.querySelector(".links1").style.color = "#fff";
   document.querySelector(".links2").style.color = "#fff";
    document.querySelector(".sh").style.backgroundColor = "#fff";
    document.querySelector(".nav").style.borde = "#fff";
    document.querySelector(".a-header").style.color = "#fff";
    leftside = false;
  } else {
    ball.style.left = "5px";
    document.querySelector("body").style.backgroundColor = "#ffffff";
    ball.style.backgroundColor = "#ffffff";
    document.querySelector(".mode").style.backgroundColor = "#111111";
    document.querySelector(".sh").style.backgroundColor = "#111";
    document.querySelector(".links").style.color = "#111";
    document.querySelector(".links1").style.color = "#111";
    document.querySelector(".links2").style.color = "#111";
    document.querySelector(".a-header").style.color = "#111";
    document.querySelector(".nav").style.border = "#111";
    leftside = true;
  }
}

function onpageshow() {
  const heet = document.querySelector('.heet')
  heet.style.display = 'flex'
}
function onpagehide() {
  const heet = document.querySelector('.heet')
  heet.style.display = 'none'
}

