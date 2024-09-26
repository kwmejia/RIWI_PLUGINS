/**
 * Supongamos que tienes un sistema que envía notificaciones,
 * y dependiendo del tipo de notificación, podría enviarse por
 * correo electrónico o SMS. En este caso, aplicaríamos el patrón
 * Factory Method para encapsular la creación de diferentes tipos de notificaciones.
 */

/**
 * El código está acoplado a las clases EmailNotification y SMSNotification,
 *  lo que significa que si queremos añadir más tipos de notificaciones
 * (como wsp Notifications), tendríamos que modificar varias partes del código.
 */

// Clases de notificación
// Clases de notificación
class EmailNotification {
  sendNotification(message: string) {
    console.log(`Enviando notificación por correo: ${message}`);
  }
}

class SMSNotification {
  sendNotification(message: string) {
    console.log(`Enviando notificación por SMS: ${message}`);
  }
}

// Aquí está el código cliente que envía notificaciones.
export function sendNotification(type: string, message: string) {
  if (type === "email") {
    const emailNotification = new EmailNotification();
    emailNotification.sendNotification(message);
  } else if (type === "sms") {
    const smsNotification = new SMSNotification();
    smsNotification.sendNotification(message);
  }
}

const message = "Tu pedido ha sido procesado.";
sendNotification("email", message);
sendNotification("sms", message);

// Supongamos que ahora queremos agregar "Push Notification"

// Clase Push Notification
class PushNotification {
  sendNotification(message: string) {
    console.log(`Enviando notificación por Push: ${message}`);
  }
}

// Ahora tenemos que modificar la función sendNotification para incluir Push
function sendNotification2(type: string, message: string) {
  if (type === "email") {
    const emailNotification = new EmailNotification();
    emailNotification.sendNotification(message);
  } else if (type === "sms") {
    const smsNotification = new SMSNotification();
    smsNotification.sendNotification(message);
  } else if (type === "push") {
    const pushNotification = new PushNotification();
    pushNotification.sendNotification(message);
  }
}

 sendNotification("push", "Tienes una nueva actualización.");
