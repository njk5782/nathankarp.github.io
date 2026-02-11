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