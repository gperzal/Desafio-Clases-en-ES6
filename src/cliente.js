import Impuesto from './impuesto.js';

class Cliente {
  constructor(nombre, impuesto) {
    this.nombre = nombre;
    this.impuesto = impuesto; // Objeto de la clase Impuesto
  }

  // Getters y Setters
  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get impuesto() {
    return this._impuesto;
  }

  set impuesto(nuevoImpuesto) {
    this._impuesto = nuevoImpuesto;
  }

  // Método para calcular el impuesto total
  calcularImpuestoTotal() {
    return this.impuesto.calcularImpuesto();
  }
}

export default Cliente;
