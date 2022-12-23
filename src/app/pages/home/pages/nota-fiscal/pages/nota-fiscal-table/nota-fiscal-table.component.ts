import { Component, Type } from "@angular/core";
import { MessageService } from "primeng/api";
import { TableComponent } from "src/app/shared/components/models/table-component/table-component";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { INotaFiscalList } from "../../models/nota-fiscal-list";

import { NotaFiscalService } from "../../services/nota-fiscal.service";
import { NotaFiscalAdvancedFilterComponent } from "../nota-fiscal-advanced-filter/nota-fiscal-advanced-filter.component";

@Component({
    templateUrl: "./nota-fiscal-table.component.html",
    styles: [],
})
export class NotaFiscalTableComponent extends TableComponent<INotaFiscalList> {
    constructor(
        protected notaFiscalService: NotaFiscalService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            notaFiscalService.cols,
            "Nota fiscal removida com sucesso!",
            notaFiscalService,
            filterService,
            paginationService,
            messageService
        );
    }

    advForm: Type<NotaFiscalAdvancedFilterComponent> =
        NotaFiscalAdvancedFilterComponent;

    override onSelect(event: INotaFiscalList | null): void {
        this.notaFiscalService.selectedNota = event;
        console.log(event);
        super.onSelect(event);
    }
}
