// *** Decorador para verificar el token ***
function CheckToken(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const token = args[2]; // Se asume que el tercer argumento es el token
    console.log(`Verificando token...`);
    if (token !== "valid_token") {
      console.log("Error: Token inválido.");
      return false;
    }
    // Llamar al método original si la verificación pasa
    return originalMethod.apply(this, args);
  };
}

// *** Decorador para verificar el rol de administrador ***
function CheckAdminRole(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const role = args[3]; // Se asume que el cuarto argumento es el rol
    console.log(`Verificando rol de administrador...`);
    if (role !== "admin") {
      console.log("Error: No tiene permisos de administrador.");
      return false;
    }
    // Llamar al método original si la verificación pasa
    return originalMethod.apply(this, args);
  };
}

// *** Decorador para registrar logs de autenticación ***
function LogAuth(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Registro de autenticación para el usuario: ${args[0]}`);
    // Llamar al método original
    return originalMethod.apply(this, args);
  };
}

// *** Clase AuthService con métodos decorados ***
class AuthService {
  @CheckToken
  @CheckAdminRole
  @LogAuth
  authenticate(
    user: string,
    password: string,
    token: string,
    role: string
  ): boolean {
    console.log(`Autenticando al usuario: ${user}`);
    // Lógica básica de autenticación
    return user === "admin" && password === "admin123";
  }
}

// *** Uso del sistema de autenticación con decoradores ***

const authService = new AuthService();

// Intentar autenticar con un token inválido
authService.authenticate("admin", "admin123", "invalid_token", "admin");
// Output:
// Verificando token...
// Error: Token inválido.

// Intentar autenticar con un rol no autorizado
authService.authenticate("admin", "admin123", "valid_token", "user");
// Output:
// Verificando token...
// Verificando rol de administrador...
// Error: No tiene permisos de administrador.

// Autenticación exitosa
authService.authenticate("admin", "admin123", "valid_token", "admin");
// Output:
// Registro de autenticación para el usuario: admin
// Verificando token...
// Verificando rol de administrador...
// Autenticando al usuario: admin
