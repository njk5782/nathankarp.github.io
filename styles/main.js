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