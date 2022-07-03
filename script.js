const colors = [
  "aquamarine",
  "rgb(240,230,140)",
  "#20b2aa",
  "rgb(255,69,0)",
  "tomato",
  "#a0522d",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random numbner between 0-5
  const randomNumber = 4;
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber];
});
