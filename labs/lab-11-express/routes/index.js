const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  res.send(`
    <h1>Bienvenido</h1>
    <a href="/utils/random">Random Number</a>
    <br>
    <br>
    <a href="/utils/fibonacci">Fibonacci</a>
    <br>
    <br>
    <a href="/utils/date">Date</a>
    <br>
    <br>
    <a href="/utils/time">Time</a>
    <br>
    <br>
    <a href="/auth/login">Login</a>
  `);
});

module.exports = router;
