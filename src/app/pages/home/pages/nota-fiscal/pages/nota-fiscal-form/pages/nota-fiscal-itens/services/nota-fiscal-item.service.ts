import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { CepPipe } from "src/app/shared/pipes/cep.pipe";
import { CrudService } from "src/app/shared/services/crud-service";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { environment } from "src/environments/environment";
import { NotaFiscalService } from "../../../../../services/nota-fiscal.service";

@Injectable({
    providedIn: "root",
})
export class NotaFiscalItemService extends CrudService<any> {
    constructor(
        private notaFiscalService: NotaFiscalService,
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
            `http://${environment.api_host}:8082/datasnap/rest/TSMItens`,
            {
                getAll: {
                    endPoint: `GetItens/${notaFiscalService.selectedNota?.Id}`,
                    response: {
                        payload: "Itens",
                        pageCount: "QuantidadePaginas",
                    },
                },
                getById: "GetItem",
                post: "Item",
                put: "Item",
                delete: "Item",
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
}
