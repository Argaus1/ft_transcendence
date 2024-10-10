const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

app.post("/", (req, res) => {
	const { email, password } = req.body;

	// Check if the user already exists (will need to change that later)
	const existingUser = users.find(user => user.email === email);
	if (user) {
		return res.json({ message: "Login successful!" });
	}

	// Add the new user to the database
	users.push({ email, password });
	return res.status(201).json({ message: "User registered successfully!" }); // Created status
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
