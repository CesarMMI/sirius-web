import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { IPedidoVenda } from 'src/app/pages/home/pages/pedido-venda/models/PedidoVenda';
import { PedidoVendaService } from 'src/app/pages/home/pages/pedido-venda/services/pedido-venda.service';
import { ICol } from 'src/app/shared/components/custom-table/models/Col';
import { IPageEvent } from 'src/app/shared/components/custom-table/models/PageEvent';
import { StatusPipe } from 'src/app/shared/pipes/status.pipe';

@Component({
  templateUrl: './pedido-venda-table.component.html',
  styles: []
})
export class PedidoVendaTableComponent {
  protected pedidos$: Observable<IPedidoVenda[]>;
  protected selectedPedido?: IPedidoVenda;

  protected pageTotal: number = 0;
  protected cols: ICol[] = [
    { field: "id", header: "ID" },
    { field: "dataCriacao", header: "Data de Criação", pipe: DatePipe, pipeArgs: ['dd/MM/yyyy'] },
    { field: "numero", header: "Número" },
    { field: "valorBruto", header: "Valor Bruto", pipe: CurrencyPipe, pipeArgs: ["BRL"] },
    { field: "desconto", header: "Desconto", pipe: CurrencyPipe, pipeArgs: ["BRL"] },
    { field: "valorLiquido", header: "Valor Líquido", pipe: CurrencyPipe, pipeArgs: ["BRL"] },
    { field: "status", header: "Status", pipe: StatusPipe },
  ];

  constructor(private pedidoVendaService: PedidoVendaService) {
    this.pedidos$ = this.get(1, 10);
  }

  protected onPagination(event: IPageEvent) {
    this.pedidos$ = this.get(event.page + 1, event.rows)
  }

  private get(page: number, quantityPerPage: number): Observable<IPedidoVenda[]> {
    return this.pedidoVendaService.get(page, quantityPerPage)
      .pipe(
        tap(response => this.pageTotal = response.pageTotal),
        map(response => response.data)
      );
  }
}
