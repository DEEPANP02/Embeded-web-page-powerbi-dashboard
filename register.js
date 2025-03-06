document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        alert("Password must be strong (8+ characters, uppercase, lowercase, number, special character)");
        return;
    }

    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("password", password);
    alert("Registration successful!");
    window.location.href = "login.html";
});
