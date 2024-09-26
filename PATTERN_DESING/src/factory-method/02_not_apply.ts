/**
 * Supongamos que estamos construyendo un sistema de autenticación y
 * manejo de usuarios en una aplicación, donde podemos tener diferentes tipos de usuarios,
 * como Administrador y Usuario Regular. Aplicaremos el Factory Method para crear diferentes
 * tipos de usuarios con roles específicos.
 */

// Clases de usuario
class AdminUser {
  accessLevel() {
    console.log("Acceso total como Administrador.");
  }
}

class RegularUser {
  accessLevel() {
    console.log("Acceso limitado como Usuario Regular.");
  }
}

// Función para crear usuarios sin Factory Method
function createUser(type: string) {
  if (type === "admin") {
    return new AdminUser();
  } else if (type === "regular") {
    return new RegularUser();
  }
}

// Uso del código sin Factory Method
const user1 = createUser("admin");
user1!.accessLevel(); // Acceso total como Administrador.

const user2 = createUser("regular");
user2!.accessLevel(); // Acceso limitado como Usuario Regular.
