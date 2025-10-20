const frutas = {
    "PLATANO" : 1.35,
    "MANZANA" : 0.80,
    "PERA" : 0.85,
    "NARANJA" : 0.70
}

let pedido = prompt("ingrese la fruta que desea comprar: ").toUpperCase();
let kilos = parseInt(prompt("cuantos kilos quiere?: "));

if (frutas[pedido]){
    let precio = frutas[pedido] * kilos;
    console.log(`el precio de ${kilos} kg de ${pedido.toLowerCase()} es de ${precio} pesos`);
}else {
    console.log(`la fruta no está disponible`)
}
