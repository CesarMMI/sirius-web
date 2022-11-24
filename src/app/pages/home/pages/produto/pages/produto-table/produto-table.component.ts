import { CurrencyPipe } from "@angular/common";
import { Component } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { IProduto } from "src/app/pages/home/pages/produto/models/Produto";
import { ProdutoService } from "src/app/pages/home/pages/produto/services/produto.service";
import { IFilterEvent } from "src/app/shared/components/buttons/filter-popup/models/filter-event";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { IPageEvent } from "src/app/shared/components/custom-table/models/PageEvent";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";

@Component({
    templateUrl: "./produto-table.component.html",
    styles: [],
})
export class ProdutoTableComponent {
    protected tableData$: Observable<ITableData<IProduto>>;
    protected selectedProduto?: IProduto;

    protected pageTotal: number = 0;
    protected cols: ICol[] = [
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
    ];

    private currPage: number = 1;
    private currQuantity: number = 10;

    constructor(
        private produtoService: ProdutoService,
        private paginationService: PaginationService
    ) {
        this.tableData$ = this.get(1, 10);
    }

    protected onPagination(event: IPageEvent) {
        this.paginationService.setPagination({
            page: event.page + 1,
            quantityPerPage: event.rows,
        });
    }

    protected onFilter(event: IFilterEvent) {
        this.tableData$ = this.get(this.currPage, this.currQuantity, event);
    }

    private get(
        page: number,
        quantityPerPage: number,
        filter?: IFilterEvent
    ): Observable<ITableData<IProduto>> {
        return this.produtoService.get(page, quantityPerPage, filter).pipe(
            tap((response) => {
                console.log(response);
                this.pageTotal = response.pageCount;
            })
        );
    }
}
