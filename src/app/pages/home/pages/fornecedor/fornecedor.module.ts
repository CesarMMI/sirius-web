import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { FornecedorRoutingModule } from "./fornecedor-routing.module";
import { FornecedorFormComponent } from "./pages/fornecedor-form/fornecedor-form.component";
import { FornecedorTableComponent } from "./pages/fornecedor-table/fornecedor-table.component";

@NgModule({
  declarations: [FornecedorTableComponent, FornecedorFormComponent],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    ReactiveFormsModule,
    CustomTableModule,
    CustomFormModule,
    CrudButtonsetModule,
    ButtonModule,
  ],
})
export class FornecedorModule {}
