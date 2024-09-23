import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {RecomendacaoCompra} from "../../shared/models/recomendacao-compra.models";
import {UserAuthService} from "../../_services/user-auth.service";
import {AlertaService} from "../../shared/services/alerta.service";
import {ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {ProdutoCacau} from "../../shared/models/produto-cacau.models";
import {NotaFiscal, ProdutoResumo} from "../../shared/models/nota-fiscal.models";

@Component({
  selector: 'app-nota-fiscal',
  standalone: true,
  imports: [
    DatePipe,
    ButtonDirective,
    NgForOf,
    NgIf,
    Ripple,
    DecimalPipe,
    CurrencyPipe
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


  calcularResumo(produtos: ProdutoCacau[]): ProdutoResumo[] {
    const resumo: { [key: string]: ProdutoResumo } = {};

    produtos.forEach(produto => {
      const chave = `${produto.nome}-${produto.valor}`;

      if (!resumo[chave]) {
        resumo[chave] = {
          nome: produto.nome,
          valor: produto.valor,
          quantidade: 1,
          total: produto.valor,
        };
      } else {
        resumo[chave].quantidade++;
        resumo[chave].total += produto.valor;
      }
    });

    return Object.values(resumo);
  }

}
