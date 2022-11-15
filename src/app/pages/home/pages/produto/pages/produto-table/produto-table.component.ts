import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IProduto } from 'src/app/pages/home/pages/produto/models/Produto';
import { ProdutoService } from 'src/app/pages/home/pages/produto/services/produto.service';
import { ICol } from 'src/app/shared/components/custom-table/models/Col';
import { IPageEvent } from 'src/app/shared/components/custom-table/models/PageEvent';
import { ITableData } from 'src/app/shared/components/custom-table/models/TableData';
import { StatusPipe } from 'src/app/shared/pipes/status.pipe';

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
    { field: "vlrUnCom", header: "Valor", pipe: CurrencyPipe, pipeArgs: ["BRL"] },
    { field: "unCom", header: "Unidade" },
    { field: "saldo", header: "Saldo" },
    { field: "status", header: "Status", pipe: StatusPipe },
  ];

  constructor(private produtoService: ProdutoService) {
    this.tableData$ = this.get(1, 10);
  }
  
  protected onPagination(event: IPageEvent) {
    this.tableData$ = this.get(event.page + 1, event.rows)
  }

  private get(page: number, quantityPerPage: number): Observable<ITableData<IProduto>> {
    return this.produtoService.get(page, quantityPerPage);
  }
}
