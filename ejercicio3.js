datos_user = {}

let name = prompt("ingrese su nombre: ");
let edad = parseInt(prompt("ingrese su edad: "));
let direccion = prompt("ingrese su direccion: ");
let telefono = parseInt(prompt("ingrese su numero de telefono: "));

datos_user.nombre = [name]
datos_user.edad = [edad]
datos_user.direccion = [direccion]
datos_user.telefono = [telefono]

console.log(`${datos_user.nombre} tiene ${datos_user.edad} años, vive en ${datos_user.direccion} y su número de teléfono es ${datos_user.telefono}`)