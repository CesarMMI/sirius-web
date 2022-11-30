import { CurrencyPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
import { CrudService } from "src/app/shared/services/crud-service";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { environment } from "src/environments/environment";

import { IProduto } from "../models/Produto";

@Injectable({
    providedIn: "root",
})
export class ProdutoService extends CrudService<IProduto> {
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
            `http://${environment.api_host}:8081/datasnap/rest/TSMProdutos`,
            {
                getAll: {
                    endPoint: "GetProdutos",
                    response: {
                        payload: "Produtos",
                        pageCount: "QuantidadePaginas",
                    },
                },
                getById: "GetProdutoDetail",
                post: "Produto",
                put: "Produto",
                delete: "Produto",
            }
        );
    }

    override cols: ICol[] = [
        { field: "id", header: "ID" },
        { field: "codProduto", header: "Cód. Interno" },
        { field: "descricao", header: "Descrição" },
        {
            field: "vlrUnCom",
            header: "Valor",
            pipe: CurrencyPipe,
            pipeArgs: ["BRL"],
        },
        { field: "unCom", header: "Unidade" },
        { field: "saldo", header: "Saldo" },
        { field: "status", header: "Status", pipe: StatusPipe },
    ];
}
