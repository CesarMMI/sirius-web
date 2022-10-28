import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { IUsuarioLogin } from "src/app/pages/auth/models/UsuarioLogin";
import { IUsuarioSignup } from "src/app/pages/auth/models/UsuarioSignup";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseUrl = `http://${environment.api_host}:8083/datasnap/rest/`;

  constructor(private http: HttpClient) {}

  public login(user: IUsuarioLogin): Observable<{ userToken: string }> {
    return this.http
      .post<{ userToken: string }>(
        `${this.baseUrl}TSMIdentificacao/Login`,
        user
      )
      .pipe(
        tap((response) => localStorage.setItem("userToken", response.userToken))
      );
  }

  public signup(user: IUsuarioSignup) {
    return this.http.post(`${this.baseUrl}TSMUsuarios/Usuario`, user);
  }
}
