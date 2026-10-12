
const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strengthText");
const strengthBar = document.getElementById("strengthBar");
const validationMessage = document.getElementById("validationMessage");

passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    let score = 0;

    if (password.length >= 8) score++;
    if (hasUppercase) score++;
    if (hasLowercase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    if (password.length === 0) {
        strengthText.textContent = "Not entered";
        strengthText.className =
            "text-sm font-semibold text-gray-500";

        strengthBar.style.width = "0%";
        strengthBar.className =
            "h-2 rounded-full transition-all duration-300";

        validationMessage.textContent =
            "Enter a password to check its strength.";
        validationMessage.className =
            "mt-3 text-sm text-gray-500";

    } else if (score <= 2) {
        strengthText.textContent = "Weak";
        strengthText.className =
            "text-sm font-semibold text-red-500";

        strengthBar.style.width = "33%";
        strengthBar.className =
            "h-2 rounded-full bg-red-500 transition-all duration-300";

        validationMessage.textContent =
            "Weak password. Try adding more character types and length.";
        validationMessage.className =
            "mt-3 text-sm text-red-500";

    } else if (score <= 4) {
        strengthText.textContent = "Medium";
        strengthText.className =
            "text-sm font-semibold text-yellow-600";

        strengthBar.style.width = "66%";
        strengthBar.className =
            "h-2 rounded-full bg-yellow-500 transition-all duration-300";

        validationMessage.textContent =
            "Good start! Add any missing character types.";
        validationMessage.className =
            "mt-3 text-sm text-yellow-600";

    } else {
        strengthText.textContent = "Strong";
        strengthText.className =
            "text-sm font-semibold text-green-600";

        strengthBar.style.width = "100%";
        strengthBar.className =
            "h-2 rounded-full bg-green-500 transition-all duration-300";

        validationMessage.textContent =
            "Great! All five checks are satisfied.";
        validationMessage.className =
            "mt-3 text-sm text-green-600";
    }
});
