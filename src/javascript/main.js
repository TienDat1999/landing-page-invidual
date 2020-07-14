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
  "Simply dummy text of the printing and typesetting industry.",
  "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
  "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
];
setInterval(() => {
  textMain.textContent =
    dataWrapperText[Math.floor(Math.random() * dataWrapperText.length)];
}, 2490);
