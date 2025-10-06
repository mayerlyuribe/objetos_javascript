const lista_compras = {
    papaya : 20000,
}
let producto = 0;
let precio = 0;

while (true) {
    producto = prompt("ingrese el nombre del producto que va a comprar ('0' para salir):");
    if (producto === '0') break;

    precio = parseInt(prompt("ingrese el precion del producto:"));
    lista_compras [producto] = precio;
}

const claves = Object.keys(lista_compras);
const valores = Object.values(lista_compras);

console.log("lista de compras");

for (let i = 0; i < claves.length; i++){
    console.log(`${claves[i]} ------------ ${valores[i]}`)
}
