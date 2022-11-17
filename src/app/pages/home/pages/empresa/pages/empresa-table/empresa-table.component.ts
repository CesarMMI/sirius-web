import { CurrencyPipe } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { map, Observable, tap } from "rxjs";
import { IEmpresa } from "src/app/pages/home/pages/empresa/models/empresa";
import { EmpresaService } from "src/app/pages/home/pages/empresa/services/empresa.service";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { IPageEvent } from "src/app/shared/components/custom-table/models/PageEvent";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
import { TokensService } from "src/app/shared/services/tokens.service";

@Component({
  templateUrl: "./empresa-table.component.html",
  styles: [],
})
export class EmpresaTableComponent {
  protected tableData$: Observable<ITableData<IEmpresa>>;
  protected selectedEmpresa?: IEmpresa;

  protected pageTotal: number = 0;
  protected cols: ICol[] = [
    { field: "id", header: "ID" },
    { field: "cnpj", header: "CNPJ", pipe: CpfCnpjPipe },
    { field: "xrazaoSocial", header: "Razão Social" },
    { field: "xfant", header: "Fantasia" },
    { field: "grupoUsuario", header: "Grupo" },
    { field: "status", header: "Status", pipe: StatusPipe },
  ];

  constructor(
    private empresaService: EmpresaService,
    private tokensService: TokensService
  ) {
    this.tableData$ = this.get(1, 10);
  }

  protected onPagination(event: IPageEvent) {
    this.tableData$ = this.get(event.page + 1, event.rows);
  }

  protected onChoose(event: IEmpresa) {
    this.empresaService.chosenEmpresa$.next(event);
    this.tokensService.token = event.token;
  }

  private get(page: number, quantityPerPage: number): Observable<ITableData<IEmpresa>> {
    return this.empresaService.get(page, quantityPerPage);
  }
}
