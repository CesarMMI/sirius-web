import { DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import {
    catchError,
    combineLatest,
    delay,
    map,
    Observable,
    switchMap,
    throwError,
} from "rxjs";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CepPipe } from "src/app/shared/pipes/cep.pipe";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { CrudService } from "src/app/shared/services/crud-service";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { environment } from "src/environments/environment";
import { ClienteService } from "../../../../services/cliente.service";

@Injectable({
    providedIn: "root",
})
export class ClienteEnderecoService extends CrudService<any> {
    constructor(
        private clienteService: ClienteService,
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
                    endPoint: `GetEnderecos/${clienteService.selectedCliente?.id}`,
                    response: {
                        payload: "Enderecos",
                        pageCount: "QuantidadePaginas",
                    },
                },
                getById: "GetEndereco",
                post: "Endereco",
                put: "Endereco",
                delete: "Endereco",
            }
        );
    }

    override cols: ICol[] = [
        { field: "id", header: "ID" },
        { field: "logradouro", header: "Rua" },
        { field: "numero", header: "Número" },
        { field: "complemento", header: "Complemento" },
        { field: "bairro", header: "Bairro" },
        { field: "cep", header: "CEP", pipe: CepPipe },
        { field: "cidade", header: "Cidade" },
        { field: "uf", header: "UF" },
    ];

    override get(): Observable<ITableData<any>> {
        return combineLatest([
            this.pagination.pagination$,
            this.filter.filter$,
        ]).pipe(
            switchMap(([pagination, filter]) => {
                return this.http
                    .get<ITableData<any>>(
                        `http://${environment.api_host}:8080/datasnap/rest/TSMEnderecos/GetEnderecos/${this.clienteService.selectedCliente?.id}`,
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
                                payload: response["Enderecos"],
                                pageCount: response["QuantidadePaginas"],
                            };
                        })
                    );
            })
        );
    }
}
