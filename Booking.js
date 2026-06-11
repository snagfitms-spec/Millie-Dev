document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bookingForm");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        // =========================
        // 1. COLLECT DATA
        // =========================
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value.trim();
        const message = document.getElementById("message").value.trim();
        const msg = document.getElementById("msg");

        // =========================
        // 2. VALIDATION
        // =========================
        if (!name || !email || !message) {
            msg.innerText = "Please fill in all required fields.";
            msg.style.color = "red";
            return;
        }

        // =========================
        // 3. SEND TO BACKEND
        // =========================
        try {
            const response = await fetch("http://localhost:5000/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    service,
                    message
                })
            });

            const data = await response.json();

            // =========================
            // 4. SUCCESS RESPONSE
            // =========================
            if (data.success) {
                msg.innerText = "Booking submitted successfully!";
                msg.style.color = "lightgreen";

                form.reset();
            } else {
                msg.innerText = "Failed to submit booking.";
                msg.style.color = "red";
            }

        } catch (error) {
            console.error("Booking Error:", error);
            msg.innerText = "Server error. Please try again.";
            msg.style.color = "red";
        }
    });

});
