import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared-module";
import {TopbarCarrinhoService} from "../../shared/services/topbar-carrinho.service";
import {AlertaService} from "../../shared/services/alerta.service";
import {UsuarioService} from "../../_services/usuario.service";
import {Usuario} from "../../shared/models/usuario.models";
import {UserAuthService} from "../../_services/user-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logar',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule
  ],
  templateUrl: './logar.component.html',
  styleUrl: './logar.component.scss',
  providers: [
    AlertaService,
    UsuarioService,
    UserAuthService
  ]
})
export class LogarComponent implements OnInit{
  @Input() visivel: boolean = false;

  nomeusuario: string = '';

  constructor(
    private userService: UsuarioService,
    private userAuthService: UserAuthService,
    private router: Router,
    private mensagemService: AlertaService
  ) {
  }

  ngOnInit() {
  }

  efetuarLogin() {
    if (this.nomeusuario == '' || this.nomeusuario == null) {
      this.mensagemService.warn("Insira um nome de usuário!");
      return;
    }

    this.userService.logarUser(this.nomeusuario).subscribe({
      next: (response) => {
        const loginResponse: Usuario | null = response.body;
        if (loginResponse) {
          this.userAuthService.setNome(loginResponse.nome)
          this.userAuthService.setTime();
        }

        this.visivel = false;
        this.router.navigate(['']).then(() => {
          window.location.reload();
        });
      },
      error: (error) => {
        this.mensagemService.erro(error.error?.message);
      }
    });
  }

}
