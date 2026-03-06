gsap.registerPlugin(ScrollTrigger);

const car = document.getElementById("car");
const trail = document.getElementById("trail");
const letters = gsap.utils.toArray(".value-letter");
const letterEl = document.querySelector(".letter");

const carWidth = car.offsetWidth;
const endX = window.innerWidth + carWidth;

gsap.to(car, {
  scrollTrigger: {
    trigger: ".section",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: ".track"
  },
  x: endX,
  ease: "none",
  onUpdate: function() {
    const carX = gsap.getProperty(car, "x") + carWidth / 2;

    letters.forEach((letter) => {
      const letterX = letter.getBoundingClientRect().left;
      letter.style.opacity = carX >= letterX ? 1 : 0;
    });

    gsap.set(trail, { width: gsap.getProperty(car, "x") + carWidth });
  }
});

gsap.to("#box1", {
  scrollTrigger: {
    trigger: ".section",
    start: "top+=15% top",
    end: "top+=30% top",
    scrub: true
  },
  opacity: 1,
  x: 0
});

gsap.to("#box2", {
  scrollTrigger: {
    trigger: ".section",
    start: "top+=30% top",
    end: "top+=45% top",
    scrub: true
  },
  opacity: 1,
  x: 0
});

gsap.to("#box3", {
  scrollTrigger: {
    trigger: ".section",
    start: "top+=50% top",
    end: "top+=65% top",
    scrub: true
  },
  opacity: 1,
  x: 0
});

gsap.to("#box4", {
  scrollTrigger: {
    trigger: ".section",
    start: "top+=65% top",
    end: "top+=80% top",
    scrub: true
  },
  opacity: 1,
  x: 0
});