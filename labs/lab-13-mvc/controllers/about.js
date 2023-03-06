const index = (req, res) => {
  res.render("about/index", {
    title: "About",
  });
};

module.exports = {
  index,
};
