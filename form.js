document.getElementById("regForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop auto-refresh

    let pass = document.getElementById("password").value;
    let repass = document.getElementById("repass").value;

    if (pass !== repass) {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerText = "❌ Passwords do not match!";
        return;
    }

    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerText = "✔ Registration Successful!";
});