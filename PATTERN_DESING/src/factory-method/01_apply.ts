/**
 * Ahora veamos cómo se ve el mismo escenario al aplicar el Factory Method.
 *  Aquí encapsulamos la creación de notificaciones en fábricas específicas, 
 * y el cliente no necesita saber qué tipo de notificación está creando.
 */
// Interfaz común para las notificaciones
interface Notification {
  sendNotification(message: string): void;
}

// Clases concretas de notificación
class EmailNotification implements Notification {
  sendNotification(message: string) {
    console.log(`Enviando notificación por correo: ${message}`);
  }
}

class SMSNotification implements Notification {
  sendNotification(message: string) {
    console.log(`Enviando notificación por SMS: ${message}`);
  }
}

class PushNotification implements Notification {
  sendNotification(message: string) {
    console.log(`Enviando notificación por Push: ${message}`);
  }
}

// Clase abstracta de fábrica
abstract class NotificationFactory {
  abstract createNotification(): Notification;

  send(message: string): void {
    const notification = this.createNotification();
    notification.sendNotification(message);
  }
}

// Fábricas concretas para cada tipo de notificación
class EmailNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }
}

class SMSNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new SMSNotification();
  }
}

class PushNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new PushNotification();
  }
}

// Cliente: Uso del patrón Factory Method
const message = "Tu pedido ha sido procesado.";

const emailFactory = new EmailNotificationFactory();
emailFactory.send(message);

const smsFactory = new SMSNotificationFactory();
smsFactory.send(message);

// Ahora, para agregar "Push Notification", simplemente creamos una nueva fábrica
const pushFactory = new PushNotificationFactory();
pushFactory.send("Tienes una nueva actualización.");


/**
 * Ventajas con el patrón Factory Method:
Sin modificación del cliente: El código cliente (sendNotification o cualquier lógica de envío) no necesita ser modificado cuando se agrega una nueva notificación. Solo creas una nueva clase concreta (como PushNotificationFactory) y la usas.
Desacoplamiento: El cliente está desacoplado de las clases concretas de notificación. No le importa si está enviando un correo electrónico, un SMS o una notificación Push. Solo interactúa con la fábrica.
Escalabilidad: Si mañana decides agregar más tipos de notificaciones (por ejemplo, Slack Notification), no tendrás que cambiar el código del cliente, solo agregarías una nueva fábrica (SlackNotificationFactory).
 */