import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { CrudService } from "src/app/shared/services/crud-service";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class PagamentoService extends CrudService<any> {
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
            `http://${environment.api_host}:8084/datasnap/rest/TSMPagar`,
            {
                getAll: {
                    endPoint: "GetPagamentos",
                    response: {
                        payload: "pagamentos",
                        pageCount: "qtdPaginas",
                    },
                },
                getById: "GetVendedorDetail",
                post: "Pagamento",
                put: "Pagamento",
                delete: "Pagamento",
            }
        );
    }
}