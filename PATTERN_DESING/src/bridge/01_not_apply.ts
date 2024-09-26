// Sistema de notificaciones por Email
class EmailNotification {
  sendEmail(message: string): void {
    console.log(`Enviando email: ${message}`);
  }
}

// Sistema de notificaciones por SMS
class SMSNotification {
  sendSMS(message: string): void {
    console.log(`Enviando SMS: ${message}`);
  }
}

// Notificación estándar usando Email
class StandardEmailNotification {
  send(message: string): void {
    const email = new EmailNotification();
    email.sendEmail(`Notificación estándar: ${message}`);
  }
}

// Notificación urgente usando SMS
class UrgentSMSNotification {
  send(message: string): void {
    const sms = new SMSNotification();
    sms.sendSMS(`Notificación urgente: ${message}`);
  }
}

// Uso sin aplicar el patrón Bridge
const standardEmail = new StandardEmailNotification();
standardEmail.send("Este es un mensaje estándar");

const urgentSMS = new UrgentSMSNotification();
urgentSMS.send("Este es un mensaje urgente");

// *** Problemas del código sin aplicar el patrón Bridge: ***
// 1. Acoplamiento fuerte: Las clases de notificaciones están fuertemente atadas a un canal específico (Email o SMS).
// 2. Dificultad de escalabilidad: Si necesitas agregar más tipos de notificaciones (por ejemplo, críticas) o más canales (WhatsApp), debes crear más clases específicas, lo que genera duplicación de código y dificultad para mantener el sistema.
