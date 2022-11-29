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

import { ICliente } from "../models/cliente";

@Injectable({
    providedIn: "root",
})
export class ClienteService extends CrudService<ICliente> {
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
            `http://${environment.api_host}:8080/datasnap/rest/TSMClientes`,
            {
                getAll: {
                    endPoint: "GetClientesList",
                    response: {
                        payload: "Clientes",
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

    override cols: ICol[] = [
        { header: "ID", field: "id" },
        { header: "Tipo", field: "tipoCliente" },
        { header: "Razão Social", field: "razaoSocial" },
        { header: "Fantasia", field: "fantasia" },
        { header: "CPF/CNPJ", field: "cpfCnpj", pipe: CpfCnpjPipe },
        {
            header: "Ultima Atualização",
            field: "dataUltimaAtualizacao",
            pipe: DatePipe,
            pipeArgs: ["dd/MM/yy"],
        },
    ];

    override getById(id: number): Observable<ICliente> {
        return super
            .getById(id)
            .pipe(map((response: any) => response["Cliente"]));
    }

    public selectedCliente?: ICliente;
}
