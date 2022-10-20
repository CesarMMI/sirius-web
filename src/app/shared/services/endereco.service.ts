import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private viaCepUrl = 'https://viacep.com.br/ws/'

  constructor(
    private http: HttpClient
  ) { }

  public searchByCep(cep: string) {
    return this.http.get(`${this.viaCepUrl}${cep}/json`)
    .pipe(first())
  }
}
