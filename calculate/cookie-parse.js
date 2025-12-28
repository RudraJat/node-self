const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret123",
    resave: false,
    saveUninitialized: false
  })
);

// Home route
app.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <input name="username" placeholder="username">
      <input name="password" placeholder="password">
      <button type="submit">Login</button>
    </form>
  `);
});

// Login route - store session
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    req.session.user = username;
    res.send("Login successful. Go to /dashboard");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

// Middleware to protect route
function protect(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}

// Protected dashboard
app.get("/dashboard", protect, (req, res) => {
  res.send("Welcome to Dashboard " + req.session.user);
});

// Logout
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("Logged out");
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
