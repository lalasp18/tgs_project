import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {Router} from "@angular/router";

@Injectable()
export class UserAuthService {
  private localStorage!: any;


  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.localStorage = this.document.defaultView?.localStorage;
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
