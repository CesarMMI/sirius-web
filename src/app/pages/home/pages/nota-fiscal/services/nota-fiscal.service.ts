import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CrudService } from "src/app/shared/services/crud-service";
import { PaginationService } from "src/app/shared/services/pagination.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class NotaFiscalService extends CrudService<any> {
    constructor(
        protected override http: HttpClient,
        protected override pagination: PaginationService
    ) {
        super(
            http,
            pagination,
            `http://${environment.api_host}:8082/datasnap/rest/TNFeMethods`,
            {
                getAll: {
                  endPoint: "GetNotasFiscaisList",
                  response: {
                    payload: "NotasFiscais",
                    pageCount: "QuantidadePaginas"
                  }
                },
                getById: "GetNotaFiscalDetail",
                post: "NotaFiscal",
                put: "NotaFiscal",
                delete: "NotaFiscal",
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
                    data: response["NotasFiscais"],
                    pageTotal: response["QuantidadePaginas"],
                };
            })
        );
    }
}
