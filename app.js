const menuBtn = document.querySelector(".menuBtn");
const menuContent = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menuContent.classList.toggle("hidden");

  if (!menuContent.classList.contains("hidden")) {
    menuBtn.src = "./assets/images/icon-menu-close.svg";
  } else {
    menuBtn.src = "./assets/images/icon-menu.svg";
  }
});
