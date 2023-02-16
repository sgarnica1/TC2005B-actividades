// 1: Entrada: un número pedido con un prompt.
// Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida

const input = prompt("Enter a number");
document.write("Tu número es: ", input, "<br>");
document.write("Número", " - Cuadrado", " - Cubo", "<br>");

for (let i = 1; i <= input; i++) {
  document.write(i, " - ", square(i), " - ", cube(i), "<br>");
}

function square(num) {
  return num * num;
}

function cube(num) {
  return num * num * num;
}

// 2:
// Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria.
// Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.

const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
const result = num1 + num2;
const startTime = new Date();
const input_ = prompt(`¿Cuál es el resultado de ${num1} + ${num2}?`);
const endTime = new Date();
const time = endTime - startTime;

document.write(`<br>${num1} + ${num2}. Tu resulatado: ${result}<br>`);
if (input_ == result) {
  document.write("Correcto");
} else {
  document.write("Incorrecto");
}
document.write(`<br>Tiempo: ${time} ms`);

// 3:
// Función: contador. Parámetros: Un arreglo de números.
// Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.
function counter(arr) {
  let negative = 0;
  let zero = 0;
  let positive = 0;

  arr.forEach((val) => {
    if (parseInt(val) < 0) negative++;
    if (parseInt(val) === 0) zero++;
    if (parseInt(val) > 0) positive++;
  });

  return [parseInt(negative), parseInt(zero), parseInt(positive)];
}

// const arr = [-1, 0, 1, 2, 3, 4, 5, 0, 0, -2, -3, -4, -5];

// 4:
// Función: promedios. Parámetros: Un arreglo de arreglos de números.
// Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

function average(arr) {
  let result = [];
  arr.forEach((row) => {
    const sum = row.reduce((a, b) => a + b);
    const avg = sum / row.length;
    result.push(avg);
  });

  return result;
}

// const arr_ = [
//   [1, 2, 3, 4, 5],
//   [2, 4, 6, 8, 10],
//   [3, 6, 9, 12, 15],
//   [4, 8, 12, 16, 20],
//   [5, 10, 15, 20, 25],
// ];

// 5:
// Función: inverso. Parámetros: Un número.
// Regresa: El número con sus dígitos en orden inverso.

function reverseNum(num) {
  console.log(num);
  const arr = num.toString().split("");
  let rev = "";
  for (let i = arr.length; i > 0; i--) {
    rev += arr[i - 1];
  }

  return parseInt(rev);
}

// 6:
// Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses, alguna problemática que hayas identificado en algún ámbito, un problema de programación que hayas resuelto en otro lenguaje, un problema de la ACM, entre otros). El problema debe estar descrito en un documento HTML, y la solución implementada en JavaScript, utilizando al menos la creación de un objeto, el objeto además de su constructor deben tener al menos 2 métodos. Muestra los resultados en el documento HTML.
