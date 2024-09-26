// Clase Config sin aplicar Singleton
class Config {
  public settings: { [key: string]: string } = {};

  constructor() {
    this.settings = {
      apiUrl: "https://api.example.com",
      apiKey: "ABC123",
      debugMode: "false",
    };
  }

  public set(key: string, value: string): void {
    this.settings[key] = value;
  }

  public get(key: string): string | undefined {
    return this.settings[key];
  }
}

// Uso sin Singleton

// Crear dos instancias de Config
const config1 = new Config();
const config2 = new Config();

// Cambiar configuración en config1
config1.set("debugMode", "true");

// Ver configuración en config1 y config2
console.log(config1.get("debugMode")); // "true"
console.log(config2.get("debugMode")); // "false" -> ¡Problema! Las instancias tienen configuraciones distintas
