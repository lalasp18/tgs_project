import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {SharedModule} from "../../shared/shared-module";
import {CommonModule, isPlatformBrowser} from "@angular/common";
import {TopbarCarrinhoService} from "../../shared/services/topbar-carrinho.service";
import {LogarComponent} from "../logar/logar.component";
import {ProdutoCacauService} from "../../shared/services/produto-cacau.service";
import {NotaFiscalService} from "../../shared/services/nota-fiscal.service";
import {AlertaService} from "../../shared/services/alerta.service";
import {UserAuthService} from "../../_services/user-auth.service";
import {Usuario} from "../../shared/models/usuario.models";
import {RecomendacaoCompra} from "../../shared/models/recomendacao-compra.models";
import {NotaFiscal} from "../../shared/models/nota-fiscal.models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    LogarComponent
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  providers: [
    TopbarCarrinhoService,
    UserAuthService,
    NotaFiscalService,
    AlertaService
  ]
})
export class TopbarComponent implements OnInit {
  isMobile: boolean = false;
  visivel: boolean = false;
  notaFiscalDaCompra: RecomendacaoCompra | null = null;
  listaCompra: NotaFiscal;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private userAuthService: UserAuthService,
    private notaFiscalService: NotaFiscalService,
    private mensagemService: AlertaService,
    private router: Router,
  ) {
    this.listaCompra = new NotaFiscal();
  }

  ngOnInit() {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    if (isPlatformBrowser(this.platformId)) {
      const windowWidth = window.innerWidth;
      this.isMobile = windowWidth <= 768;
    }
  }

  exibirTotalCarrinho() {
    return this.userAuthService.getQtdCarrinho();
  }

  efetuarLogin() {
    this.visivel = true;
  }

  logout() {
    this.userAuthService.clear();
  }

  getNameUser() {
    return this.userAuthService.getNome();
  }

  estaLogado() {
    const loggedIn = this.userAuthService.isLoggedIn();
    return loggedIn != '';
  }

  salvarCompra() {
    if (this.userAuthService.getQtdCarrinho() <= 0) {
      return;
    }

    this.notaFiscalService.listaDeCompras(this.completarCompra()).subscribe({
      next: (response) => {
        this.notaFiscalDaCompra = response.body;
        this.userAuthService.setDataBeforeReload();
        this.userAuthService.setRecomenda(this.notaFiscalDaCompra);
        this.router.navigate(['/nota-fiscal/recomenda']);
      },
      error: (error) => {
        this.mensagemService.erro(error.error?.message);
      }
    });
  }

  completarCompra() {
    this.listaCompra = this.userAuthService.getCompra();

    const user: Usuario = {nome: this.userAuthService.getNome()};
    this.listaCompra.nomeusuario = user;

    return this.listaCompra;
  }

}
