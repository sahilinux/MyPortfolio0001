// ===============================
// Typing effect in hero section
// ===============================
const typingElement = document.querySelector(".typing");
const texts = ["Web Developer", "Golang Learner", "Tech Enthusiast"];
let i = 0, j = 0, currentText = "";
let isDeleting = false;
let typingSpeed = 120;

function typingEffect() {
  const fullText = texts[i];

  if (isDeleting) {
    typingElement.innerHTML = fullText.substring(0, j--) + "<span class='cursor'>|</span>";
  } else {
    typingElement.innerHTML = fullText.substring(0, j++) + "<span class='cursor'>|</span>";
  }

  if (!isDeleting && j === fullText.length + 1) {
    isDeleting = true;
    typingSpeed = 70;
    setTimeout(typingEffect, 1500); // pause before deleting
    return;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
    typingSpeed = 120;
  }

  setTimeout(typingEffect, typingSpeed);
}

typingEffect();


// ===============================
// Navbar Active Link on Scroll
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
