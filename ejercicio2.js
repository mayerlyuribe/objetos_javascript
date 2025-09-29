const diccionario ={
    'EURO':'€', 
    'DOLLAR':'$',
    'YEN':'¥'
}

let divisa = prompt("pregunte por una divisa: ").toUpperCase();

if (diccionario[divisa]){
    console.log("el simbolo es: ", diccionario[divisa]);

}else{
    console.log("la divisa no se encuentra en el diccionario :(");
}
