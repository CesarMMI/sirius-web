import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CrudService } from "src/app/shared/services/crud-service";
import { PaginationService } from "src/app/shared/services/pagination.service";
import { environment } from "src/environments/environment";
import { ICliente } from "../models/cliente";

@Injectable({
    providedIn: "root",
})
export class ClienteService extends CrudService<ICliente> {
    constructor(
        protected override http: HttpClient,
        protected override pagination: PaginationService
    ) {
        super(
            http,
            pagination,
            `http://${environment.api_host}:8080/datasnap/rest/TSMClientes`,
            {
                getAll: {
                  endPoint: "GetClientesList",
                  response: {
                    payload: "Clientes",
                    pageCount: "QuantidadePaginas"
                  }
                },
                getById: "GetClientesDetail",
                post: "Cliente",
                put: "Cliente",
                delete: "Cliente",
            }
        );
    }

    public override get(
        page: number,
        quantityPerPage: number
    ): Observable<ITableData<ICliente>> {
        return super.get(page, quantityPerPage).pipe(
            map((response: any) => {
                return {
                    data: response["Clientes"],
                    pageTotal: response["QuantidadePaginas"],
                };
            })
        );
    }
}
