const personas_hablan = {}

let estudiante = "";

while (true){
    estudiante = prompt("¿quién ha hablado?");
    if (estudiante === "0") break;

    if (personas_hablan[estudiante]){
        personas_hablan[estudiante] ++;
    }else{
        personas_hablan[estudiante] = 1;
    }
}

const nombres = Object.keys(personas_hablan)
const puntos = Object.values(personas_hablan)
let e = 0;
console.log("LISTADO DE ALUMNOS QUE HAN ABIERTO LA BOCA: ")
for (let k = 0; k < nombres.length; k++){
    console.log(nombres[k], "-", puntos[e]);
    e ++;
}
