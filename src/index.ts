import { log } from "console";

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

//funcion callback;

let fsum = function (a:number, b:number){return a+b};
let fsub = function (a:number, b:number){return a-b};

function operate(x:number, y:number, method:(a:number,b:number)=>number){
    return method(x,y);
}

//funciones asincronas
async function asincrona() {
    let suma:number = 0;
    for (let i= 0; i<=100000000; i++){
        suma+=i;
    }
    return suma;
}

asincrona().then((data:number)=>{console.log(`El resultado de ejecutar asincrona es = ${data}`)});

console.log("Linea posterior a la llamada a la funcion asincrona.");

async function getUniversitiesAsync(pais:string) : Promise <JSON[]> {
    let index:number = 0;
    const apiURL:string = "http://universities.hipolabs.com/search?country=";

    //Construimos la URL de la API a consultar concatenando el pais que se quiere filtrar
    let url:string = `${apiURL}${pais}`;
    
    // Con la función fetch accedemos hacemos una petición GET y obtenemos los resultados. 
    // Usamos await para indicar que hasta que no termine esta instrucción no se ejecuta la siguiente
    let respuesta:Response = await fetch(url);
    // Convertimos la respuesta de la petición GET en un archivo JSON
    let datos:Promise<JSON[]> = await respuesta.json() as Promise<JSON[]>;
    return datos
}
 

// Llamamos a la función asincrona y mostramos el JSON de las universidades existentes en Spain
getUniversitiesAsync("Spain").then((data:JSON[])=>{console.log(data[1])});

type university = {
    domains:String[],
    alpha_two_code:String,
    web_pages:String[],
    name:String,

}

async function getUniversitiesAsynchro(pais:string) : Promise <university[]> {
    let index:number = 0;
    const apiURL:string = "http://universities.hipolabs.com/search?country=";

    //Construimos la URL de la API a consultar concatenando el pais que se quiere filtrar
    let url:string = `${apiURL}${pais}`;
    
    // Con la función fetch accedemos hacemos una petición GET y obtenemos los resultados. 
    // Usamos await para indicar que hasta que no termine esta instrucción no se ejecuta la siguiente
    let respuesta:Response = await fetch(url);
    // Convertimos la respuesta de la petición GET en un archivo JSON
    let datos:Promise<university[]> = await respuesta.json() as Promise<university[]>;
    return datos
}

getUniversitiesAsynchro("Spain").then((data:university[])=>{
    data.forEach((uni:university)=>console.log(`${uni.name}`));
});

//funciones generadoras
function* fgeneradora():Generator<Tarea>{
for (let tarea in listaTareas){
    yield listaTareas[tarea];
}
}

let funciongen = fgeneradora();

funciongen.next(); //Tarea 1
funciongen.next(); //Tarea 2

