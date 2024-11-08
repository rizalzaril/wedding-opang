// gsap.registerPlugin(ScrollTrigger);

// // Setup ScrollTrigger for each card
// document.querySelectorAll(".card").forEach((card) => {
//   const speed = card.getAttribute("data-speed");

//   gsap.fromTo(
//     card,
//     {
//       y: -100 * speed, // Initial position (offscreen)
//     },
//     {
//       y: 0, // Final position (onscreen)
//       scrollTrigger: {
//         trigger: card, // Trigger the animation on the card element
//         start: "top bottom", // When the top of the element reaches the bottom of the viewport
//         end: "bottom top", // When the bottom of the element reaches the top of the viewport
//         scrub: true, // Makes the animation sync with the scroll position
//       },
//     }
//   );
// });

// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".card-2", {
//   scrollTrigger: {
//     trigger: ".card-1",
//     start: "top center",
//     endTrigger: ".card-3",
//     markers: true,
//     toggleActions: "restart pause resume none",
//   },
//   x: 10,
//   rotation: 360,
//   duration: 3,
// });

gsap.registerPlugin(ScrollTrigger);

// gsap.to(".h1-scroll", {
//   scrollTrigger: {
//     trigger: ".h1-scroll",
//     // start: "top center",
//     // markers: true,
//     toggleActions: "restart pause resume none",
//   },
//   x: 0, // Move to center
//   opacity: 1, // Make it visible
//   duration: 1,
// });

// JavaScript with GSAP
gsap.utils.toArray(".transition-scale-scroll").forEach((element, index) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 85%", // Starts animation slightly later for a softer entrance
      toggleActions: "restart none restart none",
      markers: false, // Hide markers for a cleaner look
    },
    scale: 1, // Full scale at the end
    opacity: 1, // Full visibility at the end
    duration: 1.2, // Longer duration for smoother animation
    ease: "power2.out", // Softer easing for smoothness
    display: "block",
    // delay: index * 0.15, // Less delay for more continuity
  });
});

// Select all sections with the class .love-story
let sections = gsap.utils.toArray(".love-story");

// Set up the horizontal scroll animation
// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1), // Move each section horizontally by 100%
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".scroll-container", // Container that holds the sections
//     pin: true, // Pin the container during scroll
//     scrub: 1, // Smooth, synced scrolling
//     snap: {
//       snapTo: 1 / (sections.length - 1), // Snap to each section
//       duration: 0.2, // Duration of the snapping animation
//       ease: "power1.inOut", // Smooth snap effect
//     },
//     end: () => "+=" + document.querySelector(".scroll-container").scrollWidth, // End after the total scrollable width
//   },
// });

gsap.to(".col-home-scroll-up", {
  scrollTrigger: {
    trigger: ".col-home-scroll-up",
    start: "top center bottom",
    //scrub: true,
    // markers: true,
    toggleActions: "restart none restart none",
  },
  x: 0,
  opacity: 1,
  duration: 1.5,
});

gsap.to(".col-home-scroll-down", {
  scrollTrigger: {
    trigger: ".col-home-scroll-down",
    start: "top center bottom",
    //scrub: true,
    // markers: true,
    toggleActions: "restart none restart none",
  },
  x: 0,
  opacity: 1,
  duration: 1.5,
});
