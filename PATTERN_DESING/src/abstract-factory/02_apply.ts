// Interfaces comunes para los procesadores de pago
interface PaymentProcessor {
  processPayment(amount: number): void;
}

// Implementaciones concretas para Stripe
class StripePaymentProcessor implements PaymentProcessor {
  processPayment(amount: number) {
    console.log(`Procesando pago de ${amount} USD con tarjeta vía Stripe`);
  }
}

// Implementaciones concretas para PayPal
class PayPalPaymentProcessor implements PaymentProcessor {
  processPayment(amount: number) {
    console.log(`Procesando pago de ${amount} USD con PayPal`);
  }
}

// Implementaciones concretas para Transferencias Bancarias
class BankTransferPaymentProcessor implements PaymentProcessor {
  processPayment(amount: number) {
    console.log(`Procesando pago de ${amount} USD por transferencia bancaria`);
  }
}

// Implementaciones concretas para Criptomonedas
class CryptoPaymentProcessor implements PaymentProcessor {
  processPayment(amount: number) {
    console.log(`Procesando pago de ${amount} USD con Criptomonedas`);
  }
}

// Interfaz de la fábrica abstracta para procesadores de pago
interface PaymentProcessorFactory {
  createPaymentProcessor(): PaymentProcessor;
}

// Fábricas concretas para Stripe
class StripePaymentFactory implements PaymentProcessorFactory {
  createPaymentProcessor(): PaymentProcessor {
    return new StripePaymentProcessor();
  }
}

// Fábricas concretas para PayPal
class PayPalPaymentFactory implements PaymentProcessorFactory {
  createPaymentProcessor(): PaymentProcessor {
    return new PayPalPaymentProcessor();
  }
}

// Fábricas concretas para Transferencias Bancarias
class BankTransferPaymentFactory implements PaymentProcessorFactory {
  createPaymentProcessor(): PaymentProcessor {
    return new BankTransferPaymentProcessor();
  }
}


// Cliente que utiliza el patrón Abstract Factory
class PaymentService {
  private processor: PaymentProcessor;

  constructor(factory: PaymentProcessorFactory) {
    this.processor = factory.createPaymentProcessor();
  }

  public processPayment(amount: number): void {
    this.processor.processPayment(amount);
  }
}

// Uso del patrón Abstract Factory

// Fábrica y servicio para Stripe
const stripeFactory = new StripePaymentFactory();
const stripeService = new PaymentService(stripeFactory);
stripeService.processPayment(100); // Procesando pago de 100 USD con tarjeta vía Stripe

// Fábrica y servicio para PayPal
const paypalFactory = new PayPalPaymentFactory();
const paypalService = new PaymentService(paypalFactory);
paypalService.processPayment(50); // Procesando pago de 50 USD con PayPal

// Fábrica y servicio para Transferencias Bancarias
const bankFactory = new BankTransferPaymentFactory();
const bankService = new PaymentService(bankFactory);
bankService.processPayment(200); // Procesando pago de 200 USD por transferencia bancaria