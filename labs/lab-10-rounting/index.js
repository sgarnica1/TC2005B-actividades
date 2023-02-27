const http = require("http");

const users = [
  {
    username: "admin",
    password: "admin",
  },
];

// Server
const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Lab 10: Rutas y formas
          </title>
          </head>`);
    res.write("<h1>Bienvenido</h1>");
    res.write(`
      <a href="/random">Random Number</a>
      <br>
      <br>
      <a href="/fibonacci">Fibonacci</a>
      <br>
      <br>
      <a href="/login">Login</a>

    `);
    res.end;
  } else if (req.url === "/random") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Lab 10: Rutas y formas
          </title>
          </head>`);
    res.write(`<h1>Random number: ${(Math.random() * 1000).toFixed(0)}</h1>`);
    res.end;
  } else if (req.url === "/fibonacci") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Lab 10: Rutas y formas
          </title>
          </head>`);
    res.write(`<h1>Fibonacci</h1>`);
    res.write(`
      <p>
        1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946
      </p>
    `);
    res.end;
  } else if (req.url === "/login" && req.method === "POST") {
    const reqBody = [];

    req.on("data", (data) => {
      reqBody.push(data);
    });

    return req.on("end", () => {
      const parsedData = Buffer.concat(reqBody).toString().split("&");
      const login = {
        username: parsedData[0].split("=")[1],
        password: parsedData[1].split("=")[1],
      };
      users.forEach((user) => {
        if (
          user.username === login.username &&
          user.password === login.password
        ) {
          res.statusCode = 200;
          res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>
                Lab 10: Rutas y formas
                </title>
                </head>`);
          res.write(`<h1>Welcome, ${login.username}</h1>`);
          return res.end();
        }

        res.statusCode = 200;
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>
                Lab 10: Rutas y formas
                </title>
                </head>`);
        res.write(`<h1>Username or password are incorrect</h1>`);
        return res.end();
      });

      return res.end();
    });
  } else if (req.url === "/login") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Lab 10: Rutas y formas
          </title>
          </head>`);
    res.write(`<h1>Login</h1>`);
    res.write(`
      <form action="/login" method="POST">
        <label for="username">Username</label><br>
        <input type="text" id="username" name="username" value="" placeholder="Username" required><br>
        <label for="password">Password</label><br>
        <input type="password" id="password" name="password" value="" placeholder="Password" required><br><br>
        <input type="submit" value="Login">
      </form> 
    `);
    res.end;
  } else {
    // 404 page
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Lab 10: Rutas y formas
          </title>
          </head>`);
    res.write("<h1>404</h1>");
    res.end;
  }

  res.end();
});

server.listen(3000);
