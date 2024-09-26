// Interfaz Cloneable para indicar que las clases pueden ser clonadas
interface Cloneable {
    clone(): this;
  }
  
// Clase Usuario aplicando Prototype
class User implements Cloneable {
  constructor(
    public username: string,
    public role: string,
    public permissions: string[]
  ) {}

  // Método para clonar el objeto Usuario
  public clone(): this {
    const clone = Object.create(this);
    clone.permissions = [...this.permissions]; // Clonamos el array de permisos para evitar referencias
    return clone;
  }

  public printUserInfo(): void {
    console.log(
      `Usuario: ${this.username}, Rol: ${
        this.role
      }, Permisos: ${this.permissions.join(", ")}`
    );
  }
}

// Crear un prototipo de administrador
const adminPrototype = new User("adminPrototype", "Admin", [
  "READ",
  "WRITE",
  "DELETE",
]);

// Clonar el prototipo para crear un nuevo administrador
const admin1 = adminPrototype.clone();
admin1.username = "adminUser1";
admin1.printUserInfo(); // Usuario: adminUser1, Rol: Admin, Permisos: READ, WRITE, DELETE

// Clonar nuevamente para crear otro administrador
const admin2 = adminPrototype.clone();
admin2.username = "adminUser2";
admin2.printUserInfo(); // Usuario: adminUser2, Rol: Admin, Permisos: READ, WRITE, DELETE

// Crear un prototipo de empleado
const employeePrototype = new User("employeePrototype", "Employee", ["READ"]);

// Clonar el prototipo para crear un empleado
const employee1 = employeePrototype.clone();
employee1.username = "employeeUser1";
employee1.printUserInfo(); // Usuario: employeeUser1, Rol: Employee, Permisos: READ
