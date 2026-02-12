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

// Toggle Skills section
const skillsBtn = document.querySelector('.toggle-btn[data-target="skills"]');
const skillsSection = document.querySelector("#skills-body");

if (skillsBtn && skillsSection) {
  skillsBtn.addEventListener("click", () => {
    const isHidden = skillsSection.hasAttribute("hidden");
    if (isHidden) {
      skillsSection.removeAttribute("hidden");
      skillsBtn.textContent = "Hide Skills";
    } else {
      skillsSection.setAttribute("hidden", "");
      skillsBtn.textContent = "Show Skills";
    }
  });
}

// Toggle About section
const aboutBtn = document.querySelector('.toggle-btn[data-target="about"]');
const aboutBody = document.querySelector("#about-body");

if (aboutBtn && aboutBody) {
  aboutBtn.addEventListener("click", () => {
    const hidden = aboutBody.hasAttribute("hidden");

    if (hidden) {
      aboutBody.removeAttribute("hidden");
      aboutBtn.textContent = "Hide About";
    } else {
      aboutBody.setAttribute("hidden", "");
      aboutBtn.textContent = "Show About";
    }
  });
}

// Toggle Projects section
const projectsBtn = document.querySelector('.toggle-btn[data-target="projects"]');
const projectsBody = document.querySelector("#projects-body");

if (projectsBtn && projectsBody) {
  projectsBtn.addEventListener("click", () => {
    const hidden = projectsBody.hasAttribute("hidden");

    if (hidden) {
      projectsBody.removeAttribute("hidden");
      projectsBtn.textContent = "Hide Projects";
    } else {
      projectsBody.setAttribute("hidden", "");
      projectsBtn.textContent = "Show Projects";
    }
  });
}

// Toggle Contact section
const contactBtn = document.querySelector('.toggle-btn[data-target="contact"]');
const contactBody = document.querySelector("#contact-body");

if (contactBtn && contactBody) {
  contactBtn.addEventListener("click", () => {
    const hidden = contactBody.hasAttribute("hidden");

    if (hidden) {
      contactBody.removeAttribute("hidden");
      contactBtn.textContent = "Hide Contact";
    } else {
      contactBody.setAttribute("hidden", "");
      contactBtn.textContent = "Show Contact";
    }
  });
}

// Handle contact form submission with feedback
const contactForm = document.querySelector(".contact-form");
const feedback = document.querySelector("#form-feedback");

if (contactForm && feedback) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameValue = document.querySelector("#name")?.value.trim();
    const name = nameValue ? nameValue : "there";

    feedback.textContent = `Thanks, ${name}! Your message was received.`;
    feedback.style.marginTop = "1rem";

    contactForm.reset();
  });
}