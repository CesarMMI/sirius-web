import { CurrencyPipe, DatePipe } from "@angular/common";
import { Component, Type } from "@angular/core";
import { MessageService } from "primeng/api";
import { TableComponent } from "src/app/shared/components/models/table-component/table-component";
import { PaymentPipe } from "src/app/shared/pipes/payment.pipe";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";

import { RecebimentoService } from "../../services/recebimento.service";
import { RecebimentoAdvancedFilterComponent } from "../recebimento-advanced-filter/recebimento-advanced-filter.component";

@Component({
    templateUrl: "./recebimento-table.component.html",
    styles: [],
})
export class RecebimentoTableComponent extends TableComponent<any> {
    constructor(
        recebimentoService: RecebimentoService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            recebimentoService.cols,
            "Recebimento removido com sucesso!",
            recebimentoService,
            filterService,
            paginationService,
            messageService
        );
    }
    advForm: Type<RecebimentoAdvancedFilterComponent> =
        RecebimentoAdvancedFilterComponent;
}
