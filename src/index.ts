import { Console, log } from "console";

//Acceso elementos DOM
let input:HTMLInputElement = document.getElementById("input-contenido") as HTMLInputElement;
console.log(input.value);
let btnsNuevoContenido = document.getElementsByName("btn-add-content") as NodeListOf<HTMLButtonElement>;
let divs = document.getElementsByTagName("div") as HTMLCollectionOf<HTMLDivElement>;

let elementosOL = document.querySelector("#lista-contenidos");

let nuevoElemento:HTMLLIElement = document.createElement("li");
nuevoElemento.innerText = "Nuevo Elemento";
elementosOL?.append(nuevoElemento);

let divisor = document.getElementsByTagName("div")[0] as HTMLDivElement;

divisor.addEventListener('click',(evento:Event)=>{
    console.log("Hola");
})

let listaUno:HTMLOListElement = document.getElementsByTagName("ol")[0];
let listaDos:HTMLOListElement = document.getElementsByTagName("ol")[1];

let moverElementoUnoADos = (cn:ChildNode)=>{
    if (cn.nodeType == Node.ELEMENT_NODE){
        cn.removeEventListener("mousedown",(event:Event)=>{
        
            if(cn.parentElement?.isSameNode(listaDos))
                listaUno?.append(listaDos.removeChild(cn));
    })
        cn.addEventListener("mousedown",(event:Event)=>{
            if(cn.parentElement?.isSameNode(listaUno))
                listaDos?.append(listaUno.removeChild(cn));
                
        })
    }
} 

let moverElementoDosAUno = (cn:ChildNode)=>{
    if (cn.nodeType == Node.ELEMENT_NODE){
        cn.removeEventListener("mousedown",(event:Event)=>{
            if(cn.parentElement?.isSameNode(listaUno))
                listaDos?.append(listaUno.removeChild(cn));
           
    })
        cn.addEventListener("mousedown",(event:Event)=>{
            if(cn.parentElement?.isSameNode(listaDos))
                listaUno?.append(listaDos.removeChild(cn));
                
        })
    }
} 

listaUno.childNodes.forEach(moverElementoUnoADos);

listaDos.childNodes.forEach(moverElementoDosAUno);

const config = {childList:true, subtree:true};

const callback = (mutationList: any, observer: any) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        if (mutation.target.isSameNode(listaUno))
            mutation.addedNodes.forEach(moverElementoUnoADos);
        else if (mutation.target.isSameNode(listaDos)){
            mutation.addedNodes.forEach(moverElementoDosAUno);
        }
      } 
    }
  };

  const observer = new MutationObserver(callback);

  observer.observe(listaUno,config);
  observer.observe(listaDos,config);