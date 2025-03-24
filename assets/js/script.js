// For custom JS if needed later
console.log("Pillow Gold Developers website loaded");
// Scroll Animation - Fade In Sections on Scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("[data-service]");
    const dropdown = document.getElementById("serviceSelect");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const service = btn.getAttribute("data-service");
        dropdown.value = service;
      });
    });
  });