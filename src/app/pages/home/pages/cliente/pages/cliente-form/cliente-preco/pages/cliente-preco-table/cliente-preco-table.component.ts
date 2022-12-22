import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { TableComponent } from "src/app/shared/components/models/table-component/table-component";
import { CepPipe } from "src/app/shared/pipes/cep.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { IClientePreco } from "../../models/cliente-preco";
import { ClientePrecoService } from "../../services/cliente-preco.service";

@Component({
    templateUrl: "./cliente-preco-table.component.html",
})
export class ClientePrecoTableComponent extends TableComponent<IClientePreco> {
    constructor(
        protected clientePrecoService: ClientePrecoService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            clientePrecoService.cols,
            "Preço exclusivo removido com sucesso!",
            clientePrecoService,
            filterService,
            paginationService,
            messageService
        );
    }
}
