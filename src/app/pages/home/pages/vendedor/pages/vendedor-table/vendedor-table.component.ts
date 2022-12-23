import { Component, Type } from "@angular/core";
import { MessageService } from "primeng/api";
import { TableComponent } from "src/app/shared/components/models/table-component/table-component";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";

import { IVendedor } from "../../models/vendedor";
import { VendedorService } from "../../services/vendedor.service";
import { VendedorAdvancedFilterComponent } from "../vendedor-advanced-filter/vendedor-advanced-filter.component";

@Component({
    templateUrl: "./vendedor-table.component.html",
    styles: [],
})
export class VendedorTableComponent extends TableComponent<IVendedor> {
    constructor(
        vendedorService: VendedorService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            vendedorService.cols,
            "Vendedor removido com sucesso!",
            vendedorService,
            filterService,
            paginationService,
            messageService
        );
    }

    advForm: Type<VendedorAdvancedFilterComponent> =
        VendedorAdvancedFilterComponent;
}
