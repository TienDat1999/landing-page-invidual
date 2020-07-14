const toggle = document.getElementById("toggle_menu");
const closeBtn = document.getElementById("close_menu");

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
