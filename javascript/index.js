// GLOBAL VARIABLES
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

const toggleNav = () => {
  menuBtn.classList.toggle("open");
  navLinks.classList.toggle("active");
};

menuBtn.addEventListener("click", toggleNav);
