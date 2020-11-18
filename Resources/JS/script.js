import emailjs from "emailjs-com";
import regeneratorRuntime from "regenerator-runtime";
import corejs from "core-js";

const { EmailJSResponseStatus } = require("emailjs-com");

/*DOM Elements*/
const header = document.querySelector("header");
//Sections
const features = document.querySelector(".section-features");
const meals = document.querySelector(".section-meals");
const cities = document.querySelector(".section-cities");
const testimonials = document.querySelector(".section-testimonials");
const plans = document.querySelector(".section-plans");
const steps = document.querySelector(".section-steps");
const contact = document.querySelector(".section-contact");

const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");

//nav-links
const navFood = document.querySelector("#food-delivery");
const navHow = document.querySelector("#how-it-works");
const navCities = document.querySelector("#our-cities");
const navSignUp = document.querySelector("#sign-up");
const hamburger = document.querySelector(".mobile-nav-icon");
const links = document.querySelector(".main-nav");

//buttons
const btnHungry = document.querySelector("#btn-hungry");
const btnQuery = document.querySelector("#btn-query");
const footerAbout = document.querySelector("#footer-about");
const footerContact = document.querySelector("#footer-contact");
const footerApps = document.querySelector("#footer-apps");
const footerReviews = document.querySelector("#footer-reviews");
const btnsOpenModal = document.querySelectorAll(".btn--sign-up");
const btnCloseModal = document.querySelector(".btn--close-modal");
const callMe = document.querySelector(".call-me");
const askQuery = document.querySelector("#ask-query");

//Modal
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const cookieCracker = function () {
  const cookie = document.createElement("div");
  cookie.classList.add("cookie-message");
  cookie.innerHTML = `We use cookies to improve user experience! <button class="btn btn--close-cookie">Got it!</button>`;
  //   header.appendChild(cookie);
  features.insertAdjacentElement("beforebegin", cookie);
  document
    .querySelector(".btn--close-cookie")
    .addEventListener("click", function () {
      cookie.remove();
    });
  cookie.style.backgroundColor = "#2d3436";
  cookie.style.width = "100%";
};

//Slider Functions for Hamburger

const slideUp = (target, duration) => {
  //   debugger;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = `${duration}ms`;
  target.style.boxSizing = "border-box";
  target.style.height = `${target.offsetHeight}px`;

  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.style.overflow = "hidden";

  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

const slideDown = (target, duration) => {
  //   debugger;
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") {
    display = "block";
  }
  target.style.display = display;

  let height = target.offsetHeight;
  target.style.height = 0;
  target.style.padingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.style.overflow = "hidden";

  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = `${duration}ms`;
  target.style.height = `${height}px`;

  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");

  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

const slideToggle = (target, duration = 500, trigger = hamburger) => {
  if (window.getComputedStyle(target).display === "none") {
    // console.log();
    trigger.firstChild.style.color = "#009679";
    return slideDown(target, duration);
  } else {
    trigger.firstChild.style.color = "#fff";
    return slideUp(target, duration);
  }
};

const navLinkHandlers = function () {
  navFood.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      left: window.pageXOffset + features.getBoundingClientRect().left,
      top: window.pageYOffset + features.getBoundingClientRect().top,
      behavior: "smooth",
    });
  });

  navCities.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      left: window.pageXOffset + cities.getBoundingClientRect().left,
      top: window.pageYOffset + cities.getBoundingClientRect().top,
      behavior: "smooth",
    });
  });

  navHow.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      left: window.pageXOffset + steps.getBoundingClientRect().left,
      top: window.pageYOffset + steps.getBoundingClientRect().top,
      behavior: "smooth",
    });
  });

  navSignUp.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      left: window.pageXOffset + plans.getBoundingClientRect().left,
      top: window.pageYOffset + plans.getBoundingClientRect().top,
      behavior: "smooth",
    });
  });

  //slide toggle
  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    slideToggle(links, 200);
  });
};

const btnHandlers = function () {
  btnHungry.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      left: window.pageXOffset + plans.getBoundingClientRect().left,
      top: window.pageYOffset + plans.getBoundingClientRect().top,
      behavior: "smooth",
    });
  });

  btnQuery.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      left: window.pageXOffset + contact.getBoundingClientRect().left,
      top: window.pageYOffset + contact.getBoundingClientRect().top,
      behavior: "smooth",
    });
  });

  askQuery.addEventListener("click", async function (event) {
    event.preventDefault();
    await emailjs.send(
      "service_hcarrak",
      "template_9zsluzh",
      {
        to_name: `${document.querySelector("#name").value}`,
        message: `Thank you for writing to DeliVariety, 
      Hope you are having a great day.  
      We will get back to you as soon as possible! Stay fiesty!`,
        reply_to: `${document.querySelector("#email").value}`,
      },
      "user_VNsa5bQOZ4xIMhtGBrVbt"
    );
  });

  //Modal Handlers

  btnsOpenModal.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  callMe.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
  });

  footerAbout.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      left: window.pageXOffset + features.getBoundingClientRect().left,
      top: window.pageYOffset + features.getBoundingClientRect().top,
      behavior: "smooth",
    });
  });

  footerApps.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      left: window.pageXOffset + steps.getBoundingClientRect().left,
      top: window.pageYOffset + steps.getBoundingClientRect().top,
      behavior: "smooth",
    });
  });

  footerReviews.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      left: window.pageXOffset + testimonials.getBoundingClientRect().left,
      top: window.pageYOffset + testimonials.getBoundingClientRect().top,
      behavior: "smooth",
    });
  });

  footerContact.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      left: window.pageXOffset + contact.getBoundingClientRect().left,
      top: window.pageYOffset + contact.getBoundingClientRect().top,
      behavior: "smooth",
    });
  });
};

const stickyNavCallback = function (entries, observer) {
  const [entry] = entries;
  !entry.isIntersecting
    ? nav.classList.add("sticky")
    : nav.classList.remove("sticky");
};

const navHeight = nav.getBoundingClientRect().height;

const observerActions = function (element, callbackFn, rootMargin) {
  const observer = new IntersectionObserver(callbackFn, {
    root: null,
    treshold: 0,
    rootMargin: `-${rootMargin}px`,
  });
  observer.observe(element);
};

const init = function () {
  cookieCracker();
  navLinkHandlers();
  btnHandlers();
  observerActions(header, stickyNavCallback, navHeight);
};

init();
