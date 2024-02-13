//nav_menu
const navTriggerBtn = document.querySelector("#nav_trigger_btn");
const navMenu = document.querySelector("#nav_menu");

navTriggerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-is-open");
});

//swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //breakpoints
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// scrool reveal animation
const sr = ScrollReveal({
  origin: "bottm",
  distance: "600px",
  duration: 3000,
  dealy: 600,
});

// hero
sr.reveal(".hero__text", { origin: "top" });

// steps
// sr.reveal(".steps__step", { distance: "100px", interval: 100 });
sr.reveal(".steps__step", { origin: "bottom" });

// about
sr.reveal(".about__text", { origin: "left" });
sr.reveal(".about__img", { origin: "right", dealy: 800 });

// testimonial__bg
sr.reveal(".testimonial__bg", { origin: "bottom", dealy: 800 });
sr.reveal(".testimonial__titel", { origin: "bottom" });
// sr.reveal(".testimonial__slider", { origin: "bottom" });
// sr.reveal(".testimonial__bg", { dealy: 800 });
// sr.reveal(".testimonial__titel");
sr.reveal(".testimonial__slider", { dealy: 1000 });

//brands
sr.reveal(".brands__img", { dealy: 600, distance: "100px", interval: 100 });

//work
sr.reveal(".work__titel", { origin: "bottom" });
sr.reveal(".work__subtitel", { origin: "bottom", dealy: 800 });
sr.reveal(".work__grid", { origin: "bottom", dealy: 1000 });
// sr.reveal(".work__titel");
// sr.reveal(".work__subtitel");

//stats
// sr.reveal(".stats");
sr.reveal(".stats", { origin: "bottom" });
sr.reveal(".stats__item", {
  distance: "100px",
  interval: 100,
});

//news
sr.reveal(".news__titel", { origin: "bottom" });
sr.reveal(".news__subtitel", { origin: "bottom", dealy: 800 });
sr.reveal(".news__item", {
  dealy: 1000,
  distance: "100px",
  interval: 100,
});

//contact
sr.reveal(".contact", { origin: "bottom" });
sr.reveal(".contact__text", { dealy: 800 });

//footer
sr.reveal(".footer__item", {
  origin: "bottom",
  distance: "100px",
  interval: 100,
});
sr.reveal(".footer__copyright", {
  origin: "bottom",
  distance: "100px",
  interval: 100,
});
