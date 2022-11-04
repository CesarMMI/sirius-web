import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { ITableData } from 'src/app/shared/components/custom-table/models/TableData';
import { CrudService } from 'src/app/shared/services/crud-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class ProdutoService extends CrudService {

  constructor(protected override http: HttpClient) {
    super(
      http,
      `http://${environment.api_host}:8081/datasnap/rest/TSMProdutos`, {
      getAll: 'GetProdutos',
      getById: 'GetProdutoDetail',
      post: 'Produto',
      put: 'Produto',
    });
  }

  public override get(page: number, quantityPerPage: number): Observable<ITableData> {
    return super.get(page, quantityPerPage)
      .pipe(
        map((response: any) => {
          return {
            data: response["Produtos"],
            pageTotal: response["QuantidadePaginas"],
          };
        })
      );
  }
}
