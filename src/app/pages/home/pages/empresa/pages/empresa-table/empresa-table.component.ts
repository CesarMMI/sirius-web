import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { IEmpresa } from "src/app/pages/home/pages/empresa/models/Empresa";
import { EmpresaService } from "src/app/pages/home/pages/empresa/services/empresa.service";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";

@Component({
  templateUrl: "./empresa-table.component.html",
  styles: [],
})
export class EmpresaTableComponent {
  protected empresas$: Observable<ITableData>;
  protected cols: ICol[] = [
    { field: "id", header: "ID" },
    { field: "xrazaoSocial", header: "Razão Social" },
    { field: "xfant", header: "Fantasia" },
    { field: "cnpj", header: "CNPJ", pipe: CpfCnpjPipe },
    { field: "xbairro", header: "Bairro" },
    { field: "uf", header: "UF" },
  ];

  constructor(
    private router: Router,
    private empresaService: EmpresaService
  ) {
    this.empresas$ = this.empresaService.getAll(1, 10);
  }

  protected getAll(page: number, itemQuantity: number): void {
    this.empresas$ = this.empresaService.getAll(page, itemQuantity);
  }

  protected onPageEvent(event: {
    page: number;
    first: number;
    rows: number;
    pageCount: number;
  }) {
    this.getAll(event.page + 1, event.rows);
  }

  protected onChooseEvent(event: IEmpresa) {
    if (event) {
      this.empresaService.selectedEmpresa$.next(event);
      localStorage.setItem('token', event.token);
      this.router.navigate(['/home/produtos'])
    }
  }
}
