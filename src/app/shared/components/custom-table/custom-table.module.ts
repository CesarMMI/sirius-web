import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { PaginatorModule } from "primeng/paginator";
import { SkeletonModule } from "primeng/skeleton";
import { TableModule } from "primeng/table";
import { CepPipe } from "src/app/shared/pipes/cep.pipe";
import { CpfCnpjPipe } from "src/app/shared/pipes/cpf-cnpj.pipe";
import { PipesModule } from "src/app/shared/pipes/pipes.module";

import { CrudButtonsetComponent } from "./components/crud-buttonset/crud-buttonset.component";
import { SkeletonTableComponent } from "./components/skeleton-table/skeleton-table.component";
import { TableComponent } from "./components/table/table.component";

@NgModule({
  declarations: [
    TableComponent,
    CrudButtonsetComponent,
    SkeletonTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    PipesModule,
    SkeletonModule,
    ConfirmPopupModule,
  ],
  exports: [TableComponent, CrudButtonsetComponent, SkeletonTableComponent],
  providers: [ConfirmationService, CpfCnpjPipe, CepPipe],
})
export class CustomTableModule {}
