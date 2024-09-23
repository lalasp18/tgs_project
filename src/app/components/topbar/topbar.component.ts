import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {SharedModule} from "../../shared/shared-module";
import {CommonModule, isPlatformBrowser} from "@angular/common";
import {TopbarCarrinhoService} from "../../shared/services/topbar-carrinho.service";
import {LogarComponent} from "../logar/logar.component";

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    LogarComponent
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit {
  isMobile: boolean = false;
  valueCarrinho: number = 0;
  visivel: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private topService: TopbarCarrinhoService,
    ) {
  }

  ngOnInit() {
    this.checkWindowSize();
    this.verificarMudanca();
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

  verificarMudanca() {
    this.topService.currentNumber.subscribe(value => {
      this.valueCarrinho = value;
    });
  }

  efetuarCompra() {
    this.topService.triggerEventoClick();
  }

}
