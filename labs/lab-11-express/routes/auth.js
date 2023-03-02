const express = require("express");
const router = express.Router();
const fileSystem = require("fs");

router.get("/login", (_, res) => {
  res.send(` 
    <h1>Login</h1>     
    <form action="/auth/login" method="POST">
      <label for="username">Username</label><br>
      <input type="text" id="username" name="username" placeholder="Username" required><br>
      <label for="password">Password</label><br>
      <input type="password" id="password" name="password"  placeholder="Password" required><br><br>
      <button type="submit">Login</button>
    </form> `);
});

router.post("/login", (req, res) => {
  console.log(req.body);

  const fileName = "logs.json";
  writeFile(fileName, JSON.stringify(req.body));

  res.status(200).send("Login successful");
});

// UTILS
function writeFile(fileName, content) {
  fileSystem.writeFileSync(fileName, content, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File saved");
  });
}

module.exports = router;
