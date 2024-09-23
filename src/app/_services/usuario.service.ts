import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../shared/models/usuario.models";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly API = '/api/users';

  constructor(private http: HttpClient) {
  }

  logarUser(user: string): Observable<HttpResponse<Usuario>> {
    return this.http.get<Usuario>(`${ this.API }/login/${ user }`, {observe: 'response'});
  }
}
