import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { PhonePipe } from "src/app/shared/pipes/phone.pipe";
import { CrudService } from "src/app/shared/services/crud-service";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { environment } from "src/environments/environment";

import { IVendedor } from "../models/vendedor";

@Injectable({
    providedIn: "root",
})
export class VendedorService extends CrudService<IVendedor> {
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
            `http://${environment.api_host}:8087/datasnap/rest/TSMVendedores`,
            {
                getAll: {
                    endPoint: "GetVendedores",
                    response: {
                        payload: "vendedores",
                        pageCount: "QuantidadePaginas",
                    },
                },
                getById: "GetVendedorDetail",
                post: "Vendedor",
                put: "Vendedor",
                delete: "Vendedor",
            }
        );
    }

    override cols: ICol[] = [
        { header: "ID", field: "id" },
        { header: "Nome", field: "nome" },
        { header: "Apelido", field: "apelido" },
        { header: "CNPJ", field: "cnpj", pipe: CpfCnpjPipe },
        { header: "CPF", field: "cpf", pipe: CpfCnpjPipe },
        { header: "Celular", field: "celular", pipe: PhonePipe },
        { header: "Email", field: "email" },
    ];
}
