// Image sources and their index
const imageLinks = document.querySelectorAll('[data-bs-toggle="modal"]');
const images = [
  "https://i.pinimg.com/564x/be/f5/1e/bef51eb072f9944553181d078bae17c5.jpg",
  "https://i.pinimg.com/564x/91/27/46/912746cbc50756032266eaefcb87a269.jpg",
  // Add other images here...
];

let currentIndex = 0; // Track the current image index

// Update modal image when clicked
imageLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    currentIndex = parseInt(this.getAttribute("data-bs-index")); // Get the index of clicked image
    document.getElementById("modalImage").src = images[currentIndex];
  });
});

// Function to show the next image
function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Wrap around if we go past the last image
  document.getElementById("modalImage").src = images[currentIndex];
}

// Function to show the previous image
function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around if we go before the first image
  document.getElementById("modalImage").src = images[currentIndex];
}

// Event listeners for the next/prev buttons
document.getElementById("nextBtn").addEventListener("click", showNextImage);
document.getElementById("prevBtn").addEventListener("click", showPrevImage);

// Swipe functionality
let startX = 0;
let endX = 0;
let isSwiping = false;

// Detect swipe direction
function handleSwipe(event) {
  if (event.type === "touchstart") {
    startX = event.touches[0].clientX;
    isSwiping = true; // Start swipe
  } else if (event.type === "touchmove" && isSwiping) {
    endX = event.touches[0].clientX;
    const offsetX = startX - endX;

    if (Math.abs(offsetX) > 50) {
      // Determine the swipe direction based on offset
      if (offsetX > 0) {
        showNextImage(); // Swipe left -> Next image
      } else {
        showPrevImage(); // Swipe right -> Previous image
      }
      isSwiping = false; // End swipe
    }
  } else if (event.type === "touchend") {
    isSwiping = false; // End swipe on touchend
  }
}

// Attach swipe events to the modal image
const modalImage = document.getElementById("modalImage");
modalImage.addEventListener("touchstart", handleSwipe);
modalImage.addEventListener("touchmove", handleSwipe);
modalImage.addEventListener("touchend", handleSwipe);
