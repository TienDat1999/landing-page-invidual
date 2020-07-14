const toggle = document.getElementById("toggle_menu");
const closeBtn = document.getElementById("close_menu");
const textMain = document.getElementById("textMain");

function openNav() {
  document.getElementById("mySidenav").style.right = "0";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.right = "-320px";
  document.body.style.backgroundColor = "white";
}

toggle.addEventListener("click", function () {
  openNav();
});
closeBtn.addEventListener("click", () => {
  closeNav();
});

const dataWrapperText = [
  "We extract data from servers and put it in the hands of users, where it’s most valuable.",
  "We extract data in the hands of users, where it’s .",
  "We extract data from uers, where it’s most valuable.",
];
setInterval(() => {
  textMain.textContent =
    dataWrapperText[Math.floor(Math.random() * dataWrapperText.length)];
}, 2500);
