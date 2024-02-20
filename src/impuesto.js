class Impuesto {
    constructor(montoBrutoAnual, deducciones) {
      this.montoBrutoAnual = montoBrutoAnual;
      this.deducciones = deducciones;
    }
  
    // Getters y Setters
    get montoBrutoAnual() {
      return this._montoBrutoAnual;
    }
  
    set montoBrutoAnual(nuevoValor) {
      this._montoBrutoAnual = nuevoValor;
    }
  
    get deducciones() {
      return this._deducciones;
    }
  
    set deducciones(nuevoValor) {
      this._deducciones = nuevoValor;
    }
  
    // Método para calcular el impuesto
    calcularImpuesto() {
      return (this.montoBrutoAnual - this.deducciones) * 0.21;
    }
  }
  
  export default Impuesto;
  