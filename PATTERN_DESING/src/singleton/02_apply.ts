// Clase Config aplicando Singleton
class Config {
  private static instance: Config;
  public settings: { [key: string]: string } = {};

  // Constructor privado para evitar múltiples instancias
  private constructor() {
    this.settings = {
      apiUrl: "https://api.example.com",
      apiKey: "ABC123",
      debugMode: "false",
    };
  }

  // Método estático para obtener la única instancia de Config
  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  // Métodos para modificar y obtener configuraciones
  public set(key: string, value: string): void {
    this.settings[key] = value;
  }

  public get(key: string): string | undefined {
    return this.settings[key];
  }
}

// Uso del Singleton

// Obtener la instancia de Config
const config1 = Config.getInstance();
const config2 = Config.getInstance();

// Cambiar configuración en config1
config1.set("debugMode", "true");

// Ver configuración en config1 y config2
console.log(config1.get("debugMode")); // "true"
console.log(config2.get("debugMode")); // "true" -> ¡Éxito! Ambas variables comparten la misma instancia

// Verificar que config1 y config2 son la misma instancia
console.log(config1 === config2); // true
