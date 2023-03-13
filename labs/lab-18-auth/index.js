const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const port = 3000;

// VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", __dirname + "/views/");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

// ROUTES ROUTERS
const blogsRouter = require("./routes/blogs");
const aboutRouter = require("./routes/about");
const userRouter = require("./routes/users");

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

// ROUTES
app.get("/", (_, res) => {
  res.redirect("/blogs");
});
app.use("/about", aboutRouter);
app.use("/blogs", blogsRouter);
app.use("/users", userRouter);

// 404
app.use((_, res) => {
  res.status(404).render("404", {
    title: "404",
  });
});
// RUN SERVER
app.listen(port, () => console.log("Server is running on port " + port));
