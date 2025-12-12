document.getElementById("regForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let pass = document.getElementById("password").value;
    let repass = document.getElementById("repass").value;
    let phone = document.getElementById("contact").value.trim();

    // First name validation
    if (fname.length < 3) {
        return showMsg("❌ First name must be at least 3 letters", "red");
    }

    // Last name validation
    if (lname.length < 3) {
        return showMsg("❌ Last name must be at least 3 letters", "red");
    }

    // Phone number must be exactly 10 digits
    if (phone.length !== 10 || isNaN(phone)) {
        return showMsg("❌ Phone number must be 10 digits", "red");
    }

    // Password match
    if (pass !== repass) {
        return showMsg("❌ Passwords do not match!", "red");
    }

    showMsg("✔ Registration Successful!", "green");
});

// Message function
function showMsg(message, color) {
    document.getElementById("message").style.color = color;
    document.getElementById("message").innerText = message;
}