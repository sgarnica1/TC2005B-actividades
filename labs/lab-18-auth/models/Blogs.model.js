const db = require("../utils/db");

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
    return db.execute(
      `
      INSERT INTO entradas (title, body)
      VALUES(?, ?)
      `,
      [this.title, this.body]
    );
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
    try {
      return db.execute("SELECT * FROM entradas");
    } catch (err) {
      console.log(err);
    }
  }
};
