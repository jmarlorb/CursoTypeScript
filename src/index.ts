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
enum TareaEstado {
    Terminada = "Terminada",
    Comenzada = "Comenzada",
    SinEmpezar = "SinEmpezar"
}

interface Tarea {
    estado: TareaEstado;
    nombre: string; 
    prioridad: number;
}

let tarea1: Tarea = {
    estado: TareaEstado.SinEmpezar,
    nombre: "flush",
    prioridad: 3
};

let tarea2: Tarea ={
    estado: TareaEstado.Comenzada,
    nombre: "step-in",
    prioridad: 0
}

let tarea3: Tarea = {
    estado: TareaEstado.Terminada,
    nombre: "step-out",
    prioridad: 4
}

for (let x=0; x<10; x++){
    console.log(x);
}

let listaTareas:Tarea[] = [tarea1,tarea2,tarea3];

listaTareas.forEach((tarea:Tarea)=>{console.log(`${tarea.estado}+${tarea.nombre}+${tarea.prioridad}`)});

function saludar (nombre:string = "Julián", apellido?:string):void{
    if (apellido!=undefined) {
        console.log(`Hola ${nombre} ${apellido}`);
    } else {
        console.log(`Hola ${nombre}`);
    }
}

saludar(undefined,"Martínez");

//Función anónima

let fanonima = function() {console.log("Hola Mundo")};

fanonima();

let fitera = function (elemento:Tarea, indice:number) {console.log(`La Tarea ${elemento.nombre} se encuentra en el índice ${indice}`)};

listaTareas.forEach(fitera);

//Funciones multiple params

function muestraTareas(...tareas:Tarea[]): void{
tareas.forEach(fitera);
}

muestraTareas(tarea1,tarea2);
muestraTareas(...listaTareas);

//Funciones arrow o lambda

let farrow = (tarea:Tarea,indice:number) => {console.log(`La Tarea ${tarea.nombre} se encuentra en el índice ${indice}`)}
listaTareas.forEach(farrow);
listaTareas.forEach(function (elemento:Tarea, indice:number) {console.log(`La Tarea ${elemento.nombre} se encuentra en el índice ${indice}`)});
