function login() {
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;

    // Demo roles
    if (u === "admin" && p === "password") {
        localStorage.setItem("auth", "true");
        localStorage.setItem("role", "admin");
        window.location.href = "dashboard.html";
    } 
    else if (u === "staff" && p === "password") {
        localStorage.setItem("auth", "true");
        localStorage.setItem("role", "staff");
        window.location.href = "dashboard.html";
    }
    else {
        document.getElementById("error").textContent = "Invalid credentials";
    }
}


