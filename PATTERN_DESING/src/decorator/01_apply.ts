// *** Decorador para verificar si el campo está vacío ***
function Required(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    // Lógica para verificar si el campo está vacío
    if (!args[0] || args[0].trim().length === 0) {
      console.log("Error: El campo no puede estar vacío.");
      return;
    }

    // Llamar al método original si la validación pasa
    return originalMethod.apply(this, args);
  };
}

// *** Decorador para verificar si el valor es un email válido ***
function IsEmail(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    // Lógica para verificar si el valor es un email válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(args[0])) {
      console.log("Error: El campo debe ser un email válido.");
      return;
    }

    // Llamar al método original si la validación pasa
    return originalMethod.apply(this, args);
  };
}

// *** Clase con un método decorado para registrar usuarios ***
class UserRegistration {
  @Required
  @IsEmail
  registerUser(email: string): void {
    // Lógica para registrar al usuario si las validaciones pasan
    console.log(`Registrando usuario con email: ${email}`);
  }
}

// Uso del decorador en la clase UserRegistration
const decoratedRegistration = new UserRegistration();

// Intentar registrar con un campo vacío
decoratedRegistration.registerUser(""); // Error: El campo no puede estar vacío

// Intentar registrar con un valor no válido
decoratedRegistration.registerUser("invalid-email"); // Error: El campo debe ser un email válido

// Registrar correctamente
decoratedRegistration.registerUser("user@example.com"); // Registrando usuario con email: user@example.com
