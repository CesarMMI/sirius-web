import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { TableComponent } from "src/app/shared/components/table-component/table-component";
import { CepPipe } from "src/app/shared/pipes/cep.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";

import { PedidoVendaItemService } from "../../services/pedido-venda-item.service";

@Component({
    templateUrl: "./pedido-venda-itens-table.component.html",
    styles: [],
})
export class PedidoVendaItensTableComponent extends TableComponent<any> {
    constructor(
        protected pedidoVendaItemService: PedidoVendaItemService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            pedidoVendaItemService.cols,
            "Item removido com sucesso!",
            pedidoVendaItemService,
            filterService,
            paginationService,
            messageService
        );
    }
}
