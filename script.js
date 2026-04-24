// =========================
// SMOOTH SCROLL
// =========================
function scrollToPaket() {
  document.getElementById("paket").scrollIntoView({
    behavior: "smooth"
  });
}

function scrollTocontact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}


// =========================
// INTERSECTION OBSERVER (APPLE STYLE REVEAL)
// =========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // hanya sekali animasi
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".fade-up, .pricing-item, .carousel-card").forEach(el => {
  observer.observe(el);
});


// =========================
// PARALLAX BACKGROUND (SAFE)
// =========================
document.addEventListener("mousemove", (e) => {
  const bg = document.querySelector(".hero-bg"); // FIX: sebelumnya .bg-image

  if (!bg) return;

  let x = (window.innerWidth - e.pageX) / 120;
  let y = (window.innerHeight - e.pageY) / 120;

  bg.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
});


// =========================
// TYPING EFFECT
// =========================
const texts = [
  "Jadi percaya diri",
  "Lancar speaking",
  "Siap interview kerja",
  "Naik level karirmu"
];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  const typing = document.getElementById("typing");
  if (!typing) return;

  let currentText = texts[i];

  typing.textContent = currentText.substring(0, j);

  if (!isDeleting) {
    j++;
    if (j > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();


// =========================
// BUTTON WA CLICK EFFECT
// =========================
function goToWA(pesan, btn) {
  if (btn) btn.style.transform = "scale(0.95)";

  const url = "https://wa.me/628113339545?text=" + encodeURIComponent(pesan);

  setTimeout(() => {
    window.open(url, "_blank");
    if (btn) btn.style.transform = "";
  }, 150);
}


// =========================
// NAVBAR SCROLL EFFECT (FIX DOUBLE)
// =========================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});


// =========================
// ACTIVE LINK ON SCROLL (IMPROVED)
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


// =========================
// HAMBURGER MENU
// =========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// =========================
// TOUCH EFFECT BUTTON (NON CLICKABLE LOOK)
// =========================
document.querySelectorAll(".pricing-btn").forEach(btn => {

  btn.addEventListener("touchstart", function() {
    this.style.transform = "scale(0.96)";
    this.style.opacity = "0.8";
  });

  btn.addEventListener("touchend", function() {
    this.style.transform = "";
    this.style.opacity = "";
  });

});


// =========================
// HERO REVEAL (SAFE)
// =========================
window.addEventListener("load", () => {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("active");
    }, 150 * index); // delay bertahap biar elegant
  });
});

// =========================
// TESTIMONI CAROUSEL (SMOOTHER)
// =========================
document.addEventListener("DOMContentLoaded", () => {

  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".carousel-card");

  if (!track || cards.length === 0) return;

  let current = Math.floor(cards.length / 2);

  function updateCarousel() {
    cards.forEach((card, index) => {
      card.classList.toggle("active", index === current);
    });

    const card = cards[current];

    const offset = card.offsetLeft;
    const center = (track.offsetWidth / 2) - (card.offsetWidth / 2);

    track.style.transform = `translateX(${center - offset}px)`;
  }

  function autoSlide() {
    current++;

    if (current >= cards.length - 3) {
      current = 3;
    }

    updateCarousel();
  }

  setInterval(autoSlide, 3000);
  updateCarousel();

});


// =========================
// FORM TO WHATSAPP
// =========================
function sendToWA(e) {
  e.preventDefault();

  const nama = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const pesan = document.querySelector('textarea').value;

  const text =
    `Halo Admin,%0A%0A` +
    `Saya ingin konsultasi:%0A%0A` +
    `Nama: ${nama}%0A` +
    `Email: ${email}%0A` +
    `Pesan: ${pesan}`;

  const url = "https://wa.me/628113339545?text=" + text;

  window.open(url, "_blank");
}