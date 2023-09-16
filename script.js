const heading = document.querySelector("h1");

gsap.from(heading, {
  autoAlpha: 0,
  x: -1700,
  duration: 2,
  ease: "linear",
});
