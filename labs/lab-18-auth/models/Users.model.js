const db = require("../utils/db");
const bcrypt = require("bcryptjs");

module.exports = class User {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(user) {
    (this.name = user.name || "John Doe"),
      (this.username = user.username || "johndoe"),
      (this.password = user.password || "password");
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    return bcrypt
      .hash(this.password, 12)
      .then((hashedPassword) => {
        return db.execute(
          `
          INSERT INTO usuarios (name, username, password)
          VALUES(?, ?, ?)
          `,
          [this.name, this.username, hashedPassword]
        );
      })
      .catch((err) => console.log(err));
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
    try {
      return db.execute("SELECT * FROM usuarios");
    } catch (err) {
      console.log(err);
    }
  }

  static fetchOne(username) {
    return db.execute("SELECT * FROM usuarios WHERE username = ?", [username]);
  }
};
