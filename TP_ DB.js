//alumno = {
    //nombre: "Juan",
    //apellido: "Gomez",
    //dni: 46345678,
    //anio: 4,
    //curso: "A",
    //nota: 8
//}

//Ejercicio 1
//Este ejercicio consiste en crear un array de alumnos distintos, con datos
//inventados que cubran las siguientes condiciones:
//- Al menos 3 alumnos deben estar aprobados (nota = 6).
//- Al menos 3 alumnos deben estar desaprobados.
//- Debe haber al menos 2 alumnos en 4°A, 2 alumnos en 5°A, 2 alumnos en 4°B y 2
//en 3°B.
//- Los DNI deben empezar con 45, 46 o 47 y no pueden ser todos iguales.
//- Los nombres y apellidos no pueden ser todos iguales pero un nombre debe
//repetirse 2 veces.

let alumnos = [
    {nombre: "Juan", apellido: "Gomez", dni: 46345678, anio: 4, curso: "A", nota: 8},
    {nombre: "Pedro", apellido: "Ramirez", dni: 45343648, anio: 4, curso: "A", nota: 9},
    {nombre: "Franco", apellido: "Gonzalez", dni: 47840678, anio: 5, curso: "A", nota: 6},
    {nombre: "Matias", apellido: "Perez", dni: 46543876, anio: 5, curso: "A", nota: 3},
    {nombre: "Gustavo", apellido: "Lopez", dni: 46080638, anio: 4, curso: "B", nota: 4},
    {nombre: "Franco", apellido: "Rodriguez", dni: 45301679, anio: 4, curso: "B", nota: 5},
    {nombre: "Pedro", apellido: "Martinez", dni: 47317695, anio: 3, curso: "B", nota: 6},
    {nombre: "Martin", apellido: "Pablo", dni: 45239578, anio: 3, curso: "B", nota: 7}
];

console.log("---------------------------------------------------------------");

//Ejercicio 2
//Crear una función “capitalizar” que recibe un string, hace la primera letra
//mayúscula y lo devuelve (utilizar la notación “arrow function”).

const capitalizar = (str) =>{
    return  str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizar("hola"));

console.log("---------------------------------------------------------------");

// Ejercicio 3
// Crear una función “mostrarAlumno” que recibe un alumno y muestra su información
// de la siguiente manera en consola:
// DNI: 46.345.678
// Nombre y apellido: Juan Gomez
// Curso: 4°A
// Nota: 8

const mostrarAlumno = (alumno) =>{
    console.log("DNI: " + alumno.dni.toString().slice(0,2) + "." + alumno.dni.toString().slice(2,5) + "." + alumno.dni.toString().slice(5,8));
    console.log("Nombre y apellido: " + alumno.nombre + " " + alumno.apellido);
    console.log("Curso: " + alumno.anio + "°" + alumno.curso);
    console.log("Nota: " + alumno.nota);
};

console.log(mostrarAlumno(alumnos[3]));

console.log("---------------------------------------------------------------");
//Ejercicio 4
//Utilizando “map” y la función “capitalizar”, capitalizar el nombre y el apellido
//de todos los alumnos en el array.

//const alumnosMap = alumnos.map((a)=>{
    //a = alumnos.map;
    //cons
//});

//console.log(alumnos_map);

console.log("---------------------------------------------------------------");