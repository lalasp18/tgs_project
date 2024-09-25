import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared-module";
import {ProdutoCacauService} from "../../shared/services/produto-cacau.service";
import {ProdutoCacau} from "../../shared/models/produto-cacau.models";
import {AlertaService} from "../../shared/services/alerta.service";
import {NotaFiscal} from "../../shared/models/nota-fiscal.models";
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
    AlertaService,
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
    this.listaCompra = this.userAuthService.getCompra();
    this.listaCompra.produtos.push(choco);
    this.listaCompra.total = this.listaCompra.produtos.reduce((acc, produto) => acc + produto.valor, 0);
    this.gravarStorage(choco.nome);
  }

  gravarStorage(nome: string): void {
    this.mensagemService.sucesso(nome + " adicionado com sucesso!");
    this.userAuthService.setCompra(this.listaCompra);
    this.userAuthService.setQtdCarrinho(this.listaCompra.produtos.length);
  }

  estaLogado() {
    const loggedIn = this.userAuthService.isLoggedIn();
    return loggedIn != '';
  }
}