console.log("Hello World");
/**
 * string - Cadenas de caracteres
 * number - enteros y decimales
 * boolean - booleano
 * null - nulo
 * undefined - sin definir
 * any - Todos los tipos (No utilizar)
 */

//Declarar variables
var nombre:string = "Julián"; //global
let apellido:string = "Martínez"; //local
const PI:number = 3.1415;

console.log("Hola " + nombre +" " + apellido);
console.log(nombre,apellido);
console.log(`Hola ${nombre}`);

let a:number = 2, b:number = 2.5, c:string = "patata";

let alumnos:string[] = ["Juan","Jose","Alex"];
let valores:(string|number|boolean)[] = ["Pedro", 54, "Opossum",true];
let valores2:(string|number|boolean)[] = [...valores,...alumnos];
console.log(valores2);
