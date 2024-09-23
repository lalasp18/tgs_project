import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProdutoCacau} from "../models/produto-cacau.models";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ProdutoCacauService {
  private readonly API = '/api/produtos';

  constructor(private http: HttpClient) {
  }

  listarSecaoChocolate(): Observable<HttpResponse<ProdutoCacau[]>> {
    return this.http.get<ProdutoCacau[]>(`${ this.API }/secao/chocolate`, {observe: 'response'});
  }

  listarSecaoCafeteria(): Observable<HttpResponse<ProdutoCacau[]>> {
    return this.http.get<ProdutoCacau[]>(`${ this.API }/secao/cafeteria`, {observe: 'response'});
  }
}
