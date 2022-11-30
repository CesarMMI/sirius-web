import { CurrencyPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import {
    Observable,
    combineLatest,
    switchMap,
    delay,
    catchError,
    throwError,
    map,
} from "rxjs";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CepPipe } from "src/app/shared/pipes/cep.pipe";
import { CrudService } from "src/app/shared/services/crud-service";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { environment } from "src/environments/environment";
import { PedidoVendaService } from "../../../../../services/pedido-venda.service";

@Injectable({
    providedIn: "root",
})
export class PedidoVendaItemService extends CrudService<any> {
    constructor(
        private pedidoVendaService: PedidoVendaService,
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
            `http://${environment.api_host}:8089/datasnap/rest/TSMPedidoVendaItem`,
            {
                getAll: {
                    endPoint: `Itens`,
                    response: {
                        payload: "Itens",
                        pageCount: "QuantidadePaginas",
                    },
                },
                getById: "Item",
                post: "Item",
                put: "Item",
                delete: "Item",
            }
        );
    }

    override cols: ICol[] = [
        { field: "id", header: "ID" },
        { field: "pedidoId", header: "Pedido ID" },
        {
            field: "valorUnitario",
            header: "Valor Unitario",
            pipe: CurrencyPipe,
        },
        { field: "quantidade", header: "Quantidade" },
        { field: "valorTotal", header: "Valor Total", pipe: CurrencyPipe },
    ];

    override get(): Observable<ITableData<any>> {
        return combineLatest([
            this.pagination.pagination$,
            this.filter.filter$,
            this.pedidoVendaService.getSelectedPedido(),
        ]).pipe(
            switchMap(([pagination, filter, pedido]) => {
                return this.http
                    .get<ITableData<any>>(
                        `http://${environment.api_host}:8089/datasnap/rest/TSMPedidoVendaItem/Itens/${pedido?.id}`,
                        { params: this.genParams(pagination, filter) }
                    )
                    .pipe(
                        delay(500),
                        catchError((err) => {
                            this.message.add({
                                severity: "error",
                                summary:
                                    err.error.erro ||
                                    err.error.error ||
                                    err.error ||
                                    "Erro Desconhecido. Caso persista, entre em contato.",
                                detail: `${err.statusText || "Erro"} ${
                                    err.status
                                }`,
                            });
                            return throwError(() => new Error(err));
                        }),
                        map((response: any) => {
                            return {
                                payload: response["itens"],
                                pageCount: response["qtdPaginas"],
                            };
                        })
                    );
            })
        );
    }
}
