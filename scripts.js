// scripts.js - GlowCraft Skincare

document.addEventListener("DOMContentLoaded", () => {
  console.log("GlowCraft Website Loaded");

  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Basic validation
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        feedback.textContent = "Please fill in all fields.";
        feedback.style.color = "red";
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "red";
        return;
      }

      // Simulate submission
      feedback.textContent = "Thank you! Your message has been sent.";
      feedback.style.color = "green";
      form.reset();
    });
  }
});
