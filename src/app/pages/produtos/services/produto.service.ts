import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ITableData } from 'src/app/shared/components/custom-table/models/TableData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private BASE_URI = `http://${environment.api_host}:8081/datasnap/rest/TSMProdutos/`;

  constructor(private http: HttpClient) { }

  public get(page: number): Observable<ITableData> {
    return this.http.get<ITableData>(`${this.BASE_URI}GetProdutos`, {params: {
      pag: page,
    }})
    .pipe(
      map((response: any) => {
        return {
          data: response['Produtos'],
          totalPages: response['QuantidadePaginas']
        }
      })
    )
  }
}
