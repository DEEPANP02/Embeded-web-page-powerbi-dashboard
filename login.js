document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");
    
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password!");
    }
});
