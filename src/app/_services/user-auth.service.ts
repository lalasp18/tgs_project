import {HostListener, Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {Router} from "@angular/router";
import {NotaFiscal} from "../shared/models/nota-fiscal.models";
import {RecomendacaoCompra} from "../shared/models/recomendacao-compra.models";

@Injectable()
export class UserAuthService {
  private localStorage!: any;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.localStorage = this.document.defaultView?.localStorage;
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    this.setDataBeforeReload();
  }

  public setDataBeforeReload(): void {
    this.setQtdCarrinho(0);
    this.setCompra(this.getNotaFiscalPadrao());
  }

  public setTime() {
    if (this.localStorage) {
      const expirationTime = Date.now() + 2 * 60 * 60 * 1000;
      this.localStorage.setItem("expiration_time", expirationTime);
    }
  }

  public getTime() {
    if (this.localStorage) {
      const expirationTime = this.localStorage.getItem("expiration_time");
      return Date.now() <= expirationTime;
    }
    return false;
  }

  public setNome(user: string) {
    if (this.localStorage) {
      this.localStorage.setItem("nome", user);
    }
  }

  public getNome(): string {
    if (this.localStorage) {
      return this.localStorage.getItem("nome") ?? '';
    }
    return '';
  }

  public setQtdCarrinho(qtd: number) {
    if (this.localStorage) {
      this.localStorage.setItem("carrinho", qtd);
      if (qtd > 0) this.setRecomenda(this.getRecomendaPadrao());
    }
  }

  public getQtdCarrinho(): number {
    if (this.localStorage) {
      return this.localStorage.getItem("carrinho") ?? 0;
    }
    return 0;
  }

  public setCompra(compra: NotaFiscal) {
    if (this.localStorage) {
      const notaString = JSON.stringify(compra);
      this.localStorage.setItem("nota", notaString);
    }
  }

  public getCompra(): NotaFiscal {
    if (this.localStorage) {
      const notaString = this.localStorage.getItem("nota");
      return notaString ? JSON.parse(notaString) : this.getNotaFiscalPadrao();
    }
    return this.getNotaFiscalPadrao();
  }

  private getNotaFiscalPadrao(): NotaFiscal {
    return new NotaFiscal();
  }

  public setRecomenda(record: RecomendacaoCompra | null) {
    if (this.localStorage) {
      if (record) {
        const recordString = JSON.stringify(record);
        this.localStorage.setItem("recomenda", recordString);
      } else {
        this.localStorage.removeItem("recomenda"); // Remove se null
      }
    }
  }

  public getRecomenda(): RecomendacaoCompra {
    if (this.localStorage) {
      const recordString = this.localStorage.getItem("recomenda");
      if (recordString) {
        try {
          return JSON.parse(recordString);
        } catch (error) {
          console.error("Erro ao parsear JSON:", error);
          return this.getRecomendaPadrao(); // Retorna padrão em caso de erro
        }
      }
    }
    return this.getRecomendaPadrao();
  }

  private getRecomendaPadrao(): RecomendacaoCompra {
    return new RecomendacaoCompra();
  }

  public clear() {
    if (this.localStorage) {
      this.localStorage.clear();
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });
    }
  }

  public isLoggedIn() {
    if (this.localStorage && this.getTime()) {
      return this.getNome();
    }
    return false;
  }
}
