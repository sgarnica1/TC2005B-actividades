const blog_index = async (req, res) => {
  try {
    const blogs = [
      {
        _id: 1,
        title: "Blog 1",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
    ];
    res.render("blogs/index", {
      title: "Blogs",
      blogs: blogs,
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
  const blog = {
    title: req.body.title,
    snippet: req.body.snippet,
    body: req.body.body,
  };

  res.status(200).json(blog);
};

const blog_details = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const singleBlog = {
      _id: 1,
      title: "Blog 1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    };
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
