import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { map, Observable } from "rxjs";
import { CrudService } from "src/app/shared/services/crud-service";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class NotaFiscalService extends CrudService<any> {
    constructor(
        protected override http: HttpClient,
        protected override pagination: PaginationService,
        protected override filter: FilterService,
        protected override message: MessageService
    ) {
        super(
            http,
            pagination,
            filter,
            message,
            `http://${environment.api_host}:8082/datasnap/rest/TNFeMethods`,
            {
                getAll: {
                    endPoint: "GetNotasFiscaisList",
                    response: {
                        payload: "NotasFiscais",
                        pageCount: "QuantidadePaginas",
                    },
                },
                getById: "GetNotaFiscalDetail",
                post: "NotaFiscal",
                put: "NotaFiscal",
                delete: "NotaFiscal",
            }
        );
    }

    override getById(id: number): Observable<any> {
        return super.getById(id).pipe(
            map(response => response['NotaFiscal'])
        )
    }
}
