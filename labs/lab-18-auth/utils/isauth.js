module.exports = (request, response, next) => {
  if (request.session.user) {
    return next();
  }
  response.redirect("/users/signin");
}