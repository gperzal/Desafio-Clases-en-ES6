import Cliente from './cliente.js';
import Impuesto from './impuesto.js';


const clientesIniciales = [
    new Cliente("Senna", new Impuesto(100000, 10000)),
    new Cliente("Emily", new Impuesto(500000, 15000)),
    new Cliente("Jamie", new Impuesto(800000, 15000)),
    new Cliente("Robin", new Impuesto(120000, 20000)),
    new Cliente("Aylin", new Impuesto(2500000, 25000)),
    new Cliente("Lucas", new Impuesto(900000, 15000)),
];

// Calcular e imprimir el impuesto total
console.log("");
console.log("******************************************************************");
console.log("*** XYZ Consultores - Listado de Impuesto Anual de Clientes *** ");
console.log("******************************************************************");
console.log("N°| Nombre Clientes | Impuesto a pagar");
const infoClientes = clientesIniciales.map((cliente, index) =>
    `${index + 1} |      ${cliente.nombre}      |     ${cliente.calcularImpuestoTotal()}`).join('\n');

console.log(infoClientes);


// Crear un objeto Impuesto ( montoBrutoAnual
let impuestos = new Impuesto(13000000, 12000);  // Editar los Valores para posteriormente mostrarlos en consola

// Crear un objeto Cliente
let cliente = new Cliente('Guido', impuestos);

// Calcular e imprimir el impuesto total
console.log("");
console.log("******************************************************************");
console.log("*** XYZ Consultores - Calculador de Impuesto Anual de Clientes *** ");
console.log("******************************************************************");
console.log("");
console.log(`El impuesto anual a pagar por el cliente ${cliente.nombre} es: ${cliente.calcularImpuestoTotal()}`);
console.log("");