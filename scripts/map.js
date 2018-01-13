let toggle = document.getElementById("toggle"); //Button
let slider = document.querySelector(".slider"); //Div
var demos = document.getElementsByClassName("slider");

for (var i = 0; i < demos.length; i++) {
  demos[i].addEventListener("mouseover", toggleSlider, false); //click Event
}

function toggleSlider(event) {
  let target = event.target;
  if (target.classList.contains("opened")) {
    console.log("open");
    target.classList.remove("opened");
    target.classList.add("closed");
  } else {
    console.log("closed");
    target.classList.remove("closed");
    target.classList.add("opened");
  }
}
