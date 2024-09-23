import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {NotaFiscal} from "../models/nota-fiscal.models";
import {RecomendacaoCompra} from "../models/recomendacao-compra.models";

@Injectable({
  providedIn: 'root'
})
export class NotaFiscalService {
  private readonly API = '/api/nota-fiscal';

  constructor(private http: HttpClient) {
  }

  listaDeCompras(record: NotaFiscal): Observable<HttpResponse<RecomendacaoCompra>> {
    return this.http.post<RecomendacaoCompra>(`${ this.API }`, record, {observe: 'response'});
  }
}
