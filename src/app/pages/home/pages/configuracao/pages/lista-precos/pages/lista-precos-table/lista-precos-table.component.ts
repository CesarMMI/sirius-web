import { CurrencyPipe, DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { BehaviorSubject } from "rxjs";
import { TableComponent } from "src/app/shared/components/models/table-component/table-component";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { IListaPrecos } from "../../models/lista-precos";

import { ListaPrecosService } from "../../services/lista-precos.service";

@Component({
    templateUrl: "./lista-precos-table.component.html",
    styles: [],
})
export class ListaPrecosTableComponent extends TableComponent<IListaPrecos> {
    constructor(
        protected listaPrecosService: ListaPrecosService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            listaPrecosService.cols,
            "Pedido de venda removido com sucesso!",
            listaPrecosService,
            filterService,
            paginationService,
            messageService
        );
    }

    override onSelect(event: IListaPrecos | null): void {
        this.listaPrecosService.setSelectedLista(event);
        super.onSelect(event);
    }
}
