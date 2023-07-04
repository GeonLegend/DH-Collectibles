let numeros = [10, 24, 56, 78, 2, 13, 56, 71, 90, 16];
let [diez, , cincuentaYSeis, , dos, ...numerosElegidos] = numeros;
//console.log(diez);
//console.log(cincuentaYSeis);
//console.log(dos);
//console.log(numerosElegidos);
let numerosSeleccionados = [...numerosElegidos];
//console.log(numerosSeleccionados);

let mascota = {
    nombre: 'Morena',
    tipoMascota: 'Perro',
    color: 'Negro con Blanco',
    raza: 'Schnauzer'
}
let {nombre} = mascota;
let {tipoMascota} = mascota;
let {color} = mascota;
let {raza} = mascota;
let mensaje = 'Hola, les presento a mi mascota, su nombre es: ' + nombre + ', es un hermoso ' + tipoMascota + ', de color: ' + color + ', y su raza es: ' + raza + '.';
//console.log(mensaje);