const express = require("express");
const app = express();
const port = 3000;

// ROUTES ROUTERS
const indexRouter = require("./routes/index");
const utilsRouter = require("./routes/utils");
const authRouter = require("./routes/auth");

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/", indexRouter);
app.use("/utils", utilsRouter);
app.use("/auth", authRouter);

// 404
app.use((_, res) => {
  res.status(404).send("404: Page not found");
});

// RUN SERVER
app.listen(port, () => console.log("Server is running on port " + port));
