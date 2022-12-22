import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { TableComponent } from "src/app/shared/components/models/table-component/table-component";
import { CepPipe } from "src/app/shared/pipes/cep.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";

import { ClienteEnderecoService } from "../../services/cliente-endereco.service";

@Component({
    templateUrl: "./cliente-endereco-table.component.html",
    styles: [],
})
export class ClienteEnderecoTableComponent extends TableComponent<any> {
    constructor(
        activatedRoute: ActivatedRoute,
        protected clienteEnderecoService: ClienteEnderecoService,
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
            "Endereço removido com sucesso!",
            clienteEnderecoService,
            filterService,
            paginationService,
            messageService
        );
    }
}
