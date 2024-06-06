document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('emailForm').addEventListener('submit', function(event) {
        var emailInput = document.getElementById('email');
        var emailError = document.getElementById('emailError');
        var email = emailInput.value.trim();

        // Regular expression for email validation
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            event.preventDefault();
        } else {
            emailError.textContent = '';
        }
    });
});