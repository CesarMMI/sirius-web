import { CurrencyPipe, DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { BehaviorSubject, catchError, first, throwError } from "rxjs";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
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

    override cols: ICol[] = [
        { field: "id", header: "ID" },
        {
            field: "dataCriacao",
            header: "Data de Criação",
            pipe: DatePipe,
            pipeArgs: ["dd/MM/yyyy"],
        },
        { field: "numero", header: "Número" },
        {
            field: "valorBruto",
            header: "Valor Bruto",
            pipe: CurrencyPipe,
            pipeArgs: ["BRL"],
        },
        {
            field: "desconto",
            header: "Desconto",
            pipe: CurrencyPipe,
            pipeArgs: ["BRL"],
        },
        {
            field: "valorLiquido",
            header: "Valor Líquido",
            pipe: CurrencyPipe,
            pipeArgs: ["BRL"],
        },
        { field: "status", header: "Status", pipe: StatusPipe },
    ];

    selectedPedido = new BehaviorSubject<IPedidoVenda | null>(null);
    getSelectedPedido() {
        return this.selectedPedido.asObservable();
    }

    public changeStatus(id: number, status: string) {
        return this.http
            .put(
                `http://${environment.api_host}:8089/datasnap/rest/TSMPedidoVenda/MudarStatus`,
                {
                    id,
                    status,
                }
            )
            .pipe(
                first(),
                catchError((err) => {
                    this.message.add({
                        severity: "error",
                        summary:
                            err.error.erro ||
                            err.error.error ||
                            err.error ||
                            "Erro Desconhecido. Caso persista, entre em contato.",
                        detail: `${err.statusText || "Erro"} ${err.status}`,
                    });
                    return throwError(() => new Error(err));
                })
            );
    }
}
