/*
Nathan Karp
njk5782
IST256 Programming for the Web
Assignment 3 - DOM Portfolio Enhancement
Submission Date: 02/11/2026
https://njk5782.github.io/nathankarp.github.io/
*/

// Hover effect on featured project image
const projectImg = document.querySelector(".project-image");

if (projectImg) {
  projectImg.addEventListener("mouseenter", () => {
    projectImg.style.transform = "scale(1.03)";
    projectImg.style.transition = "transform 150ms ease";
  });

  projectImg.addEventListener("mouseleave", () => {
    projectImg.style.transform = "scale(1)";
  });
}

// Toggle About, Skills, Projects, and Contact sections
function setupToggle(sectionId, buttonSelector, label) {
  const body = document.querySelector(`#${sectionId}-body`);
  const btn = document.querySelector(buttonSelector);

  if (!body || !btn) return;

  // Set initial button text based on current state
  btn.textContent = body.hasAttribute("hidden") ? `Show ${label}` : `Hide ${label}`;

  btn.addEventListener("click", () => {
    const hidden = body.hasAttribute("hidden");

    if (hidden) {
      body.removeAttribute("hidden");
      btn.textContent = `Hide ${label}`;
    } else {
      body.setAttribute("hidden", "");
      btn.textContent = `Show ${label}`;
    }
  });
}

// One call per section
setupToggle("about", '.toggle-btn[data-target="about"]', "About");
setupToggle("skills", '.toggle-btn[data-target="skills"]', "Skills");
setupToggle("projects", '.toggle-btn[data-target="projects"]', "Projects");
setupToggle("contact", '.toggle-btn[data-target="contact"]', "Contact");

// Handle contact form submission with feedback
const contactForm = document.querySelector(".contact-form");
const feedback = document.querySelector("#form-feedback");

if (contactForm && feedback) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameValue = document.querySelector("#name")?.value.trim();
    const name = nameValue ? nameValue : "there";

    feedback.textContent = `Thanks, ${name}! Your message was received.`;
    // Show Bootstrap alert
    feedback.classList.remove("d-none");
    feedback.classList.add("alert-success");
    feedback.classList.remove("alert-danger");

    contactForm.reset();
    // Hide feedback after 4 seconds
    setTimeout(() => {
        feedback.classList.add("d-none");
        feedback.textContent = "";
    }, 4000);
  });
}