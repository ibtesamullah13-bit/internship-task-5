const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;
    const password = document.getElementById("password").value;

    message.style.color = "red";

    if (
        name === "" ||
        email === "" ||
        age === "" ||
        course === "" ||
        password === ""
    ) {
        message.textContent = "Please fill in all fields.";
        return;
    }

    if (Number(age) <= 0 || !Number.isInteger(Number(age))) {
        message.textContent = "Please enter a valid age.";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = "Please enter a valid email address.";
        return;
    }

    if (password.length < 8) {
        message.textContent =
            "Password must be at least 8 characters long.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Registration Successful!";

    form.reset();
});
