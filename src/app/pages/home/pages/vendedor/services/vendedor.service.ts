import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CrudService } from "src/app/shared/services/crud-service";
import { PaginationService } from "src/app/shared/services/pagination.service";
import { environment } from "src/environments/environment";
import { IVendedor } from "../models/vendedor";

@Injectable({
    providedIn: "root",
})
export class VendedorService extends CrudService<IVendedor> {
    constructor(
        protected override http: HttpClient,
        protected override pagination: PaginationService
    ) {
        super(
            http,
            pagination,
            `http://${environment.api_host}:8087/datasnap/rest/TSMVendedores`,
            {
                getAll: {
                  endPoint: "GetVendedores",
                  response: {
                    payload: "vendedores",
                    pageCount: "QuantidadePaginas"
                  }
                },
                getById: "GetVendedorDetail",
                post: "Vendedor",
                put: "Vendedor",
                delete: "Vendedor",
            }
        );
    }

    public override get(
        page: number,
        quantityPerPage: number
    ): Observable<ITableData<IVendedor>> {
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
