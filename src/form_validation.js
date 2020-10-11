//inputs
const inputs = Array.from(document.querySelectorAll("input"));
console.log(inputs);
const form = document.querySelector("form");

const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
//errorSpans
const emailError = document.getElementById("emailError");
const countryError = document.getElementById("countryError");
const zipError = document.getElementById("zipError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

//eventListeners
email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.innerHTML = "";
  } else {
    showErrorEmail();
  }
});

country.addEventListener("input", () => {
  if (country.validity.valid) {
    countryError.innerHTML = "";
  } else {
    showErrorCountry();
  }
});

zip.addEventListener("input", () => {
  if (zip.validity.valid) {
    zipError.innerHTML = "";
  } else {
    showErrorZip();
  }
});

password.addEventListener("input", () => {
  if (password.validity.valid) {
    passwordError.innerHTML = "";
  } else {
    showErrorPassword();
  }
});

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.validity.valid) {
    confirmPasswordError.innerHTML = "";
  } else {
    showErrorConfirmPassword();
  }
});

form.addEventListener("submit", () => {
    
  if (!inputs.every((input) => input.validity.valid)) {
    alert("Please fill in all fields correctly");
    event.preventDefault();
  }
});

function showErrorEmail() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
}

function showErrorCountry() {
  if (country.validity.valueMissing) {
    countryError.textContent = "You need to enter a country.";
  } else if (country.validity.patternMismatch) {
    countryError.textContent = "Please enter a valid country name";
  } else if (country.validity.tooShort) {
    countryError.textContent = `Country should be at least ${country.minLength} characters; you entered ${country.value.length}.`;
  }
}

function showErrorZip() {
  if (zip.validity.valueMissing) {
    zipError.textContent = "You need to enter a zip code.";
  }
}

function showErrorPassword() {
  if (password.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
  }
}

function showErrorConfirmPassword() {
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords must match.";
  }
}
