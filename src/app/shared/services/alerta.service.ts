import { Injectable } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";

@Injectable({
  providedIn: "root",
})
export class AlertaService {
  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService
  ) {}

  public sucesso(mensagem: string): void {
    this.messageService.add({
      severity: "success",
      summary: "Sucesso",
      detail: mensagem,
    });
  }

  public erro(mensagem: string): void {
    this.messageService.add({
      severity: "error",
      summary: "Erro",
      detail: mensagem,
    });
  }

  public warn(mensagem: string): void {
    this.messageService.add({
      severity: "warn",
      summary: "Atenção",
      detail: mensagem,
    });
  }

  public confirmarExclusao(action: () => void) {
    this.confirmationService.confirm({
      message: "Você deseja excluir esse registro?",
      header: "Confirmar Exclusão",
      icon: "pi pi-info-circle",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: "Sim",
      rejectLabel: "Não",

      accept: () => {
        action();
      },
    });
  }
}
