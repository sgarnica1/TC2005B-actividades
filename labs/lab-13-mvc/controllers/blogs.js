const Blog = require("../models/Blogs.model");

const blog_index = async (req, res) => {
  try {
    console.log(Blog.fetchAll());
    res.render("blogs/index", {
      title: "Blogs",
      blogs: Blog.fetchAll(),
    });
  } catch (error) {
    console.log(error);
  }
};

const blog_create_get = async (_, res) => {
  res.render("blogs/create", {
    title: "Create a new Blog",
  });
};

const blog_create_post = async (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    snippet: req.body.snippet,
    body: req.body.body,
  });

  newBlog.save();

  res.status(200).render("blogs/index", {
    title: "Blogs",
    blogs: Blog.fetchAll(),
  });
};

const blog_details = async (req, res) => {
  const id = req.params.id;
  const blogs = Blog.fetchAll();
  const singleBlog = blogs.find((blog) => blog._id == id);
  try {
    res.render("blogs/details", {
      blog: singleBlog,
      title: singleBlog.title,
    });
  } catch (error) {
    res.status(404).render("404", { title: "Blog not found" });
  }
};

module.exports = {
  blog_index,
  blog_create_get,
  blog_create_post,
  blog_details,
};
