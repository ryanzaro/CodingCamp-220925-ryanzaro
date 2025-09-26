// Welcome Message
window.addEventListener("DOMContentLoaded", () => {
  welcomeMessage();
});

function welcomeMessage() {
  let username = prompt("Masukan Username Anda:");
  if (username) {
    document.getElementById("username").textContent = username;
  } else {
    alert("Welcome to my Portfolio!");
  }
}

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("All fields are required!");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address!");
    return;
  }

  const phonePattern = /^[0-9]{8,15}$/;
  if (!phone.match(phonePattern)) {
    alert("Please enter a valid phone number (8-15 digits)!");
    return;
  }

  alert("Thank you, " + name + "! Your message has been sent successfully.");
  document.getElementById("contactForm").reset();
});

// Current Time in Profile Box
function updateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  document.getElementById("current-time").textContent = now.toLocaleDateString(
    "en-EN",
    options
  );
}

setInterval(updateTime, 1000);
updateTime();
