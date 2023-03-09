const blogs = [
  {
    _id: 1,
    title: "Blog 1",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    _id: 2,
    title: "Blog 2",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    _id: 3,
    title: "Blog 3",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];

module.exports = class Blog {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(blog) {
    (this._id = (Math.random() * 1000).toFixed(0)),
      (this.title = blog.title || "Sin título"),
      (this.snippet = blog.snippet || "Sin resumen"),
      (this.body = blog.body || "Sin cuerpo");
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    blogs.push(this);
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
    return blogs;
  }
};
