const personas_hablan = {};
let estudiante = "";

while (true){
    estudiante = prompt("¿quién ha hablado?(ingresa 0 para terminar. )");
    if (estudiante === "0") break;

    if (personas_hablan[estudiante]){
        personas_hablan[estudiante] ++;
    }else{
        personas_hablan[estudiante] = 1;
    }
}

const nombres = Object.keys(personas_hablan);
const puntos = Object.values(personas_hablan);

console.log("LISTADO DE ALUMNOS QUE HAN ABIERTO LA BOCA: ");

let e = 0;
for (let k = 0; k < nombres.length; k++){
    console.log(nombres[k], "-", puntos[e]);
    e ++;
}
