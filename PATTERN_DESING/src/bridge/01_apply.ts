// *** Interfaz común para los canales de comunicación ***
interface NotificationSender {
  send(message: string): void;
}

// *** Implementación del canal de Email ***
class EmailSender implements NotificationSender {
  send(message: string): void {
    console.log(`Enviando email: ${message}`);
  }
}

// *** Implementación del canal de SMS ***
class SMSSender implements NotificationSender {
  send(message: string): void {
    console.log(`Enviando SMS: ${message}`);
  }
}

// *** Clase base para las notificaciones (Abstracción) ***
abstract class Notification {
  protected sender: NotificationSender;

  constructor(sender: NotificationSender) {
    this.sender = sender;
  }

  abstract notify(message: string): void;
}

// *** Notificación estándar que puede usar cualquier canal ***
class StandardNotification extends Notification {
  notify(message: string): void {
    this.sender.send(`Notificación estándar: ${message}`);
  }
}

// *** Notificación urgente que puede usar cualquier canal ***
class UrgentNotification extends Notification {
  notify(message: string): void {
    this.sender.send(`¡URGENTE! ${message}`);
  }
}

// *** Uso del patrón Bridge ***
const emailSender = new EmailSender();
const smsSender = new SMSSender();

// Enviar una notificación estándar a través de Email
const standardEmailNotification = new StandardNotification(emailSender);
standardEmailNotification.notify("Este es un mensaje estándar");

// Enviar una notificación urgente a través de SMS
const urgentSMSNotification = new UrgentNotification(smsSender);
urgentSMSNotification.notify("Este es un mensaje urgente");

// *** Ventajas del patrón Bridge: ***
// 1. Desacoplamiento: La abstracción (notificaciones) está separada de la implementación (canales de comunicación). Ahora puedes combinar cualquier tipo de notificación con cualquier canal de manera flexible.
// 2. Escalabilidad: Si necesitas agregar un nuevo tipo de notificación (crítica) o un nuevo canal (WhatsApp), solo necesitas crear una nueva clase que implemente la interfaz sin afectar las demás.
