import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
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
        protected override pagination: PaginationService,
        protected override message: MessageService
    ) {
        super(
            http,
            pagination,
            message,
            `http://${environment.api_host}:8089/datasnap/rest/TSMPedidoVenda`,
            {
                getAll: {
                    endPoint: "PedidosVenda",
                    response: {
                        payload: "pedidos",
                        pageCount: "qtdPaginas",
                    },
                },
                getById: "PedidosVenda",
                post: "PedidosVenda",
                put: "PedidosVenda",
                delete: "PedidosVenda",
            }
        );
    }
}
