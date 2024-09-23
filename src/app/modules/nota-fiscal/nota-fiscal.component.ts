import {Component, OnInit} from '@angular/core';
import {DatePipe, DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {RecomendacaoCompra} from "../../shared/models/recomendacao-compra.models";
import {UserAuthService} from "../../_services/user-auth.service";
import {AlertaService} from "../../shared/services/alerta.service";
import {ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {ProdutoCacau} from "../../shared/models/produto-cacau.models";
import {NotaFiscal} from "../../shared/models/nota-fiscal.models";

@Component({
  selector: 'app-nota-fiscal',
  standalone: true,
  imports: [
    DatePipe,
    ButtonDirective,
    NgForOf,
    NgIf,
    Ripple,
    DecimalPipe
  ],
  templateUrl: './nota-fiscal.component.html',
  styleUrl: './nota-fiscal.component.scss',
  providers: [
    AlertaService,
    UserAuthService
  ]
})
export class NotaFiscalComponent implements OnInit {
  diaAtual: any;
  recomendacao!: RecomendacaoCompra;
  listaCompra: NotaFiscal;

  constructor(
    private userAuthService: UserAuthService,
    private mensagemService: AlertaService,
    ) {
    this.listaCompra = new NotaFiscal();
  }

  ngOnInit() {
    this.diaAtual = new Date();
    this.definirNota();
  }

  definirNota() {
    if (localStorage.getItem("recomenda")) this.recomendacao = this.userAuthService.getRecomenda();
  }

  estaLogado() {
    const loggedIn = this.userAuthService.isLoggedIn();
    return loggedIn != '';
  }

  colocarNoCarrinho(choco: ProdutoCacau) {
    this.listaCompra.adicionarProduto(choco);
    this.mensagemService.sucesso(choco.nome + " adicionado com sucesso!");
    this.userAuthService.setCompra(this.listaCompra);
    this.userAuthService.setQtdCarrinho(this.listaCompra.produtos.length);
  }

  quantidade(produto: string) {
    return this.recomendacao.compras.produtos.filter(prod => prod.nome === produto).length;
  }

  total(produto: string) {
    return this.recomendacao.compras.produtos
      .filter(prod => prod.nome === produto)
      .reduce((acc, prod) => acc + prod.valor, 0);
  }

}
