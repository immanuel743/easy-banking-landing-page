"use strict";
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const menu = document.querySelector(".nav__item");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
  overlay.classList.remove("hidden");
  close.classList.add("active");

  hamburger.classList.add("hide");
});
close.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.add("hidden");
  close.classList.toggle("active");
  hamburger.classList.remove("hide");
});

window.addEventListener("click", (e) => {
  if (e.target == overlay) {
    menu.classList.remove("active");
    overlay.classList.add("hidden");
    close.classList.toggle("active");
    hamburger.style.display = "block";
  }
});
