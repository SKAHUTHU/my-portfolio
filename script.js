function greetVisitor() {
    let name = document.getElementById("visitorName").value.trim();

    if (name === "") {
        document.getElementById("greeting").textContent =
            "Please enter your name first!";
    } else {
        document.getElementById("greeting").textContent =
            "Hello, " + name + "! Welcome to my website.";
    }
}