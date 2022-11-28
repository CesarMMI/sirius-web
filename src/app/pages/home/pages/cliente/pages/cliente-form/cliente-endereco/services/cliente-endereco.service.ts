import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { Observable } from "rxjs";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CrudService } from "src/app/shared/services/crud-service";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class ClienteEnderecoService extends CrudService<any> {
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
            `http://${environment.api_host}:8080/datasnap/rest/TSMEnderecos`,
            {
                getAll: {
                    endPoint: "GetEnderecos",
                    needId: true,
                    response: {
                        payload: "Enderecos",
                        pageCount: "QuantidadePaginas",
                    },
                },
                getById: "GetClientesDetail",
                post: "Cliente",
                put: "Cliente",
                delete: "Cliente",
            }
        );
    }
}
