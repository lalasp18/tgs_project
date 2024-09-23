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

@Component({
  selector: 'app-chocolate',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
  ],
  templateUrl: './chocolate.component.html',
  styleUrl: './chocolate.component.scss'
})
export class ChocolateComponent implements OnInit{
  chocolate: ProdutoCacau[] = [];
  listaCompra!: NotaFiscal;
  comprou: boolean = false;
  notaFiscalDaCompra: RecomendacaoCompra | null = null;

  constructor(
    private service: ProdutoCacauService,
    private notaFiscalService: NotaFiscalService,
    private mensagemService: AlertaService,
    private topService: TopbarCarrinhoService,
  ) {
  }

  ngOnInit() {
    this.carregarSecao();
    this.verificarEstadoCompra();
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
    this.listaCompra.produtos.push(choco);
    this.mensagemService.sucesso(choco.nome + " adicionado com sucesso!");
    this.topService.atualizarQuantia(this.listaCompra.produtos.length);
  }

  verificarEstadoCompra() {
    this.topService.eventoClick.subscribe(value => {
      this.comprou = value;
      if (this.comprou) this.salvarCompra();
    });
  }

  salvarCompra() {
    this.notaFiscalService.listaDeCompras(this.listaCompra).subscribe({
      next: (response) => {
        this.notaFiscalDaCompra = response.body;
      },
      error: (error) => {
        this.mensagemService.erro(error.error?.message);
      }
    });
  }
}
