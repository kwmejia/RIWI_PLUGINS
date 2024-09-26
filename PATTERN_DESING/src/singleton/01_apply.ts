// Clase Logger aplicando Singleton
class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  // Constructor privado para evitar instancias externas
  private constructor() {}

  // Método estático para obtener la única instancia
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  // Método para agregar un log
  public log(message: string): void {
    this.logs.push(message);
    console.log(`Log añadido: ${message}`);
  }

  // Método para mostrar los logs
  public printLogs(): void {
    console.log(this.logs);
  }
}

// Uso del Logger con Singleton

// Obtenemos la instancia única del Logger
const logger1 = Logger.getInstance();
logger1.log("Primera operación desde logger1");

const logger2 = Logger.getInstance();
logger2.log("Primera operación desde logger2");

// Ambos comparten los mismos logs
logger1.printLogs(); // ["Primera operación desde logger1", "Primera operación desde logger2"]
logger2.printLogs(); // ["Primera operación desde logger1", "Primera operación desde logger2"]

// Ambas variables apuntan a la misma instancia
console.log(logger1 === logger2); // true
