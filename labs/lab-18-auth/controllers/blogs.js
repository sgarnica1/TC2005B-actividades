const Blog = require("../models/Blogs.model");

const blog_index = async (req, res) => {
  try {
    // CREATE A COOKIE AND GET IT
    const cookies = req.get("Cookie") || "";
    const cookie = cookies
      .split(";")
      .find((c) => c.trim().startsWith("consultas="));
    const consultas = cookie ? cookie.split("=")[1] : 0;

    res.setHeader("Set-Cookie", `consultas=${parseInt(consultas) + 1};}`);

    // CREATE A SESSION AND GET IT
    if (!req.session.last_blog) {
      req.session.last_blog = "No hay blogs visitados";
    }

    const blogs = await Blog.fetchAll();
    const [rows] = blogs;

    res.render("blogs/index", {
      title: "Blogs",
      blogs: rows,
      last_blog: req.session.last_blog ? req.session.last_blog : "",
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
  try {
    const newBlog = new Blog({
      title: req.body.title,
      snippet: req.body.snippet,
      body: req.body.body,
    });

    newBlog.save();

    req.session.last_blog = newBlog;

    const blogs = await Blog.fetchAll();
    const [rows] = blogs;

    res.status(200).render("blogs/index", {
      title: "Blogs",
      blogs: rows,
      last_blog: req.session.last_blog ? req.session.last_blog : "",
    });
  } catch (error) {
    console.log(error);
  }
};

const blog_details = async (req, res) => {
  const id = req.params.id;

  try {
    const blogs = await Blog.fetchAll();
    const [rows] = blogs;

    const singleBlog = rows.find((blog) => blog.id == id);

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
