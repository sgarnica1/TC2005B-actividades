const index = (req, res) => {
  res.render("about/index", {
    title: "About",
    isLoggedIn: req.session.user || false,
  });
};

module.exports = {
  index,
};
