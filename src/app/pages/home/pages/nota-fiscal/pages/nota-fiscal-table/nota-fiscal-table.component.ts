import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { IPageEvent } from "src/app/shared/components/custom-table/models/PageEvent";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { PhonePipe } from "src/app/shared/pipes/phone.pipe";
import { NotaFiscalService } from "../../services/nota-fiscal.service";

@Component({
  templateUrl: "./nota-fiscal-table.component.html",
  styles: [],
})
export class NotaFiscalTableComponent {
  protected tableData$: Observable<ITableData<any>>;
  protected selectedNotaFiscal?: any;

  protected pageTotal: number = 0;
  protected cols: ICol[] = [
    { field: "id", header: "ID" },
    { field: "serie", header: "Série" },
    { field: "chave", header: "Chave" },
    {
      field: "dhemi",
      header: "Data/Hora da Emissão",
      pipe: DatePipe,
      pipeArgs: ["short"],
    },
    { field: "destxnome", header: "Cliente" },
    { field: "destcnpjcpf", header: "CPF/CNPJ", pipe: CpfCnpjPipe },
    { field: "enderdestxmun", header: "Município" },
    { field: "enderdestuf", header: "UF" },
    { field: "status", header: "Status" },
  ];

  constructor(private notaFiscalService: NotaFiscalService) {
    this.tableData$ = this.get(1, 10);
  }

  protected onPagination(event: IPageEvent) {
    this.tableData$ = this.get(event.page + 1, event.rows);
  }

  private get(
    page: number,
    quantityPerPage: number
  ): Observable<ITableData<any>> {
    return this.notaFiscalService.get(page, quantityPerPage);
  }
}
