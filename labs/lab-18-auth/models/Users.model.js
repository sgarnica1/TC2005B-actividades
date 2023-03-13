const db = require("../utils/db");

module.exports = class User {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(user) {
      (this.name = user.name || "John Doe"),
      (this.username = user.username || "johndoe"),
      (this.password = user.password || "password");
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    return db.execute(
      `
      INSERT INTO usuarios (name, username, password)
      VALUES(?, ?, ?)
      `,
      [this.name, this.username, this.password]
    );
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
    try {
      return db.execute("SELECT * FROM usuarios");
    } catch (err) {
      console.log(err);
    }
  }
};
