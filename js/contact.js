// Contact form handler using EmailJS
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your public key
  // You'll need to sign up at https://www.emailjs.com/ and get your own public key
  emailjs.init("4JW5-iQmneNc7OUGB"); // Replace with your actual public key after signing up

  const contactForm = document.getElementById("contact-form");
  const submitButton = document.querySelector(
    '#contact-form button[type="submit"]'
  );

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Basic validation
      if (!name || !email || !subject || !message) {
        showFormMessage("Please fill in all fields", "error");
        return;
      }

      // Email validation
      if (!isValidEmail(email)) {
        showFormMessage("Please enter a valid email address", "error");
        return;
      }

      // Disable submit button and show loading state
      submitButton.disabled = true;
      submitButton.innerHTML =
        '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';

      // Prepare template parameters for EmailJS
      const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
        to_email: "bagusalmahenzar@gmail.com",
      };

      // Send email using EmailJS
      emailjs
        .send("service_9ag5d3g", "template_wcsh828", templateParams) // Replace with your service ID and template ID
        .then(function (response) {
          console.log("SUCCESS!", response.status, response.text);
          showFormMessage(
            "Your message has been sent successfully!",
            "success"
          );
          contactForm.reset();
        })
        .catch(function (error) {
          console.log("FAILED...", error);
          showFormMessage(
            "Failed to send message. Please try again later.",
            "error"
          );
        })
        .finally(function () {
          // Re-enable submit button
          submitButton.disabled = false;
          submitButton.innerHTML = "Send Message";
        });
    });
  }

  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Helper function to show form messages
  function showFormMessage(message, type) {
    const messageElement = document.getElementById("form-message");

    if (messageElement) {
      messageElement.textContent = message;
      messageElement.className = "mt-4 text-center";

      if (type === "error") {
        messageElement.classList.add("text-red-600");
      } else if (type === "success") {
        messageElement.classList.add("text-green-600");
      }

      // Clear message after 5 seconds
      setTimeout(() => {
        messageElement.textContent = "";
        messageElement.className = "mt-4 text-center";
      }, 5000);
    } else {
      // If message element doesn't exist, create one
      const newMessageElement = document.createElement("div");
      newMessageElement.id = "form-message";
      newMessageElement.className = "mt-4 text-center";
      newMessageElement.textContent = message;

      if (type === "error") {
        newMessageElement.classList.add("text-red-600");
      } else if (type === "success") {
        newMessageElement.classList.add("text-green-600");
      }

      // Insert after the form
      contactForm.parentNode.insertBefore(
        newMessageElement,
        contactForm.nextSibling
      );

      // Clear message after 5 seconds
      setTimeout(() => {
        newMessageElement.textContent = "";
        newMessageElement.className = "mt-4 text-center";
      }, 5000);
    }
  }
});
