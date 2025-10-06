
const frutas = {
    PLATANO : 1.35,
    MANZANA : 0.80,
    PERA : 0.85,
    NARANJA : 0.70
}

let pedido = prompt("ingrese la fruta que desea comprar: ").toUpperCase;
let kilos = parseInt(prompt("cuantos kilos quiere?: "));

array_frutas = Object.keys(frutas)

if (frutas[pedido]){
    console.log("si ta")
}

console.log(frutas)
