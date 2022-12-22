import { CurrencyPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { CepPipe } from "src/app/shared/pipes/cep.pipe";
import { CrudService } from "src/app/shared/services/crud-service";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { environment } from "src/environments/environment";

import { ClienteService } from "../../../../services/cliente.service";

@Injectable({
    providedIn: "root",
})
export class ClientePrecoService extends CrudService<any> {
    constructor(
        clienteService: ClienteService,
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
            `http://${environment.api_host}:8080/datasnap/rest/TSMClienteXProduto`,
            {
                getAll: {
                    endPoint: `precos/${clienteService.selectedCliente?.id}`,
                    response: {
                        payload: "payload",
                        pageCount: "pageCount",
                    },
                },
                getById: "preco",
                post: "preco",
                put: "preco",
                delete: "preco",
            }
        );
    }

    override cols: ICol[] = [
        { field: "id", header: "ID" },
        { field: "produtoId", header: "ID Produto" },
        { field: "produtoCod", header: "Cód do Produto" },
        { field: "valor", header: "Valor", pipe: CurrencyPipe, pipeArgs: ["BRL"] }
    ];
}
