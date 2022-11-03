import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map, Observable } from "rxjs";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProdutoService {
  private baseUrl = `http://${environment.api_host}:8081/datasnap/rest/TSMProdutos/`;
  constructor(private http: HttpClient) {}

  public getAll(page: number, itemQuantity: number): Observable<ITableData> {
    return this.http
      .get(`${this.baseUrl}GetProdutos`, {
        params: {
          pag: page,
          qtdItensPag: itemQuantity,
        },
      })
      .pipe(
        delay(1000),
        map((response: any) => {
          return {
            data: response["Produtos"],
            totalPages: response["QuantidadePaginas"],
          };
        })
      );
  }
}
