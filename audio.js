// Get references to the audio element and icon
const audio = document.querySelector("#song");
const audioIcon = document.querySelector("#audio-icon");

// Function to toggle audio between play and pause
function toggleAudio() {
  if (!audio.paused) {
    audio.pause();
    audioIcon.classList.remove("fa-pause");
    audioIcon.classList.add("fa-play"); // Change icon to play when paused
    audioIcon.style.animation = "none"; // Remove spinning animation when paused
  } else {
    audio.play();
    audioIcon.classList.remove("fa-play");
    audioIcon.classList.add("fa-pause"); // Change icon to pause when playing
    audioIcon.style.animation = "spin 2s linear infinite"; // Add spinning animation when playing
  }
}

// Attempt to start playing audio automatically on page load
window.addEventListener("DOMContentLoaded", () => {
  // Check if audio can autoplay; if not, wait for user interaction to play it
  audio.play().catch((error) => {
    console.warn("Autoplay was prevented, requiring user interaction.");
    // Change the icon to play if autoplay is blocked
    audioIcon.classList.remove("fa-pause");
    audioIcon.classList.add("fa-play");
    audioIcon.style.animation = "none"; // No animation on play icon
  });
});
