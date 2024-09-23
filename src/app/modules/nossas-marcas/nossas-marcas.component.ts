import {Component, OnInit} from '@angular/core';
import {ButtonDirective} from "primeng/button";
import {MessagesModule} from "primeng/messages";
import {NgForOf, NgIf} from "@angular/common";
import {Ripple} from "primeng/ripple";
import {ProdutoCacau} from "../../shared/models/produto-cacau.models";
import {NotaFiscal} from "../../shared/models/nota-fiscal.models";
import {ProdutoCacauService} from "../../shared/services/produto-cacau.service";
import {AlertaService} from "../../shared/services/alerta.service";
import {UserAuthService} from "../../_services/user-auth.service";

@Component({
  selector: 'app-nossas-marcas',
  standalone: true,
    imports: [
        ButtonDirective,
        MessagesModule,
        NgForOf,
        NgIf,
        Ripple
    ],
  templateUrl: './nossas-marcas.component.html',
  styleUrl: './nossas-marcas.component.scss',
  providers: [
    ProdutoCacauService,
    AlertaService,
    UserAuthService
  ]
})
export class NossasMarcasComponent implements OnInit{
  marcas: ProdutoCacau[] = [];
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
    this.service.listarSecaoMarcas().subscribe({
      next: (response) => {
        this.marcas = response.body || [];
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
