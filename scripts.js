document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".newsletter .message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the form from refreshing the page

        const email = emailInput.value.trim();

        if (email) {
            messageDiv.innerHTML = `Thank you! Your email address <strong>${email}</strong> has been added to our mailing list!`;
            messageDiv.style.color = "black"; // Set the text color to black for success
        } else {
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.style.color = "#E53E3E"; // Red color for error
        }
    });
});
