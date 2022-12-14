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

import { IFornecedor } from "../models/fornecedor";

@Injectable({
    providedIn: "root",
})
export class FornecedorService extends CrudService<IFornecedor> {
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
            `http://${environment.api_host}:8085/datasnap/rest/TSMFornecedores`,
            {
                getAll: {
                    endPoint: "GetFornecedores",
                    response: {
                        payload: "fornecedores",
                        pageCount: "QuantidadePaginas",
                    },
                },
                getById: "GetFornecedorDetail",
                post: "Fornecedor",
                put: "Fornecedor",
                delete: "Fornecedor",
            }
        );
    }

    override cols: ICol[] = [
        { header: "ID", field: "id" },
        { header: "Razão Social", field: "razaoSocial" },
        { header: "Fantasia", field: "fantasia" },
        { header: "CPF/CNPJ", field: "cpfCnpj", pipe: CpfCnpjPipe },
        { header: "Email", field: "email" },
        { header: "Celular", field: "celular", pipe: PhonePipe },
    ];
}
