import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared-module";
import {ProdutoCacauService} from "../../shared/services/produto-cacau.service";
import {ProdutoCacau} from "../../shared/models/produto-cacau.models";
import {AlertaService} from "../../shared/services/alerta.service";
import {NotaFiscal} from "../../shared/models/nota-fiscal.models";
import {TopbarCarrinhoService} from "../../shared/services/topbar-carrinho.service";
import {NotaFiscalService} from "../../shared/services/nota-fiscal.service";
import {RecomendacaoCompra} from "../../shared/models/recomendacao-compra.models";
import {Usuario} from "../../shared/models/usuario.models";
import {UserAuthService} from "../../_services/user-auth.service";

@Component({
  selector: 'app-chocolate',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
  ],
  templateUrl: './chocolate.component.html',
  styleUrl: './chocolate.component.scss',
  providers: [
    ProdutoCacauService,
    NotaFiscalService,
    AlertaService,
    TopbarCarrinhoService,
    UserAuthService
  ]
})
export class ChocolateComponent implements OnInit{
  chocolate: ProdutoCacau[] = [];
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
    this.service.listarSecaoChocolate().subscribe({
      next: (response) => {
        this.chocolate = response.body || [];
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
