import { CurrencyPipe } from "@angular/common";
import { Component, Type } from "@angular/core";
import { MessageService } from "primeng/api";
import { IProduto } from "src/app/pages/home/pages/produto/models/Produto";
import { ProdutoService } from "src/app/pages/home/pages/produto/services/produto.service";
import { TableComponent } from "src/app/shared/components/models/table-component/table-component";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { ProdutoAdvancedFilterComponent } from "../produto-advanced-filter/produto-advanced-filter.component";

@Component({
    templateUrl: "./produto-table.component.html",
    styles: [],
})
export class ProdutoTableComponent extends TableComponent<IProduto> {
    constructor(
        produtoService: ProdutoService,
        protected override filterService: FilterService,
        protected override paginationService: PaginationService,
        protected override messageService: MessageService
    ) {
        super(
            [
                { field: "id", header: "ID" },
                { field: "codProduto", header: "Cód. Interno" },
                { field: "descricao", header: "Descrição" },
                {
                    field: "vlrUnCom",
                    header: "Valor",
                    pipe: CurrencyPipe,
                    pipeArgs: ["BRL"],
                },
                { field: "unCom", header: "Unidade" },
                { field: "saldo", header: "Saldo" },
                { field: "status", header: "Status", pipe: StatusPipe },
            ],
            "Produto removido com sucesso!",
            produtoService,
            filterService,
            paginationService,
            messageService
        );
    }

    advProdutoFilterForm: Type<ProdutoAdvancedFilterComponent> =
        ProdutoAdvancedFilterComponent;
}
