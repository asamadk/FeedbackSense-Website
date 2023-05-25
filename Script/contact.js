// Replace with your EmailJS user ID, service ID, and template ID
const EMAILJS_USER_ID = "lSgZlPGOpBAgIyy1g";
const EMAILJS_SERVICE_ID = "service_xx4o5ya";
const EMAILJS_TEMPLATE_ID = "template_u8p4iwp";

// Function to send email using EmailJS
function sendEmail(event) {
  event.preventDefault();

  // Get form data
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Send email using EmailJS
  emailjs
    .send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        email: email,
        subject: subject,
        message: message,
      },
      EMAILJS_USER_ID
    )
    .then(
      function (response) {
        console.log("Email sent successfully!", response.status, response.text);
        // Display success message or perform other actions
      },
      function (error) {
        console.log("Failed to send email:", error);
        // Display error message or perform other actions
      }
    );
}

// Attach form submit event listener
document.getElementById("contact-form").addEventListener("submit", sendEmail);
