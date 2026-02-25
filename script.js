function copyEmail(email) {
  navigator.clipboard.writeText("contactaziz.ibrahim@gmail.com");
  email.textContent = "[Copied!]";
  setTimeout(() => 
    email.textContent = "email.", 1500);
}
