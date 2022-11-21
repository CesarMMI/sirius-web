import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CrudService } from "src/app/shared/services/crud-service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class PedidoCompraService extends CrudService {
  private headers = new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
  });

  constructor(protected override http: HttpClient) {
    super(
      http,
      `http://${environment.api_host}:8088/datasnap/rest/TSMPedidoCompra`,
      {
        getAll: "PedidosCompra",
        getById: "PedidoCompra",
        post: "PedidoCompra",
        put: "PedidoCompra",
        delete: "PedidoCompra",
      }
    );
  }

  public override get(
    page: number,
    quantityPerPage: number
  ): Observable<ITableData<any>> {
    return super.get(page, quantityPerPage).pipe(
      map((response: any) => {
        return {
          data: response["vendedores"],
          pageTotal: response["QuantidadePaginas"],
        };
      })
    );
  }
}
