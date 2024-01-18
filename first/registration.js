function validateForm() {
    // Validate name
    var name = document.getElementById("name").value;
    if (!/^[a-zA-Z ]+$/.test(name)) {
        alert("Name should not contain numbers or special characters");
        return false;
    }

    // Validate date of birth
    var dob = new Date(document.getElementById("dob").value);
    var currentDate = new Date();
    if (dob >= currentDate) {
        alert("Date of Birth should be before the current date");
        return false;
    }

    // Validate email
    var email = document.getElementById("email").value;
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Invalid email address");
        return false;
    }

    // Validate mobile number
    var mobile = document.getElementById("mobile").value;
    if (!/^\d{10}$/.test(mobile)) {
        alert("Invalid mobile number");
        return false;
    }

    // Validate password and re-password
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    if (password !== repassword) {
        alert("Passwords do not match");
        return false;
    }

    // Additional validations can be added for courses, branch, semester, etc.

    // If all validations pass, display the details on the second page
    displayDetails();
    return false;
}

function displayDetails() {
    var form = document.getElementById("registrationForm");
    var details = "Registration Details:\n";
    for (var i = 0; i < form.elements.length - 1; i++) {
        details += form.elements[i].name + ": " + form.elements[i].value + "\n";
    }
    alert(details);
}
