const express = require("express");
const router = express.Router();

router.get("/fibonacci", (_, res) => {
  res.send(`
    <h1>Fibonacci</h1>
    <p>
      1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946
    </p>
    `);
});

router.get("/random", (_, res) => {
  res.send(`<h1>Random number: ${(Math.random() * 1000).toFixed(0)}</h1>`);
});

router.get("/date", (_, res) => {
  res.send(`<h1>Date: ${new Date().toDateString()}</h1>`);
})

router.get("/time", (_, res) => {
  res.send(`<h1>Time: ${new Date().toLocaleTimeString()}</h1>`);
});

module.exports = router;
