// Interfaz común para todos los usuarios
interface User {
  accessLevel(): void;
}

// Clases concretas de usuarios
class AdminUser implements User {
  accessLevel() {
    console.log("Acceso total como Administrador.");
  }
}

class RegularUser implements User {
  accessLevel() {
    console.log("Acceso limitado como Usuario Regular.");
  }
}

class GuestUser implements User {
  accessLevel() {
    console.log("Acceso restringido como Invitado.");
  }
}

// Clase abstracta para la fábrica
abstract class UserFactory {
  abstract createUser(): User;

  public access(): void {
    const user = this.createUser();
    user.accessLevel();
  }
}

// Fábricas concretas para cada tipo de usuario
class AdminUserFactory extends UserFactory {
  createUser(): User {
    return new AdminUser();
  }
}

class RegularUserFactory extends UserFactory {
  createUser(): User {
    return new RegularUser();
  }
}

class GuestUserFactory extends UserFactory {
  createUser(): User {
    return new GuestUser();
  }
}

// Cliente: Uso del patrón Factory Method
const adminFactory = new AdminUserFactory();
adminFactory.access(); // Acceso total como Administrador.

const regularFactory = new RegularUserFactory();
regularFactory.access(); // Acceso limitado como Usuario Regular.

const guestFactory = new GuestUserFactory();
guestFactory.access(); // Acceso restringido como Invitado.
