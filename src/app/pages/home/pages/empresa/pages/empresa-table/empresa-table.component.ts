import { CurrencyPipe } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { map, Observable, tap } from "rxjs";
import { IEmpresa } from "src/app/pages/home/pages/empresa/models/Empresa";
import { EmpresaService } from "src/app/pages/home/pages/empresa/services/empresa.service";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { IPageEvent } from "src/app/shared/components/custom-table/models/PageEvent";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";

@Component({
  templateUrl: "./empresa-table.component.html",
  styles: [],
})
export class EmpresaTableComponent {
  protected empresas$: Observable<IEmpresa[]>;
  protected selectedEmpresa?: IEmpresa;

  protected pageTotal: number = 0;
  protected cols: ICol[] = [
    { field: 'id', header: 'ID' },
    { field: 'cnpj', header: 'CNPJ', pipe: CpfCnpjPipe},
    { field: 'xrazaoSocial', header: 'Razão Social' },
    { field: 'xfant', header: 'Fantasia' },
    { field: 'grupoUsuario', header: 'Grupo' },
    { field: 'status', header: 'Status', pipe: StatusPipe },
  ];

  constructor(private empresaService: EmpresaService) {
    this.empresas$ = this.get(1, 10);
  }
  
  protected onPagination(event: IPageEvent) {
    this.empresas$ = this.get(event.page + 1, event.rows)
  }

  protected onChoose(event: IEmpresa) {
    this.empresaService.chosenEmpresa$.next(event);
    localStorage.setItem('token', event.token);
  }

  private get(page: number, quantityPerPage: number): Observable<IEmpresa[]> {
    return this.empresaService.get(page, quantityPerPage)
    .pipe(
      tap(response => this.pageTotal = response.pageTotal),
      map(response => response.data)
    );
  }
}
