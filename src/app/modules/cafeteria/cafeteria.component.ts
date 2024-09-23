import {Component, OnInit} from '@angular/core';
import {ProdutoCacauService} from "../../shared/services/produto-cacau.service";
import {NotaFiscalService} from "../../shared/services/nota-fiscal.service";
import {AlertaService} from "../../shared/services/alerta.service";
import {TopbarCarrinhoService} from "../../shared/services/topbar-carrinho.service";
import {ProdutoCacau} from "../../shared/models/produto-cacau.models";
import {NotaFiscal} from "../../shared/models/nota-fiscal.models";
import {RecomendacaoCompra} from "../../shared/models/recomendacao-compra.models";
import {ButtonDirective} from "primeng/button";
import {NgForOf, NgIf} from "@angular/common";
import {Ripple} from "primeng/ripple";
import {MessagesModule} from "primeng/messages";
import {UserAuthService} from "../../_services/user-auth.service";
import {Usuario} from "../../shared/models/usuario.models";

@Component({
  selector: 'app-cafeteria',
  standalone: true,
  imports: [
    ButtonDirective,
    NgForOf,
    Ripple,
    MessagesModule,
    NgIf
  ],
  templateUrl: './cafeteria.component.html',
  styleUrl: './cafeteria.component.scss',
  providers: [
    ProdutoCacauService,
    NotaFiscalService,
    AlertaService,
    TopbarCarrinhoService,
    UserAuthService
  ]
})
export class CafeteriaComponent implements OnInit{
  cafeteria: ProdutoCacau[] = [];
  listaCompra: NotaFiscal;

  constructor(
    private service: ProdutoCacauService,
    private mensagemService: AlertaService,
    private userAuthService: UserAuthService,
  ) {
    this.listaCompra = new NotaFiscal();
  }

  ngOnInit() {
    this.carregarSecao();
  }

  carregarSecao() {
    this.service.listarSecaoCafeteria().subscribe({
      next: (response) => {
        this.cafeteria = response.body || [];
      },
      error: (error) => {
        this.mensagemService.erro(error.error?.message);
      }
    });
  }

  colocarNoCarrinho(choco: ProdutoCacau) {
    this.listaCompra.adicionarProduto(choco);
    this.mensagemService.sucesso(choco.nome + " adicionado com sucesso!");
    this.userAuthService.setCompra(this.listaCompra);
    this.userAuthService.setQtdCarrinho(this.listaCompra.produtos.length);
  }

  estaLogado() {
    const loggedIn = this.userAuthService.isLoggedIn();
    return loggedIn != '';
  }
}
