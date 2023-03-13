const User = require("../models/Users.model");

const signupForm = (_, res) => {
  res.render("users/signup", { title: "Sign Up" });
};

const signup = (req, res, next) => {
  const { name, username, password } = req.body;
  const user = new User({ name, username, password });
  user
    .save()
    .then(([rows]) => {
      console.log(rows);
      req.session.successMessage = "User created successfully";
      res.redirect("/blogs");
      // res.redirect("/users/login");
    })
    .catch((error) => next(error));
};

const signinForm = (_, res) => {
  res.render("users/signin", { title: "Sign In" });
};

module.exports = {
  signupForm,
  signup,
  signinForm,
};
