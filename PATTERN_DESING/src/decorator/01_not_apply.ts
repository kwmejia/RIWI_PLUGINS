// Validador manual para verificar si el campo está vacío y si es un email válido
class UserRegistrationManual {
  registerUser(email: string): void {
    // Verificar si el campo está vacío
    if (!email || email.trim().length === 0) {
      console.log("Error: El campo no puede estar vacío.");
      return;
    }

    // Verificar si el campo tiene formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Error: El campo debe ser un email válido.");
      return;
    }

    // Lógica para registrar al usuario si todas las validaciones pasan
    console.log(`Registrando usuario con email: ${email}`);
  }
}

// Uso sin aplicar el patrón Decorator
const manualRegistration = new UserRegistrationManual();

// Intentar registrar con un campo vacío
manualRegistration.registerUser(""); // Error: El campo no puede estar vacío

// Intentar registrar con un valor no válido
manualRegistration.registerUser("invalid-email"); // Error: El campo debe ser un email válido

// Registrar correctamente
manualRegistration.registerUser("user@example.com"); // Registrando usuario con email: user@example.com
