// Clase para representar la conexión a la base de datos
class DatabaseConnection {
  private host: string;
  private port: number;
  private user: string;
  private password: string;
  private useSSL: boolean;

  // El constructor ahora recibe un builder
  constructor(builder: DatabaseConnectionBuilder) {
    this.host = builder.host;
    this.port = builder.port;
    this.user = builder.user;
    this.password = builder.password;
    this.useSSL = builder.useSSL;
  }

  public connect(): void {
    console.log(
      `Conectando a la base de datos en ${this.host}:${this.port} como ${this.user} usando SSL: ${this.useSSL}`
    );
  }
}

// Builder para la conexión a la base de datos
class DatabaseConnectionBuilder {
  public host: string = "localhost";
  public port: number = 5432;
  public user: string = "admin";
  public password: string = "admin";
  public useSSL: boolean = false;

  public setHost(host: string): DatabaseConnectionBuilder {
    this.host = host;
    return this;
  }

  public setPort(port: number): DatabaseConnectionBuilder {
    this.port = port;
    return this;
  }

  public setUser(user: string): DatabaseConnectionBuilder {
    this.user = user;
    return this;
  }

  public setPassword(password: string): DatabaseConnectionBuilder {
    this.password = password;
    return this;
  }

  public setUseSSL(useSSL: boolean): DatabaseConnectionBuilder {
    this.useSSL = useSSL;
    return this;
  }

  // Método para construir el objeto DatabaseConnection
  public build(): DatabaseConnection {
    return new DatabaseConnection(this);
  }
}

// Uso del patrón Builder

// Crear una conexión con los valores por defecto
const dbConnection1 = new DatabaseConnectionBuilder().build();
dbConnection1.connect(); // Conectando a la base de datos en localhost:5432 como admin usando SSL: false

// Crear una conexión personalizada
const dbConnection2 = new DatabaseConnectionBuilder()
  .setHost("db.example.com")
  .setPort(3306)
  .setUser("root")
  .setPassword("secret")
  .setUseSSL(true)
  .build();
dbConnection2.connect(); // Conectando a la base de datos en db.example.com:3306 como root usando SSL: true

// Crear otra conexión personalizada con diferentes parámetros
const dbConnection3 = new DatabaseConnectionBuilder()
  .setHost("db.another.com")
  .setUser("superuser")
  .setUseSSL(false)
  .build();
dbConnection3.connect(); // Conectando a la base de datos en db.another.com:5432 como superuser usando SSL: false
