// Constantes: datos fijos del problema
const piezasPorHora = 250;
const horasTrabajadas = 8;
const capacidadCaja = 12;

// Variables: resultados que se calculan
let totalPiezas = piezasPorHora * horasTrabajadas;
let cajasLlenas = Math.floor(totalPiezas / capacidadCaja);
let piezasSobrantes = totalPiezas % capacidadCaja;

// Mostrar resultados
alert("Total de piezas fabricadas: " + totalPiezas);
alert("Cajas llenas: " + cajasLlenas);
alert("Piezas sobrantes: " + piezasSobrantes);

console.log("Total de piezas fabricadas: " + totalPiezas);
console.log("Cajas llenas: " + cajasLlenas);
console.log("Piezas sobrantes: " + piezasSobrantes);
