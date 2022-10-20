import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { IEmpesa } from "src/app/pages/empresa/models/Empresa";
import { EmpresaService } from "src/app/pages/empresa/services/empresa.service";
import { EmpresaBarService } from "src/app/pages/home/services/empresa-bar.service";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CepPipe } from "src/app/shared/pipes/cep.pipe";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";

@Component({
  selector: "app-empresas-table",
  template: `
    <app-simple-wrapper [width]="11" [padding]="0">
      <ng-container *ngIf="empresas$ | async as empresas; else loading">
        <app-table
          [data]="empresas"
          [cols]="columns"
          (chooseEvent)="chooseEvent($event)"
          [showChooseButton]="true"
          (selectEvent)="selectEvent($event)"
          title="Empresas"
        >
          <app-crud-buttonset
            [targetId]="selectedEmpresa?.id"
            [isSelected]="selectedEmpresa != null"
            (deleteEvent)="onDelete()"
          ></app-crud-buttonset>
        </app-table>
      </ng-container>
      <ng-template #loading>
        <app-skeleton-table></app-skeleton-table>
      </ng-template>
    </app-simple-wrapper>
  `,
  styles: [],
})
export class EmpresasTableComponent implements OnInit {
  protected empresas$: Observable<ITableData>;
  protected selectedEmpresa: IEmpesa | null = null;

  protected columns: ICol[] = [
    { field: "id", header: "ID" },
    { field: "cnpj", header: "CNPJ", pipe: CpfCnpjPipe },
    { field: "xrazaoSocial", header: "Razão Social" },
    { field: "xfant", header: "Fantasia" },
    { field: "cep", header: "CEP", pipe: CepPipe },
  ];

  constructor(
    private empresaService: EmpresaService,
    private empresaBarService: EmpresaBarService,
    private router: Router
  ) {
    this.empresas$ = this.empresaService.get();
  }

  ngOnInit(): void {
    this.empresaService.refresh();
  }

  protected selectEvent(event: any): void {
    this.selectedEmpresa = event;
  }

  protected chooseEvent(event: any): void {
    if (event["token"]) {
      debugger;
      localStorage.setItem("token", event["token"]);
      this.empresaBarService.setSelectedEmpresa(event);
      this.router.navigate(["/home"]);
    }
  }

  protected onDelete(): void {}
}
