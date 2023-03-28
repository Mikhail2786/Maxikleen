// GLOBAL VARIABLES
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const carousel = document.querySelector(".carousel");

const carouselArray = [
  "../images/clean-office.jpg",
  "../images/office.jpg",
  "../images/living-room.jpg",
  "../images/bar-2.jpg",
];

// calls startCarousel every 3 seconds
const interval = setInterval(() => {
  startCarousel();
}, 3000);

// starting index for the carousel array
let index = 1;

const startCarousel = () => {
  // Changes the background image of the carousel element to the next image in the array
  carousel.style.backgroundImage = `url(${carouselArray[index++]})`;

  // Animates the transition between the previous and new image
  carousel.classList.remove("fade");
  void carousel.offsetWidth;
  carousel.classList.add("fade");

  // Resets the index to loop back to the first image in the array
  index = index > carouselArray.length - 1 ? 0 : index;
};

// opens and closes the mobile nav and animates the hamburger menu
const toggleMobileNav = () => {
  menuBtn.classList.toggle("open");
  navLinks.classList.toggle("active");
};

menuBtn.addEventListener("click", toggleMobileNav);
