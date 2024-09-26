// Interfaz común para la conexión
interface DBConnection {
  connect(): void;
  executeQuery(query: string): void;
}

// Implementaciones concretas para MySQL
class MySQLConnection implements DBConnection {
  connect() {
    console.log("Conectando a MySQL...");
  }

  executeQuery(query: string) {
    console.log(`Ejecutando query en MySQL: ${query}`);
  }
}

// Implementaciones concretas para PostgreSQL
class PostgreSQLConnection implements DBConnection {
  connect() {
    console.log("Conectando a PostgreSQL...");
  }

  executeQuery(query: string) {
    console.log(`Ejecutando query en PostgreSQL: ${query}`);
  }
}

// Implementaciones concretas para MongoDB
class MongoDBConnection implements DBConnection {
  connect() {
    console.log("Conectando a MongoDB...");
  }

  executeQuery(query: string) {
    console.log(`Ejecutando query en MongoDB: ${query}`);
  }
}

// Interfaz de la fábrica abstracta
interface DBFactory {
  createConnection(): DBConnection;
}

// Fábricas concretas para MySQL
class MySQLFactory implements DBFactory {
  createConnection(): DBConnection {
    return new MySQLConnection();
  }
}

// Fábricas concretas para PostgreSQL
class PostgreSQLFactory implements DBFactory {
  createConnection(): DBConnection {
    return new PostgreSQLConnection();
  }
}

// Fábricas concretas para MongoDB
class MongoDBFactory implements DBFactory {
  createConnection(): DBConnection {
    return new MongoDBConnection();
  }
}

// Cliente que usa la Abstract Factory
class DatabaseClient {
  private connection: DBConnection;

  constructor(factory: DBFactory) {
    this.connection = factory.createConnection();
  }

  runQuery(query: string): void {
    this.connection.connect();
    this.connection.executeQuery(query);
  }
}

// Uso del patrón Abstract Factory
const mysqlFactory = new MySQLFactory();
const postgresFactory = new PostgreSQLFactory();
const mongoFactory = new MongoDBFactory();

const mysqlClient = new DatabaseClient(mysqlFactory);
mysqlClient.runQuery("SELECT * FROM users;");

const postgresClient = new DatabaseClient(postgresFactory);
postgresClient.runQuery("SELECT * FROM customers;");

const mongoClient = new DatabaseClient(mongoFactory);
mongoClient.runQuery("SELECT * FROM products;");
