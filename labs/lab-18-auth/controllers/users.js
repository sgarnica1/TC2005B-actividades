const User = require("../models/Users.model");
const bcrypt = require("bcryptjs");

const signupForm = (req, res) => {
  res.render("users/signup", {
    title: "Sign Up",
    isLoggedIn: req.session.user || false,
    csrfToken: req.csrfToken(),
  });
};

const signup = (req, res, next) => {
  const { name, username, password } = req.body;
  const user = new User({ name, username, password });
  user
    .save()
    .then(([rows]) => {
      req.session.successMessage = "User created successfully";
      res.redirect("/users/signin");
    })
    .catch((error) => next(error));
};

const signinForm = (req, res) => {
  res.render("users/signin", {
    title: "Sign In",
    isLoggedIn: req.session.user || false,
    csrfToken: req.csrfToken(),
  });
};

const signin = (req, res, next) => {
  const { username, password } = req.body;
  User.fetchOne(username)
    .then(([rows]) => {
      if (rows.length === 0) {
        req.session.errorMessage = "Invalid username or password";
        return res.redirect("/users/signin");
      }

      const user = rows[0];
      bcrypt
        .compare(password, user.password)
        .then((doMatch) => {
          console.log(doMatch);
          if (doMatch) {
            req.session.user = user;
            req.session.successMessage = "User logged in successfully";
            return req.session.save((err) => {
              res.redirect("/blogs");
            });
          }
          req.session.errorMessage = "Invalid username or password";
          return res.redirect("/users/signin");
        })
        .catch((error) => next(error));
    })
    .catch((error) => next(error));
};

const signout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/users/signin");
  });
};

module.exports = {
  signupForm,
  signup,
  signinForm,
  signin,
  signout,
};
