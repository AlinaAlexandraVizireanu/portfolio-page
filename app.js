const menuBtn = document.querySelector(".menuBtn");
const menuContent = document.querySelector(".menu");

function toggleClasses() {
  const classesToToggle = ["min-h-[30vh]", "opacity-100", "visible"];

  classesToToggle.forEach((className) => {
    menuContent.classList.toggle(className);
  });
}

menuBtn.addEventListener("click", () => {
  const classesToToggle = ["min-h-[30vh]", "opacity-100", "visible"];

  classesToToggle.forEach((className) => {
    menuContent.classList.toggle(className);
  });

  if (menuContent.classList.contains("visible")) {
    menuContent.classList.remove("invisible", "h-0", "opacity-0");
  } else {
    menuContent.classList.add("invisible", "h-0", "opacity-0");
  }

  if (menuContent.classList.contains("visible")) {
    menuBtn.src = "./assets/images/icon-menu-close.svg";
    menuBtn.alt = "close";
  } else {
    menuBtn.src = "./assets/images/icon-menu.svg";
    menuBtn.alt = "open";
  }
});
