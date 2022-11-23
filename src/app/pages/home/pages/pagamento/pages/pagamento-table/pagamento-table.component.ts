import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICol } from 'src/app/shared/components/custom-table/models/Col';
import { IPageEvent } from 'src/app/shared/components/custom-table/models/PageEvent';
import { ITableData } from 'src/app/shared/components/custom-table/models/TableData';
import { StatusPipe } from 'src/app/shared/pipes/status.pipe';
import { PagamentoService } from '../../services/pagamento.service';

@Component({
  templateUrl: './pagamento-table.component.html',
  styles: [ ]
})
export class PagamentoTableComponent {
  protected tableData$: Observable<ITableData<any>>;
  protected selectedPagamento?: any;

  protected pageTotal: number = 0;
  protected cols: ICol[] = [
      { header: "ID", field: "id" },
      { header: "Status", field: "status", pipe: StatusPipe},
      { header: "Forma de Pagamento", field: "formaPagamento" },
      { header: "Valor Bruto", field: "valorBruto", pipe: CurrencyPipe },
      {
          header: "Data de Vencimento",
          field: "dataVencimento",
          pipe: DatePipe,
          pipeArgs: ["dd/MM/yy"],
      },
  ];

  constructor(private pagamentoService: PagamentoService) {
      this.tableData$ = this.get(1, 10);
  }

  protected onPagination(event: IPageEvent) {
      this.tableData$ = this.get(event.page + 1, event.rows);
  }

  private get(
      page: number,
      quantityPerPage: number
  ): Observable<ITableData<any>> {
      return this.pagamentoService.get(page, quantityPerPage);
  }
}
