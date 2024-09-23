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
      life: 3000,
    });
  }

  public erro(mensagem: string): void {
    this.messageService.add({
      severity: "error",
      summary: "Erro",
      detail: mensagem,
      life: 3000,
    });
  }

  public warn(mensagem: string): void {
    this.messageService.add({
      severity: "warn",
      summary: "Atenção",
      detail: mensagem,
      life: 3000,
    });
  }

}
