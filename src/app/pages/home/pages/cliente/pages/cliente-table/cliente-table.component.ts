import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { IPageEvent } from "src/app/shared/components/custom-table/models/PageEvent";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";

import { ICliente } from "../../models/cliente";
import { ClienteService } from "../../services/cliente.service";

@Component({
  templateUrl: "./cliente-table.component.html",
  styles: [],
})
export class ClienteTableComponent {
  protected tableData$: Observable<ITableData<ICliente>>;
  protected selectedCliente?: ICliente;

  protected pageTotal: number = 0;
  protected cols: ICol[] = [
    { header: "ID", field: "id" },
    { header: "Tipo", field: "tipoCliente" },
    { header: "Razão Social", field: "razaoSocial" },
    { header: "Fantasia", field: "fantasia" },
    { header: "CPF/CNPJ", field: "cpfCnpj", pipe: CpfCnpjPipe },
    {
      header: "Ultima Atualização",
      field: "dataUltimaAtualizacao",
      pipe: DatePipe,
      pipeArgs: ["dd/MM/yy"],
    },
  ];

  constructor(private clienteService: ClienteService) {
    this.tableData$ = this.get(1, 10);
  }

  protected onPagination(event: IPageEvent) {
    this.tableData$ = this.get(event.page + 1, event.rows);
  }

  private get(
    page: number,
    quantityPerPage: number
  ): Observable<ITableData<any>> {
    return this.clienteService.get(page, quantityPerPage);
  }
}
