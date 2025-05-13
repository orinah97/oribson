// Signin (logging into you account)
const form = document.getElementById("fom");
const email = document.getElementById("email");
const password = document.getElementById("password");
const era = document.getElementById("error");

form.addEventListener("submit", e => {
    e.preventDefault(); // Prevent form submission by default

    const emailValue = email.value.trim();
    const password1Value = password.value.trim();

    if (!emailValue || !password1Value) {
        // alert("Please fill in all fields.");
        era.textContent = "Please fill in all fields."
        return;
    }

    //  email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        // alert("Please enter a valid email address.");
        era.textContent = "Please enter a valid email address."
        return;
    }

    if (password1Value.length < 6) {
        // alert("Password must be at least 6 characters long.");
        era.textContent = "Password must be at least 6 characters long."
        return;
    }



    // If all validations pass
    alert("Form submitted successfully!");
    form.submit(); 
});