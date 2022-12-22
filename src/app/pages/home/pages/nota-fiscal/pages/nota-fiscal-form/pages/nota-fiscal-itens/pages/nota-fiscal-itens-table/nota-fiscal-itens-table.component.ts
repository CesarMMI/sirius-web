import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
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
import { ClienteEnderecoService } from "src/app/pages/home/pages/cliente/pages/cliente-form/cliente-endereco/services/cliente-endereco.service";
import { ClienteService } from "src/app/pages/home/pages/cliente/services/cliente.service";
import { NotaFiscalService } from "src/app/pages/home/pages/nota-fiscal/services/nota-fiscal.service";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { TableComponent } from "src/app/shared/components/models/table-component/table-component";
import { CepPipe } from "src/app/shared/pipes/cep.pipe";
import { CrudService } from "src/app/shared/services/crud-service";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { environment } from "src/environments/environment";
import { NotaFiscalItemService } from "../../services/nota-fiscal-item.service";

@Component({
    templateUrl: "./nota-fiscal-itens-table.component.html",
    styles: [],
})
export class NotaFiscalItensTableComponent extends TableComponent<any> {
    constructor(
        protected notaFiscalItemService: NotaFiscalItemService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            [
                { field: "id", header: "ID" },
                { field: "logradouro", header: "Rua" },
                { field: "numero", header: "Número" },
                { field: "complemento", header: "Complemento" },
                { field: "bairro", header: "Bairro" },
                { field: "cep", header: "CEP", pipe: CepPipe },
                { field: "cidade", header: "Cidade" },
                { field: "uf", header: "UF" },
            ],
            "Item removido com sucesso!",
            notaFiscalItemService,
            filterService,
            paginationService,
            messageService
        );
    }
}
