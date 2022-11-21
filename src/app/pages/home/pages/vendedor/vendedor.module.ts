import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CrudButtonsetModule } from "src/app/shared/components/buttons/crud-buttonset/crud-buttonset.module";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";
import { CustomTableModule } from "src/app/shared/components/custom-table/custom-table.module";

import { VendedorFormComponent } from "./pages/vendedor-form/vendedor-form.component";
import { VendedorTableComponent } from "./pages/vendedor-table/vendedor-table.component";
import { VendedorRoutingModule } from "./vendedor-routing.module";

@NgModule({
  declarations: [VendedorTableComponent, VendedorFormComponent],
  imports: [
    CommonModule,
    VendedorRoutingModule,
    ReactiveFormsModule,
    CustomTableModule,
    CustomFormModule,
    CrudButtonsetModule,
    ButtonModule,
  ],
})
export class VendedorModule {}
