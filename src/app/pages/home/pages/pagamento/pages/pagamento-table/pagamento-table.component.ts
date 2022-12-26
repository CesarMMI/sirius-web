import { CurrencyPipe, DatePipe } from "@angular/common";
import { Component, Type } from "@angular/core";
import { MessageService } from "primeng/api";
import { TableComponent } from "src/app/shared/components/models/table-component/table-component";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";

import { PagamentoService } from "../../services/pagamento.service";
import { PagamentoAdvancedFilterComponent } from "../pagamento-advanced-filter/pagamento-advanced-filter.component";

@Component({
    templateUrl: "./pagamento-table.component.html",
    styles: [],
})
export class PagamentoTableComponent extends TableComponent<any> {
    constructor(
        pagamentoService: PagamentoService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            pagamentoService.cols,
            "Pagamento removido com sucesso!",
            pagamentoService,
            filterService,
            paginationService,
            messageService
        );
    }
    advForm: Type<PagamentoAdvancedFilterComponent> =
        PagamentoAdvancedFilterComponent;
}
