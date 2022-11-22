import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CrudService } from "src/app/shared/services/crud-service";
import { PaginationService } from "src/app/shared/services/pagination.service";
import { environment } from "src/environments/environment";
import { IPedidoVenda } from "../models/PedidoVenda";

@Injectable({
    providedIn: "root",
})
export class PedidoVendaService extends CrudService<IPedidoVenda> {
    constructor(
        protected override http: HttpClient,
        protected override pagination: PaginationService
    ) {
        super(
            http,
            pagination,
            `http://${environment.api_host}:8089/datasnap/rest/TSMPedidoVenda`,
            {
                getAll: {
                  endPoint: "PedidosVenda",
                  response: {
                    payload: "pedidos",
                    pageCount: "qtdPaginas"
                  }
                },
                getById: "PedidosVenda",
                post: "PedidosVenda",
                put: "PedidosVenda",
                delete: "PedidosVenda",
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
