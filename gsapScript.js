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

gsap.to(".h1-scroll", {
  scrollTrigger: {
    trigger: ".h1-scroll",
    // start: "top center",
    // markers: true,
    toggleActions: "restart pause resume none",
  },
  x: 0, // Move to center
  opacity: 1, // Make it visible
  duration: 1,
});

gsap.to(".h1-scroll-story", {
  scrollTrigger: {
    trigger: ".h1-scroll-story",
    // start: "top center",
    // markers: true,
    toggleActions: "restart pause resume none",
  },
  x: 0, // Move to center
  opacity: 1, // Make it visible
  duration: 1,
});

gsap.to(".col-home-scroll-up", {
  scrollTrigger: {
    trigger: ".col-home-scroll-up",
    // start: "top center bottom",
    //scrub: true,
    // markers: true,
    toggleActions: "restart pause resume none",
  },
  x: 0,
  opacity: 1,
  duration: 1.5,
});

gsap.to(".col-home-scroll-down", {
  scrollTrigger: {
    trigger: ".col-home-scroll-down",
    // start: "top center bottom",
    //scrub: true,
    // markers: true,
    toggleActions: "restart pause resume none",
  },
  x: 0,
  opacity: 1,
  duration: 1.5,
});
