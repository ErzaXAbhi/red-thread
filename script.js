const heading = document.querySelector("h1");
const para = document.querySelector("p");
const menu = document.querySelector(".menu");
const video = document.querySelector("video");

gsap.from(heading, {
  autoAlpha: 0,
  x: -1700,
  duration: 2,
  ease: "linear",
  delay: 0.5,
});

gsap.from(video, {
  autoAlpha: 0,
  x: -1700,
  duration: 2,
  ease: "linear",
  delay: 0.5,
});

gsap.from(para, {
  autoAlpha: 0,
  x: 1700,
  duration: 2,
  ease: "linear",
  delay: 0.5,
});

gsap.from(menu, {
  autoAlpha: 0,
  x: 1700,
  duration: 2,
  ease: "linear",
});
