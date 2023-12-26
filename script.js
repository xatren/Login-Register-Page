const togglePasswordVisibility = (loginPassId, loginEyeId) => {
  const input = document.getElementById(loginPassId),
    iconEye = document.getElementById(loginEyeId);

  iconEye.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";
      iconEye.classList.add("ri-eye-line");
      iconEye.classList.remove("ri-eye-off-line");
    } else {
      input.type = "password";
      iconEye.classList.remove("ri-eye-line");
      iconEye.classList.add("ri-eye-off-line");
    }
  });
};

togglePasswordVisibility("login-pass", "login-eye");
togglePasswordVisibility("confirm-pass", "confirm-eye");

document
  .getElementById("login_form")
  .addEventListener("submit", function (event) {
    const password = document.getElementById("login-pass").value;
    const confirmPassword = document.getElementById("confirm-pass").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      event.preventDefault();
    }
  });
