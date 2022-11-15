import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CrudService } from "src/app/shared/services/crud-service";
import { environment } from "src/environments/environment";
import { IPedidoVenda } from "../models/PedidoVenda";

@Injectable({
  providedIn: "root",
})
export class PedidoVendaService extends CrudService {
  constructor(protected override http: HttpClient) {
    super(
      http,
      `http://${environment.api_host}:8089/datasnap/rest/TSMPedidoVenda`,
      {
        getAll: "PedidosVenda",
        getById: "PedidosVenda",
        post: "PedidosVenda",
        put: "PedidosVenda",
      }
    );
  }

  public override get(
    page: number,
    quantityPerPage: number
  ): Observable<ITableData<IPedidoVenda>> {
    return super.get(page, quantityPerPage).pipe(
      map((response: any) => {
        return {
          data: response["pedidos"],
          pageTotal: response["qtdPaginas"],
        };
      })
    );
  }
}
