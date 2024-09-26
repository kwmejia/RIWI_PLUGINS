// Implementación de operaciones CRUD en MySQL
class MySQLDatabase {
  create(item: string): void {
    console.log(`Creando el item ${item} en la base de datos MySQL`);
  }

  read(id: string): void {
    console.log(`Leyendo el item con ID ${id} de la base de datos MySQL`);
  }

  update(id: string, item: string): void {
    console.log(
      `Actualizando el item con ID ${id} a ${item} en la base de datos MySQL`
    );
  }

  delete(id: string): void {
    console.log(`Eliminando el item con ID ${id} de la base de datos MySQL`);
  }
}

// Implementación de operaciones CRUD en MongoDB
class MongoDBDatabase {
  insertDocument(item: string): void {
    console.log(`Insertando el documento ${item} en MongoDB`);
  }

  findDocument(id: string): void {
    console.log(`Buscando el documento con ID ${id} en MongoDB`);
  }

  updateDocument(id: string, item: string): void {
    console.log(`Actualizando el documento con ID ${id} a ${item} en MongoDB`);
  }

  removeDocument(id: string): void {
    console.log(`Eliminando el documento con ID ${id} de MongoDB`);
  }
}

// Uso sin aplicar el Patrón Bridge
const mysql = new MySQLDatabase();
mysql.create("Producto 1"); // Solo funciona con MySQL

const mongo = new MongoDBDatabase();
mongo.insertDocument("Producto 2"); // Solo funciona con MongoDB

// Problemas sin Bridge:
// - El código está fuertemente acoplado a una base de datos específica.
// - No es fácil intercambiar la base de datos sin modificar varias partes del código.
// - Se genera duplicación de lógica cuando tienes que implementar CRUD para más bases de datos.
