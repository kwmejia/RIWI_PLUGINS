// Servicio de autenticación básico
class AuthService {
  authenticate(user: string, password: string): boolean {
    console.log(`Autenticando usuario: ${user}`);
    // Lógica básica de autenticación (solo simulado)
    return user === "admin" && password === "admin123";
  }
}

// Servicio para verificar tokens
class TokenAuthService {
  authenticate(user: string, password: string, token: string): boolean {
    console.log(`Verificando token para usuario: ${user}`);
    // Verificar token (simulado)
    if (token !== "valid_token") {
      console.log("Error: Token inválido.");
      return false;
    }
    // Delegar la autenticación a AuthService
    const authService = new AuthService();
    return authService.authenticate(user, password);
  }
}

// Servicio para autenticar y verificar roles de administrador
class AdminAuthService {
  authenticate(user: string, password: string, role: string): boolean {
    console.log(`Verificando rol de administrador para usuario: ${user}`);
    if (role !== "admin") {
      console.log("Error: No tiene permisos de administrador.");
      return false;
    }
    // Delegar la autenticación a AuthService
    const authService = new AuthService();
    return authService.authenticate(user, password);
  }
}

// Uso sin aplicar el Patrón Decorator
const tokenAuthService = new TokenAuthService();
tokenAuthService.authenticate("admin", "admin123", "invalid_token"); // Error: Token inválido.

const adminAuthService = new AdminAuthService();
adminAuthService.authenticate("admin", "admin123", "user"); // Error: No tiene permisos de administrador.
