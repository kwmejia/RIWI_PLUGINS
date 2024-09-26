// Interfaz común para servicios de mensajería
interface MessagingService {
  sendMessage(message: string): void;
}

class SlackService {
  sendSlackMessage(channel: string, message: string): void {
    console.log(`Enviando mensaje a Slack en el canal ${channel}: ${message}`);
  }
}

// Servicio de mensajería de Microsoft Teams
class TeamsService {
  sendTeamsMessage(groupId: string, message: string): void {
    console.log(
      `Enviando mensaje a Microsoft Teams en el grupo ${groupId}: ${message}`
    );
  }
}
// Adaptador para el servicio de Slack
class SlackAdapter implements MessagingService {
  private slackService: SlackService;

  constructor(slackService: SlackService) {
    this.slackService = slackService;
  }

  // Implementación del método unificado
  sendMessage(message: string): void {
    const channel = "#general"; // Canal por defecto para simplificar
    this.slackService.sendSlackMessage(channel, message);
  }
}

// Adaptador para el servicio de Microsoft Teams
class TeamsAdapter implements MessagingService {
  private teamsService: TeamsService;

  constructor(teamsService: TeamsService) {
    this.teamsService = teamsService;
  }

  // Implementación del método unificado
  sendMessage(message: string): void {
    const groupId = "team123"; // Grupo por defecto para simplificar
    this.teamsService.sendTeamsMessage(groupId, message);
  }
}

// Uso del patrón Adaptador
const slackAdapter = new SlackAdapter(new SlackService());
const teamsAdapter = new TeamsAdapter(new TeamsService());

// Código cliente unificado que usa la interfaz común
function notify(service: MessagingService, message: string) {
  service.sendMessage(message);
}

// Enviar notificaciones a ambos servicios
notify(slackAdapter, "Mensaje para Slack");
notify(teamsAdapter, "Mensaje para Teams");