async function registerUser(event) {
    event.preventDefault(); // Prevent the default form submission (involves reloading the page)

    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const action = 'register'; // We use "register" action

    const data = { action, email, password };

    try {
        const response = await fetch("http://localhost:8000/api/auth/register/", {  // Adjust the endpoint accordingly
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        alert(result.message); // Show success or error message

    } catch (error) {
        console.error("Error registering user:", error);
        alert("Registration failed: " + error.message);
    }
}

// Ensure the DOM is loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.getElementById("register_button"); // Check the ID here
    if (registerButton) {
        registerButton.addEventListener("click", registerUser);
    } else {
        console.error("Register button not found in the DOM.");
    }
});