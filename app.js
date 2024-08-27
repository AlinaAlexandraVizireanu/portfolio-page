const menuBtn = document.querySelector(".menuBtn");
const menuContent = document.querySelector(".menu");
const interBubble = document.querySelector(".interactive");

let curX = 0;
let curY = 0;
let tgX = 0;
let tgY = 0;

function toggleClasses() {
  const classesToToggle = ["min-h-[30vh]", "opacity-100", "visible"];

  classesToToggle.forEach((className) => {
    menuContent.classList.toggle(className);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(
      curX
    )}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(() => {
      move();
    });
  }
  window.addEventListener("mousemove", (e) => {
    tgX = e.clientX;
    tgY = e.clientY;
  });

  move();
});

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
