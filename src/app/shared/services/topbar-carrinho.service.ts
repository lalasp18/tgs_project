import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TopbarCarrinhoService {
  private qtdProduto = new BehaviorSubject<number>(0);
  private clickSubject = new BehaviorSubject<boolean>(false);
  eventoClick = this.clickSubject.asObservable();
  currentNumber = this.qtdProduto.asObservable();

  atualizarQuantia(num: number) {
    this.qtdProduto.next(num);
  }

  triggerEventoClick() {
    this.clickSubject.next(true);
  }
}
