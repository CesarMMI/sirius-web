import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IProduto } from 'src/app/pages/home/pages/produto/models/Produto';
import { ProdutoService } from 'src/app/pages/home/pages/produto/services/produto.service';
import { ICol } from 'src/app/shared/components/custom-table/models/Col';
import { IPageEvent } from 'src/app/shared/components/custom-table/models/PageEvent';

@Component({
  templateUrl: "./produto-table.component.html",
  styles: [],
})
export class ProdutoTableComponent {
  protected produtos$: Observable<IProduto[]>;
  protected total: number = 0;
  protected cols: ICol[] = [
    { field: "id", header: "ID" },
    { field: "codProduto", header: "Cód. Interno" },
    { field: "descricao", header: "Descrição" },
    { field: "vlrUnCom", header: "Valor", pipe: CurrencyPipe },
    { field: "unCom", header: "Unidade" },
    { field: "saldo", header: "Saldo" },
    { field: "status", header: "Status" },
  ];

  constructor(private produtoService: ProdutoService) {
    this.produtos$ = produtoService.getAll(1, 10)
      .pipe(
        tap(response => this.total = response.totalPages),
        map(response => response.data)
      );
  }

  protected onPagination(event: IPageEvent) {
    this.produtos$ = this.produtoService.getAll(event.page + 1, event.rows)
      .pipe(
        tap(response => this.total = response.totalPages),
        map(response => response.data)
      );
  }
}
