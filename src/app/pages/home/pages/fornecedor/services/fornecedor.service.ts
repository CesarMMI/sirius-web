import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CrudService } from "src/app/shared/services/crud-service";
import { PaginationService } from "src/app/shared/services/pagination.service";
import { environment } from "src/environments/environment";
import { IFornecedor } from "../models/fornecedor";

@Injectable({
    providedIn: "root",
})
export class FornecedorService extends CrudService<IFornecedor> {
    constructor(
        protected override http: HttpClient,
        protected override pagination: PaginationService
    ) {
        super(
            http,
            pagination,
            `http://${environment.api_host}:8085/datasnap/rest/TSMFornecedores`,
            {
                getAll: {
                  endPoint: "GetFornecedores",
                  response: {
                    payload: "fornecedores",
                    pageCount: "QuantidadePaginas"
                  }
                },
                getById: "GetFornecedorDetail",
                post: "Fornecedor",
                put: "Fornecedor",
                delete: "Fornecedor",
            }
        );
    }

    public override get(
        page: number,
        quantityPerPage: number
    ): Observable<ITableData<IFornecedor>> {
        return super.get(page, quantityPerPage).pipe(
            map((response: any) => {
                return {
                    data: response["fornecedores"],
                    pageTotal: response["QuantidadePaginas"],
                };
            })
        );
    }
}
