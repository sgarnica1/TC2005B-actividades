const fileSystem = require("fs");
const http = require("http")

// Server
const server = http.createServer((req, res) => {
  console.log(req.url)
  res.setHeader("Content-Type", "text/html")
  res.write(`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>
            Laboratorio 1: Introducción a las aplicaciones web, HTML5 y ciclo de vida
            de los sistemas de información
          </title>

          <!-- BOOTSTRAP -->
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
          />
        </head>

        <body>
          <!-- HEADER -->
          <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <a class="navbar-brand">Sergio Garnica González</a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="#"> A01704025 / A01704025@tec.mx </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

          <!-- MAIN -->
          <main class="container">
            <!-- INTRO -->
            <section class="pt-5">
              <h3 class="mb-3">Acerca de mí</h3>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="card" style="width: 18rem">
                      <img src="./me.jpg" class="card-img-top" alt="Jesus loves me" />
                      <div class="card-body">
                        <h5 class="card-title">Sobre mí</h5>
                        <p class="card-text">
                          Soy Cristiano, me gusta servir en mi iglesia local, estudio
                          ITC y tengo 22 años.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style="width: 18rem">
                      <img
                        src="./projects.jpg"
                        class="card-img-top"
                        alt="Team working on projects"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Proyectos</h5>
                        <p class="card-text">
                          Dentro de desarrollo web, he realizado proyectos tales como
                          Aplicaciones Web, Sitio Web e-commerce y landing page.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style="width: 18rem">
                      <img
                        src="./programming.jpg"
                        class="card-img-top"
                        alt="Programming code"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Intereses</h5>
                        <p class="card-text">
                          Dentro del área de IT, me gustaría profundizar más en los
                          temas de Ciencia de Datos e Inteligencia Artificial
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- FAQ -->
            <section class="pt-5 pb-5">
              <h3 class="mb-3">FAQ</h3>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      ¿Cuál es la diferencia entre Internet y la World Wide Web?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      El <strong> Internet</strong> es la conexión de redes de
                      computadoras que se comunican entre sí a través de un protocolo,
                      por otro lado, la <strong>World Wide Web (www)</strong> es un
                      servicio que se encuentra disponible en Internet que permite a
                      los usuarios acceder a la información que se encuentra
                      disponible en esta red.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      ¿Cuáles son las partes de un URL?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Las partes de una URL son:
                      <ul>
                        <li>
                          <strong>Protocolo:</strong> Es el método que se utiliza para
                          comunicarse con el servidor. Por ejemplo: <code>http</code>
                        </li>
                        <li>
                          <strong>Subdominio:</strong> Es una parte opcional de la URL
                          que se utiliza para identificar a un servidor específico
                          dentro de un dominio principal. Por ejemplo:
                          <code>subdominio.dominio</code>
                        </li>
                        <li>
                          <strong>Dominio:</strong> Es el nombre del servidor o
                          dirección de Internet que contiene el recurso. Por ejemplo:
                          <code>dominio.com</code>
                        </li>
                        <li>
                          <strong>Extensión:</strong> Es la terminación de caracteres
                          que se encuentran después del punto del dominio y al final
                          de una dirección web. Por ejemplo: <code>.com</code>
                        </li>
                        <li>
                          <strong>Ruta:</strong> Es la ruta que se utiliza para
                          identificar el recurso dentro del servidor. Por ejemplo:
                          <code> /index.html</code>
                        </li>
                        <li>
                          <strong>Parámetros:</strong> Son los datos que se envían al
                          servidor para que este pueda procesarlos. Por ejemplo:
                          <code>?id=1</code>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      ¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT,
                      PATCH, DELETE?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Los métodos HTTP permiten la comunicación entre el cliente y el
                      servidor. Es decir, el cliente le indica al servidor qué acción
                      debe realizar. Por ejemplo, un método <code>POST</code> indica
                      al servidor que debe crear un recurso, mientras que un método
                      <code>GET</code> indica al servidor que debe obtener un recurso.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      ¿Qué método HTTP se debe utilizar al enviar un formulario HTML,
                      por ejemplo cuando ingresas tu usuario y contraseña en algún
                      sitio? ¿Por qué?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Cuando se envía un formulario HTML, se debe utilizar el método
                      <code>POST</code> ya que este método no tiene límite de tamaño
                      de datos y además no se almacena en el caché del navegador, lo
                      que evita que se puedan interceptar los datos mientras se envían
                      y caigan en manos de un tercero.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      ¿Qué método HTTP se utiliza cuando a través de un navegador web
                      se accede a una página a través de un URL?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      El método <code>GET</code> se utiliza cuando a través de un
                      navegador web se accede a una página a través de un URL, ya que
                      este método se utiliza para obtener un recurso.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSix">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué
                      significa esto? ¿Ocurrió algún error?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Si un servidor web devuelve una respuesta HTTP con código
                      <code>200</code>, significa que la solicitud se ha completado
                      correctamente sin ningún error.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSeven">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      ¿Es responsabilidad del desarrollador corregir un sitio web si
                      un usuario reporta que intentó acceder al sitio y se encontró
                      con un error 404? ¿Por qué?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      En este caso, se deberá analizar la petición del usuario, ya que
                      un error <code>404</code> significa que el recurso solicitado no
                      existe, por lo que el usuario puede estar intentando acceder a
                      un recurso que no existe o que no tiene permisos para acceder a
                      él. El desarrollador deberá verificar si el usuario tiene
                      permisos para acceder al recurso y si el recurso existe,
                      entonces se deberá corregir el error.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingEight">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      ¿Es responsabilidad del desarrollador corregir un sitio web si
                      un usuario reporta que intentó acceder al sitio y se encontró
                      con un error 500? ¿Por qué?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      En este caso, el desarrollador tiene completa responsabilidad de
                      corregir el error <code>500</code> ya que este es un error en el
                      servidor que no se puede controlar por parte del usuario.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingNine">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseNine"
                      aria-expanded="false"
                      aria-controls="collapseNine"
                    >
                      ¿Qué significa que un atributo HTML5 esté depreciado o
                      desaprobado (deprecated)? Menciona algunos elementos de HTML 4
                      que en HTML5 estén desaprobados.
                    </button>
                  </h2>
                  <div
                    id="collapseNine"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingNine"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Un atributo HTML5 que esté desaprobado significa que ya no se
                      debe utilizar ni se da soporte en las futuras actualizaciones de
                      los navegadores web. Algunas etiquetas de HTML4 que en HTML5
                      están desaprobadas son: <code>basefont</code>,
                      <code>center</code>, <code>font</code>, <code>frame</code>,
                      <code>frameset</code>, <code>noframes</code>,
                      <code>strike</code>, <code>u</code>.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTen">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTen"
                      aria-expanded="false"
                      aria-controls="collapseTen"
                    >
                      ¿Cuáles son las diferencias principales entre HTML 4 y HTML5?
                    </button>
                  </h2>
                  <div
                    id="collapseTen"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTen"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Las diferencias principales entre HTML 4 y HTML5 son:
                      <ul>
                        <li>
                          HTML5 es más semántico que HTML4, es decir, las etiquetas
                          son más descriptivas.
                        </li>
                        <li>HTML5 es más rápido y fácil de usar que HTML4.</li>
                        <li>
                          HTML5 es más compatible con dispositivos móviles y
                          aplicaciones web que HTML4.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingEleven">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEleven"
                      aria-expanded="false"
                      aria-controls="collapseEleven"
                    >
                      ¿Qué componentes de estructura y estilo tiene una tabla?
                    </button>
                  </h2>
                  <div
                    id="collapseEleven"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingEleven"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Los componentes de estrucuta y estilo de una tabla son:
                      <ul>
                        <li><code>table</code> - define una tabla.</li>
                        <li>
                          <code>tr</code> - define una fila (t-row) de celdas en una
                          tabla.
                        </li>
                        <li>
                          <code>th</code> - define una celda como encabezado
                          (t-header) de una columna o fila.
                        </li>
                        <li>
                          <code>td</code> - define una celda como datos (t-data).
                        </li>
                        <li>
                          <code>caption</code> - define un título para una tabla.
                        </li>
                        <li>
                          <code>colgroup</code> - define un grupo de una o más
                          columnas en una tabla para los estilos.
                        </li>
                        <li>
                          <code>col</code> - define una columna en una tabla para los
                          estilos.
                        </li>
                        <li>
                          <code>thead</code> - define un grupo de filas como
                          encabezado de una tabla.
                        </li>
                        <li>
                          <code>tbody</code> - define un grupo de filas como cuerpo de
                          una tabla.
                        </li>
                        <li>
                          <code>tfoot</code> - define un grupo de filas como pie de
                          página de una tabla.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwelve">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwelve"
                      aria-expanded="false"
                      aria-controls="collapseTwelve"
                    >
                      ¿Cuáles son los principales controles de una forma (form) HTML5?
                    </button>
                  </h2>
                  <div
                    id="collapseTwelve"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwelve"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Los principales controles / componentes de un form en HTML5 son:
                      <ul>
                        <li>
                          <code>label</code> - define una etiqueta para un control de
                          entrada.
                        </li>
                        <li>
                          <code>input</code> - define un control de entrada de datos.
                        </li>
                        <li>
                          <code>textarea</code> - define un control de entrada de
                          datos de varias líneas.
                        </li>
                        <li>
                          <code>select</code> - define un control de selección de una
                          lista de opciones.
                        </li>
                        <li>
                          <code>option</code> - define una opción en un control de
                          selección.
                        </li>
                        <li>
                          <code>fieldset</code> - define un grupo de controles de
                          entrada.
                        </li>
                        <li>
                          <code>legend</code> - define un título para un grupo de
                          controles de entrada.
                        </li>
                        <li>
                          <code>button</code> - define un botón para enviar el
                          formulario.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThirteen">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThirteen"
                      aria-expanded="false"
                      aria-controls="collapseThirteen"
                    >
                      ¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes
                      utilizar la siguiente página para descubrirlo:
                      http://html5test.com/ (Al responder la pregunta recuerda poner
                      el navegador que utilizas)
                    </button>
                  </h2>
                  <div
                    id="collapseThirteen"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThirteen"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      La puntuación obtenida en el test fue de
                      <strong>528</strong>/555, utilizando el navegador Chrome 110 en
                      Windows 10.
                      <img
                        class="mt-3 mb-3"
                        src="./html-test.png"
                        alt="HTML Browser Test"
                      />
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFourteen">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFourteen"
                      aria-expanded="false"
                      aria-controls="collapseFourteen"
                    >
                      <div>
                        <strong class="d-inline">
                          Sobre el ciclo de vida y desarrollo de los sistemas de
                          información:
                        </strong>
                        ¿Cuál es el ciclo de vida de los sistemas de información?
                        ¿Cuál es el ciclo de desarrollo de sistemas de información?
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseFourteen"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFourteen"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      El ciclo de vida de los sistemas de información es el proceso
                      que se sigue para desarrollar un sistema de el cual se basa en
                      las etapas de planificación, creación, pruebas y despliegue en
                      un sistema de información.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <!-- FOOTER -->
          <footer class="d-flex justify-content-center pt-3 pb-3 bg-dark text-light">
            Copyright &copy; 2023 - Sergio
          </footer>

          <!-- BOOTSTRAP -->
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
          ></script>
        </body>
      </html>

  `)
  res.end
})

server.listen(3000)

// Average of random numbers
const len = 10;
const randomNumbers = createRandomNumbers(len);
const averageOfRandomNumbers = average(randomNumbers);
console.log("Random numbers: ", randomNumbers);
console.log("Average of random numbers: ", averageOfRandomNumbers);

// Write to file
const fileName = "randomNumbers.txt";
writeFile(
  fileName,
  randomNumbers.join(" ") + ", \naverage: " + averageOfRandomNumbers
);

// Is palindrome
const string = "ligar es ser agil";
console.log(isPalindrome(string));
isPalindrome(string)
  ? console.log(string, "is palindrome")
  : console.log(string, "is not palindrome");

// Functions
function createRandomNumbers(len) {
  const randomNumbers = [];
  for (let i = 0; i < len; i++) {
    randomNumbers.push((Math.random() * 100).toFixed(0));
  }
  return randomNumbers;
}

function average(values) {
  const sum = values.reduce((val1, val2) => parseInt(val1) + parseInt(val2));
  return sum / values.length;
}

function writeFile(fileName, content) {
  fileSystem.writeFileSync(fileName, content, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File saved");
  });
}

function isPalindrome(text) {
  let reverse = [];
  const aux = text.replace(/\s/g, "");
  const auxArray = aux.split("");

  auxArray.forEach((val) => reverse.unshift(val));
  reverse = reverse.join("");

  return reverse == aux;
}
