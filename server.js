const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken"); // Added this!

const app = express();

app.use(express.json());
app.use(cors());

// =========================
// DATABASE
// =========================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

// =========================
// BOOKING MODEL
// =========================
const Booking = mongoose.model("Booking", {
  name: String,
  email: String,
  service: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

// =========================
// AUTH ROUTES & MIDDLEWARE
// =========================
const ADMIN_USER = "admin";
const ADMIN_PASS = "1234";

// LOGIN ROUTE (Generates real JWT)
app.post("/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = jwt.sign({ user: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return res.json({ success: true, token: token });
  }

  return res.status(401).json({ success: false, message: "Invalid login" });
});

// AUTH MIDDLEWARE (Verifies real JWT)
function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(403).json({ message: "No token" });

  const token = auth.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid or expired token" });
    next();
  });
}

// =========================
// BOOKING ROUTES
// =========================
app.post("/bookings", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ message: "Error saving" });
  }
});

app.get("/bookings", authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Error fetching" });
  }
});

app.delete("/bookings/:id", authMiddleware, async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));



