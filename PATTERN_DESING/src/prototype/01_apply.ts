// Interfaz Cloneable para indicar que las clases pueden ser clonadas
interface Cloneable {
  clone(): this;
}

// Clase Documento aplicando el patrón Prototype
class Document implements Cloneable {
  constructor(
    public title: string,
    public content: string,
    public author: string,
    public date: Date
  ) {}

  // Implementación del método clone para clonar el documento
  public clone(): this {
    const clone = Object.create(this);
    clone.date = new Date(this.date.getTime()); // Clonamos la fecha para evitar referencias
    return clone;
  }

  public printDocument(): void {
    console.log(
      `Título: ${this.title}, Contenido: ${this.content}, Autor: ${this.author}, Fecha: ${this.date}`
    );
  }
}

// Uso del patrón Prototype

// Crear un documento prototipo
const contractPrototype = new Document(
  "Contrato Base",
  "Este es un contrato estándar...",
  "Empresa XYZ",
  new Date()
);

// Clonar el prototipo y modificar solo lo necesario
const contract1 = contractPrototype.clone();
contract1.title = "Contrato de Trabajo - Empleado A";
contract1.printDocument(); // Título: Contrato de Trabajo - Empleado A, Contenido: Este es un contrato estándar..., Autor: Empresa XYZ

// Clonar nuevamente y modificar para otro contrato
const contract2 = contractPrototype.clone();
contract2.title = "Contrato de Trabajo - Empleado B";
contract2.printDocument(); // Título: Contrato de Trabajo - Empleado B, Contenido: Este es un contrato estándar..., Autor: Empresa XYZ
