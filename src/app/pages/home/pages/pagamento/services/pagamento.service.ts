import { CurrencyPipe, DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { PaymentPipe } from "src/app/shared/pipes/payment.pipe";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
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

    override cols: ICol[] = [
        { header: "ID", field: "id" },
        { header: "Documento", field: "documento" },
        { header: "Status", field: "status", pipe: StatusPipe },
        {
            header: "Forma de Pagamento",
            field: "formaPagamento",
            pipe: PaymentPipe,
        },
        {
            header: "Valor Bruto",
            field: "valorBruto",
            pipe: CurrencyPipe,
            pipeArgs: ["BRL"],
        },
        {
            header: "Valor Pago",
            field: "valorPago",
            pipe: CurrencyPipe,
            pipeArgs: ["BRL"],
        },
        {
            header: "Data de Vencimento",
            field: "dataVencimento",
            pipe: DatePipe,
            pipeArgs: ["dd/MM/yy"],
        },
    ];
}
