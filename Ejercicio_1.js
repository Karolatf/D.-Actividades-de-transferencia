// Constantes: valores fijos del problema
const transporte = 120000;
const alojamiento = 200000;
const alimentacion = 150000;
const personas = 4;

// Variables: valores que se calculan
let total = (transporte + alojamiento + alimentacion) / personas;
let aporteporpersona = 130000;
let totalaportes = aporteporpersona * personas;
let sobrante = totalaportes - (transporte + alojamiento + alimentacion);

// Mostrar resultados
alert("El costo total por persona es de: $" + total);
alert("El total de aportes es de: $" + totalaportes);
alert("El sobrante total es de: $" + sobrante);

console.log("El costo total por persona es de: $" + total);
console.log("El total de aportes es de: $" + totalaportes);
console.log("El sobrante total es de: $" + sobrante);

    




