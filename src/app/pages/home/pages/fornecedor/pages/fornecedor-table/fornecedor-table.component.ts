import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { IPageEvent } from "src/app/shared/components/custom-table/models/PageEvent";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { PhonePipe } from "src/app/shared/pipes/phone.pipe";

import { IFornecedor } from "../../models/fornecedor";
import { FornecedorService } from "../../services/fornecedor.service";

@Component({
  templateUrl: "./fornecedor-table.component.html",
  styles: [],
})
export class FornecedorTableComponent {
  protected tableData$: Observable<ITableData<IFornecedor>>;
  protected selectedFornecedor?: IFornecedor;

  protected pageTotal: number = 0;
  protected cols: ICol[] = [
    { header: "ID", field: "id" },
    { header: "Fantasia", field: "fantasia" },
    { header: "Razão Social", field: "razaoSocial" },
    { header: "CPF/CNPJ", field: "cpfCnpj", pipe: CpfCnpjPipe },
    { header: "Email", field: "email" },
    { header: "Celular", field: "celular", pipe: PhonePipe },
  ];

  constructor(private fornecedorService: FornecedorService) {
    this.tableData$ = this.get(1, 10);
  }

  protected onPagination(event: IPageEvent) {
    this.tableData$ = this.get(event.page + 1, event.rows);
  }

  private get(
    page: number,
    quantityPerPage: number
  ): Observable<ITableData<IFornecedor>> {
    return this.fornecedorService.get(page, quantityPerPage);
  }
}
