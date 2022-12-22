import { CurrencyPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { ProdutoService } from "src/app/pages/home/pages/produto/services/produto.service";
import { TableComponent } from "src/app/shared/components/models/table-component/table-component";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { ListaPrecosRegsService } from "../../services/lista-precos-regs.service";

@Component({
    templateUrl: "./lista-precos-regs-table.component.html",
    styles: [],
})
export class ListaPrecosRegsTableComponent extends TableComponent<any> {
    constructor(
        listaPrecosRegsService: ListaPrecosRegsService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            listaPrecosRegsService.cols,
            "Produto removido com sucesso!",
            listaPrecosRegsService,
            filterService,
            paginationService,
            messageService
        );
    }
}
