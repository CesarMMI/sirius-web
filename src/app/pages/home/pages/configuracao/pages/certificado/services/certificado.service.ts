import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { INfeConfig } from '../../nfe-config/models/nfe-config';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
  private BASE_URL = `http://${environment.api_host}:8082/datasnap/rest/TACBRMethods/`;

  constructor(protected http: HttpClient) {}

  read(): Observable<string> {
      return this.http
          .get<{ name: string }>(`${this.BASE_URL}GetCertificadoName`)
          .pipe(
              first(),
              map((res) => res.name)
          );
  }

  create(configs: any) {
      return this.http.post(`${this.BASE_URL}NFeConfig`, configs)
      .pipe(first());
  }

  update(configs: any) {
      return this.http.put(`${this.BASE_URL}NFeConfig`, configs)
      .pipe(first());
  }
}
