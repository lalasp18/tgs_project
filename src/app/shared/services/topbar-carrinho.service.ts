import {EventEmitter, Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TopbarCarrinhoService {
  // private qtdProduto = new BehaviorSubject<number>(0);
  private clickSubject = new BehaviorSubject<boolean>(false);
  eventoClick = this.clickSubject.asObservable();
  // currentNumber: number = 0;

  // atualizarQuantia(num: number) {
  //   this.qtdProduto.next(num);
  //   this.currentNumber = num;
  // }
  quantidadeMudou = new EventEmitter<number>();
  private qtdProduto: number = 0;

  atualizarQuantia(num: number) {
    this.qtdProduto = num;
    this.quantidadeMudou.emit(this.qtdProduto); // Emite o novo valor
  }

  triggerEventoClick() {
    this.clickSubject.next(true);
  }
}
