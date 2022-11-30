import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { BehaviorSubject } from "rxjs";
import { CrudService } from "src/app/shared/services/crud-service";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { environment } from "src/environments/environment";

import { IPedidoVenda } from "../models/PedidoVenda";

@Injectable({
    providedIn: "root",
})
export class PedidoVendaService extends CrudService<IPedidoVenda> {
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
            `http://${environment.api_host}:8089/datasnap/rest/TSMPedidoVenda`,
            {
                getAll: {
                    endPoint: "PedidosVenda",
                    response: {
                        payload: "pedidos",
                        pageCount: "qtdPaginas",
                    },
                },
                getById: "PedidoVenda",
                post: "PedidoVenda",
                put: "PedidoVenda",
                delete: "PedidoVenda",
            }
        );
    }

    selectedPedido = new BehaviorSubject<IPedidoVenda | null>(null);
    getSelectedPedido() {
        return this.selectedPedido.asObservable();
    }
}
