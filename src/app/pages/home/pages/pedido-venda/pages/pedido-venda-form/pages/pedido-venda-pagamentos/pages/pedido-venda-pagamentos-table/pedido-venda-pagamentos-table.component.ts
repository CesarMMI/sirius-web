import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { TableComponent } from "src/app/shared/components/models/table-component/table-component";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { PedidoVendaPagamentoService } from "../../services/pedido-venda-pagamento.service";

@Component({
    templateUrl: './pedido-venda-pagamentos-table.component.html',
    styles: [],
})
export class PedidoVendaPagamentosTableComponent extends TableComponent<any> {
    constructor(
        protected pedidoVendaPagamentoService: PedidoVendaPagamentoService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            pedidoVendaPagamentoService.cols,
            "Pagamento removido com sucesso!",
            pedidoVendaPagamentoService,
            filterService,
            paginationService,
            messageService
        );
    }
}
