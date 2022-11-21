import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { IPageEvent } from "src/app/shared/components/custom-table/models/PageEvent";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { PhonePipe } from "src/app/shared/pipes/phone.pipe";
import { IVendedor } from "../../models/vendedor";
import { VendedorService } from "../../services/vendedor.service";

@Component({
  templateUrl: "./vendedor-table.component.html",
  styles: [],
})
export class VendedorTableComponent {
  protected tableData$: Observable<ITableData<IVendedor>>;
  protected selectedVendedor?: IVendedor;

  protected pageTotal: number = 0;
  protected cols: ICol[] = [
    { header: 'ID', field: 'id'},
    { header: 'Nome', field: 'nome' },
    { header: 'Apelido', field: 'apelido' },
    { header: 'CNPJ', field: 'cnpj', pipe: CpfCnpjPipe },
    { header: 'CPF', field: 'cpf', pipe: CpfCnpjPipe },
    { header: 'Telefone', field: 'telefone', pipe: PhonePipe },
    { header: 'Email', field: 'email' },
  ];

  constructor(private vendedorService: VendedorService) {
    this.tableData$ = this.get(1, 10);
  }

  protected onPagination(event: IPageEvent) {
    this.tableData$ = this.get(event.page + 1, event.rows);
  }

  private get(
    page: number,
    quantityPerPage: number
  ): Observable<ITableData<IVendedor>> {
    return this.vendedorService.get(page, quantityPerPage);
  }
}
