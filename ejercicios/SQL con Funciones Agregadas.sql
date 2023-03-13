-- Ejercicio: SQL con Funciones Agregadas
-- Sergio Garnica González - A01704025

/*
SELECT columnas, [funciones agregadas]
FROM tablas [vistas] [Join Natural]
WHERE [Join Natural] + [Condiciones simples]
GROUP BY [Especificar columnas que NO usan funciones agregadas]
HAVING [Condiciones sobre funciones agregadas]
ORDER BY [Columnas por ordenar]
*/


/* 
Película (título, año, duración, encolor, presupuesto, nomestudio, idproductor)
Elenco (título, año, nombre, sueldo)
Actor (nombre, dirección, telefono, fechanacimiento, sexo)
Productor (idproductor, nombre, dirección, teléfono)
Estudio (nomestudio, dirección)
*/

-- 1. El ingreso total recibido por cada actor, sin importar en cuantas películas haya participado.
SELECT nombre, SUM(sueldo) as 'Total Ingresos'
FROM elenco
GROUP BY nombre
ORDER BY SUM(sueldo);

-- 2. El monto total destinado a películas por cada Estudio Cinematográfico, durante la década de los 80's.
SELECT nomestudio, SUM(presupuesto) as 'Monto Total'
FROM pelicula
WHERE anio > '01/01/1980'
AND anio < '31/12/1980'
GROUP BY nomestudio
ORDER BY SUM(presupuesto);

-- 3. Nombre y sueldo promedio de los actores (sólo hombres) que reciben en promedio un pago superior a 5 millones de dolares por película.
SELECT nombre, AVG(sueldo)
FROM elenco as e, actor as a
WHERE e.nombre = a.nombre
AND a.sexo = 'M'
GROUP BY nombre
HAVING AVG(sueldo) > 5000000
ORDER BY AVG(sueldo) DESC;


-- 4. Título y año de producción de las películas con menor presupuesto. (Por ejemplo, la película de Titanic se ha producido
-- en varias veces entre la lista de películas estaría la producción de Titanic y el año que fue filmada con menor presupuesto).
SELECT titulo, anio, presupuesto
FROM pelicula
ORDER BY presupuesto ASC
GROUP BY titulo;

-- 5. Mostrar el sueldo de la actriz mejor pagada.
SELECT nombre, sueldo
FROM elenco as e, actor as a
WHERE e.nombre = a.nombre
AND a.sexo = 'F'
ORDER BY sueldo DESC
LIMIT 1;

