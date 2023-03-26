// GLOBAL VARIABLES
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

const toggleNav = () => {
  menuBtn.classList.toggle("open");
  navLinks.classList.toggle("active");

  // animateHamburger();
};

// const animateHamburger = () => {
//   if (!menuOpen) {
//     menuBtn.classList.add("open");
//     menuOpen = true;
//   } else {
//     menuBtn.classList.remove("open");
//     menuOpen = false;
//   }
// };

menuBtn.addEventListener("click", toggleNav);
