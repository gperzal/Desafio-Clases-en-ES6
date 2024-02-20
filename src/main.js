import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

// Crear un objeto Impuesto ( montoBrutoAnual
let impuestos = new Impuesto(13000000, 12000);  // Editar los Valores para posteriormente mostrarlos en consola

// Crear un objeto Cliente
let cliente = new Cliente('Guido Perez', impuestos);

// Calcular e imprimir el impuesto total
console.log("");
console.log("******************************************************************");
console.log("*** XYZ Consultores - Calculador de Impuesto Anual de Clientes *** ");
console.log("******************************************************************");
console.log("");
console.log(`El impuesto anual a pagar por el cliente ${cliente.nombre} es: ${cliente.calcularImpuestoTotal()}`);
console.log("");