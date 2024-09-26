// *** Interfaz común para las operaciones CRUD ***
interface Database {
  create(item: string): void;
  read(id: string): void;
  update(id: string, item: string): void;
  delete(id: string): void;
}

// *** Implementación CRUD para MySQL usando la interfaz Database ***
class MySQLDatabase implements Database {
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

// *** Implementación CRUD para MongoDB usando la interfaz Database ***
class MongoDBDatabase implements Database {
  create(item: string): void {
    console.log(`Insertando el documento ${item} en MongoDB`);
  }

  read(id: string): void {
    console.log(`Buscando el documento con ID ${id} en MongoDB`);
  }

  update(id: string, item: string): void {
    console.log(`Actualizando el documento con ID ${id} a ${item} en MongoDB`);
  }

  delete(id: string): void {
    console.log(`Eliminando el documento con ID ${id} de MongoDB`);
  }
}

// *** Clase base que define las operaciones CRUD ***
class DataManager {
  protected database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  create(item: string): void {
    this.database.create(item);
  }

  read(id: string): void {
    this.database.read(id);
  }

  update(id: string, item: string): void {
    this.database.update(id, item);
  }

  delete(id: string): void {
    this.database.delete(id);
  }
}

// *** Uso del Patrón Bridge ***

// Usar MySQL con el Patrón Bridge
const mysqlDatabase = new MySQLDatabase();
const dataManagerMySQL = new DataManager(mysqlDatabase);
dataManagerMySQL.create("Producto 1"); // Creando el item Producto 1 en MySQL

// Usar MongoDB con el Patrón Bridge
const mongoDatabase = new MongoDBDatabase();
const dataManagerMongo = new DataManager(mongoDatabase);
dataManagerMongo.create("Producto 2"); // Insertando el documento Producto 2 en MongoDB

// *** Ventajas del Patrón Bridge: ***
// 1. Desacoplamiento: Las operaciones CRUD están desacopladas de la base de datos. Puedes cambiar la base de datos sin afectar la lógica del negocio.
// 2. Escalabilidad: Agregar nuevas bases de datos es sencillo y no requiere modificar el código de las operaciones CRUD.
// 3. Reutilización: El código de DataManager es reutilizable para cualquier base de datos que implemente la interfaz Database.
