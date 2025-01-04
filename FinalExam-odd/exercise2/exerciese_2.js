function validateLoginForm(email, password) {
  const errors = {
    email: [],
    password: [],
    isValid: true,
  };

  // Email validation
  if (!email) {
    errors.email.push("Email is required");
    errors.isValid = false;
  } else {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(email)) {
      errors.email.push("Please enter a valid email address");
      errors.isValid = false;
    }
  }

  // Password validation
  if (!password) {
    errors.password.push("Password is required");
    errors.isValid = false;
  } else {
    if (password.length < 8) {
      errors.password.push("Password must be at least 8 characters long");
      errors.isValid = false;
    }
    if (!/[A-Z]/.test(password)) {
      errors.password.push(
        "Password must contain at least one uppercase letter"
      );
      errors.isValid = false;
    }
    if (!/[a-z]/.test(password)) {
      errors.password.push(
        "Password must contain at least one lowercase letter"
      );
      errors.isValid = false;
    }
    if (!/[0-9]/.test(password)) {
      errors.password.push("Password must contain at least one number");
      errors.isValid = false;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.password.push(
        "Password must contain at least one special character (!@#$%^&*)"
      );
      errors.isValid = false;
    }
  }

  return errors;
}

// Real-time validation
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailErrors = document.getElementById("emailErrors");
const passwordErrors = document.getElementById("passwordErrors");

emailInput.addEventListener("input", function () {
  const result = validateLoginForm(this.value.trim(), passwordInput.value);
  emailErrors.innerHTML = result.email
    .map((error) => `<div class="error-message">${error}</div>`)
    .join("");
  this.classList.toggle("valid-field", result.email.length === 0);
  this.classList.toggle("invalid-field", result.email.length > 0);
});

passwordInput.addEventListener("input", function () {
  const result = validateLoginForm(emailInput.value.trim(), this.value);
  passwordErrors.innerHTML = result.password
    .map((error) => `<div class="error-message">${error}</div>`)
    .join("");
  this.classList.toggle("valid-field", result.password.length === 0);
  this.classList.toggle("invalid-field", result.password.length > 0);
});

// Form submission
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const validationResult = validateLoginForm(email, password);

    if (!validationResult.isValid) {
      emailErrors.innerHTML = validationResult.email
        .map((error) => `<div class="error-message">${error}</div>`)
        .join("");

      passwordErrors.innerHTML = validationResult.password
        .map((error) => `<div class="error-message">${error}</div>`)
        .join("");

      // Add shake animation to button
      const button = this.querySelector("button");
      button.style.animation = "none";
      button.offsetHeight; // Trigger reflow
      button.style.animation = "shake 0.5s";
    } else {
      console.log("Form is valid, proceeding with submission");
      // Add your submission logic here
      alert("Form submitted successfully!");
    }
  });

// Add shake animation keyframes
const style = document.createElement("style");
style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
    `;
document.head.appendChild(style);

/*
1. Form Validation Features:
- Real-time validation as you type
- Visual feedback with green/red borders
- Detailed error messages
- Password requirements list
- Form submission handling

2. User Interface Elements:
- Clean, modern design
- Responsive layout
- Clear visual hierarchy
- Password requirements checklist
- Proper input spacing and sizing

3. Enhanced User Experience:
- Real-time validation feedback
- Shake animation on invalid submission
- Success alert on valid submission
- Proper error message positioning
- Visual feedback through color changes

(!) To test the form:
1. Try submitting without any input
2. Enter an invalid email address
3. Enter a password that doesn't meet requirements
4. Test real-time validation by typing
5. Submit with valid credentials
(+) How It Works
- The user enters their email and password.
- Validation runs in real time and displays feedback.
On submission:

- If valid, the form shows a success message.
- If invalid, the error messages are displayed, and the submit button shakes.

(+) Form
- The form has two input fields:
- Email input with type email.
- Password input with type password.
- Both inputs display error messages dynamically below the fields (<div id="emailErrors">, <div id="passwordErrors">).
- A submit button triggers form validation.

(+) Validation Logic
- The validateLoginForm(email, password) function:
- Checks for empty fields.
- Validates the email format using a regular expression.
- Validates the password for:
- Minimum length (8 characters).
- Uppercase, lowercase, numeric, and special characters.
- Returns an object with error messages and a flag (isValid) indicating whether the form is valid.

(+) Form Submission
On submission:
- Prevents the default behavior.
- Revalidates the form.
- Shows errors if invalid.
- Triggers a shake animation for the submit button if validation fails.
- Logs a success message or displays an alert if validation passes.
*/
