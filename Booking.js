function bookService() {
    // 1. Capture the input values from the HTML
    // These IDs (name, email, message) match your booking.html perfectly
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const msgElement = document.getElementById('msg');

    // 2. Professional Validation
    // .trim() ensures that a user cannot just send empty spaces
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        msgElement.innerText = "Please fill in all fields to proceed.";
        msgElement.style.color = "#ef4444"; // Matches your error red
        return; // Stop the function here if fields are empty
    }

    // 3. Success Feedback
    // This updates the <p id="msg"></p> in your HTML to show the success message
    msgElement.innerText = "Thank you, " + name + "! Your project details have been received.";
    msgElement.style.color = "#3b82f6"; // Matches your primary brand color

    // 4. Console Verification (For Developer Debugging)
    // This allows you to check in the browser console that the data was captured
    console.log("--- New Booking Request ---");
    console.log("Client Name:", name);
    console.log("Client Email:", email);
    console.log("Project Details:", message);
    console.log("---------------------------");
    
    // Optional: Clear the form after a successful submission
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
}

