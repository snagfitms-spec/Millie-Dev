async function bookService() {
  const btn = document.getElementById("btn");
  const msg = document.getElementById("msg");

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  // Validation
  if (!name || !email || !service || !message) {
    msg.innerText = "Please fill all fields";
    return;
  }

  btn.disabled = true;
  msg.innerText = "Sending booking...";

  try {
    const res = await fetch("https://millie-dav.onrender.com/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, service, message })
    });

    const data = await res.json();

    if (res.ok) {
      msg.innerText = "Booking successful!";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    } else {
      msg.innerText = data.message || "Booking failed";
    }
  } catch (err) {
    msg.innerText = "Server error. Try again.";
  }

  btn.disabled = false;
}
