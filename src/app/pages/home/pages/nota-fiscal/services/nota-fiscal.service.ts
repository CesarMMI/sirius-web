import { DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { map, Observable } from "rxjs";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
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

    override cols: ICol[] = [
        { field: "id", header: "ID" },
        { field: "serie", header: "Série" },
        { field: "chave", header: "Chave" },
        {
            field: "dhemi",
            header: "Data/Hora da Emissão",
            pipe: DatePipe,
            pipeArgs: ["dd/MM/yy"],
        },
        { field: "destxnome", header: "Cliente" },
        { field: "destcnpjcpf", header: "CPF/CNPJ", pipe: CpfCnpjPipe },
        { field: "enderdestxmun", header: "Município" },
        { field: "enderdestuf", header: "UF" },
        { field: "status", header: "Status" },
    ];

    override getById(id: number): Observable<any> {
        return super
            .getById(id)
            .pipe(map((response) => response["NotaFiscal"]));
    }

    public selectedNota: any;
}
